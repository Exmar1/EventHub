import City from '../../../public/city.jpg'
import Card from '../../components/UI/card'

export default function Home() {
	const currentDate = new Date()

	return (
		<div className="mx-auto grid w-full max-w-[1700px] grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
			<Card
				title="Зрасте"
				imageUrl={City.src}
				description="Всем Hello"
				price={2000}
				date={currentDate}
				location="Moscow"
			/>

			<Card
				title="Tech Conference"
				description="Большая конференция по технологиям и разработке"
				price={3500}
				date={currentDate}
				location="Saint Petersburg"
			/>

			<Card
				title="Music Festival"
				description="Музыкальный фестиваль под открытым небом"
				price={1500}
				date={currentDate}
				location="Kazan"
			/>

			<Card
				title="Music Festival"
				description="Музыкальный фестиваль под открытым небом"
				price={1500}
				date={currentDate}
				location="Kazan"
			/>
		</div>
	)
}
