import dynamic from "next/dynamic"
import type { TestPopupProps } from "./test-popup"

export interface LibraryData {
	TestPopup: TestPopupProps
}

export const Library: Record<keyof LibraryData, any> = {
	TestPopup: dynamic<TestPopupProps>(() =>
		import("@/components/popups/test-popup").then((mod) => mod.TestPopup)
	),
}
