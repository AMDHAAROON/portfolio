import { Bars3Icon} from '@heroicons/react/24/solid'
import { useState } from 'react'
import icon from '../assets/online-learning.png';


export default function Header(){
   const [toggleMenu,settoggleMenu]= useState(false);
    return <>
    <section className="px-6 pt-6  bg-white  ">    
    <header className="flex justify-between px-10 pt-5  bg-lightlaven rounded-t-2xl ">
        <a href="#" className="font-cursive text-gray-600 text-4xl md:pb-2  md:mb-3  border-r-2 border-lavender pr-4 flex"> Myself
        </a>
        <nav className="hidden  md:block">
        <ul className="flex  pb-2 mt-2 text-white font-marker text-2xl ">
           <li> <a href="#" className='hover:text-gray-600'>Home</a></li>
           <li> <a href="#" className='hover:text-gray-600'>About</a></li>
            <li><a href="#" className='hover:text-gray-600'>Projects</a></li>
            <li><a href="#" className='hover:text-gray-600'>Contact</a></li>
        </ul>
        </nav> 
      
     
       
        { toggleMenu && <nav className="block md:hidden  ">
           
        <ul className="flex flex-col w-full h-2/3    mobile-nav   ">
       
           <li> <a href="#" className='hover:text-white'>Home</a></li>
           <li> <a href="#" className='hover:text-white' >About</a></li>
            <li><a href="#" className='hover:text-white'>Projects</a></li>
            <li><a href="#" className='hover:text-white'>Contact</a></li>
           
        </ul>
       
        </nav>}
        
        <button onClick={()=>settoggleMenu(!toggleMenu)} className='block md:hidden'> <Bars3Icon className=' text-black h-10 pb-2 '/></button>
        
    </header>
    </section>
    </>
}