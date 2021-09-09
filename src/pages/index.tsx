import Head from "next/head"

const HomePage: NextPageWithLayoutAndAuth = () => {
	return (
		<div className="container mx-auto">
			<Head>
				<title>Homepage</title>
				<meta
					name="description"
					content="TypeScript starter for Next.js that includes all you need to build amazing apps"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-col justify-center items-center flex-1">
				<p>HomePage</p>
			</main>
		</div>
	)
}

HomePage.layout = "auth"

export default HomePage
