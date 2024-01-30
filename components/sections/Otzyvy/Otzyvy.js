"use client"
import Image from "next/image";




const Otzyvy = ({handleOrderClick}) => {
	return (
		<section className='py-10' id="otzyvy">
			<div className='container mx-auto'>
				<div className='flex sd:flex-row xz:flex-col justify-between'>
					<div className='sd:w-1/3 xz:w-full'>
						<h4 className='text-3xl sd:text-4xl uppercase text-primary'>
							Клиенты о нас
						</h4>
						<p className='mt-3 text-white text-sm sd:text-base'>
							Отзывы наших клиентов - лучшее подтверждение качества! Убедитесь сами в высоком стандарте наших услуг, внимательном персонале и отличных результатах мойки.
						</p>

						<div className='sd:w-2/3 xz:w-full flex justify-start items-center overflow-hidden mt-6'>
							<img className="mask mask-star-2"
								src="/background/about.webp"
								// style={{ borderRadius: '41% 59% 46% 54% / 73% 44% 56% 27%' }}
								alt="фоновое изображение мойка авто"
							/>
						</div>
						<button
							className='btn-gradient btn border-none rounded-full text-xl px-6 mt-10 hover:text-white'
							onClick={()=>handleOrderClick('Записаться на мойку')}
						>
							Записаться на мойку
						</button>

					
					</div>

					<div className='sd:mt-0 xz:mt-10 sd:w-2/3 xz:w-full sd:ml-16'>

						<div className=''>
							<div className='flex justify-between'>
								<div className='flex items-center'>
									<div className="avatar">
										<div className="w-12 rounded-full">
											<img src="/otzyvy/1.webp" alt="Отзыв" />
										</div>
									</div>
									<div className='text-white ml-3'>
										<p className='text-lg'>
											Анна Хомич
										</p>
										<div className="rating rating-sm">
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" checked onChange={()=>{}} />
										</div>
									</div>
								</div>
								<button className='btn btn-gradient btn-circle border-none'>
									<Image src='/svg/arrow-up-right.svg' alt='Отзыв' width={15} height={15} />
								</button>
							</div>
							<div className='mt-3'>
							<p className='text-white/70 text-base xz:text-sm'>
									Ваша мойка - это волшебство! Моя машина выглядит, как новая после каждого визита. Благодарена за профессиональный подход и внимание к деталям!
								</p>
							</div>
						</div>
						<hr className="my-5" />

						<div className=''>
							<div className='flex justify-between'>
								<div className='flex items-center'>
									<div className="avatar">
										<div className="w-12 rounded-full">
										<img src="/otzyvy/2.webp" alt="Отзыв" />
										</div>
									</div>
									<div className='text-white ml-3'>
										<p className='text-lg'>
											Анатолий
										</p>
										<div className="rating rating-sm">
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" checked onChange={()=>{}} />
										</div>
									</div>
								</div>
								<button className='btn btn-gradient btn-circle border-none'>
									<Image src='/svg/arrow-up-right.svg' alt='Отзыв' width={15} height={15} />
								</button>
							</div>

							<div className='mt-3'>
								<p className='text-white/70 text-base xz:text-sm'>
									Химчистка сидений у вас - это настоящее волшебство! Сиденья выглядят как новые, а аромат свежести в салоне создает уют. Очень доволен результатом!
								</p>
							</div>
						</div>
						<hr className="my-5" />

						<div className=''>
							<div className='flex justify-between'>
								<div className='flex items-center'>
									<div className="avatar">
										<div className="w-12 rounded-full">
										<img src="/otzyvy/3.webp" alt="Отзыв" />
										</div>
									</div>
									<div className='text-white ml-3'>
										<p className='text-lg'>
											Сацук Алексей
										</p>
										<div className="rating rating-sm">
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" checked onChange={()=>{}} />
										</div>
									</div>
								</div>
								<button className='btn btn-gradient btn-circle border-none'>
									<Image src='/svg/arrow-up-right.svg' alt='Отзыв' width={15} height={15} />
								</button>
							</div>

							<div className='mt-3'>
							<p className='text-white/70 text-base xz:text-sm'>
									Полировка кузова просто поразительна! Моя машина теперь сияет, словно только что вышла из салона. Большое спасибо за отличный сервис!
								</p>
							</div>
						</div>
						<hr className="my-5" />

						<div className=''>
							<div className='flex justify-between'>
								<div className='flex items-center'>
									<div className="avatar">
										<div className="w-12 rounded-full">
										<img src="/otzyvy/4.webp" alt="Отзыв" />
										</div>
									</div>
									<div className='text-white ml-3'>
										<p className='text-lg'>
											Гирз Роман
										</p>
										<div className="rating rating-sm">
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" />
											<input type="radio" name="rating-5" className="mask mask-star-2 bg-primary" checked onChange={()=>{}} />
										</div>
									</div>
								</div>
								<button className='btn btn-gradient btn-circle border-none'>
									<Image src='/svg/arrow-up-right.svg' alt='Отзыв' width={15} height={15} />
								</button>
							</div>

							<div className='mt-3'>
							<p className='text-white/70 text-base xz:text-sm'>
									Керамическое покрытие сделало мою машину настоящим ювелирным изделием! Блеск, гладкость и защита - всё, что я мог себе пожелать. Ваша команда знает, как создать идеальный автомобиль!
								</p>
							</div>
						</div>

					</div>

				</div>
			</div>
		</section>
	)
}

export default Otzyvy