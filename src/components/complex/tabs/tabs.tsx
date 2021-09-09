import { cloneElement } from "react"
import type { TabsProps } from "./tabs.d"
import type { TabProps } from "./tab.d"
import { useStore } from "effector-react"

export function Tabs({ children, onTabSelect, store }: TabsProps): JSX.Element {
	const tabStore = useStore<number>(store.$tab)

	if (Array.isArray(children)) {
		const selectedTabContent = (index: number): JSX.Element | null => {
			const Content = (children as JSX.Element[]).find(
				(Tab) => Tab.props.index === tabStore
			)
			if (Content) {
				return cloneElement(Content.props.children, { key: index })
			}
			return null
		}
		return (
			<section className="">
				<header className="mx-auto w-auto px-6 flex flex-col">
					<nav className="flex flex-row items-end justify-center relative w-auto">
						{(children as JSX.Element[]).map((Tab) =>
							cloneElement<TabProps>(Tab, {
								index: Tab.props.index,
								isActive: Tab.props.index === tabStore,
								onClick: (index) => {
									onTabSelect && onTabSelect(index)
									store.selectTab(index)
								},
								key: Tab.props.index,
							})
						)}
					</nav>
					<hr className="border-blue border-b mb-6 w-full" />
				</header>
				<article>{selectedTabContent(tabStore)}</article>
			</section>
		)
	}
	return <section>{children}</section>
}
