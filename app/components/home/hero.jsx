'use client'
import HeroContent from './HeroContent';
import { motion } from 'motion/react'


const hero = (  ) => {

    const highLights = [
        {title: "0.50% Fee"},
        {title: "instant Settlement"},
        {title: "100% non-custodial"},
        {title: "mutli-wallet support"},
    ];

    const SmallHighLights = () => {
        return highLights.map((item, index) => (
            <motion.div key={index} className='p-5 md:p-6 rounded-2xl bg-gradient-to-br from-white/5 via-white/3 to-white/20 border border-white/10 shadow-lime-400 backdrop-blur-xl capitalize text-center transition-all duration-300  hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(0,0,255,0.5)]'>
                <h3 className='text-center text-lg font-semibold text-blue-200 drop-shadow-lg'>
                    {item.title}
                </h3>
            </motion.div>

        ))
    }

    const tittle = "Accept crypto payments instantly with our secure, fully non-custodial system.";
    const subTittle = "A global wallet-to-wallet payment network powered by secure smart contracts, enabling instant, borderless transactions with no banks, no custody requirements, and no KYC, giving users complete financial freedom everywhere globally.";

    return (
        <div 
            
            className='flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-black via-blue-900 to-black/80'>
            <HeroContent tittle={tittle} subTittle={subTittle}/>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                delay={0.4}
                className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 w-full md:w-auto px-4 mx-auto mt-10'>
                <SmallHighLights />
            </motion.div>
        </div>
    )
}

export default hero