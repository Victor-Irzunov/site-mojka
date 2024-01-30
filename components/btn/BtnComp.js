"use client"

export const BtnComp = ({ handleOrderClick, title }) => {

	return (
		<button
			className={`btn btn-primary border-none font-bold btn-lg shadow-xl rounded-full uppercase text-white`}
			onClick={() => handleOrderClick(title)}
		>
			{title}
		</button>
	)
}
