---
to: src/components/<%= section %>/<%= h.changeCase.paramCase(name) %>/<%= h.changeCase.paramCase(name) %>.tsx
---

import { FC } from "react"
import type { <%= h.changeCase.pascalCase(name) %>Props } from "./<%= h.changeCase.paramCase(name) %>.d"

export const <%= h.changeCase.pascalCase(name) %>: FC<<%= h.changeCase.pascalCase(name) %>Props> = ({children}) => {
	return <section>{children}</section>
}
