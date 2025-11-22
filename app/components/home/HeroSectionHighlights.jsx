

const HeroSectionHighlights = ({text}) => {
    return (
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 w-3/4 mx-auto mt-10'>
            <div className='p-6 rounded-2xl bg-linear-120 from-black via-blue-900 to-black w-auto capitalize'>
                <h3>{text}</h3>
            </div>
        </div>
    )
}

export default HeroSectionHighlights