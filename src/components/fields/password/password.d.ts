import type { ValidatorObj } from "@/lib/form-errors.d"

export type PasswordProps = {
	name: string
	placeholder?: string
	readOnly?: boolean
	type?: "number" | "text" | "password"
	validate?: ValidatorObj[]
}
