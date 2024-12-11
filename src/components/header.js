export default function Header(){
    return <>
    <section className="p-6 ">    
    <header className="flex justify-between px-10 pt-8 bg-primary rounded-t-2xl ">
        <a href="#" className="font-bold text-2xl pb-2 ">Haaroon</a>
        <ul className="flex text-white pb-2 font-marker ">
           <li> <a href="#">Home</a></li>
           <li> <a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </header>
    </section>
    </>
}