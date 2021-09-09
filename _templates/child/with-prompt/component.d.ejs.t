---
to: src/components/<%= section %>/<%= h.changeCase.paramCase(component) %>/<%= h.changeCase.paramCase(name) %>.d.ts
---

export type <%= h.changeCase.pascalCase(name) %>Props = {
  children: JSX.Element
}
