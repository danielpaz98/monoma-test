interface ISignInServiceParams {
	email: string;
	password: string;
}

export async function signIn({ email, password }: ISignInServiceParams) {
	return new Promise((resolve) => setTimeout(resolve, 750)).then(async () => {
		const res = await fetch("/fakeAPI/user.json");
		const { user } = await res.json();

		if (user.email === email && user.password === password) return user;
		else return null;
	});
}
