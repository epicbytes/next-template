---
to: src/components/popups/<%= h.changeCase.paramCase(name) %>-popup/<%= h.changeCase.paramCase(name) %>-popup.d.ts
---

export type <%= h.changeCase.pascalCase(name) %>PopupProps = {
  children: JSX.Element
}
