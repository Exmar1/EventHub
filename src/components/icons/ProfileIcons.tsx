import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function OverviewIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect
				x="4"
				y="4"
				width="6"
				height="6"
				rx="1.5"
				stroke="currentColor"
				strokeWidth="2"
			/>
			<rect
				x="14"
				y="4"
				width="6"
				height="6"
				rx="1.5"
				stroke="currentColor"
				strokeWidth="2"
			/>
			<rect
				x="4"
				y="14"
				width="6"
				height="6"
				rx="1.5"
				stroke="currentColor"
				strokeWidth="2"
			/>
			<rect
				x="14"
				y="14"
				width="6"
				height="6"
				rx="1.5"
				stroke="currentColor"
				strokeWidth="2"
			/>
		</svg>
	)
}

export function TicketIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M4 8.5V6.5C4 5.67 4.67 5 5.5 5H18.5C19.33 5 20 5.67 20 6.5V8.5C18.62 8.5 17.5 9.62 17.5 11C17.5 12.38 18.62 13.5 20 13.5V17.5C20 18.33 19.33 19 18.5 19H5.5C4.67 19 4 18.33 4 17.5V13.5C5.38 13.5 6.5 12.38 6.5 11C6.5 9.62 5.38 8.5 4 8.5Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinejoin="round"
			/>

			<path
				d="M10 8V9"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M10 12V13"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M10 16V17"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>

			<rect
				x="13.5"
				y="9"
				width="3"
				height="3"
				rx="0.6"
				stroke="currentColor"
				strokeWidth="1.7"
			/>
		</svg>
	)
}

export function HistoryIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle
				cx="12"
				cy="12"
				r="8"
				stroke="currentColor"
				strokeWidth="2"
			/>

			<path
				d="M12 8V12L15 14"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			<path
				d="M7.5 5.5L5 5.5L5 8"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			<path
				d="M5 5.5C6.45 4.05 8.45 3.2 10.7 3.05"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	)
}

export function HeartIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M20.3 5.7C18.6 4 15.9 4 14.2 5.7L12 7.9L9.8 5.7C8.1 4 5.4 4 3.7 5.7C2 7.4 2 10.1 3.7 11.8L12 20L20.3 11.8C22 10.1 22 7.4 20.3 5.7Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export function CartIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M4 5H6L8.1 14.2C8.3 15.1 9.1 15.8 10.1 15.8H17.3C18.2 15.8 19 15.2 19.3 14.3L21 8H7"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<circle
				cx="10"
				cy="20"
				r="1.5"
				fill="currentColor"
			/>
			<circle
				cx="18"
				cy="20"
				r="1.5"
				fill="currentColor"
			/>
		</svg>
	)
}

export function SupportIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M4 13V11C4 6.6 7.6 3 12 3C16.4 3 20 6.6 20 11V13"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M4 13C4 11.9 4.9 11 6 11H7V17H6C4.9 17 4 16.1 4 15V13Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M20 13C20 11.9 19.1 11 18 11H17V17H18C19.1 17 20 16.1 20 15V13Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M17 17C17 19 15.5 20 13.5 20H12"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	)
}

export function AdminIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12 3L19 6V11C19 15.5 16.2 19.4 12 21C7.8 19.4 5 15.5 5 11V6L12 3Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9 12L11 14L15 10"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export function OrderIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M7 3H17C18.1 3 19 3.9 19 5V21L16 19L14 21L12 19L10 21L8 19L5 21V5C5 3.9 5.9 3 7 3Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			<path
				d="M9 8H15"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>

			<path
				d="M9 12H15"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>

			<path
				d="M9 16H12"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	)
}

export function ArrowLeftIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M15 6L9 12L15 18"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10 12H21"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	)
}

export function EmptyTicketIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 96 96"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M26 21V15"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
			<path
				d="M26 33V27"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
			<path
				d="M17 24H23"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
			<path
				d="M29 24H35"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>

			<path
				d="M75 28V23"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
			<path
				d="M75 39V34"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
			<path
				d="M67 31H72"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
			<path
				d="M78 31H83"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>

			<path
				d="M70 63V59"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
			<path
				d="M70 73V69"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
			<path
				d="M63 66H67"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
			<path
				d="M73 66H77"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>

			<path
				d="M25.5 56.5L21.8 47.8C21 45.9 21.9 43.7 23.8 42.9L62.5 26.4C64.4 25.6 66.6 26.5 67.4 28.4L71.1 37.1C67.7 38.5 66.1 42.5 67.6 45.9C69 49.3 73 50.9 76.4 49.4L80.1 58.1C80.9 60 80 62.2 78.1 63L39.4 79.5C37.5 80.3 35.3 79.4 34.5 77.5L30.8 68.8C34.2 67.3 35.8 63.4 34.3 60C32.9 56.6 28.9 55 25.5 56.5Z"
				stroke="currentColor"
				strokeWidth="4"
				strokeLinejoin="round"
			/>

			<path
				d="M51 36L52.4 39.4"
				stroke="currentColor"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<path
				d="M55.2 45.8L56.6 49.2"
				stroke="currentColor"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<path
				d="M59.4 55.6L60.8 59"
				stroke="currentColor"
				strokeWidth="3"
				strokeLinecap="round"
			/>
		</svg>
	)
}
