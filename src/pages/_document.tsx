import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document"

class IWRKDocument extends Document {
	/* eslint-disable @typescript-eslint/explicit-function-return-type */
	/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render(): JSX.Element {
		return (
			<Html lang="ru">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default IWRKDocument
