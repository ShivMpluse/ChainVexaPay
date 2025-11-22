import Button from '../Button';

const HeroContent = ({tittle, subTittle}) => {
    return (
        <div className='flex flex-col justify-center items-center px-4 w-full md:w-3/4 text-justify mt-10 md:mt-20 mx-auto gap-6'>
            <h1 className='text-3xl md:text-5xl font-bold mb-2 text-white capitalize leading-snug text-center py-2 '>
                {tittle}
            </h1>

            <p className='text-base md:text-lg mb-4 text-gray-300 w-full text-center'>
                {subTittle}
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-between w-auto'>
                <Button text="Start Accepting Crypto →" />
                <Button text="Explore Docs" />
            </div>
        </div>

    )
}

export default HeroContent