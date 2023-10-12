import Wrapper from "@/app/Components/shared/Wrapper"
import Button from "@/app/Components/shared/Button"
import Quarter from "@/app/Components/shared/Quarter"


const CoreTrack = () => {
  const header = "Core Courses\n(Common in All Specializations)"
  return (
    <section className="mt-20 lg:mt-20">
<Wrapper>
    {/* Contents */}
<div className="max-w-screen-md">
    <h4 className="text-teal-800 font-semibold text-lg mt-4 ">Program of Studies</h4>
    <h1 className="text-4xl sm:text-5xl font-bold whitespace-pre">{header}</h1>
    <p className="mt-4 text-slate-700 text-lg text-justify">Every participant of the program will start by completing the following three core courses.</p>
</div>
<div className="mt-4">
    <Button text={"Enroll Now"}/>
</div>
{/* Boxes */}

<div className="my-20 sm:flex flex-col md:flex-row gap-x-8 gap-y-6 ">
<Quarter QuarterNumber="I" Description="CS-101: Object-Oriented Programming using TypeScript" no="1" /> 
<Quarter QuarterNumber="II" Description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform" no="2" />

<Quarter QuarterNumber="III" Description="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development" no="3" />





</div>
 








</Wrapper>
    </section>
  )
}

export default CoreTrack