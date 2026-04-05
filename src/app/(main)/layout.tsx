import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import Footer from '../../components/UI/footer'
import { Header } from '../../components/UI/header'
import '../globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-poppins'
})

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Event Hub',
	description: 'Продажа билето'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			className={`${poppins.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
