---
to: src/components/popups/<%= h.changeCase.paramCase(name) %>-popup/index.ts
---

export { <%= h.changeCase.pascalCase(name) %>Popup } from "./<%= h.changeCase.paramCase(name) %>-popup"
export type { <%= h.changeCase.pascalCase(name) %>PopupProps } from "./<%= h.changeCase.paramCase(name) %>-popup.d"
