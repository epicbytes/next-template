import { FC } from "react"
import type { TestPopupProps } from "./test-popup.d"

export const TestPopup: FC<TestPopupProps> = ({ children }) => {
	return <div>{children}</div>
}
