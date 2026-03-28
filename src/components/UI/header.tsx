'use client'

import Logo from '@/public/Logo.svg'
import logout from '@/public/logout.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Modal from './Modal'

export function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleRedirect = () => {
		window.location.href = 'https://t.me/Exmar1'
	}

	return (
		<header className="sticky top-0 z-50 bg-white border-b border-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-4 relative">
					<nav className="flex gap-8 text-sm text-gray-400">
						<a
							href="#"
							className="hover:text-blue-500 font-sans font-semibold text-main transition"
						>
							Геолокация
						</a>
						<button
							onClick={() => setIsModalOpen(true)}
							className="hover:text-blue-500 font-sans font-semibold text-main transition"
						>
							О проекте
						</button>
						<Modal
							isOpen={isModalOpen}
							onClose={() => setIsModalOpen(false)}
						>
							<div className="space-y-4">
								<h2 className="text-xl font-bold text-gray-900 tracking-tight">
									О проекте
								</h2>
								<div className="w-10 h-px bg-gray-200" />
								<p className="text-base text-gray-600 leading-7 font-medium">
									Это пет проект, который я сделал для портфолио, чтобы
									прокачать свои навыки в next js и немного по fullstack части.
									Идея простая, платформа для поиска и покупки билетов на разные
									мероприятия. Типа событий поблизости, с фильтрами,
									рекомендациями и подбором под интересы пользователя. Сделано
									на Next.js и TypeScript, с упором на нормальную структуру
									проекта и аккуратный интерфейс. По сути я тут укрепляю свои
									навыки собирать что-то похожее на реальный продукт на next js
									работа с данными, UI, логика фильтрации, личный кабинет и всё
									такое. Если коротко, это учебный проект, но сделанный так, как
									будто его можно развивать дальше в полноценный сервис.
								</p>
							</div>
						</Modal>
						<button
							onClick={handleRedirect}
							className="hover:text-blue-500 font-sans font-semibold text-main transition"
						>
							Контакты
						</button>
					</nav>

					<div className="absolute left-1/2 -translate-x-1/2">
						<Link href="/">
							<Image
								src={Logo}
								alt="logo"
								width={250}
								height={200}
								className="object-contain h-auto mt-4"
								priority
							/>
						</Link>
					</div>

					<div className="flex items-center gap-6">
						<button className="text-sm font-sans text-main font-semibold hover:text-blue-400 transition">
							Начать
						</button>

						<div className="group p-2 rounded-xl border bg-[#0f172a] transition-all duration-300 hover:bg-[#1e293b] cursor-pointer">
							<Image
								src={logout}
								alt="exit"
								width={20}
								height={20}
								className="invert transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:rotate-12"
							/>
						</div>
					</div>
				</div>

				<div className="flex flex-col items-center pb-6 gap-4">
					<div className="flex h-11 w-full max-w-150 items-center overflow-hidden rounded-xl border border-gray-200 bg-white px-4 shadow-sm transition-all focus-within:border-blue-400 focus-within:shadow-md">
						<input
							type="text"
							id="input"
							name="text"
							placeholder="Поиск мероприятий..."
							className="h-full font-sans text-black flex-1 border-none text-[0.95em] outline-none placeholder:text-gray-400"
						/>
						<label
							htmlFor="input"
							className="cursor-pointer p-2"
						>
							<svg
								viewBox="0 0 512 512"
								className="w-4 fill-gray-400 transition-colors hover:fill-blue-500"
							>
								<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
							</svg>
						</label>
					</div>

					<div className="flex gap-3">
						{[
							{ label: 'Интересы', width: 'w-32' },
							{ label: 'Дата', width: 'w-28' },
							{ label: 'Локация', width: 'w-32' }
						].map(filter => (
							<button
								key={filter.label}
								className={`${filter.width} flex items-center justify-between px-4 py-2 rounded-lg border border-gray-100 bg-gray-50/50 text-xs font-semibold text-gray-500 hover:border-blue-200 hover:bg-white hover:text-blue-500 transition-all shadow-sm`}
							>
								<span>{filter.label}</span>
								<svg
									className="w-2.5 h-2.5 ml-2 fill-current opacity-60"
									viewBox="0 0 20 20"
								>
									<path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
								</svg>
							</button>
						))}
					</div>
				</div>
			</div>
		</header>
	)
}
