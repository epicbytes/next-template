import { NextPage } from "next"

declare global {
	type AuthSettings = {
		authenticated: boolean
		group?: string
	}

	export type NextPageWithLayoutAndAuth = NextPage & {
		layout?: "auth" | "main" | null
		menu?: "employer" | "applicant"
		header?: "employer" | "default" | "applicant"
		auth?: AuthSettings
	}
}
