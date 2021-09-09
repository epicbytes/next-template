import { FC } from "react"
import type { TabProps } from "./tab.d"
import cc from "classcat"
import useTranslation from "next-translate/useTranslation"

export const Tab: FC<TabProps> = ({ title, isActive, index, onClick }) => {
	const { t } = useTranslation("common")
	return (
		<button
			className={cc([
				"relative px-6 py-4 mx-6",
				{
					"text-blue before:content-[' '] before:block before:bg-blue before:absolute before:bottom-0 before:left-0 before:h-1 before:rounded-md before:rounded-b-none before:w-full":
						isActive,
					"text-gray-text": !isActive,
				},
			])}
			onClick={(e) => {
				e.preventDefault()
				onClick && onClick(index)
			}}
		>
			{t(title)}
		</button>
	)
}
