'use client'

import { useRouter } from 'next/navigation'

export default function Profile() {
	const router = useRouter()

	const handleRedirect = () => {
		router.push('/')
		router.refresh()
	}

	return (
		<div>
			<p>Профиль</p>
			<button onClick={handleRedirect}>Назад</button>
		</div>
	)
}
