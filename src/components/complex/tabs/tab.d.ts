export type TabProps = {
	title: string
	isActive?: boolean
	onClick?: (name: number) => void
	index: number
	children: JSX.Element | JSX.Element[] | string
}
