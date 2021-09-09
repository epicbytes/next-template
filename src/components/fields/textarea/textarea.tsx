import { FC } from "react"
import { useField } from "react-final-form"
import type { TextareaProps } from "./textarea.d"
import { composeValidators } from "@/lib/form-errors"
import cc from "classcat"

export const Textarea: FC<TextareaProps> = ({
	rows = 5,
	name,
	label,
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
				<label
					className={cc([
						"absolute left-5 -top-2.5 rounded bg-blue text-white text-xs py-0.5 px-1.5",
						{
							"bg-red": !!error,
						},
					])}
				>
					{placeholder}
				</label>
			)}

			<textarea
				rows={rows}
				className={cc([
					"border border-gray-input border-b-2 border-b-gray-light rounded-t w-full text-gray-text px-6 resize-none placeholder-gray-light",
					{
						"border-error": touched && error,
					},
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
