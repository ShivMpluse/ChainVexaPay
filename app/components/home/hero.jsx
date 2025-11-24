'use client'
import HeroContent from './HeroContent';
import { motion } from 'motion/react'


const hero = () => {

    const highLights = [
    {
        title: "0.50% Fee", 
        bg: "bg-yellow-500/20",
        shadow: "hover:shadow-[0_0_20px_4px_rgba(234,179,8,0.5)]",
        border: "border border-yellow-900"
    },
    {
        title: "instant Settlement", 
        bg: "bg-red-500/20", 
        shadow: "hover:shadow-[0_0_20px_4px_rgba(239,68,68,0.5)]",
        border: "border border-red-900"

    },
    {
        title: "100% non-custodial", 
        bg: "bg-lime-500/20", 
        shadow: "hover:shadow-[0_0_20px_4px_rgba(132,204,22,0.5)]",
        border: "border border-lime-900"
    },
    {
        title: "mutli-wallet support", 
        bg: "bg-amber-500/20", 
        shadow: "hover:shadow-[0_0_20px_4px_rgba(245,158,11,0.5)]",
        border: "border border-amber-900"
    },
];



    const SmallHighLights = () => {
        return highLights.map((item, index) => {
            const { title, bg, shadow, border } = item;
            return (
                <motion.div 
                    key={index} 
                    className={`p-5 md:p-6 rounded-2xl ${bg} ${border} backdrop-blur-xl 
                    capitalize text-center transition-all duration-300 hover:scale-105 
                    ${shadow}`}
                >
                    <h3 className='text-center text-lg font-semibold text-blue-200 drop-shadow-lg'>
                        {title}
                    </h3>
                </motion.div>
            );
        });
    };


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