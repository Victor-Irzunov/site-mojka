"use client"
export default function CTA({ handleOrderClick }) {
  return (
    <section className='py-16 md:py-24 relative' id="dostavka">
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-start'>
          <span className='flex-grow text-4xl md:text-5xl 2xl:text-6xl font-bold text-white'>
            Получить консультацию
          </span>
          <a href="tel:80333511597" className='btn bg-primary border-none text-white rounded-full sm:btn-lg'>
            +375 33 351-15-97 Виктор
          </a>
        </div>
      </div>
    </section>
  )
}