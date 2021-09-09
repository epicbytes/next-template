---
to: src/components/headers/<%= h.changeCase.paramCase(name) %>-header/index.ts
---

export { <%= h.changeCase.pascalCase(name) %>Header } from "./<%= h.changeCase.paramCase(name) %>-header"
export type { <%= h.changeCase.pascalCase(name) %>HeaderProps } from "./<%= h.changeCase.paramCase(name) %>-header.d"
