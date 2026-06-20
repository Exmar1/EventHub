import { CalendarDays, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardProps {
	title: string
	description: string
	price: string
	date: string
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
	location,
	children
}) => {
	const CardContent = (
		<div className="group relative h-[390px] w-full overflow-hidden rounded-[26px] bg-[#101826] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
			{imageUrl ? (
				<Image
					src={imageUrl}
					alt={title}
					fill
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
					className="object-cover transition-transform duration-500 group-hover:scale-105"
				/>
			) : (
				<div className="absolute inset-0 bg-linear-to-br from-slate-700 via-slate-800 to-[#101826]" />
			)}

			<div className="absolute inset-0 bg-linear-to-t from-[#07101f] via-[#07101f]/65 to-black/20" />

			<div className="absolute left-5 top-5 z-10 flex max-w-[calc(100%-96px)] items-center gap-2">
				<div className="max-w-[155px] truncate rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
					{price || 'Цена не указана'}
				</div>

				<div className="max-w-[130px] truncate rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
					{location || 'Город не указан'}
				</div>
			</div>

			<Link href={'/ServiceDetail'}>
				<div className="absolute right-4 top-4 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#e6c98f] text-[#101826] shadow-lg transition-transform duration-300 group-hover:rotate-12">
					<span className="text-2xl">↗</span>
				</div>
			</Link>

			<div className="absolute bottom-0 left-0 z-10 w-full p-5">
				<div className="flex min-h-[210px] flex-col justify-end">
					<h2 className="mb-2 line-clamp-2 text-[25px] font-bold leading-[1.12] text-white">
						{title}
					</h2>

					<p className="mb-4 line-clamp-3 text-sm leading-relaxed text-white/75">
						{description || 'Описание отсутствует'}
					</p>

					<div className="flex flex-col gap-2 border-t border-white/10 pt-3 text-white/90">
						<div className="flex min-w-0 items-center gap-2 text-[11px]">
							<CalendarDays className="h-3.5 w-3.5 shrink-0" />
							<span className="truncate">
								{date || 'Данное событие закончилось'}
							</span>
						</div>

						<div className="flex min-w-0 items-center gap-2 text-[11px]">
							<MapPin className="h-3.5 w-3.5 shrink-0" />
							<span className="truncate">{location || 'Город не указан'}</span>
						</div>
					</div>

					{children && <div className="mt-4">{children}</div>}
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
