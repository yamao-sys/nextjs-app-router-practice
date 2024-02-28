import Form from "./_form";
import { postLogin } from "./_server_actions";

export default function Login() {
	const handleLogin = async (data: FormData) => {
		'use server'
		await postLogin(data)
	}

	return (
		<>
			<form>
				<input type="text" name="email" placeholder="メールアドレス" />
				<input type="password" name="password" placeholder="パスワード" />
				<button formAction={handleLogin} >ログインする</button>
			</form>
		</>
	)
}
