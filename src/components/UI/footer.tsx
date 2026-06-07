import Link from 'next/link'

const Footer = () => {
	return (
		<footer className="mt-20 border-t-4 border-blue-600 bg-[#1f2b3a] text-white">
			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<h3 className="mb-5 text-lg font-bold">О проекте</h3>

						<ul className="space-y-3 text-sm text-blue-100">
							<li>
								<Link
									href="/about"
									className="transition hover:text-white"
								>
									О проекте
								</Link>
							</li>
							<li>
								<Link
									href="/technologies"
									className="transition hover:text-white"
								>
									Технологии
								</Link>
							</li>
							<li>
								<a
									href="https://github.com/Exmar1"
									target="_blank"
									rel="noreferrer"
									className="transition hover:text-white"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									href="https://t.me/Exmar1"
									target="_blank"
									rel="noreferrer"
									className="transition hover:text-white"
								>
									Контакты
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-5 text-lg font-bold">Навигация</h3>

						<ul className="space-y-3 text-sm text-blue-100">
							<li>
								<Link
									href="/"
									className="transition hover:text-white"
								>
									Главная
								</Link>
							</li>
							<li>
								<Link
									href="/profile"
									className="transition hover:text-white"
								>
									Профиль
								</Link>
							</li>
							<li>
								<Link
									href="/login"
									className="transition hover:text-white"
								>
									Войти
								</Link>
							</li>
							<li>
								<Link
									href="/register"
									className="transition hover:text-white"
								>
									Регистрация
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-5 text-lg font-bold">Возможности</h3>

						<ul className="space-y-3 text-sm text-blue-100">
							<li>
								<Link
									href="/"
									className="transition hover:text-white"
								>
									Поиск мероприятий
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="transition hover:text-white"
								>
									Фильтры
								</Link>
							</li>
							<li>
								<Link
									href="/profile"
									className="transition hover:text-white"
								>
									Личный кабинет
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="transition hover:text-white"
								>
									Билеты
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-5 text-lg font-bold">Контакты</h3>

						<ul className="space-y-3 text-sm text-blue-100">
							<li>
								<a
									href="https://t.me/Exmar1"
									target="_blank"
									rel="noreferrer"
									className="transition hover:text-white"
								>
									Telegram
								</a>
							</li>
							<li>
								<a
									href="https://github.com/your-username"
									target="_blank"
									rel="noreferrer"
									className="transition hover:text-white"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									href="mailto:polevdenis74@gmail.com"
									className="transition hover:text-white"
								>
									Email
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-blue-100">
					<p>© 2026 EventHub. Все права защищены.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
