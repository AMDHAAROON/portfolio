import resume from '../assets/resume.jpg'
export default function Resume(){
    const config={
        link:'https://drive.google.com/file/d/1T_r4suPMEmv0gnEo54Q3FxLYTxk0PEwD/view?usp=sharing'
    }
    return<div className=' px-6 pb-4 cursor-default'id='resume'>
    <section className='flex flex-col md:flex-row  bg-flame  rounded-2xl p-8'  >
        <div className='md:w-1/2 md:pl-28 md:mr-5 justify-end  flex '>
            <img src={resume} className='md:h-auto w-[300px] mx-auto shadow-2xl md:my-10 lg:my-0  border-4 rounded-2xl border-red-400'/>
        </div>
        <div className=' md:w-1/2 my-auto  '>
        <div className='flex flex-col pt-5 text-center md:text-start '>
            
            <h1 className='text-3xl text-white font-marker pb-1  md:border-b-4 border-white md:w-[100px]'>Resume</h1>
        <p className='font-bold pt-3 text-gray-800 text-lg leading-relaxed'>You can view my Resume <a ><button className=' uppercase text-white px-3 py-1 bg-flame hover:bg-dkflame rounded-xl'><a href={config.link}>Download</a></button></a></p> 
          
            </div>
        </div>
    </section>
    </div>
}