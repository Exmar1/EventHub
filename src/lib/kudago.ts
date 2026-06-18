export type EventCardData = {
	id: number
	price: string
	location: string
	title: string
	description: string
	date: string
	imageUrl?: string
}

type KudaGoImage = {
	imageUrl?: string
	thumbnails?: {
		'640x384'?: string
	}
}

type KudaGoDate = {
	start?: number
	start_date?: string
}

type KudaGoLocation = {
	name?: string
	slug?: string
}

type KudaGoEvent = {
	id: number
	title?: string
	description?: string
	price?: string
	location?: KudaGoLocation
	dates?: KudaGoDate[]
	images?: KudaGoImage[]
}

export async function getKudaGoEvents(): Promise<EventCardData[]> {
	const actualSince = Math.floor(Date.now() / 1000)

	const params = new URLSearchParams({
		lang: 'ru',
		page_size: '20',
		actual_since: String(actualSince),
		text_format: 'text',
		fields: 'id,title,description,dates,location,price,images,site_url',
		expand: 'dates,location,images'
	})

	const res = await fetch(
		`https://kudago.com/public-api/v1.4/events/?${params.toString()}`
	)

	if (!res.ok) {
		throw new Error('Не удалось загрузить события')
	}

	const data = await res.json()

	return data.results.map(mapKudaGoEventToCard)
}

function mapKudaGoEventToCard(event: KudaGoEvent): EventCardData {
	const firstDate = event.dates?.[0]
	const firstImage = event.images?.[0]

	return {
		id: event.id,
		title: event.title || 'Без названия',
		description: event.description || 'Описание отсутствует',
		price: event.price || 'Цена не указана',
		location: event.location?.name || event.location?.slug || 'Город не указан',
		date: formatEventDate(firstDate),
		imageUrl:
			firstImage?.thumbnails?.['640x384'] || firstImage?.imageUrl || undefined
	}
}

function formatEventDate(date?: KudaGoDate) {
	if (!date) return 'Дата не указана'

	if (date.start) {
		return new Intl.DateTimeFormat('ru-RU', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		}).format(new Date(date.start * 1000))
	}

	if (date.start_date) {
		return new Intl.DateTimeFormat('ru-RU', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		}).format(new Date(date.start_date))
	}

	return 'Дата не указана'
}
