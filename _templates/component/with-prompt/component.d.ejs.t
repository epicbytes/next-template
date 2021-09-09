---
to: src/components/<%= section %>/<%= h.changeCase.paramCase(name) %>/<%= h.changeCase.paramCase(name) %>.d.ts
---

export type <%= h.changeCase.pascalCase(name) %>Props = {
  children?: JSX.Element
}
