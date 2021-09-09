import { FC } from "react"
import type { AuthLayoutProps } from "./auth-layout.d"

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
	return <section>{children}</section>
}
