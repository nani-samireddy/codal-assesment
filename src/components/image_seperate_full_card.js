const ImageSeperateFullCard = ({ url, title, description, isLeft }) => {
    return (
      <div className="w-full flex justify-center">
        <div className="w-[90%] h-auto flex justify-between items-center">
          <div className={`w-[40%] ${isLeft ? "order-1" : "order-2"}`}>
            <img src={url} alt={title} className="w-full" />
          </div>
          <div
            className={`w-[50%] flex flex-col gap-4 ${
              isLeft ? "order-2" : "order-1"
            }`}
          >
            <h1 className="text-4xl font-bold font-Montserrat">{title}</h1>
            <p className="text-lg text-justify	 font-light font-Se leading-loose">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
}

export default ImageSeperateFullCard;