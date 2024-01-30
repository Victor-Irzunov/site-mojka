"use client"
import Image from "next/image";
import Modal from "@/components/modal/Modal";
import { useState } from "react";
import CTA from "@/components/CTA/CTA";


export default function Catalog() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_3").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };


  return (
    <>
      <section className='py-20 relative bg-white' id="catalog">
        <div className='container mx-auto'>
          <div className='text-center'>
            <h3 className='text-3xl sm:text-4xl font-bold mb-4 text-[#9D0D79] uppercase'>
              Что вы получаете
            </h3>
            <p className='mb-6 md:mb-14 sd:text-base xz:text-sm'>
              Получите высококачественный сайт с уникальным, адаптивным дизайном и функциональностью, созданным профессионалами всего за 199,00 рублей! Вы приобретаете продукт, который станет вашим навсегда, а также инструмент, с помощью которого вы привлечете новых клиентов, ищущих ваш продукт или услугу прямо сейчас. Учитывая, что большинство пользователей осуществляют поиск с мобильных телефонов, у вас появляется отличная возможность представить ваш сайт в ответ на их запросы, охватывая не только район или город, а всю просторность интернета.
            </p>
          </div>


          <div className='flex flex-wrap justify-center'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/1.webp" alt="Ментальная арифметика" width={480} height={480} /></figure>
              <div className="card-body text-center">
                <h4 className="font-semibold text-xl text-[#9D0D79]">
                  Онлайн присутствие
                </h4>
                <p className="text-sm">
                  Заказывая сайт-визитку у нашей компании, вы не только получаете эстетически привлекательный и функциональный веб-ресурс. Мы также обеспечиваем ваш бизнес высокой видимостью в онлайн-пространстве, что является ключом к привлечению новых клиентов и расширению вашей аудитории. С сайтом ваше онлайн-присутствие становится мощным инструментом для успешного развития бизнеса.
                </p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn bg-primary text-white rounded-lg uppercase" onClick={() => handleOrderClick("Заказать сайт-визитку")}>
                    Заказать сайт-визитку
                  </button>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/2.webp" alt="Обучение чтению" width={480} height={480} /></figure>
              <div className="card-body text-center">
                <h4 className="font-semibold text-xl text-[#9D0D79]">
                  Собственный сайт
                </h4>
                <p className="text-sm">
                  Вы получаете не просто веб-страницу, а полноценный онлайн-инструмент для представления своего бизнеса. С собственным сайтом вы расширяете свою видимость в интернете, устанавливает долгосрочное присутствие и создаете уникальное пространство для взаимодействия с клиентами.
                </p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn bg-primary text-white rounded-lg uppercase" onClick={() => handleOrderClick("Заказать сайт-визитку")}>
                    Заказать сайт-визитку
                  </button>
                </div>
              </div>
            </div>


            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/3.webp" alt="Маркетинговый инструмент" width={480} height={480} /></figure>
              <div className="card-body text-center">
                <h4 className="font-semibold text-xl text-[#9D0D79]">
                  Маркетинговый инструмент
                </h4>
                <p className="text-sm">
                  Заказав сайт-визитку вы обретаете мощный маркетинговый инструмент, способствующий расширению онлайн-присутствия бизнеса. Современный дизайн и удобная навигация обеспечивают привлекательность для потенциальных клиентов, а также улучшают видимость в поисковых системах, что способствует привлечению новой аудитории и увеличению конверсии.
                </p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn bg-primary text-white rounded-lg uppercase" onClick={() => handleOrderClick("Заказать сайт-визитку")}>
                    Заказать сайт-визитку
                  </button>
                </div>
              </div>
            </div>


            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/4.webp" alt="Оптимизированный сайт" width={480} height={480} /></figure>
              <div className="card-body text-center">
                <h4 className="font-semibold text-xl text-[#9D0D79]">
                  Оптимизированный сайт
                </h4>
                <p className="text-sm">
                Вы получаете не только стильный и функциональный сайт, но и полностью оптимизированный под поисковые системы. Наши профессионалы заботятся о каждой детали, включая теги, метатеги, заголовки, ключевые слова и другие элементы, чтобы ваш сайт привлекал целевую аудиторию, повышая его видимость в поисковых запросах. Это обеспечивает не только привлечение новых клиентов, но и устойчивый рост вашего бизнеса в онлайн-пространстве.
                </p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn bg-primary text-white rounded-lg uppercase" onClick={() => handleOrderClick("Заказать сайт-визитку")}>
                    Заказать сайт-визитку
                  </button>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/5.webp" alt="Быструю загрузку" width={480} height={480} /></figure>
              <div className="card-body text-center">
                <h4 className="font-semibold text-xl text-[#9D0D79]">
                  Быструю загрузку
                </h4>
                <p className="text-sm">
               Вы получаете быструю загрузку своего сайта (от 0,3 до 0,7 секунд), что существенно важно для удобства пользователей, но и повышает свою видимость в поисковых системах, таких как Google и Яндекс. Это обеспечивает не только отличный пользовательский опыт, но и увеличивает шансы привлечения новых клиентов через органический поиск в сети.
                </p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn bg-primary text-white rounded-lg uppercase" onClick={() => handleOrderClick("Заказать сайт-визитку")}>
                    Заказать сайт-визитку
                  </button>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/6.webp" alt=" Качественный контент" width={480} height={480} /></figure>
              <div className="card-body text-center">
                <h4 className="font-semibold text-xl text-[#9D0D79]">
                  Качественный контент
                </h4>
                <p className="text-sm">
                Вы получаете не только стильный сайт, но и уникальный контент, насыщенный ключевыми словами и качественным текстом, полезным для привлечения целевой аудитории. Это неотъемлемая часть выгоды заказа сайта-визитки у нашей компании, обеспечивая не только привлекательный внешний вид, но и эффективные маркетинговые возможности для вашего бизнеса.
                </p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn bg-primary text-white rounded-lg uppercase" onClick={() => handleOrderClick("Заказать сайт-визитку")}>
                    Заказать сайт-визитку
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      <CTA handleOrderClick={handleOrderClick} />
      <Modal
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
      />
    </>
  )
}