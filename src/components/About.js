import aboutimg from '../assets/hero.png'
export default function(){
    return<div className=' px-6 pb-6'>
    <section className='flex flex-col md:flex-row  bg-flame rounded-2xl p-12 md:p-24' >
        <div className='md:w-1/2 '>
            <img src={aboutimg}/>
        </div>
        <div className='md:w-1/2 '>
        <div className='flex flex-col  md:pl-8 '>
            <h1 className='text-center text-2xl md:text-4xl text-white font-marker pb-2 border-dkflame border-b-4'>Get to Know Me</h1>
            <p className='pt-12 text-2xl font-cursive text-gray-600'> I am Mohamed Haaroon, a BCA student at SASTRA University with a strong foundation in IT, data analytics, and programming.</p>
            <p className='pt-6 text-2xl font-cursive text-gray-600'> And recognized by TCS iON and Accenture for my analytical and technical skills, I am passionate about leveraging my academic expertise to solve real-world challenges</p>
            <p className='pt-6 text-2xl font-cursive text-gray-600 '>Currently, I am enhancing my skills in front-end development and am eager to work as an intern or in any opportunity that allows me to contribute, learn, and grow in the IT field.</p>
            </div>
        </div>
    </section>
    </div>
}