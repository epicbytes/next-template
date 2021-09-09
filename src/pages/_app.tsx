import App, { AppContext, AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import { Scope, fork, serialize } from "effector"
import { Provider } from "effector-react/ssr"
import { root } from "@/app/root"
import { verifyToken } from "@/lib/auth"
import { Cookies, CookiesProvider } from "react-cookie"
import { LayoutWrapper } from "@/components/system/layout-wrapper"
import Head from "next/head"
import { useEffect } from "react"
import { useRouter } from "next/router"

let clientScope: Scope

const verifyTokenFn = () => {
	const cookies = new Cookies()
	const token = cookies.get("token")
	const refresh_token = cookies.get("refresh_token")
	const result = token && verifyToken(token)
	if (!result && token && refresh_token) {
		//TODO: api request to refresh jwt
	}
	return false
}

function Auth({ children }: { children: JSX.Element }): JSX.Element | null {
	const { push, events } = useRouter()
	const tokenVerified = false
	useEffect(() => {
		let tokenVerified = verifyTokenFn()
		const handler = (url: string) => {
			if (!url.includes("/lk")) return
			tokenVerified = verifyTokenFn()
			if (!tokenVerified) {
				push("/")
			}
		}
		if (!tokenVerified) {
			push("/")
		}
		events.on("routeChangeStart", handler)
		return () => {
			events.off("routeChangeStart", handler)
		}
	}, [events, push])

	if (tokenVerified) {
		return children
	}

	return null
}

type Props = {
	Component: NextPageWithLayoutAndAuth
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	pageProps: any
} & AppProps

function MyApp({ Component, pageProps }: Props) {
	const scope = fork(root, {
		values: {
			...(clientScope
				? serialize(clientScope, { onlyChanges: true })
				: {}),
			...pageProps.initialState,
		},
	})
	if (typeof window !== "undefined") {
		clientScope = scope
	}

	return (
		<Provider value={scope}>
			<CookiesProvider>
				<Head>
					<title>admin</title>
					<meta name="description" content="admin" />
				</Head>
				{Component.auth ? (
					<Auth>
						<LayoutWrapper
							{...pageProps}
							header={Component.header}
							menu={Component.menu}
						>
							<Component {...pageProps} />
						</LayoutWrapper>
					</Auth>
				) : (
					<LayoutWrapper {...pageProps}>
						<Component {...pageProps} />
					</LayoutWrapper>
				)}
			</CookiesProvider>
		</Provider>
	)
}

MyApp.getInitialProps = async (appContext: AppContext) => {
	const appProps = await App.getInitialProps(appContext)
	appProps.pageProps.host = appContext.ctx.req?.headers.host
	return { ...appProps }
}

export default MyApp
