export type EventCardData = {
	id: number
	price: string
	location: string
	title: string
	description: string
	date: string
	imageUrl?: string
	linkHref?: string
}

type KudaGoImage = {
	image?: string
	imageUrl?: string
	thumbnails?: {
		'640x384'?: string
	}
}

type KudaGoDate = {
	start?: number | null
	start_date?: string | null
	start_time?: string | null
	end?: number | null
	end_date?: string | null
	end_time?: string | null
	is_continuous?: boolean
	is_endless?: boolean
	is_startless?: boolean
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
	site_url?: string
}

type KudaGoResponse = {
	results?: KudaGoEvent[]
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

	const data: KudaGoResponse = await res.json()

	if (!Array.isArray(data.results)) {
		return []
	}

	return data.results.map(mapKudaGoEventToCard)
}

function mapKudaGoEventToCard(event: KudaGoEvent): EventCardData {
	const firstImage = event.images?.[0]

	return {
		id: event.id,
		title: event.title || 'Без названия',
		description: event.description || 'Описание отсутствует',
		price: event.price || 'Цена не указана',
		location: event.location?.name || event.location?.slug || 'Город не указан',
		date: getDisplayEventDate(event.dates),
		imageUrl:
			firstImage?.thumbnails?.['640x384'] ||
			firstImage?.image ||
			firstImage?.imageUrl ||
			undefined,
		linkHref: event.site_url
	}
}

function getDisplayEventDate(dates?: KudaGoDate[]): string {
	const todayString = getTodayDateString()

	const today = new Date()
	today.setHours(0, 0, 0, 0)
	const todayTimestamp = Math.floor(today.getTime() / 1000)

	if (!dates || dates.length === 0) {
		return 'Дата не указана'
	}

	const dateByStart = dates.find(dateItem => {
		return dateItem.start != null && dateItem.start >= todayTimestamp
	})

	if (dateByStart) {
		return formatStartDate(dateByStart)
	}

	const dateByStartDate = dates.find(dateItem => {
		return dateItem.start_date != null && dateItem.start_date >= todayString
	})

	if (dateByStartDate) {
		return formatStartDate(dateByStartDate)
	}

	const runningByEnd = dates.find(dateItem => {
		return dateItem.end != null && dateItem.end >= todayTimestamp
	})

	if (runningByEnd) {
		return `Идёт до ${formatEndDate(runningByEnd)}`
	}

	const runningByEndDate = dates.find(dateItem => {
		return dateItem.end_date != null && dateItem.end_date >= todayString
	})

	if (runningByEndDate) {
		return `Идёт до ${formatEndDate(runningByEndDate)}`
	}

	const hasAnyDateField = dates.some(dateItem => {
		return (
			dateItem.start != null ||
			dateItem.start_date != null ||
			dateItem.end != null ||
			dateItem.end_date != null
		)
	})

	if (!hasAnyDateField) {
		return 'Дата не указана'
	}

	return 'Событие уже закончилось'
}

function formatStartDate(date: KudaGoDate): string {
	if (date.start != null) {
		return formatTimestamp(date.start)
	}

	if (date.start_date) {
		return formatDateString(date.start_date)
	}

	return 'Дата не указана'
}

function formatEndDate(date: KudaGoDate): string {
	if (date.end != null) {
		return formatTimestamp(date.end)
	}

	if (date.end_date) {
		return formatDateString(date.end_date)
	}

	return 'неизвестной даты'
}

function formatTimestamp(timestamp: number): string {
	return new Intl.DateTimeFormat('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(new Date(timestamp * 1000))
}

function formatDateString(dateString: string): string {
	const [year, month, day] = dateString.split('-').map(Number)

	return new Intl.DateTimeFormat('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(new Date(year, month - 1, day))
}

function getTodayDateString(): string {
	const today = new Date()

	const year = today.getFullYear()
	const month = String(today.getMonth() + 1).padStart(2, '0')
	const day = String(today.getDate()).padStart(2, '0')

	return `${year}-${month}-${day}`
}
