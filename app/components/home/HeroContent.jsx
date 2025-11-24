import Button from '../Button';
import { motion } from 'motion/react';

const HeroContent = ({tittle, subTittle}) => {
    return (
        <div className='flex flex-col justify-center items-center px-4 w-full md:w-3/4 text-justify mt-40 md:mt-20 mx-auto gap-6'>
            <motion.h1 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                delay={0.2}
                className='text-3xl md:text-5xl font-bold mb-2 text-white capitalize leading-snug md:text-center py-2 '>
                {tittle}
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                delay={0.2}
                className='text-base md:text-lg mb-4 text-gray-300 w-full md:text-center'>
                {subTittle}
            </motion.p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-between w-auto'>
                <Button text="Start Accepting Crypto →" />
                <Button text="Explore Docs" />
            </div>
        </div>

    )
}

export default HeroContent