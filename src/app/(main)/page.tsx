import Card from '@/src/components/UI/card'
import { getKudaGoEvents } from '@/src/lib/kudago'

export default async function Home() {
	const events = await getKudaGoEvents()

	return (
		<div className="mx-auto grid w-full max-w-425 grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
			{events.map(event => (
				<Card
					key={event.id}
					title={event.title}
					price={event.price}
					imageUrl={event.imageUrl}
					date={event.date}
					location={event.location}
					description={event.description}
				/>
			))}
		</div>
	)
}
