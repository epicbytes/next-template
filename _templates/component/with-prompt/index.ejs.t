---
to: src/components/<%= section %>/<%= h.changeCase.paramCase(name) %>/index.ts
---

export { <%= h.changeCase.pascalCase(name) %> } from "./<%= h.changeCase.paramCase(name) %>"
export type { <%= h.changeCase.pascalCase(name) %>Props } from "./<%= h.changeCase.paramCase(name) %>.d"
