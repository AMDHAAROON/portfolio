import clg from '../assets/clg.jpg';
import tour from '../assets/tour.jpeg';


export default function Project(){
    const config={
        projects:[
            {
                
                link:'',
            },
            {
                
                link:'',
            },

        ]
    }

    return <div className='pb-4 px-6 dark cursor-default'id='project'>    
        <section className='bg-mint rounded-2xl p-6'>
       
        <div className='text-center text-4xl font-marker  text-white border-b-4 border-dmint  w-[150px] mx-auto'>
        <h1 className='pb-2'>Projects</h1>
        </div>
        
        <div className='my-6  flex flex-col md:flex-row gap-8 justify-center  '>
            
            <div className='border-4 border-dmint rounded-2xl  bg-gray-100 '>
            <div className='p-4'>
                <img src={clg} className='  h-[200px] md:h-[250px] w-[350px] rounded-2xl'/>
                </div>
                <div className='md:w-[350px] pl-5 md:pl-5 md:pr-2'>
                    <h1 className='font-marker text-2xl  text-gray-700 border-b-4 border-dmint w-[170px] '>college website</h1>
                    <p className='justify-center pt-3  font-bold text-gray-700 text-sm'><span className=' text-dmint font-bold pr-2'>Technologies:</span> Utilized HTML, CSS, JavaScript, React, and Tailwind CSS to create a responsive and user-friendly interface.</p>
                    <p className='justify-center pt-3  font-bold text-gray-700 text-sm'><span className=' text-dmint font-bold pr-2'>Role : </span> Acted as a Frontend Developer, collaborating with a team to design and develop the college website</p>
                   <div className='py-5 md:pt-10  '>
                    <button className=' flex   py-2 pl-3 pr-5 hover:border border-red-600 font-bold text-white bg-red-400 rounded-xl'><a href='https://github.com/AMDHAAROON'>Explore</a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 pt-1 pl-1 ">
  <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
</svg>

</button>
                    </div>
                </div>
                </div>
            <div className='border-4 border-dmint rounded-2xl shadow-lg bg-gray-100'>
                <div className='p-4 '>
                <img src={tour} className=' h-[200px] md:h-[250px] w-[350px] rounded-2xl '/>
                </div>
                <div className='md:w-[350px] pl-5  pr-2'>
                    <h1 className='font-marker text-2xl  text-gray-700 border-b-4 border-dmint w-[180px] '>Tourism website</h1>
                    <p className='justify-center pt-3  font-bold text-gray-700 text-sm'><span className='text-dmint font-bold pr-2'>Process:</span> Currently in development, following a structured process including planning, designing, coding, testing, and future deployment.</p>
                    <p className='justify-center pt-3  font-bold text-gray-700 text-sm'><span className='text-dmint font-bold pr-2'>Role: </span>Independently designed and developed a tourism website using HTML, CSS, JavaScript, and Tailwind CSS.</p>
                   <div className='py-5    '>
                    <button className=' flex hover:border border-red-600 py-2 pl-3 pr-5 font-bold text-white bg-red-400 rounded-xl'><a href='https://github.com/AMDHAAROON/Tourism-website'>Explore</a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 pt-1 pl-1 ">
  <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
</svg>

</button>
                    </div>
                </div>
                </div>
        </div>
        </section>
    </div>
    
}