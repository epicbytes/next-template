import React, { FC } from "react"
import { AuthLayout } from "@/components/system/auth-layout"
import { MainLayout } from "@/components/system/main-layout"
import type { LayoutWrapperProps } from "./layout-wrapper.d"
//import type { Header } from "@/components/headers/main-layout-header/main-layout-header.d"
//import type { MenuType } from "@/components/commons/side-menu/side-menu.d"

const layouts = new Map([
	["main", MainLayout],
	["auth", AuthLayout],
])

export const LayoutWrapper: FC<LayoutWrapperProps> = (props) => {
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	const ch = props?.children as React.ReactElement<any>

	if (ch.type) {
		const type = ch.type as any
		const Layout = layouts.get(type.layout)
		if (Layout != null) {
			return (
				<Layout
					{...props}
					//header={(ch.type as any).header as Header}
					//menu={(ch.type as any).menu as MenuType}
				>
					{props.children}
				</Layout>
			)
		}
	}
	return (
		<MainLayout
			{...props}
			//header={(ch.type as any)?.header as Header}
			//menu={(ch.type as any).menu as MenuType}
		>
			{props.children}
		</MainLayout>
	)
}
