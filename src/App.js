
import './App.css';
import ImageSeperateFullCard from "./components/image_seperate_full_card";
import Navbar from "./components/nav_bar";
import SectionHeading from "./components/section_heading";
import Img1 from "./imgs/img1.png";
import Img2 from "./imgs/img2.png";
import Img3 from "./imgs/img3.png";
import Img4 from "./imgs/img4.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* hero section */}
      <div className="w-full h-auto bg-[url('../public/assets/hero_bg.svg')] flex justify-evenly items-center">
        <div className="w-[40%] flex flex-col gap-10 justify-center">
          <h1 className="text-4xl text-blue-600 font-bold font-Montserrat leading-snug">
            Expertly matching digital talent with business
          </h1>
          <p className=" font-Literata text-xl">
            We promote innovation, growth, and success in the digital sphere by
            connecting businesses with the best digital talent.
          </p>
          <div className="flex gap-8 ">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-Montserrat font-semibold">
              SEARCH JOBS
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-Montserrat font-semibold">
              REQUEST TALENT
            </button>
          </div>
        </div>
        <div className="w-[40%] justify-between">
          <img src="assets/hero_img.png" alt="hero_img" />
        </div>
      </div>
      {/* Our sections */}
      <SectionHeading title={"Our Services"} isLeft={false} />
      {/* our services cards */}
      <div className="flex flex-col gap-20">
        <ImageSeperateFullCard
          isLeft={true}
          url={Img1}
          title={"Marketing"}
          description={
            "Grow your business with our marketing services! We offer the tools and expertise you need to make your brand stand out in a crowded market. Our experienced team is dedicated to helping you develop a customized marketing plan tailored to your unique goals and objectives. With our help, you can reach your target audience and maximize your business success."
          }
        />
        <ImageSeperateFullCard
          isLeft={false}
          url={Img2}
          title={"Application Development"}
          description={
            "Are you looking for a reliable application development service that will help you stay ahead of the competition? Look no further! From web-based applications to mobile ones, our team is dedicated to delivering the best possible outcome for your project. We guarantee that you will be satisfied with the results. Contact us today and get started on your application development project!"
          }
        />
        <ImageSeperateFullCard
          isLeft={true}
          url={Img3}
          title={"User experience design"}
          description={
            "Designing a great user experience is essential for any successful website. Let us take the hassle for you. Our team of UX designers can create an intuitive and responsive design to make sure your website delivers a great user experience. We will ensure your website is effective in meeting your business goals. Let us help you create a better user experience today."
          }
        />
        <ImageSeperateFullCard
          isLeft={false}
          url={Img4}
          title={"Management consulting"}
          description={
            "Need help managing your business? Look no further than our management consulting services. Our experienced professionals are here to help you develop cost-effective strategies and solutions to maximize profits and minimize losses. With our help, you can improve operations, enhance customer service and increase efficiency. Let us help you make your business a success."
          }
        />
      </div>
      <SectionHeading title={"Advantages of working with us"} isLeft={true} />
      {/* advantages buttons */}
      <div className="w-full flex  items-center justify-center">
        <div className="w-[90%] flex flex-row gap-8">
          <div className="bg-blue-600 text-white px-12 py-3 rounded-md text-xl font-Montserrat font-semibold">
            For Employers
          </div>
          <div className=" shadow-xl bg-white text-black border-2 px-12 py-3 rounded-md text-xl font-Montserrat font-semibold">
            For Job Seekers
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
