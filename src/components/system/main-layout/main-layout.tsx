import { FC } from "react"
import type { MainLayoutProps } from "./main-layout.d"

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return <section>{children}</section>
}
