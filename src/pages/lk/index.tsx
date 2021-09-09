import Head from "next/head"

const LkPage: NextPageWithLayoutAndAuth = () => {
	return (
		<div className="container mx-auto">
			<Head>
				<title>LK</title>
				<meta
					name="description"
					content="TypeScript starter for Next.js that includes all you need to build amazing apps"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-col justify-center items-center flex-1">
				<p>LK</p>
			</main>
		</div>
	)
}

LkPage.layout = "main"
LkPage.auth = {
	authenticated: true,
}

export default LkPage
