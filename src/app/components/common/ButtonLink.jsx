import Link from "next/link";
const ButtonLink = ({ link, text, className }) => {
    return (
        <Link href={link} className="block mt-[2rem] sm:mt-[4rem] mx-auto">
            <button className={`px-[2.5rem] text-[1.2rem] capitalize py-[1rem] border-[1.5px] border-[#8FD5CC] ${className}`}>{text}</button>
        </Link>
    );
}

export default ButtonLink;