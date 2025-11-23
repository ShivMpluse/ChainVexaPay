import { motion } from 'motion/react';

const Button = ({text}) => {
    return (
        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: 'easeIn' }}
            delay={0.2}
            className='p-4 bg-linear-120 from-yellow-800  via-red-900 to-green-900/30 text-xl font-bold rounded-lg capitalize'>{text}</motion.button>
    )
}

export default Button