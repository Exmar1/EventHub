import React from 'react'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center animate-in fade-in duration-200">
			<div
				className="absolute inset-0 bg-black/30 backdrop-blur-md"
				onClick={onClose}
			/>

			<div className="relative z-10 w-full max-w-2xl mx-4 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] p-10 animate-in fade-in zoom-in-95 duration-200">
				<button
					onClick={onClose}
					className="absolute right-5 top-5 w-7 h-7 flex items-center justify-center rounded-lg text-gray-300 hover:text-gray-500 hover:bg-gray-50 transition-all duration-150 text-sm"
				>
					✕
				</button>

				<div className="space-y-4 pr-4">{children}</div>
			</div>
		</div>
	)
}

export default Modal
