---
to: src/components/headers/dynamic.ts
inject: true
skip_if: "<%= h.changeCase.pascalCase(name) %>Header: <%= h.changeCase.pascalCase(name) %>HeaderProps"
after: "export interface LibraryData"
---
  <%= h.changeCase.pascalCase(name) %>Header: <%= h.changeCase.pascalCase(name) %>HeaderProps,