import AboutImg from "../assets/AboutUs.png"

const TopHeader = () => {
  return (
    <section className='w-full mx-auto grid grid-cols-1 pt-36 px-80'>
      <div className='flex flex-col gap-8 items-center text-center'>
        <h1 className='font-heading uppercase text-6xl font-bold text-primary'>Turning Your Designs Into
          Production-<span className='text-black'>Ready Masterpieces</span></h1>
        <p className="text-side">We help creators, clothing brands, and businesses get flawless embroidery-ready files without the hassle. Every stitch, every detail, every curve — refined with care so your final product looks exactly the way you imagined. From digitizing to vector work and custom patches, our team brings precision, consistency, and fast delivery to every project.</p>
      </div>
    </section>
  )
}

const AboutUs = () => {
  return (
    <>
      <section>
        <TopHeader />
        <div className="w-screen mt-14 mx-auto relative flex justify-center space-x-14 p-6">
          <div className="flex justify-center flex-col max-w-[700px] items-center gap-5 text-white bg-primary text-center p-20 rounded-lg">
            <h6 className="font-medium uppercase text-white/80">About Us</h6>
            <h4 className="text-white font-medium text-3xl max-w-[650px] font-heading uppercase">Premium Embroidery & Apparel
              Services That Bring Your Designs to Life</h4>
            <p className="max-w-[500px] text-white/80 font-medium">From digitizing to custom patches — get studio-quality work delivered fast, accurate, and ready for production.</p>
            <button className="bg-white text-primary font-medium mt-5 cursor-pointer p-3 px-5 rounded-lg">Get a Free Quote</button>
          </div>

          <div>
            <img src={AboutImg} alt="" />
          </div>

        </div>

      </section>
    </>
  )
}


export default AboutUs