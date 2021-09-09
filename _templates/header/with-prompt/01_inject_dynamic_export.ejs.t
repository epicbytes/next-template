---
to: src/components/headers/dynamic.ts
inject: true
skip_if: "@/components/headers/<%= h.changeCase.paramCase(name) %>-header"
after: "export const Library"
---
  <%= h.changeCase.pascalCase(name) %>Header: dynamic<<%= h.changeCase.pascalCase(name) %>HeaderProps>(() =>
    import("@/components/headers/<%= h.changeCase.paramCase(name) %>-header").then(
      (mod) => mod.<%= h.changeCase.pascalCase(name) %>Header
    )
  ),