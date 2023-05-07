
import './App.css';
import Navbar from './components/nav_bar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="w-full h-auto bg-[url('../public/assets/hero_bg.svg')] flex justify-evenly items-center">
        <div className='w-[40%] flex flex-col gap-10 justify-center'>
          <h1 className="text-4xl text-blue-600 font-bold font-Montserrat leading-snug">Expertly matching digital talent with business</h1>
          <p className=' font-Literata text-xl'>We promote innovation, growth, and success in the digital sphere by connecting businesses with the best digital talent.</p>
          <div className='flex gap-8 '>
            <button className='bg-blue-600 text-white px-6 py-2 rounded-md font-Montserrat font-semibold'>SEARCH JOBS</button>
            <button className='bg-blue-600 text-white px-6 py-2 rounded-md font-Montserrat font-semibold'>REQUEST TALENT</button>
          </div>
        </div>
        <div className='w-[40%] justify-between'>
          <img src="assets/hero_img.png" alt="hero_img" />
        </div>
      </div>
    </div>
  );
}

export default App;
