import { FieldValidator } from "final-form"
import { declOfNum } from "."
import type {
	Validator,
	ValidatorObj,
	ValidatorWithCustomError,
} from "./form-errors.d"

export const validator_rules: Record<Validator, FieldValidator<any>> = {
	required:
		(validator: ValidatorWithCustomError) =>
		(value: string | number | null) =>
			value ? undefined : validator.message || "Заполните поле",

	minLength: (validator: ValidatorWithCustomError) => (value: string) =>
		value?.length > Number.parseInt(validator.rule as string)
			? undefined
			: validator.message ||
			  `Минимальное количество символов: ${validator.rule}`,

	maxLength: (validator: ValidatorWithCustomError) => (value: string) =>
		value?.length < Number.parseInt(validator.rule as string)
			? undefined
			: validator.message ||
			  `Максимальное количество символов: ${validator.rule}`,

	neededLength: (validator: ValidatorWithCustomError) => (value: string) =>
		value?.length === Number.parseInt(validator.rule as string)
			? undefined
			: validator.message ||
			  `Необходимо ввести ${validator.rule} ${declOfNum(
					Number.parseInt(validator.rule as string),
					["цифру", "цифры", "цифр"]
			  )}`,

	max: (validator: ValidatorWithCustomError) => (value: number) =>
		value <= Number.parseInt(validator.rule as string) ||
		typeof value === "undefined"
			? undefined
			: validator.message || `Максимальное значение: ${validator.rule}`,

	min: (validator: ValidatorWithCustomError) => (value: number) =>
		Number.parseInt(validator.rule as string) ||
		typeof value === "undefined"
			? undefined
			: validator.message || `Минимальное значение: ${validator.rule}`,

	email:
		(validator: ValidatorWithCustomError) =>
		(value: string | null | undefined) => {
			return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
				value as string
			)
				? undefined
				: validator.message || "Неверный формат Email"
		},

	phone: (validator: ValidatorWithCustomError) => (value: string) => {
		return value?.match(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/) ||
			value?.match(/^\d{11}$/)
			? undefined
			: validator.message || "Формат номера телефона: +7(999)999-99-99"
	},

	emailOrPhone: (validator: ValidatorWithCustomError) => (value: string) => {
		if (/[@a-zA-Z]/.test(value)) {
			return validator_rules.email(validator, {})(value)
		}
		return validator_rules.phone(validator, {})(value)
	},

	onlyDigits: (validator: ValidatorWithCustomError) => (value: string) => {
		return value.match(/^[0-9]+$/)
			? undefined
			: validator.message || "Только числа"
	},

	mustBeChecked:
		(validator: ValidatorWithCustomError) => (value?: boolean) => {
			return value
				? undefined
				: validator.message || "Поле должно быть активировано"
		},

	avtoRegNum: (validator: ValidatorWithCustomError) => (value?: string) => {
		return value?.match(
			/^([АВЕКМНОРСТУХ]{1}[0-9]{3}[АВЕКМНОРСТУХ]{2}[0-9]{2,3})?$/
		)
			? undefined
			: validator.message || "Номер ТС в формате A111AA123"
	},

	vin: (validator: ValidatorWithCustomError) => (value?: string) => {
		return value?.match(
			/[A-HJ-NPR-Za-hj-npr-z\\d]{8}[Xx\\d][A-HJ-NPR-Za-hj-npr-z\\d]{4}9{4}/
		)
			? undefined
			: validator.message || "Не правильный формат VIN"
	},

	customRegExp:
		(validator: ValidatorWithCustomError) => (value?: string | null) => {
			const reg = new RegExp(`${validator.rule}`, "gm")
			return reg.test(value as string) ? undefined : validator.message
		},

	equalTo:
		(validator: ValidatorWithCustomError, allValues) =>
		(value?: string) => {
			return (allValues as Record<string, string>)?.[
				validator.rule as string
			] === value
				? undefined
				: validator.message || "Не совпадает"
		},
}

const extractValidator = (
	validator: ValidatorObj
): [Validator, ValidatorWithCustomError] => {
	const [validatorEntries] = Object.entries(validator)
	return [validatorEntries[0] as Validator, validatorEntries[1] || null]
}

export const composeValidators =
	(validators: ValidatorObj[]) =>
	(
		value?: string | number,
		// eslint-disable-next-line @typescript-eslint/ban-types
		allValues?: object
	): FieldValidator<any> => {
		const vldrs = []
		for (const v of validators) {
			const [validator, rule] = extractValidator(v)
			vldrs.push(
				rule === null
					? validator_rules[validator](
							value,
							// eslint-disable-next-line @typescript-eslint/ban-types
							allValues as object
					  )
					: validator_rules[validator](
							rule,
							// eslint-disable-next-line @typescript-eslint/ban-types
							allValues as object
					  )(value)
			)
		}
		return vldrs.reduce((error, validator) => error || validator, undefined)
	}
