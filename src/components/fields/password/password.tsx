import { FC } from "react"
import { useField } from "react-final-form"
import type { PasswordProps } from "./password.d"
import { composeValidators } from "@/lib/form-errors"
import cc from "classcat"

export const Password: FC<PasswordProps> = ({
	type = "password",
	name,
	placeholder,
	readOnly,
	validate = [],
	...props
}) => {
	const {
		meta: { touched, error },
		input,
	} = useField(name, {
		validate: composeValidators(validate),
		subscription: {
			value: true,
			touched: true,
			error: true,
		},
	})
	return (
		<div className="relative">
			{input.value !== "" && (
				<label className="absolute left-5 -top-2.5 rounded bg-blue text-white text-xs py-0.5 px-1.5">
					{placeholder}
				</label>
			)}
			<input
				type={type}
				className={cc([
					"border border-gray-input border-b-2 border-b-gray-light rounded-t w-full text-gray-text px-6 resize-none placeholder-gray-light h-input",
					{ "border-error": touched && error },
				])}
				readOnly={readOnly}
				{...props}
				{...input}
				placeholder={placeholder}
			/>
			{touched && error && (
				<small className={"text-red text-center w-full block"}>
					{error}
				</small>
			)}
		</div>
	)
}
