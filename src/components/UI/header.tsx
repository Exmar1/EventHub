import Logo from '@/public/Logo.svg'
import logout from '@/public/logout.svg'
import Image from 'next/image'

const Header = () => {
	return (
		<header className="sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-4 relative">
					<nav className="flex gap-8 text-sm text-gray-400">
						<a
							href="#"
							className="hover:text-blue-500 font-sans font-semibold text-main transition"
						>
							Геолокация
						</a>
						<a
							href="#"
							className="hover:text-blue-500 font-sans font-semibold text-main transition"
						>
							О нас
						</a>
						<a
							href="#"
							className="hover:text-blue-500 font-sans font-semibold text-main transition"
						>
							Контакты
						</a>
					</nav>

					<div className="absolute left-1/2 -translate-x-1/2">
						<Image
							src={Logo}
							alt="logo"
							width={250}
							height={200}
							className="object-contain mt-4"
							priority
						/>
					</div>

					<div className="flex items-center gap-6">
						<button className="text-sm font-sans text-main font-semibold hover:text-blue-400 transition">
							Начать
						</button>

						<div className="group p-2 rounded-xl border bg-[#0f172a] transition-all duration-300 hover:bg-[#0f172a]-500/20 hover:border-[#0f172a]-500/40 cursor-pointer">
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
			</div>
		</header>
	)
}

export default Header
