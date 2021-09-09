// declOfNum(count, ['секунда', 'секунды', 'секунд'], 'Не указано');
const declOfNum = (
	numToDec: number,
	titles: string[],
	defaultValue: string | null = null
): string => {
	if (numToDec <= 0 && defaultValue) {
		return defaultValue
	}
	const cases = [2, 0, 1, 1, 1, 2]
	return titles[
		numToDec % 100 > 4 && numToDec % 100 < 20
			? 2
			: cases[numToDec % 10 < 5 ? numToDec % 10 : 5]
	]
}

const priceFormat = (price: number): string => {
	return new Intl.NumberFormat("ru-RU", {
		style: "currency",
		currency: "RUB",
		minimumFractionDigits: 0,
	}).format(price)
}

// const getValueByAccessor = (obj:object, accessor:string) => {
//   return accessor.split('.').reduce((prev, next) => prev?.[next], obj);
// };

export type EllipsisSide = "start" | "end"
export type EllipsisOptions = { side?: EllipsisSide; ellipsis?: string }

const textEllipsis = (
	str: string,
	maxLength: number,
	{ side = "end", ellipsis = "..." }: EllipsisOptions
): string => {
	if (str.length > maxLength) {
		switch (side) {
			case "start":
				return ellipsis + str.slice(-(maxLength - ellipsis.length))
			case "end":
			default:
				return str.slice(0, maxLength - ellipsis.length) + ellipsis
		}
	}
	return str
}

const capitalizeFirstLetter = (text: string): string => {
	return text.charAt(0).toUpperCase() + text.slice(1)
}

export { declOfNum, priceFormat, textEllipsis, capitalizeFirstLetter }
