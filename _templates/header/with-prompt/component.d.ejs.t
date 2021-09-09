---
to: src/components/headers/<%= h.changeCase.paramCase(name) %>-header/<%= h.changeCase.paramCase(name) %>-header.d.ts
---

export type <%= h.changeCase.pascalCase(name) %>HeaderProps = {
  children: JSX.Element
}
