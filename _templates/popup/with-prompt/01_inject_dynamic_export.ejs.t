---
to: src/components/popups/dynamic.ts
inject: true
skip_if: "@/components/popups/<%= h.changeCase.paramCase(name) %>-popup"
after: "export const Library"
---
  <%= h.changeCase.pascalCase(name) %>Popup: dynamic<<%= h.changeCase.pascalCase(name) %>PopupProps>(() =>
    import("@/components/popups/<%= h.changeCase.paramCase(name) %>-popup").then(
      (mod) => mod.<%= h.changeCase.pascalCase(name) %>Popup
    )
  ),