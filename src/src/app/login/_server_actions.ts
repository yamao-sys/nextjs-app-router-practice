'use server'

import { cookies } from "next/headers"

export const postLogin = async (data: FormData) => {
	'use server'
	await fetch('http://api:1234/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		cache: 'no-store',
		body: JSON.stringify({ email: data.get('email'), password: data.get('password') })
	}).then((response) => {
		const token = response.headers.getSetCookie()[0].split(';')[0].split('=')[1]
		cookies().set('token', token, { secure: true, sameSite: 'none' })
	}).catch((error) => console.error(`ERROR ${error.message}`))
}
