import { TabsModel } from "@/components/complex/tabs/tabs.model"

export type TabsProps = {
	store: TabsModel
	onTabSelect?: (index: number) => void
	children: JSX.Element | JSX.Element[]
}
