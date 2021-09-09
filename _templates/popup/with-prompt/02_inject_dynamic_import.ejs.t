---
to: src/components/popups/dynamic.ts
inject: true
skip_if: "import type { <%= h.changeCase.pascalCase(name) %>PopupProps } from"
after: 'import dynamic from'
---
import type { <%= h.changeCase.pascalCase(name) %>PopupProps } from "./<%= h.changeCase.paramCase(name) %>-popup"