import dot from "../assets/PortfolioImg1.png"
import line from "../assets/PortfolioImg2.png"

const Portfolio = () => {
  return (
    <section className="relative bg-white w-screen h-full mx-auto mt-36 px-6 md:px-8 lg:px-12">
        <div className="w-full text-center flex flex-col items-center justify-center gap-5">
            <h1 className="uppercase text-black font-bold md:text-5xl lg:text-6xl font-heading">How it<span className="text-primary"> works</span></h1>
            <p className="text-side">A simple process built to deliver high-quality files without delays or confusion.</p>
            <div className="flex items-center gap-2">
              <img src={dot} alt="dot" />
              <img src={line} alt="" />
              <img src={dot} alt="dot" />
              <img src={line} alt="" />
              <img src={dot} alt="dot" />
            </div>
        </div>
    </section>
  )
}

export default Portfolio