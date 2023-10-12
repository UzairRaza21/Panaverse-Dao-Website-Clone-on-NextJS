import { FC } from "react"


const Button: FC<{text:string} >= ({text}) => {
    
  return (
   <button className="px-6 py-4 bg-teal-800 text-white font-semibold rounded-full shadow-lg  hover:scale-105 duration-700">{text}</button>
  )
}

export default Button