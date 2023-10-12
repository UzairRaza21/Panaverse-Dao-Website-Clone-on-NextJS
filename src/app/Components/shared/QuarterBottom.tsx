import { FC } from "react"


const QuarterBottom:FC<{QuarterNumber:string, description:string, no: string}> = ({QuarterNumber, description, no}) => {
  return (
    <div className="flex-1 px-8 py-12 relative justify-center gap-x-2 flex">
    <h4 className="font-bold text-lg">Quarter {QuarterNumber}</h4>
    <p className="mt-2 text-slate-600"> {description}</p>
    <span className="absolute -top-10 right-20 font-bold text-[170px] -z-10 text-gray-200">{no}</span>
  </div>
  )
}

export default QuarterBottom