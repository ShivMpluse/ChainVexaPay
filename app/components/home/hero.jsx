import Image from 'next/image';
import heroImage from '@/public/images/hero-img.png';
import Button from '../Button';

const hero = (  ) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[70vh] items-center px-6 md:px-12">
            <div className='text-4xl md:text-6xl font-bold w-5/6  leading-tight flex flex-col justify-center gap-10 h-full'>
                <h1 className='text-center'>The Future of Global Crypto Payments</h1>
                <p className='text-sm md:text-center text-justify font-extralight text-gray-300 font-'>ChainvexaPay is a decentralized non-custodial payment gateway enabling instant wallet‑to‑wallet transactions. Businesses accept crypto globally with automated 0.50% platform fee, complete transparency, and secure smart‑contract processing.</p>
                <div className='flex justify-center items-center w-full'>
                    <Button text='start accepting payment'/>
                </div>
            </div>
            <div className='w-full h-full flex justify-center items-center '>
                <Image src={heroImage} alt="logo" className='' />
            </div>
        </div>
    )
}

export default hero