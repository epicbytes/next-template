import { createEvent, createStore } from "effector"
import { createGate } from "effector-react"

function createWizard() {
	const WizardGate = createGate("wizard-gate")
	const nextStep = createEvent("wizard-next-step")
	const prevStep = createEvent("wizard-prev-step")
	const resetWizard = createEvent("reset-wizard")

	const $step = createStore<number>(0)

	$step.on(nextStep, (step) => step + 1)
	$step.on(prevStep, (step) => step - 1)
	$step.reset(resetWizard)

	WizardGate.open.watch(() => {
		resetWizard()
	})

	return { $step, nextStep, prevStep, resetWizard, WizardGate }
}
export type WizardModel = ReturnType<typeof createWizard>

export { createWizard }
