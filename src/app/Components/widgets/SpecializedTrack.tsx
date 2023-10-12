import Wrapper from "@/app/Components/shared/Wrapper"
import QuarterBottom from "@/app/Components/shared/QuarterBottom"


const SpecializedTrack = () => {
  return (

    <section>
        <Wrapper>
            {/* Header */}
    <div>
    <h2 className="text-5xl sm:text-6xl font-bold max-w-3xl text-justify">Specialized Tracks</h2>
    <p className="mt-4 text-slate-700 text-lg text-justify max-w-screen-md">After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
    </div>
            {/* Content Left */}
  <div className="flex">        
<div className="border border-slate-300 rounded-xl px-8 py-6 max-w-screen-md mt-10 shadow-xl">
  <div>
<h4 className="font-bold max-w-3xl text-justify text-teal-700 text-xl">Specialized Track</h4>
<h3 className="text-3xl sm:text-2xl font-bold max-w-2xl mt-3">Web 3.0 (Blockchain) and Metaverse Specialization</h3>
<p className="mt-4 text-slate-700 text-lg max-w-3xl text-justify ">This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</p>
<button className="py-3 px-7 border border-teal-800 rounded-lg mt-6 font-bold text-xl hover:bg-teal-800 hover:text-white duration-700">Learn More</button>  

{/* Bottom Boxes */}
</div>
<div className="flex mt-4">
<QuarterBottom QuarterNumber={"IV"} description={"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"} no={"4"}/>
<QuarterBottom QuarterNumber={"V"} description={"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"} no={"5"}/>
</div> 


</div>
            {/* Content Right */}
      <div className=" flex flex-1  border border-slate-300 rounded-xl px-8 py-6 mt-10 shadow-xl max-w-screen-sm relative left-5">
        <div className="flex flex-col">
          <div className="w-10 h-10 bg-slate-500 border"></div>
          <h4 className="text-teal-800">Specialized Track</h4>
          <h3 className="font-bold">Web 3.0 (Blockchain) and Metaverse Specialization</h3>

        </div>
              
              
              
              
              
              
              </div>
              </div>  
        </Wrapper>
    </section>
  
  )
}

export default SpecializedTrack