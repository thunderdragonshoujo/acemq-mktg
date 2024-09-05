import Image from "next/image";
import Link from "next/link";
const Index = () => {

    const cards = [
        {
            image: '/credit_card.png',
            ceo: '/CEO_1.svg',
            header: 'Real-Time Payment Processor Production Issues',
            text: 'Remediating performance and scaling issues with a RabbitMQ cluster in production',
            link: ''
        },
        {
            image: '/rabbit_mq.png',
            ceo: '/CEO_2.svg',
            header: 'RabbitMQ in Kubernetes',
            text: 'Configuring RabbitMQ in Kubernetes for success',
            link: ''
        },
    ]

    return (
        <section className="responsive-grid px-[3rem] sm:px-[10rem] sm:py-[10rem] py-[5rem] bg-white text-black">
            {cards.map((card, index) => <Card card={card} key={index} />)}
        </section>
    );
}

export default Index;


const Card = ({ card }) => {
    return (
        <div className="w-[350px]">
            <div className="relative">
                <Image src={card.image} className="rounded-[1rem] border border-red-900" width={420} height={320} alt="card image" />
                <div className="border sm:bottom-[-3rem] sm:right-[-3rem] bottom-[-2rem] right-[-2rem] absolute border-dashed sm:w-[7rem] w-[5.5rem] sm:h-[7rem] rounded-full p-[.2rem] border-[#9B86FE]">
                    <img src={card.ceo} alt="" />
                </div>
            </div>

            <div className="sm:w-[40rem] sm:mt-[3rem] mt-[2rem]">
                <h4 className="sm:text-[2.8rem] text-[2rem] font-[700]">{card.header}</h4>
                <p className="text-[#232323] font-[400] mt-[1rem]">{card.text}</p>
            </div>

            <Link  href={card.link} className="sm:mt-[3.5rem] mt-[2rem] text-[1.4rem] font-[700] border sm:px-[2.5rem] rounded-[1rem] inline-block  sm:py-[1.2rem] px-[2rem] py-[1rem] border-[#232323]">Learn More</Link>
        </div>
    )
}