PNPM ?= pnpm
LIMIT ?= 3
LIGHTHOUSE_URL ?= http://localhost:4321
LIGHTHOUSE_FLAGS ?= --view
LIGHTHOUSE_OUTPUT_DIR ?= lighthouse-reports
LIGHTHOUSE_REPORT ?= $(LIGHTHOUSE_OUTPUT_DIR)/latest.report.html

.PHONY: install dev typecheck lint format format-check check build preview test-e2e lighthouse audit update verify codex-issues

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

test-e2e:
	$(PNPM) run test:e2e

lighthouse:
	@mkdir -p "$(LIGHTHOUSE_OUTPUT_DIR)"
	$(PNPM) exec lighthouse "$(LIGHTHOUSE_URL)" --output=html --output-path="$(LIGHTHOUSE_REPORT)" $(LIGHTHOUSE_FLAGS)

audit:
	$(PNPM) audit --prod --audit-level=low

update:
	$(PNPM) update

verify: check build

codex-issues:
	codex -C "$(CURDIR)" '$$parallel-issue-prs LIMIT=$(LIMIT)'
