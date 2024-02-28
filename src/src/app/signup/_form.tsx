'use client'

import { useRef } from "react";
import { postSignup } from "./_server_actions";

export default function Form() {
	const formRef = useRef<HTMLFormElement>(null)
	
	const handleSignup = async (data: FormData) => {
		await postSignup(data)
		if (formRef.current) formRef.current.reset()
	}

	return (
		<>
			<form ref={formRef}>
				<input type="text" name="email" placeholder="メールアドレス"/>
				<input type="text" name="password" placeholder="パスワード"/>
				<button formAction={handleSignup}>送信する</button>
			</form>
		</>
	);
}
