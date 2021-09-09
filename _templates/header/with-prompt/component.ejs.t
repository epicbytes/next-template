---
to: src/components/headers/<%= h.changeCase.paramCase(name) %>-header/<%= h.changeCase.paramCase(name) %>-header.tsx
---

import { FC } from "react"
import type { <%= h.changeCase.pascalCase(name) %>HeaderProps } from "./<%= h.changeCase.paramCase(name) %>-header.d"

export const <%= h.changeCase.pascalCase(name) %>Header: FC<<%= h.changeCase.pascalCase(name) %>HeaderProps> = ({children}) => {
	return <div>{children}</div>
}
