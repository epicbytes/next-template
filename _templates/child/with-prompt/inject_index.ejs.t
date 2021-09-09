---
to: src/components/<%= h.changeCase.paramCase(section) %>/<%= h.changeCase.paramCase(component) %>/index.ts
inject: true
skip_if: "export { <%= h.changeCase.pascalCase(name) %> }"
after: "export type { <%= h.changeCase.pascalCase(component) %>Props }"
---
export { <%= h.changeCase.pascalCase(name) %> } from "./<%= h.changeCase.paramCase(name) %>"
export type { <%= h.changeCase.pascalCase(name) %>Props } from "./<%= h.changeCase.paramCase(name) %>.d"