import TicketIllustration from '@/public/login.png'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Register() {
	return (
		<div className="min-h-screen bg-[#f5f7fb]">
			<div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
				<div className="relative hidden overflow-hidden bg-[#0b3aa8] lg:flex lg:flex-col lg:justify-between">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

					<div className="relative z-10 px-16 pt-20">
						<h1 className="text-5xl font-bold leading-tight text-white">
							EventHub
						</h1>

						<p className="mt-6 max-w-md text-base leading-relaxed text-blue-100">
							Создайте аккаунт, чтобы сохранять мероприятия, покупать билеты и
							управлять своими заказами в одном месте.
						</p>

						<div className="mt-10 flex gap-3">
							<div className="h-2 w-10 rounded-full bg-white" />
							<div className="h-2 w-2 rounded-full bg-white/40" />
							<div className="h-2 w-2 rounded-full bg-white/40" />
						</div>
					</div>

					<div className="relative z-10 flex items-end justify-center px-10 pb-10">
						<div className="relative h-140 w-140">
							<div className="absolute left-1/2 top-1/2 h-85 w-85 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

							<div className="absolute left-1/2 top-1/2 h-90 w-90 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

							<div className="absolute left-1/2 top-1/2 h-65 w-65 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

							<div className="absolute left-1/2 top-1/2 h-45 w-45 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" />

							<Image
								src={TicketIllustration}
								alt="Ticket illustration"
								fill
								className="scale-115 object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
								priority
							/>
						</div>
					</div>
				</div>

				<div className="relative flex items-center justify-center overflow-hidden px-6 py-12">
					{/*  */}
					<Link
						href="/"
						className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
					>
						<ArrowLeft className="h-4 w-4" />
						<span>Назад</span>
					</Link>

					<div className="absolute inset-0">
						<div className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200" />
						<div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-100" />
						<div className="absolute left-20 top-24 h-4 w-4 rounded-full bg-slate-200" />
						<div className="absolute bottom-24 right-32 h-3 w-3 rounded-full bg-slate-200" />
						<div className="absolute right-20 top-40 h-2 w-2 rounded-full bg-slate-300" />
					</div>

					<div className="relative z-10 w-full max-w-md rounded-4xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
						<div className="mb-8">
							<h2 className="text-4xl font-bold text-slate-900">Регистрация</h2>

							<p className="mt-3 text-base leading-relaxed text-slate-500">
								Создайте аккаунт, чтобы покупать билеты, добавлять события в
								избранное и быстрее оформлять заказы.
							</p>
						</div>

						<form className="space-y-5">
							<div>
								<label className="mb-2 block text-sm font-medium text-slate-700">
									Имя
								</label>

								<input
									type="text"
									placeholder="Введите имя"
									className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#0b3aa8] focus:bg-white"
								/>
							</div>

							<div>
								<label className="mb-2 block text-sm font-medium text-slate-700">
									Email
								</label>

								<input
									type="email"
									placeholder="Введите email"
									className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#0b3aa8] focus:bg-white"
								/>
							</div>

							<div>
								<label className="mb-2 block text-sm font-medium text-slate-700">
									Пароль
								</label>

								<input
									type="password"
									placeholder="Введите пароль"
									className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#0b3aa8] focus:bg-white"
								/>
							</div>

							<button
								type="submit"
								className="mt-2 flex h-14 w-full items-center justify-center rounded-2xl bg-[#0b3aa8] text-base font-semibold text-white transition hover:bg-[#082d84]"
							>
								Зарегистрироваться
							</button>
						</form>

						<div className="mt-8 flex items-center justify-center border-t border-slate-100 pt-6 text-center text-sm text-slate-500">
							<p className="m-2">Уже есть аккаунт?</p>
							<Link
								href="/login"
								className="font-semibold  text-[#0b3aa8] transition hover:opacity-80"
							>
								Войти
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
