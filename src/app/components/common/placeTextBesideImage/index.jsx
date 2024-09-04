import Image from "next/image"
const Index = ({ header, firstParagraph, secondParagraph, image, imageWidth, inverse, borderColor, orangeTick }) => {
    return (
        <div className={`sm:flex sm:justify-between ${inverse ? 'sm:flex-row-reverse' : 'flex-row'}  sm:mt-[3rem] sm:mb-[5rem] mb-[7rem] sm:w-[100%] sm:items-center`}>
            <div className="sm:w-[50%] overflow-hidden flex flex-col items- sm:items-start">
                {header}
                <div className="mt-[2rem]">
                    <div className={`flex bg-[#232323] border mb-[2rem] ${borderColor ? borderColor : 'border-[#8FD5CC]'}  gap-[1rem] p-[.5rem] rounded-[1rem]`}>
                        <img src={orangeTick ? '/orange_tick.svg' : "/tick.svg"} className="w-[2rem]" alt="mark icon" />
                        <p className="">{firstParagraph}</p>
                    </div>
                    <div className="flex gap-[1rem] translate-x-[5rem] w-[100%]">
                        <img src={orangeTick ? '/orange_tick.svg' : "/tick.svg"} className="w-[2rem]" alt="mark icon" />
                        <p className="w-[85%]">{secondParagraph}</p>
                    </div>
                </div>
            </div>
            <Image className={`${imageWidth} mt-[3rem] sm:mt-[0]`} src={image} width={667} height={629} alt="code snippet picture" />
        </div>
    )
}

export default Index