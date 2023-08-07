import { BsFillArrowDownCircleFill } from "react-icons/bs";
import avatarImage from '../assets/ReadyPlayerMe-Avatar.png';
import { Link } from 'react-scroll'; // Import Link from react-scroll


type Props = {

}

const hero = (props: Props) => {
  return (
    <>
  
<section id="home">
  <div className="max-w-screen-xl px-4 py-8 mx-auto flex items-center sm:py-12 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-stretch  shadow-inner shadow-green-900 border-green-500">
      <div className="grid p-6 rounded place-content-center sm:p-8">
      <div className="mx-auto max-w-3xl text-center">
    <h1
      className="bg-gradient-to-r from-green-300 via-green-500 to-gray-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
    >
      Hi my name is Cliff    <span className="sm:block"> Full Stack Developer </span>
    </h1>

    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-green-500">
         {/*Welcome to my portfolio*/}
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link
        className="block w-full rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
        to="contact"
      >
        Contact Me
      </Link>

      <Link
        className="block w-full rounded border border-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
        to="projects"
      >
        Projects
      </Link>
    </div>
  </div>
      </div>
      <div className=" lg:py-8">
        <ul className="p-4 sm:p-6 lg:p-8">
          <li>
            <a href="#" className="group group relative inline-block  text-sm font-medium text-white focus:outline-none focus:ring">
            <span
              className="rounded-2xl absolute inset-0 border border-none group-active:border-green-500"
            ></span>
              <img
                src={avatarImage}
                alt="Avatar"
                className=" rounded-2xl object-cover w-full aspect-square  shadow-md shadow-bottom   shado block border border-none   transition-transform active:border- active:bg-g group-hover:-translate-x-2 group-hover:-translate-y-2"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="flex flex-wrap justify-center gap-4 mt-12">
          <svg className="animate-bounce w-20 h-20 ...">
            <BsFillArrowDownCircleFill
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                fill: "#22c55e",
              }}
            />
          </svg>
        </div>
</section>
</>
  )
}

export default hero;