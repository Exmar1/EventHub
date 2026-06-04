'use server'

import { auth } from '@/src/utils/auth/auth'
import { headers } from 'next/headers'

export async function signUp(email: string, password: string, name: string) {
	await auth.api.signUpEmail({
		body: {
			email,
			password,
			name
		}
	})
}

export async function signIn(email: string, password: string) {
	await auth.api.signInEmail({
		body: {
			email,
			password
		}
	})
}

export async function signOut() {
	await auth.api.signOut({
		headers: await headers()
	})
}
