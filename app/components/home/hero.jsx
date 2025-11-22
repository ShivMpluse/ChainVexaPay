import HeroContent from './HeroContent';


const hero = (  ) => {

    const highLights = [
        {title: "0.50% Fee"},
        {title: "instant Settlement"},
        {title: "100% non-custodial"},
        {title: "mutli-wallet support"},
    ];

    const SmallHighLights = () => {
        return highLights.map((item, index) => (
            <div key={index} className='p-4 rounded-2xl bg-gradient-to-br from-black via-blue-800/70 to-black shadow-[0_0_20px_4px_rgba(0,0,255,0.4)] backdrop-blur-md w-auto capitalize transition-all duration-300 hover:scale-105'>
                <h3 className='text-center text-lg font-semibold text-blue-200 drop-shadow-lg'>
                    {item.title}
                </h3>
            </div>

        ))
    }

    const tittle = "Accept crypto payments instantly with our secure, fully non-custodial system.";
    const subTittle = "A global wallet-to-wallet payment network powered by secure smart contracts, enabling instant, borderless transactions with no banks, no custody requirements, and no KYC, giving users complete financial freedom everywhere globally.";

    return (
        <div className='flex flex-col relative h-screen justify-center items-center bg-gradient-to-b from-black via-blue-900 to-black/80'>
            <HeroContent tittle={tittle} subTittle={subTittle}/>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 w-3/4 mx-auto mt-10'>
                <SmallHighLights />
            </div>
        </div>
    )
}

export default hero