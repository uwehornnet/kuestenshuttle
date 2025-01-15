import { CredentialsSignin } from "@auth/core/errors";
import Credentials from "@auth/core/providers/credentials";
import { defineConfig } from "auth-astro";

export default defineConfig({
	providers: [
		Credentials({
			name: "Email",
			credentials: {
				email: { type: "email", required: true, label: "Email" },
				password: { type: "password", required: true, label: "Password" },
			},
			authorize: async (credentials) => {
				const { email, password } = credentials;
				const user = await authorize(email, password); // your logic here
				if (!user) throw new CredentialsSignin();
				return { id: user.id };
			},
		}),
	],
	callbacks: {
		async jwt({ user, token }) {
			if (user) {
				return { id: user.id };
			}
			return token;
		},
		session({ session, token }) {
			return {
				...session,
				user: { id: token.id },
			};
		},
	},
});
