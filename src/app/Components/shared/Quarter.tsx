import { FC } from "react"


const Quarter:FC <{QuarterNumber:string, Description:string, no :string}> = ({QuarterNumber, Description, no}) => {
  return (
    <div className="border rounded-md flex-1 px-8 py-12 relative flex flex-col justify-center items-stretch">
  <h4 className="font-bold text-lg">Quarter {QuarterNumber}</h4>
  <p className="mt-2 text-slate-600"> {Description}</p>
  <span className="absolute -top-10 right-20 font-bold text-[170px] -z-10 text-gray-200">{no}</span>
</div>
    
  )
}

export default Quarter