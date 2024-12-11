import { Bars3Icon} from '@heroicons/react/24/solid'
import { useState } from 'react'


export default function Header(){
   const [toggleMenu,settoggleMenu]= useState(false);
    return <>
    <section className="p-6 bg-white ">    
    <header className="flex justify-between px-10 pt-8 bg-lavender rounded-t-2xl ">
        <a href="#" className="font-cursive text-black text-3xl pb-2 ">Haaroon</a>
        <nav className="hidden  md:block">
        <ul className="flex  pb-2  text-white font-marker text-2xl ">
           <li> <a href="#">Home</a></li>
           <li> <a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav> 
      
       
        { toggleMenu && <nav className="block md:hidden  ">
        <ul className="flex flex-col    text-gray-500 font-marker text-3xl  pt-3 mobile-nav bg-opacity-45 ">
           <li> <a href="#">Home</a></li>
           <li> <a href="#" >About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>}
        
        <button onClick={()=>settoggleMenu(!toggleMenu)} className='block md:hidden'> <Bars3Icon className=' text-white h-10 pb-2 '/></button>
    </header>
    </section>
    </>
}