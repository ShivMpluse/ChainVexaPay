import Button from '../Button';

const HeroContent = ({tittle, subTittle}) => {
    return (
        <div className='flex flex-col justify-between items-center px-4 w-3/4 text-justify mt-20 mx-auto gap-6'>
            <h1 className='text-5xl font-bold mb-6 text-white capitalize leading-16'>{tittle}</h1>
            <p className='text-lg mb-6 text-gray-300 w-full capitalize '>{subTittle}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Button text="Start Accepting Crypto →" />
                <Button text="Explore Docs " />
            </div>
        </div>
    )
}

export default HeroContent