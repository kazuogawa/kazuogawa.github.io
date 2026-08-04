PNPM ?= pnpm
LIMIT ?= 3
LIGHTHOUSE_PORT ?= 4322
LIGHTHOUSE_URL ?= http://127.0.0.1:$(LIGHTHOUSE_PORT)
LIGHTHOUSE_FLAGS ?= --view

.PHONY: install dev typecheck lint format format-check check build preview lighthouse audit update verify codex-issues

install:
	$(PNPM) install --frozen-lockfile

dev:
	$(PNPM) run dev

typecheck:
	$(PNPM) run typecheck

lint:
	$(PNPM) run lint

format:
	$(PNPM) run format

format-check:
	$(PNPM) run format:check

check: typecheck lint format-check

build:
	$(PNPM) run build

preview:
	$(PNPM) run preview

lighthouse: build
	@set -eu; \
		preview_log="/tmp/kazuogawa-lighthouse-preview.log"; \
		$(PNPM) exec astro preview --host 127.0.0.1 --port "$(LIGHTHOUSE_PORT)" >"$$preview_log" 2>&1 & \
		preview_pid=$$!; \
		trap 'kill "$$preview_pid" 2>/dev/null || true' EXIT INT TERM; \
		attempt=0; \
		until curl --fail --silent --output /dev/null "$(LIGHTHOUSE_URL)"; do \
			attempt=$$((attempt + 1)); \
			if [ "$$attempt" -ge 30 ]; then \
				cat "$$preview_log"; \
				exit 1; \
			fi; \
			sleep 1; \
		done; \
		$(PNPM) exec lighthouse "$(LIGHTHOUSE_URL)" $(LIGHTHOUSE_FLAGS)

audit:
	$(PNPM) audit --prod --audit-level=low

update:
	$(PNPM) update

verify: check build

codex-issues:
	codex -C "$(CURDIR)" '$$parallel-issue-prs LIMIT=$(LIMIT)'
