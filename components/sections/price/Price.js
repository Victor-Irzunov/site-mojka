import { useState } from 'react';
import { mojkaData, detejlingData } from "@/constans/PriceData";

const Price = () => {
  const [activeTab, setActiveTab] = useState('mojka');

  const sortServicesByPrice = (data) => {
    return data.sort((a, b) => {
      const priceA = a.prices[0]; // Цена для легкового автомобиля
      const priceB = b.prices[0];
      return priceA - priceB;
    });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section  className="sd:pt-0 xz:pt-10 pb-20">
      <div className='container mx-auto'>
        <div className=''>
          <h3 className='uppercase text-primary text-4xl'>
            Услуги и цены
          </h3>
          <p className='text-white/80 font-light mt-3 sd:text-base xz:text-sm'>
            Наши услуги включают в себя не только высококачественную мойку вашего автомобиля, но и тщательную предварительную подготовку, использование специализированных моющих средств и дополнительные опции для ухода за вашим транспортным средством. Все это доступно по конкурентоспособным ценам, гарантируя вам максимальное удовлетворение от каждого визита к нам.
          </p>
        </div>

        <div className='mt-12'  id='price'>
          <div className='mt-4 mb-6 flex'>
            <button
              className={`border-none rounded-full text-xl px-6 text-white ${activeTab === 'mojka' ? 'btn-gradient btn' : ''}`}
              onClick={() => handleTabClick('mojka')}
            >
              Мойка
            </button>
            <button
              className={`border-none rounded-full mx-5 text-xl px-6 text-white ${activeTab === 'detejling' ? 'btn-gradient btn' : ''}`}
              onClick={() => handleTabClick('detejling')}
            >
              Детейлинг
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              <thead className="text-white/80">
                <tr>
                  <th>Услуга</th>
                  <th>Легковой <br />BYN</th>
                  <th>Джип <br />BYN</th>
                  <th>Микроавтобус <br />BYN</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {sortServicesByPrice(activeTab === 'mojka' ? mojkaData : detejlingData).map((service, index) => (
                  <tr key={index}>
                    <th>{service.service}</th>
                    {service.prices.map((price, subIndex) => (
                      <td key={subIndex}>{price}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
