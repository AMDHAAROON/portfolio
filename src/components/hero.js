import heroimg from '../assets/hero2.svg';
import { FaLinkedin} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


export default function Hero(){

return<div className='pb-4'>
 <section className='flex  flex-col md:flex-row bg-lightlaven  mx-6  py-20  px-6 rounded-b-2xl  text-black  '>
    <div className='md:w-1/2  text-4xl font-chalk    md:pt-8 text-center md:ml-20 leading-normal md:leading-snug text-black flex flex-col' >
    <h1 >Hey !<br/>I'm Mohamed<span className='text-black font-marker hover:text-white cursor-pointer'> Haaroon,</span>
    <p className='text-2xl font-mono mt-2'>a dedicated frontend developer.</p>
     </h1>
     <div className='flex  mx-auto  md:justify-center mt-6'>
        <a href='#' className='ml-12 mr-10 text-white hover:text-black'><FaLinkedin size={40}/></a>
        <a href='#' className=' mr-16 md:mr-10 text-black hover:text-white'><AiFillInstagram size={40}/></a>
     </div>
     </div>
     <img  className=" md:w-1/2 mr-5 pt-8  " src={heroimg}/>
    </section>
    </div>
}  