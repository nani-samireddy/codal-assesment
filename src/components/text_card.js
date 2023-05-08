const TextCard = ({ number, title, description }) => {
    return (
        <div className="flex flex-col w-[20%] gap-6 ">
            <h1 className="text-6xl font-light text-[#2E7EF9] font-Literata ">{number}</h1>
            <h1 className="text-xl font-Montserrat font-semibold text-[#232946]">{title}</h1>
            <p className=" font-Literata text-justify font-light text-[#232946]">{description}</p>
        </div>);
}

export default TextCard;