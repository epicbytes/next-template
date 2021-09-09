import { AxiosRequestConfig } from "axios"
import Cookies from "js-cookie"
import { Api as CustomerApi } from "@/services/customer-service"

const securityWorker = async (): Promise<AxiosRequestConfig> => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const token = Cookies.get("token")
	if (!token) {
		return {}
	}

	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
}

export const Api = new CustomerApi<unknown>({
	securityWorker,
	baseURL: process.env.CUSTOMER_BASE_URL,
	secure: true,
})
