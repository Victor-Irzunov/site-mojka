"use client"
import Icon from "@/components/iconMesseger/Icon";
import Nav from "@/components/nav/Nav";
import Otzyvy from "@/components/sections/Otzyvy/Otzyvy";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import Preimushestva from "@/components/sections/Preimushestva/Preimushestva";
import Price from "@/components/sections/price/Price";
import About from "@/components/sections/about/About";
import { Link as LinkScroll } from 'react-scroll';
// import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";
import Modal from "@/components/modal/Modal";


export default function Home() {
  const sections = ['home', 'about', 'price', 'otzyvy', 'contacts'];
  const [activeSection, setActiveSection] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_3").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };

  const handleIntersection = (sectionId, inView) => {
    if (inView) {
      // console.log(`${sectionId} в зоне`);
      setActiveSection(sectionId)
    } else {
      // console.log(`${sectionId} не в зоне`);
    }
  };

  useEffect(() => {
    const observers = {};

    sections.forEach((sectionId) => {
      const target = document.getElementById(sectionId);

      if (target) {
        observers[sectionId] = new IntersectionObserver(
          ([entry]) => {
            handleIntersection(sectionId, entry.isIntersecting);
          },
          {
            triggerOnce: true,
            root: null,
            // threshold: 0.5,
          }
        );

        observers[sectionId].observe(target);
      } else {
        console.error(`Блока с id ${sectionId} не найдено`);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        if (observers[sectionId]) {
          observers[sectionId].disconnect();
        }
      });
    };
  }, [sections]);


  return (
    <main
      className=""
      style={{ backgroundImage: 'url("/background/fon.webp")' }}

    >
      <div className='container mx-auto'>

        <section className="pt-36 pb-20" id="home">

          <div className='flex sd:flex-row xz:flex-col'>

            <div className='sd:w-1/2 xz:w-full'>
              <h1 className='text-white text-5xl font-bold'>
                Детейлинг | Автомойка <span className="block font-normal text-4xl mt-3 text-[#B809C3]">в Минске</span>
              </h1>
              <p className='mt-8 text-white/70 font-light text-sm'>
                Качественная автомойка по доступным ценам обеспечивает идеальный блеск вашего автомобиля, используя передовые технологии и профессиональные моющие средства, чтобы каждый клиент мог наслаждаться чистотой своего транспортного средства.
              </p>

              <div className='mt-12 flex items-center'>
                <button
                  className='btn-gradient btn border-none rounded-full sd:text-xl xz:text-base'
                  onClick={() => handleOrderClick('Записаться на мойку')}
                >
                  Записаться на мойку
                </button>

                <div className='ml-6'>
                  <p className=''>
                    <LinkScroll
                      to="contacts"
                      smooth={true}
                      offset={-100}
                      duration={800}
                      className="cursor-pointer text sd:text-2xl xz:text-xl"
                      rel="nofollow"
                      href='#/'
                    >
                      Контакты
                    </LinkScroll>
                  </p>
                </div>
              </div>

              <div className='text-white/90 mt-8'>
                <Icon />
              </div>
            </div>


            <div className='sd:w-1/2 xz:w-full flex justify-end items-center overflow-hidden sd:mt-0 xz:mt-16'>
              <img className="sd:w-3/4 xz:w-full" src="/background/fon3.webp" style={{ borderRadius: '41% 59% 46% 54% / 73% 44% 56% 27%' }} alt="фоновое изображение мойка авто" />
            </div>

          </div>
        </section>
        <About />
        <div className='h-6'/>
        <Price />
        <Otzyvy handleOrderClick={handleOrderClick} />
        <Portfolio handleOrderClick={handleOrderClick} />
        <Preimushestva />
      </div>
      <Nav activeSection2={activeSection} />

      <Modal
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
      />
    </main>
  );
}
