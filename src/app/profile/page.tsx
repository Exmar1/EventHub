'use client'

import {
	AdminIcon,
	ArrowLeftIcon,
	CartIcon,
	EmptyTicketIcon,
	HeartIcon,
	HistoryIcon,
	OrderIcon,
	OverviewIcon,
	SupportIcon,
	TicketIcon
} from '@/src/components/icons/ProfileIcons'
import { authClient } from '@/src/lib/auth-client'
import { useRouter } from 'next/navigation'

export default function Profile() {
	const router = useRouter()
	const { data: session, isPending } = authClient.useSession()

	const handleRedirect = () => {
		router.push('/')
		router.refresh()
	}

	const city = localStorage.getItem('city')

	if (isPending) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-slate-100">
				<p className="text-slate-500">Загрузка...</p>
			</div>
		)
	}

	if (!session) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-slate-100">
				<p className="text-slate-500">Пожалуйста, войдите в систему</p>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-[#eceaf7]">
			<div className="flex min-h-screen w-full">
				<aside className="flex min-h-screen w-72 shrink-0 flex-col bg-gradient-to-b from-purple-700 to-indigo-800 px-5 py-7 text-white">
					<div className="mb-10">
						<p className="text-2xl font-bold">Привет! {session.user.name}</p>
						<p className="mt-2 text-sm text-purple-200">
							Добро пожаловать в личный кабинет
						</p>
					</div>

					<nav className="flex flex-1 flex-col gap-2">
						<a
							href="#"
							className="flex items-center gap-3 rounded-xl bg-white/15 px-4 py-3 text-sm font-medium shadow-sm"
						>
							<OverviewIcon className="h-5 w-5 shrink-0 -translate-y-[1px] text-white" />
							<span className="leading-none">Обзор</span>
						</a>

						<a
							href="#"
							className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-purple-100 transition hover:bg-white/10"
						>
							<TicketIcon className="h-5 w-5 shrink-0 -translate-y-[1px]" />
							<span className="leading-none">Ваши билеты</span>
						</a>

						<a
							href="#"
							className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-purple-100 transition hover:bg-white/10"
						>
							<HistoryIcon className="h-5 w-5 shrink-0 -translate-y-[1px]" />
							<span className="leading-none">История заказов</span>
						</a>

						<a
							href="#"
							className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-purple-100 transition hover:bg-white/10"
						>
							<HeartIcon className="h-5 w-5 shrink-0 -translate-y-[1px]" />
							<span className="leading-none">Избранное</span>
						</a>

						<a
							href="#"
							className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-purple-100 transition hover:bg-white/10"
						>
							<CartIcon className="h-5 w-5 shrink-0 -translate-y-[1px]" />
							<span className="leading-none">Корзина</span>
						</a>

						<a
							href="#"
							className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-purple-100 transition hover:bg-white/10"
						>
							<SupportIcon className="h-5 w-5 shrink-0 -translate-y-[1px]" />
							<span className="leading-none">Поддержка</span>
						</a>

						<a
							href="#"
							className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-purple-100 transition hover:bg-white/10"
						>
							<AdminIcon className="h-5 w-5 shrink-0 -translate-y-[1px]" />
							<span className="leading-none">Админка</span>
						</a>
					</nav>

					<div className="border-t border-white/15 pt-5">
						<button
							onClick={handleRedirect}
							className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-purple-100 transition hover:bg-white/10"
						>
							<ArrowLeftIcon className="h-5 w-5 shrink-0 -translate-y-[1px]" />
							<span className="leading-none">На главную</span>
						</button>
					</div>
				</aside>

				<main className="min-h-screen flex-1 overflow-y-auto bg-[#f8f8fc] p-8">
					<section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<div className="grid gap-6 md:grid-cols-3">
							<div>
								<p className="text-sm text-slate-500">Имя</p>
								<p className="mt-2 text-base font-semibold text-slate-900">
									{session.user.name}
								</p>
							</div>

							<div>
								<p className="text-sm text-slate-500">Email</p>
								<p className="mt-2 text-base font-semibold text-slate-900">
									{session.user.email}
								</p>
							</div>

							<div>
								<p className="text-sm text-slate-500">Город</p>
								<p className="mt-2 text-base font-semibold text-slate-900">
									{city}
								</p>
							</div>
						</div>
					</section>

					<section className="mt-7 grid gap-5 md:grid-cols-4">
						<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
							<div className="flex items-center gap-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-700">
									<TicketIcon className="h-6 w-6 shrink-0" />
								</div>
								<div>
									<p className="text-sm text-slate-500">Билеты</p>
									<p className="text-3xl font-bold text-slate-900">0</p>
								</div>
							</div>
						</div>

						<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
							<div className="flex items-center gap-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-700">
									<OrderIcon className="h-6 w-6 shrink-0" />
								</div>
								<div>
									<p className="text-sm text-slate-500">Заказы</p>
									<p className="text-3xl font-bold text-slate-900">0</p>
								</div>
							</div>
						</div>

						<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
							<div className="flex items-center gap-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-700">
									<HeartIcon className="h-6 w-6 shrink-0" />
								</div>
								<div>
									<p className="text-sm text-slate-500">Избранное</p>
									<p className="text-3xl font-bold text-slate-900">0</p>
								</div>
							</div>
						</div>

						<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
							<div className="flex items-center gap-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-700">
									<CartIcon className="h-6 w-6 shrink-0" />
								</div>
								<div>
									<p className="text-sm text-slate-500">Корзина</p>
									<p className="text-3xl font-bold text-slate-900">0</p>
								</div>
							</div>
						</div>
					</section>

					<section className="mt-7 rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
						<EmptyTicketIcon className="mx-auto h-20 w-20 text-purple-700" />

						<h2 className="mt-4 text-2xl font-bold text-slate-900">
							У вас пока нет активных билетов
						</h2>

						<p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
							После покупки билеты появятся здесь, а пока вы можете выбрать
							интересное событие.
						</p>

						<button
							onClick={handleRedirect}
							className="mt-6 rounded-xl bg-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-purple-800"
						>
							Перейти к событиям
						</button>
					</section>

					<section className="mt-8">
						<h3 className="text-xl font-bold text-slate-900">
							Рекомендуемые события
						</h3>

						<div className="mt-4 grid gap-5 md:grid-cols-3">
							<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl text-purple-700">
									🎤
								</div>
								<h4 className="font-semibold text-slate-900">Stand Up вечер</h4>
								<p className="mt-2 text-sm text-slate-500">15 июня, 19:00</p>
								<p className="mt-3 text-sm text-slate-500">
									Челябинск, ДК Железнодорожников
								</p>
								<p className="mt-4 text-lg font-bold text-purple-700">
									от 800 ₽
								</p>
							</div>

							<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl text-purple-700">
									🎵
								</div>
								<h4 className="font-semibold text-slate-900">
									Музыкальный концерт
								</h4>
								<p className="mt-2 text-sm text-slate-500">18 июня, 20:00</p>
								<p className="mt-3 text-sm text-slate-500">
									Челябинск, КРК Мегаполис
								</p>
								<p className="mt-4 text-lg font-bold text-purple-700">
									от 1200 ₽
								</p>
							</div>

							<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl text-purple-700">
									🎬
								</div>
								<h4 className="font-semibold text-slate-900">
									Квиз по фильмам
								</h4>
								<p className="mt-2 text-sm text-slate-500">22 июня, 18:30</p>
								<p className="mt-3 text-sm text-slate-500">
									Челябинск, Лофт Пространство
								</p>
								<p className="mt-4 text-lg font-bold text-purple-700">
									от 600 ₽
								</p>
							</div>
						</div>
					</section>

					<section className="mt-8">
						<h3 className="text-xl font-bold text-slate-900">
							Быстрые переходы
						</h3>

						<div className="mt-4 grid gap-4 md:grid-cols-4">
							<a
								href="#"
								className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-purple-300 hover:text-purple-700"
							>
								Ваши билеты
								<span>›</span>
							</a>

							<a
								href="#"
								className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-purple-300 hover:text-purple-700"
							>
								История заказов
								<span>›</span>
							</a>

							<a
								href="#"
								className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-purple-300 hover:text-purple-700"
							>
								Избранное
								<span>›</span>
							</a>

							<a
								href="#"
								className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-purple-300 hover:text-purple-700"
							>
								Корзина
								<span>›</span>
							</a>
						</div>
					</section>
				</main>
			</div>
		</div>
	)
}
