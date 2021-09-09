import { LibraryData } from "@/components/popups/dynamic"
import { root } from "./root"

export type Popup = {
	body?: keyof LibraryData | null
	isShow: boolean
	settings: Record<string, unknown>
	popupSettings?: Record<string, unknown>
}

const initialPopup = {
	body: null,
	isShow: false,
	settings: {},
	popupSettings: {
		headerText: "",
	},
}

export const mainLayoutModel = root.createDomain("main-layout")

const showPopup = mainLayoutModel.createEvent<Popup>("show-popup")
const hidePopup = mainLayoutModel.createEvent("hide-popup")

const $popupStore = mainLayoutModel.createStore<Popup>(initialPopup)

$popupStore.on(showPopup, (_, popup) => popup)
$popupStore.reset(hidePopup)

export { showPopup, hidePopup, $popupStore }
