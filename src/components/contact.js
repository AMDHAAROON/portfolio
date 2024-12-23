
export default function Contact(){
    const config={
        email:'mdhaaroo2020@gmail.com',
        phone:'+91 9500669628',
    }
    return<div className=' px-6 pb-4' id="contact">
    <section className='flex flex-col  bg-lightlaven rounded-2xl p-8' >
        <div className=" text-center">
        <div className=' items-center    '>
     
            
            <h1 className=' text-2xl md:text-3xl text-black font-chalk pb-1 ] '>Contact</h1>
          
      <p className='font-bold pt-3 text-gray-800 text-xl'>If you need more details, please get in touch.</p> 

          <p className="pt-4  pb-2 text-sm md:text-lg font-mono"><span className="font-bold text-1xl text-lavender">Email : </span><a href="mailto:mdhaaroon2020@gmail.com">{config.email}</a></p>
          <p className="pb-4 text-sm md:text-lg font-mono"><span className="font-bold text-1xl text-lavender">Phone : </span><a href="tel:+919500669628">{config.phone}</a></p>
            
        </div>
        </div>
    </section>
    </div>
}