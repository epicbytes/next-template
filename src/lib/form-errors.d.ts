export type Validator =
	| "required"
	| "minLength"
	| "maxLength"
	| "neededLength"
	| "max"
	| "min"
	| "email"
	| "phone"
	| "onlyDigits"
	| "avtoRegNum"
	| "vin"
	| "equalTo"
	| "customRegExp"
	| "mustBeChecked"
	| "emailOrPhone"

export type ValidatorWithCustomError = {
	rule?: string | number | null | undefined
	message?: string
}

export type ValidatorObj = Partial<Record<Validator, ValidatorWithCustomError>>
