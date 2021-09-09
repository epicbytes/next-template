import type { ValidatorObj } from "@/lib/form-errors.d"

export type InputProps = {
	name: string
	label?: string
	placeholder?: string
	readOnly?: boolean
	type?: "number" | "text" | "password"
	validate?: ValidatorObj[]
}
