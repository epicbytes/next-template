---
to: src/components/popups/<%= h.changeCase.paramCase(name) %>-popup/<%= h.changeCase.paramCase(name) %>-popup.tsx
---

import { FC } from "react"
import type { <%= h.changeCase.pascalCase(name) %>PopupProps } from "./<%= h.changeCase.paramCase(name) %>-popup.d"

export const <%= h.changeCase.pascalCase(name) %>Popup: FC<<%= h.changeCase.pascalCase(name) %>PopupProps> = ({children}) => {
	return <div>{children}</div>
}
