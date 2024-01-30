"use client"
// import Image from 'next/image';
// import { Link as LinkScroll } from 'react-scroll';

export default function Header() {

	// const gradientStyle = {
	// 	background: 'linear-gradient(90deg, #ff56f6 21.43%, #b936ee 50.63%, #3bace2 100%, #406aff 117.04%)',
	// 	WebkitBackgroundClip: 'text',
	// 	color: 'transparent',
	//  };

	return (
		<header className='fixed top-0 z-50 w-full py-1'>
			<div className='container mx-auto'>
				<div className="navbar px-0">
					<div className="navbar-start">
						<div className='text-xl flex flex-col'>
							<span className='uppercase text-white leading-5'>
								your{' '}
							</span>
							<span className='text-2xl font-bold text leading-5' >
								brend
							</span>
						</div>
					</div>
					{/* <div className="navbar-center">
						<a className="btn btn-ghost text-xl">daisyUI</a>
					</div> */}
					<div className="navbar-end pt-1">
						
						<button className='btn-gradient btn border-none rounded-full text-xl'>
							<a href='tel:8029'>
								+375 29 000-00-00
							</a>
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}