
const Subscription = () => {
  return (
    <section className='w-full bg-secondary mt-28'>
        <div className='max-w-4xl px-6 py-12 md:py-16 flex flex-col gap-8 text-center mx-auto'>
            <h1 className='font-heading uppercase text-black text-3xl font-bold'>SUBSCRIBE & GET <span className='text-primary'>15% DISCOUNT</span></h1>
            <div className='relative flex max-w-7xl mx-auto items-center justify-center'>
                <input type="email" className='w-[500px] outline-1 outline-primary border-none p-3 px-8 rounded-full drop-shadow-sm' placeholder='Email Address' required/>
                <button className='active:scale-95 transition-all ease-in-out whitespace-nowrap absolute right-0 bg-primary p-3 px-10 rounded-full text-white font-body'>Subscribe</button>
            </div>
            <p className='font-body text-black/80 max-w-prose text-sm mx-auto'>by subscribing you agree to our terms & conditions and privacy & cookies policy.</p>
        </div>
    </section>
  )
}

export default Subscription