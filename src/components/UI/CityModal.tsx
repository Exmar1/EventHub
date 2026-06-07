'use client'

import { russianCities } from '@/src/data/russian-cities'
import { useMemo, useState } from 'react'

type CityModalProps = {
	isOpen: boolean
	onClose: () => void
	onSelect: (city: string) => void
}

export function CityModal({ isOpen, onClose, onSelect }: CityModalProps) {
	const [query, setQuery] = useState('')

	const filteredCities = useMemo(() => {
		const search = query.trim().toLowerCase()

		if (!search) {
			russianCities.slice(0, 10)
		}
		return russianCities
			.filter(city => city.toLocaleLowerCase().includes(search))
			.slice(0, 10)
	}, [query])

	if (!isOpen) return null

	const handleSelectCity = (city: string) => {
		localStorage.setItem('city', city)
		onSelect(city)
		onClose()
	}

	return (
		<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4">
			<div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
				<h2 className="text-2xl font-bold text-slate-900">Выберите город</h2>

				<p className="mt-2 text-sm text-slate-500">
					Введите город, чтобы мы показали мероприятия рядом с вами.
				</p>

				<input
					value={query}
					onChange={e => setQuery(e.target.value)}
					placeholder="Например, Москва"
					className="mt-5 h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-blue-500"
					autoFocus
				/>

				<div className="mt-4 max-h-72 overflow-y-auto">
					{filteredCities.length > 0 ? (
						filteredCities.map(city => (
							<button
								key={city}
								onClick={() => handleSelectCity(city)}
								className="w-full rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-blue-500"
							>
								{city}
							</button>
						))
					) : (
						<p className="px-2 py-3 text-sm text-slate-400">Город не найден</p>
					)}
				</div>

				<button
					onClick={onClose}
					className="mt-5 w-full rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
				>
					Закрыть
				</button>
			</div>
		</div>
	)
}
