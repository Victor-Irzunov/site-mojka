import Image from "next/image"


const Portfolio = ({handleOrderClick}) => {
	return (
		<section className='py-10 min-h-screen'>
			<div className='container mx-auto'>
				<div className='flex sd:flex-row xz:flex-col'>

					<div className='sd:mr-3 xz:mr-0 sd:w-1/2 xz:w-full sd:mb-0 xz:mb-6'>
						<div className='w-full h-72 sd:mb-6 xz:mb-14'>
							<h5 className='text-primary text-3xl'>
								Наши работы
							</h5>
							<p className='mt-3 text-white/80 text-sm font-light'>
								Здесь представлено несколько наших работ, чтобы вы могли оценить качество наших услуг. Мы гордимся каждым деталем наших мойок, от ярко блестящих кузовов до безупречно чистых салонов. Посмотрите, как мы преображаем автомобили и создаем настоящие произведения искусства на колесах.
							</p>

							<button
								className='btn-gradient btn border-none rounded-full text-xl px-6 mt-10 hover:text-white'
								onClick={()=>handleOrderClick('Получить консультацию')}
							>
								Получить консультацию
							</button>
						</div>


						<div className='w-full h-72 border-white/60 border rounded-md overflow-hidden relative'>
							<Image
								src='/portfolio/1.webp'
								alt='Наши работы на автомойки'
								width={1000}
								height={667}
								className="w-full h-full object-cover"
							/>

							<div className='absolute bottom-5 left-5 bg-black/55 p-3'>
								<p className='text font-semibold'>
									Керамическое покрытие
								</p>
								<p className='text-white/75'>
									Mercedes
								</p>
							</div>
						</div>
					</div>



					<div className='sd:ml-3 xz:ml-0 sd:w-1/2 xz:w-full'>
						<div className='w-full h-72 border-white/60 border rounded-md overflow-hidden mb-6 relative'>
							<Image src='/portfolio/2.webp'
								alt='Наши работы на автомойки'
								width={1000} height={667}
								className="w-full h-full object-cover"
							/>
							<div className='absolute bottom-5 left-5 bg-black/55 p-3'>
								<p className='text font-semibold'>
									Мойка кузова с полимером
								</p>
								<p className='text-white/75'>
									Audi
								</p>
							</div>
						</div>

						<div className='w-full h-72 border-white/60 border rounded-md overflow-hidden relative'>
							<Image src='/portfolio/3.webp'
								alt='Наши работы на автомойки'
								width={1000} height={667}
								className="w-full h-full object-cover"
							/>
							<div className='absolute bottom-5 left-5 bg-black/55 p-3'>
								<p className='text font-semibold'>
									Химчистка салона
								</p>
								<p className='text-white/75'>
									Lexus
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Portfolio