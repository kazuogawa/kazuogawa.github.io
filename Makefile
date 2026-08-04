PNPM ?= pnpm

.PHONY: install dev typecheck lint format format-check check build preview audit update verify

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

audit:
	$(PNPM) audit --prod --audit-level=low

update:
	$(PNPM) update

verify: check build
