import type { ValidatorObj } from "@/lib/form-errors.d"

export type TextareaProps = {
	name: string
	label?: string
	rows?: number
	placeholder?: string
	readOnly?: boolean
	type?: "number" | "text" | "password"
	validate?: ValidatorObj[]
}
