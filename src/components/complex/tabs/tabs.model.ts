import { createEvent, createStore } from "effector"

function createTabs() {
	const selectTab = createEvent<number>("select-tab")
	const $tab = createStore<number>(0)

	$tab.on(selectTab, (_, tab) => tab)

	return { $tab, selectTab }
}

export type TabsModel = ReturnType<typeof createTabs>

export { createTabs }
