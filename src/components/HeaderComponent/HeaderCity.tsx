'use client'

import { useEffect, useState } from 'react'
import { CityModal } from '../UI/CityModal'

export function HeaderCity() {
	const [city, setCity] = useState<string | null>(null)
	const [isCityModalOpen, setIsCityModalOpen] = useState(false)

	useEffect(() => {
		const savedCity = localStorage.getItem('city')

		if (savedCity) {
			setCity(savedCity)
		} else {
			setIsCityModalOpen(true)
		}
	}, [])

	return (
		<>
			<button
				onClick={() => setIsCityModalOpen(true)}
				className="hover:text-blue-500 font-sans font-semibold text-main transition"
			>
				{city || 'Геолокация'}
			</button>

			<CityModal
				isOpen={isCityModalOpen}
				onClose={() => setIsCityModalOpen(false)}
				onSelect={selectedCity => setCity(selectedCity)}
			/>
		</>
	)
}
