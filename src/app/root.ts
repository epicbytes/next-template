import { createDomain } from "effector"

export const root = createDomain("root")

root.onCreateEffect((fx) => {
	fx.fail.watch(({ error }) => {
		console.error(`[${fx.shortName}]: ${(error as any).message}`)
	})
})
