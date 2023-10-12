import Link from "next/link"
import Logo from "/public/panaverse-logo.webp"
import Image from "next/image"
import Wrapper from "@/app/Components/shared/Wrapper"

const header = () => {
  return (
    <Wrapper>
    <header className="flex justify-between py-5 px-4 sticky top-0 items-center">

{/* Logo */}
<div>
{/* <h2 className="text-xl font-bold">Panaverse Dao</h2> */}
<Image src= {Logo} alt = "Panaverse Dao" className="w-[150px]" />
</div>

{/* Navigation Bar */}
<ul className="flex space-x-8 font-semibold">
    <li>
        <Link href={"/"}>
        Home
        </Link>
        </li>

    <li>
        <Link href={"/courses"} >
        Courses
        </Link>
        </li>
</ul>
    </header>  
    </Wrapper>
  )
}

export default header
