const ReviewCard = ({ message, name, profileImage, tagline }) => {
    return (
        <div className="p-10 flex flex-col font-Literata font-light bg-white rounded-md shadow-sm gap-16 w-[400px] ">
            <p className="  leading-loose text-justify text-[#232946]">{message}</p>
            <div className="flex gap-5 justify-start items-center">
                <img className="object-cover h-14 w-14 rounded-full" src={profileImage} alt="" srcset="" />
                <div className="flex flex-col justify-start gap-2">
                    <h1 >{name}</h1>
                    <h2 className="text-[#232946]">{tagline}</h2>
                </div>
            </div>
        </div>);
}

export default ReviewCard; 