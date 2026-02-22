
%:
	@pnpm run $@

install:
	pnpm install

help:
	pnpm run

format:
	biome format --write

format\:check:
	biome format --check

lint:
	biome lint --write

lint\:check:
	biome lint --check
