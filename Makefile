PNPM ?= pnpm
LIMIT ?= 3
LIGHTHOUSE_URL ?= http://localhost:4321

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

lighthouse:
	$(PNPM) exec lighthouse "$(LIGHTHOUSE_URL)" --view

audit:
	$(PNPM) audit --prod --audit-level=low

update:
	$(PNPM) update

verify: check build

codex-issues:
	codex -C "$(CURDIR)" '$$parallel-issue-prs LIMIT=$(LIMIT)'
