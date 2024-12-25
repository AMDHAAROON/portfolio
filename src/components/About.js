import aboutimg from '../assets/hero.png'
export default function(){

    const config={
        line1:"I am Mohamed Haaroon, a BCA student at SASTRA University with a strong foundation in IT, data analytics, and programming.",
        line2:"And recognized by TCS iON and Accenture for my analytical and technical skills, I am passionate about leveraging my academic expertise to solve real-world challenges",
        line3:"Currently, I am enhancing my skills in front-end development and am eager to work as an intern or in any opportunity that allows me to contribute, learn, and grow in the IT field.",
    }
    
    return<div className='px-6 pb-4 dark cursor-default'id='about' >
    <section className='flex flex-col md:flex-row bg-flame rounded-2xl p-12 md:p-20 '  >
        <div className='md:w-1/2  md:mr-10 '>
            <img src={aboutimg} className='md:h-auto  md:mx-6 md:my-10 lg:my-0 '/>
        </div>
        <div className='md:w-1/2 '>
        <div className='flex flex-col  md:pl-8 '>
            <h1 className='text-center text-2xl md:text-4xl text-white font-marker pb-2 border-dkflame border-b-4 dark:border-white'>Get to Know Me</h1>
            <p className='pt-12 text-1xl font-design text-white'> {config.line1}</p>
            <p className='pt-6 text-1xl font-design text-white'>{config.line2} </p>
            <p className='pt-6 text-1xl font-design text-white '>{config.line3}</p>
            </div>
        </div>
    </section>
    </div>
}