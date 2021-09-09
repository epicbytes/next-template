---
to: src/components/headers/dynamic.ts
inject: true
skip_if: "import type { <%= h.changeCase.pascalCase(name) %>HeaderProps } from"
after: 'import dynamic from'
---
import type { <%= h.changeCase.pascalCase(name) %>HeaderProps } from "./<%= h.changeCase.paramCase(name) %>-header"