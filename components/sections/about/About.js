import { Link as LinkScroll } from 'react-scroll';

const About = () => {
	return (
		<section className='xz:py-10 sd:py-0' id='about'>
			<div className='container mx-auto'>
				<div className='flex sd:flex-row xz:flex-col-reverse'>
					<div className='sd:w-1/2 xz:w-full flex justify-start items-center overflow-hidden'>
						<img className="sd:w-3/4 xz:w-full sd:mt-0 xz:mt-8" src="/background/fon2.webp" style={{ borderRadius: '70% 30% 74% 26% / 37% 77% 23% 63%' }} alt="фоновое изображение мойка авто" />
					</div>
					<div className='sd:w-1/2 xz:w-full'>
						<h2 className='text-4xl text-primary uppercase'>
							О нас
						</h2>
						<p className='text-white font-semibold mt-2'>
							Мы — команда профессионалов, преданная идеалам чистоты и блеска. Наши автомойки созданы для того, чтобы ваш автомобиль всегда радовал вас своим безупречным внешним видом.
						</p>
						<p className='mt-5 text-white/70 font-light text-sm'>
							Наша автомойка гордится высококвалифицированным персоналом, тщательно подобранным с учетом опыта и профессионализма, чтобы обеспечить высокий стандарт обслуживания.
							Мы уделяем особое внимание качественной химии, используемой на нашей автомойке, и наш персонал прошел специальное обучение для правильного применения эффективных моющих средств.
							Все члены нашей команды не только обладают профессиональными навыками, но и разделяют наше стремление к выдающемуся обслуживанию, создавая идеальную комбинацию опыта и качественной химии для лучших результатов.
						</p>

						<div className='mt-4 flex'>
							<div className=''>
							<p className='text sd:text-5xl xz:text-3xl font-semibold'>
									13+
								</p>
								<p className='text-white'>
									лет работы
								</p>
							</div>

							<div className='xz:mx-5 sd:mx-12'>
								<p className='text sd:text-5xl xz:text-3xl font-semibold'>
									1500+
								</p>
								<p className='text-white'>
									отзывов клиентов
								</p>
							</div>
							<div className=''>
							<p className='text sd:text-5xl xz:text-3xl font-semibold'>
									15%+
								</p>
								<p className='text-white'>
									скидка постоянным <br/> клиентам
								</p>
							</div>
						</div>

						<div className='mt-8 flex items-center'>
							<button className='btn-gradient btn border-none rounded-full text-xl px-6'>
								<LinkScroll
									to="contacts"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer text-white tracking-wider uppercase text-sm"
									rel="nofollow"
									href='#/'
								>
									Контакты
								</LinkScroll>
							</button>

							<div className='ml-6'>
								<p className=''>
									<LinkScroll
										to="price"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer text text-xl"
										rel="nofollow"
										href='#/'

									>
										Наши услуги
									</LinkScroll>
								</p>
							</div>
						</div>

					</div>

				</div>
			</div>
		</section>
	)
}

export default About