import { cloneElement } from "react"
import type { WizardProps } from "./wizard.d"
import { useStore } from "effector-react"

export function Wizard({ children, store }: WizardProps): JSX.Element {
	const wizard = useStore<number>(store.$step)

	if (Array.isArray(children)) {
		const selectedWizardContent = (index: number): JSX.Element | null => {
			const Content = (children as JSX.Element[]).find(
				(Tab) => Tab.props.index === wizard
			)
			if (Content) {
				return cloneElement(Content.props.children, { key: index })
			}
			return null
		}
		return (
			<section>
				<article>{selectedWizardContent(wizard)}</article>
			</section>
		)
	}
	return <section>{children}</section>
}
