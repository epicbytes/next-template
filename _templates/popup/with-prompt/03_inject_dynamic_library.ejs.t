---
to: src/components/popups/dynamic.ts
inject: true
skip_if: "<%= h.changeCase.pascalCase(name) %>Popup: <%= h.changeCase.pascalCase(name) %>PopupProps"
after: "export interface LibraryData"
---
  <%= h.changeCase.pascalCase(name) %>Popup: <%= h.changeCase.pascalCase(name) %>PopupProps,