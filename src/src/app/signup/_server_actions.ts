'use server'

import { revalidatePath } from "next/cache"

export const postSignup = async (data: FormData) => {
	'use server'
	await fetch('http://api:1234/signup', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		cache: 'no-store',
		body: JSON.stringify({ email: data.get('email'), password: data.get('password') })
	}).then(() => revalidatePath('/signup')).catch((e) => console.log(e))
}
