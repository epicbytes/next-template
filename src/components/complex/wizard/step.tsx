import { FC } from "react"
import type { StepProps } from "./step.d"

export const Step: FC<StepProps> = ({ children }) => {
	return <section>{children}</section>
}
