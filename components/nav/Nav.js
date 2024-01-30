"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link as LinkScroll } from 'react-scroll';


const Nav = ({activeSection2}) => {
  const sections = ['home', 'about', 'price', 'otzyvy', 'contacts'];
	const [activeSection, setActiveSection] = useState('');

  const handleSectionVisibility = (idx) => {
      setActiveSection(sections[idx]);
  };
	
	useEffect(() => {
		setActiveSection(activeSection2)
	},[activeSection2])

  return (

    <nav className="fixed bottom-2 sd:bottom-8 w-full overflow-hidden z-30">
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 sd:h-20 xz:h-16 backdrop-blur-2xl rounded-full max-w-[430px] mx-auto px-5 flex justify-between'>
          {sections.map((sectionId, idx) => {
          

            return (
              <LinkScroll
                key={idx}
                to={sectionId}
                smooth={true}
                offset={-100}
                duration={800}
                className={`cursor-pointer flex justify-center items-center`}
                rel="nofollow"
                onClick={() => handleSectionVisibility(idx)}
              >
                
                  <Image
                    src={`/svg/${sectionId}.svg`}
                    alt={`Меню ${sectionId}`}
                    width={30}
                    height={30}
                    className={`${activeSection === sectionId ? 'btn-gradient btn-circle p-1.5' : ''}`}
                  />
    
              </LinkScroll>
            );
          })}
        </div>
      </div>
    </nav>
  );
}






export default Nav;
