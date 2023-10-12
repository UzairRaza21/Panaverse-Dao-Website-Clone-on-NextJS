import Wrapper from "@/app/Components/shared/Wrapper"
import Heroposter from "@/app/Assets/Images/hero-poster.webp"
import Image from "next/image"
//Components
import Button from "@/app/Components/shared/Button"

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
{/* Left side */}
<div className="flex-1">
<h4 className="text-teal-800 font-semibold text-lg mt-4 max-w-2xl">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
<h1 className="text-5xl sm:text-6xl font-bold max-w-2xl text-justify">Certified Web 3.0 and Metaverse Developer</h1>
<p className="mt-4 text-slate-700 text-lg max-w-2xl text-justify">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet. </p>
  
  <p className="mt-4 text-slate-700 text-lg max-w-2xl text-justify">Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
<div className="mt-4">
  <Button text={"Learn More"}/>
</div>



</div> 

{/* Right side */}
<div className="flex-1">
<Image src={Heroposter} alt="AI"></Image>


</div>

</div>
      </Wrapper>
    </section>
    
  )
}

export default Hero