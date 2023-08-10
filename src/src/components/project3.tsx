
import pro3 from '../assets/Screenshot 2022-05-17 at 19.58.01.png';

const project3 = () => {
  return (
    <section>
  <div className="max-w-screen-xl px-4 py-8 mx-auto flex items-center sm:py-12 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-stretch rounded-2xl shadow-green-900 shadow-2xl">
      <div className="grid p-6 rounded place-content-center sm:p-8">
        <div className="max-w-md mx-auto text-center lg:text-left">
          <header>
            <h2 className="text-xl font-bold text-green-500 sm:text-3xl inline-flex items-center">OctaQuest <span className="hidden ml-2 h-px w-32 bg-green-500 sm:inline-block"></span></h2>
            <p className="mt-4 text-green-600">
              Blockchain NFT app
            </p>
          </header>
          <a
            className=" rounded-lg px-3 py-2 text-white"
            href=""
            target="_blank"
        >

            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=""
            viewBox="0 0 24 24"
            stroke="#22c55e"
            className="h-8 w-8"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
            </svg>
        </a>
        </div>
      </div>
      <div className=" lg:py-8">
        <ul className="p-4 sm:p-6 lg:p-8">
          <li>
            <a href="#" className="group group relative inline-block  text-sm font-medium text-white focus:outline-none focus:ring">
            <span
              className="absolute rounded-2xl inset-0 border border-green-600 group-active:border-green-500"
            ></span>
              <img
                src={pro3}
                alt="Pro3"
                className=" rounded-2xl object-cover w-full aspect-square  shadow-md shadow-bottom   shadow-green-900 block border border-green-600   transition-transform active:border-green-500 active:bg-green-500 group-hover:-translate-x-2 group-hover:-translate-y-2"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

  )
}

export default project3