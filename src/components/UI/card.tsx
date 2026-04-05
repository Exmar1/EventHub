import { CalendarDays, Clock3, MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface CardProps {
	title: string
	description: string
	price: number
	date: Date
	time?: Date
	location: string
	imageUrl?: string
	linkHref?: string
	children?: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
	title,
	description,
	imageUrl,
	linkHref,
	price,
	date,
	time,
	location,
	children
}) => {
	const formattedDate = date.toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})

	const formattedTime = time
		? time.toLocaleTimeString('ru-RU', {
				hour: '2-digit',
				minute: '2-digit'
			})
		: null

	const CardContent = (
		<div className="group relative w-full overflow-hidden rounded-[26px] bg-[#101826] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
			<div className="relative h-90 w-full">
				{imageUrl ? (
					<img
						src={imageUrl}
						alt={title}
						className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				) : (
					<div className="absolute inset-0 bg-linear-to-br from-slate-700 via-slate-800 to-[#101826]" />
				)}

				<div className="absolute inset-0 bg-linear-to-t from-[#101826] via-[#101826]/60 to-transparent" />

				<div className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e6c98f] text-[#101826] shadow-lg transition-transform duration-300 group-hover:rotate-12">
					<span className="text-2xl">↗</span>
				</div>

				<div className="absolute bottom-0 left-0 w-full p-5">
					<div className="max-w-[92%]">
						<div className="mb-3 flex flex-wrap items-center gap-2">
							<div className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
								от {price} ₽
							</div>

							<div className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
								{location}
							</div>
						</div>

						<h2 className="mb-2 text-[28px] font-bold leading-tight text-white">
							{title}
						</h2>

						<p className="mb-4 text-sm leading-relaxed text-white/75">
							{description}
						</p>

						<div className="flex flex-col gap-2 text-white/90">
							<div className="flex items-center gap-2 text-[11px]">
								<CalendarDays className="h-3.5 w-3.5" />
								<span>{formattedDate}</span>
							</div>

							{formattedTime && (
								<div className="flex items-center gap-2 text-[11px]">
									<Clock3 className="h-3.5 w-3.5" />
									<span>{formattedTime}</span>
								</div>
							)}

							<div className="flex items-center gap-2 text-[11px]">
								<MapPin className="h-3.5 w-3.5" />
								<span>{location}</span>
							</div>
						</div>

						{children && <div className="mt-4">{children}</div>}
					</div>
				</div>
			</div>
		</div>
	)

	if (linkHref) {
		return (
			<Link
				href={linkHref}
				className="block"
			>
				{CardContent}
			</Link>
		)
	}

	return CardContent
}

export default Card
