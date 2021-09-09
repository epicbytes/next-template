
dev:
	npm run dev

lint:
	npm run lint .
	npm run type-check

build:
	npm run build

comp:
	hygen component with-prompt

child:
	hygen child with-prompt

clone:
	hygen clone with-prompt

rename:
	hygen rename with-prompt

popup:
	hygen popup with-prompt

header:
	hygen header with-prompt


gen_api_customer:
	npx swagger-typescript-api -p https://customer-service.dev2.fiatum.tech/openapi/v3 -o ./src/services -n customer-service.ts --axios --module-name-first-tag --route-types --extract-request-params --extract-request-body --responses
