import Router from "next/router"
import Cookies from "js-cookie"
import type { MouseEvent } from "react"
import jwtDecode from "jwt-decode"

/*
 * @params {jwtToken} extracted from cookies
 * @return {object} object of extracted token
 */
export function verifyToken(jwtToken: string): boolean {
	if (!jwtToken) return false
	const date = Math.round(new Date().getTime() / 1000)
	try {
		const decoded: { exp: number } = jwtDecode(jwtToken)
		return decoded.exp >= date
	} catch (e) {
		console.error("e:", e)
		throw e
	}
}

export function isLogged(): boolean {
	const token = Cookies.get("token")
	if (!token) return false
	return verifyToken(token)
}

/*
 * @params {none} set action for logout and remove cookie
 * @return {function} router function to redirect
 */
export function setLogout(e: MouseEvent<HTMLElement>): void {
	e.preventDefault()
	Cookies.remove("token")
	Router.push("/")
}
