import React from 'react'


const Hero = () => {
  return (
    <section className='px-1 py-9 text-black p-6'>
      <div className="min-h-screen min-w-full bg-gray-100 flex flex-col justify-center p-10">
  <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
    <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl" />
    <div className="relative bg-white shadow-lg sm:rounded-3xl">
      <div className="flex items-center justify-start pt-6 pl-6">
        <span className="w-3 h-3 bg-red-400 rounded-full mr-2" />
        <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2" />
        <span className="w-3 h-3 bg-green-400 rounded-full mr-2" />
      </div>
      <div className="px-20 py-6">
        {/* hero section */}
        <div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
          <div className="text-6xl font-semibold text-gray-900 leading-none">
            Bring all your work together
          </div>
          <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
            A better experience for yout attendees and less stress yout team.
          </div>
          <button className="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
            Download for Free
          </button>
        </div>
        <div className="mt-12 lg:mt-32 lg:ml-20 text-left">
          <button
            type="button"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
        {/* /hero section */}
      </div>
    </div>
  </div>
</div>
{/*/Our Partners */}
<div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
      Trusted by the world’s most innovative teams
    </h2>
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
        alt="Transistor"
        width={158}
        height={48}
      />
      <img
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
        alt="Reform"
        width={158}
        height={48}
      />
      <img
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
        alt="Tuple"
        width={158}
        height={48}
      />
      <img
        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
        src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
        alt="SavvyCal"
        width={158}
        height={48}
      />
      <img
        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
        src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
        alt="Statamic"
        width={158}
        height={48}
      />
    </div>
  </div>
</div>

{/*/arrival series */}
<div className="relative overflow-hidden bg-white">
  <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="sm:max-w-lg">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          The New World Start's Here!
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          This year, our new product will shelter you from the harsh
          elements of a world
        </p>
      </div>
      <div>
        <div className="mt-10">
          {/* Decorative image grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
          >
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                    <img
                      src="https://aisbackgroundchecks.com/wp-content/uploads/2014/07/bigstock-Background-digital-image-of-wo-61137458-555x370.jpg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img
                      src="https://th.bing.com/th/id/OIP.wJ3--qhDw-C9Ow8ARCb9DAAAAA?rs=1&pid=ImgDetMain"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img
                      src="https://th.bing.com/th/id/R.e23ba757c61f17acc2bf1d4cd10ea286?rik=EO7DdakuDem%2bIw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f5%2fc%2f5%2f539673.jpg&ehk=M%2f8CuqUWcDnoyoms5Mhzg7XbbmTR0vkK3lSB44j93J0%3d&risl=&pid=ImgRaw&r=0"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img
                      src="https://th.bing.com/th/id/R.d73e4354b3d2a95a23283b04fad8546a?rik=Jss%2baOXhGYbTnA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f8%2f6%2fc%2f1337553-tech-9-wallpapers-1920x1080-samsung.jpg&ehk=dYAeH4PuDii3XqO8c6vzowB3r3HWly6qPRNcG0X0BU8%3d&risl=&pid=ImgRaw&r=0"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img
                      src="https://th.bing.com/th/id/OIP.hfYeIbz7JfL-dqiMvYrICwHaEK?rs=1&pid=ImgDetMain"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img
                      src="https://wallpaperaccess.com/full/45399.jpg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img
                      src="https://wallpaperaccess.com/full/4642683.jpg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
          >
            Athob:::
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<>
  {/* component */}
  <div className="bg-white relative   flex items-center  n justify-center overflow-hidden z-50 ">
    <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
      <div className="flex flex-col items-center justify-between lg:flex-row py-16">
        <div className=" relative ">
          <div className=" absolute top-0 -left-48 z-0  opacity-50 ">
            <img
              src="https://placehold.co/200x100"
              className="w-36 z-0  h-full    object-fill fill-y text-y   "
            />
          </div>
          <div className="lg:max-w-xl lg:pr-5 relative z-40">
            <p className="flex text-sm uppercase text-g1  ">About Us</p>
            <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
              We make you look
              <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash">
                different
              </span>
            </h2>
            <p className="text-base text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque it.
            </p>
            <div className="mt-10 flex flex-col items-center md:flex-row">
              <a
                href="/"
                className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-600 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto"
              >
                View More
              </a>
              <a
                href="/"
                aria-label=""
                className="group inline-flex items-center font-semibold text-g1"
              >
                Watch how it works
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 17l-4 4m0 0l-4-4m4 4V3"
            />
          </svg>
          <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
            <img src="/kunal.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div className="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40    ">
      About Us
    </div>
    <div className=" absolute -bottom-24 left-10 z-0  opacity-10 ">
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        className="w-96 z-0  h-full    object-fill fill-gray-300 text-gray-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"
        />
      </svg>
    </div>
    <div className=" absolute -bottom-0 left-3/4 z-0  opacity-10 ">
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        className="w-48 z-0  h-full -rotate-90   object-fill fill-red-300 text-red-300"
      >
        <path
          d="M32 225h12.993A4.004 4.004 0 0 0 49 220.997V138.01c0-4.976.724-5.04 1.614-.16l12.167 66.708c.397 2.177 2.516 3.942 4.713 3.942h8.512a3.937 3.937 0 0 0 3.947-4S79 127.5 80 129s14.488 52.67 14.488 52.67c.559 2.115 2.8 3.83 5.008 3.83h8.008a3.993 3.993 0 0 0 3.996-3.995v-43.506c0-4.97 1.82-5.412 4.079-.965l10.608 20.895c1.001 1.972 3.604 3.571 5.806 3.571h9.514a3.999 3.999 0 0 0 3.993-4.001v-19.49c0-4.975 2.751-6.074 6.155-2.443l6.111 6.518c1.51 1.61 4.528 2.916 6.734 2.916h7c2.21 0 5.567-.855 7.52-1.92l9.46-5.16c1.944-1.06 5.309-1.92 7.524-1.92h23.992a4.002 4.002 0 0 0 4.004-3.992v-7.516a3.996 3.996 0 0 0-4.004-3.992h-23.992c-2.211 0-5.601.823-7.564 1.834l-4.932 2.54c-4.423 2.279-12.028 3.858-16.993 3.527l2.97.198c-4.962-.33-10.942-4.12-13.356-8.467l-11.19-20.14c-1.07-1.929-3.733-3.492-5.939-3.492h-7c-2.21 0-4 1.794-4 4.001v19.49c0 4.975-1.14 5.138-2.542.382l-12.827-43.535c-.625-2.12-2.92-3.838-5.127-3.838h-8.008c-2.207 0-3.916 1.784-3.817 4.005l1.92 42.998c.221 4.969-.489 5.068-1.585.224l-15.13-66.825c-.488-2.155-2.681-3.902-4.878-3.902h-8.512a3.937 3.937 0 0 0-3.947 4s.953 77-.047 75.5-13.937-92.072-13.937-92.072C49.252 34.758 47.21 33 45 33H31.999"
          fillRule="evenodd"
        />
      </svg>
    </div>
    <div className=" absolute top-10 left-3/4 z-0  opacity-10 ">
      <svg
        fill="#000000"
        width="800px"
        height="800px"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        className="w-96 z-0  h-full    object-fill fill-blue-300 text-blue-300"
      >
        <path
          d="M230.704 99.2a4.004 4.004 0 0 0-4.01-3.995h-50.981c-2.215 0-5.212-1.327-6.693-2.964L155.289 77.08c-17.795-19.65-41.628-16.256-53.234 7.58l-38.736 79.557C60.42 170.172 52.705 175 46.077 175H29.359a3.996 3.996 0 0 0-3.994 3.995v10.01A4 4 0 0 0 29.372 193h24.7c8.835 0 19.208-6.395 23.174-14.293l43.645-86.914c3.964-7.894 12.233-9.228 18.473-2.974l17.184 17.219c3.123 3.13 9.242 5.667 13.647 5.667H226.7a4.005 4.005 0 0 0 4.004-3.994v-8.512z"
          fillRule="evenodd"
        />
      </svg>
    </div>
  </div>
</>


    <>
  {/* component */}
  <header className="max-w-6xl mx-auto py-8 px-5 flex justify-between lg:px-8">
    <a href="#/" className="text-2xl text-gray-900 font-semibold">
      Atmo<span className="text-indigo-600">-soft</span>
    </a>

  </header>
  <main className="max-w-6xl mx-auto pt-10 pb-36 px-8">
    <div className="max-w-md mx-auto mb-14 text-center">
      <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
        <span className="text-indigo-600">Flexible</span> Plans
      </h1>
      <p className="text-xl text-gray-500 font-medium">
        Choose a plan that works best for you and your team.
      </p>
    </div>
    <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
      <div className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
        <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
          <img
            src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
            alt=""
            className="rounded-3xl w-20 h-20"
          />
          <div className="ml-5">
            <span className="block text-2xl font-semibold">Basic</span>
            <span>
              <span className="font-medium text-gray-500 text-xl align-top">
                $ 
              </span>
              <span className="text-3xl font-bold">10 </span>
            </span>
            <span className="text-gray-500 font-medium">/ user</span>
          </div>
        </div>
        <ul className="mb-7 font-medium text-gray-500">
          <li className="flex text-lg mb-2">
            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
            <span className="ml-3">
              Get started with <span className="text-black">messaging</span>
            </span>
          </li>
          <li className="flex text-lg mb-2">
            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
            <span className="ml-3">
              Flexible <span className="text-black">team meetings</span>
            </span>
          </li>
          <li className="flex text-lg">
            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
            <span className="ml-3">
              <span className="text-black">5 TB</span> cloud storage
            </span>
          </li>
        </ul>
        <a
          href="#/"
          className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
        >
          Choose Plan
          <img
            src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
            className="ml-2"
          />
        </a>
      </div>
      <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
        <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
          <img
            src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
            alt=""
            className="rounded-3xl w-20 h-20"
          />
          <div className="ml-5">
            <span className="block text-3xl font-semibold text-white">
              Startup
            </span>
            <span>
              <span className="font-medium text-xl align-top">$ </span>
              <span className="text-3xl font-bold text-white">24 </span>
            </span>
            <span className="font-medium">/ user</span>
          </div>
        </div>
        <ul className="mb-10 font-medium text-xl">
          <li className="flex mb-6">
            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
            <span className="ml-3">
              All features in <span className="text-white">Basic</span>
            </span>
          </li>
          <li className="flex mb-6">
            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
            <span className="ml-3">
              Flexible <span className="text-white">call scheduling</span>
            </span>
          </li>
          <li className="flex">
            <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
            <span className="ml-3">
              <span className="text-white">15 TB</span> cloud storage
            </span>
          </li>
        </ul>
        <a
          href="#/"
          className="flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl"
        >
          Choose Plan
          <img
            src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
            className="ml-2"
          />
        </a>
      </div>
      <div className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
        <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
          <img
            src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
            alt=""
            className="rounded-3xl w-20 h-20"
          />
          <div className="ml-5">
            <span className="block text-2xl font-semibold">Enterprise</span>
            <span>
              <span className="font-medium text-gray-500 text-xl align-top">
                $ 
              </span>
              <span className="text-3xl font-bold">35 </span>
            </span>
            <span className="text-gray-500 font-medium">/ user</span>
          </div>
        </div>
        <ul className="mb-7 font-medium text-gray-500">
          <li className="flex text-lg mb-2">
            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
            <span className="ml-3">
              All features in <span className="text-black">Startup</span>
            </span>
          </li>
          <li className="flex text-lg mb-2">
            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
            <span className="ml-3">
              Growth <span className="text-black">oriented</span>
            </span>
          </li>
          <li className="flex text-lg">
            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
            <span className="ml-3">
              <span className="text-black">Unlimited</span> cloud storage
            </span>
          </li>
        </ul>
        <a
          href="#/"
          className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
        >
          Choose Plan
          <img
            src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
            className="ml-2"
          />
        </a>
      </div>
    </div>
  </main>
</>

  

<>
  {/* component */}
  <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <img src="/Atmosoft.png" className="mr-5 h-6 sm:h-9" alt="logo" />
          <p className="max-w-xs mt-4 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            accusantium.
          </p>
          <div className="flex mt-8 space-x-6 text-gray-600">
            <a
              className="hover:opacity-75"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only"> Facebook </span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                 
                />
              </svg>
            </a>
            <a
              className="hover:opacity-75"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only"> Instagram </span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                />
              </svg>
            </a>
            <a
              className="hover:opacity-75"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only"> Twitter </span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              className="hover:opacity-75"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only"> GitHub </span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
            <a
              className="hover:opacity-75"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only"> Dribbble </span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-medium">Company</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a className="hover:opacity-75" href="">
                {" "}
                About{" "}
              </a>
              <a className="hover:opacity-75" href="">
                {" "}
                Meet the Team{" "}
              </a>
              <a className="hover:opacity-75" href="">
                {" "}
                History{" "}
              </a>
              <a className="hover:opacity-75" href="">
                {" "}
                Careers{" "}
              </a>
            </nav>
          </div>
          <div>
           <p className="font-medium">Services</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a className="hover:opacity-75" href="">
                {" "}
                1on1 Coaching{" "}
              </a>
              <a className="hover:opacity-75" href="">
                {" "}
                Company Review{" "}
              </a>
              <a className="hover:opacity-75" href="">
                {" "}
                Accounts Review{" "}
              </a>
              <a className="hover:opacity-75" href="">
                {" "}
                HR Consulting{" "}
              </a>
              <a className="hover:opacity-75" href="">
                {" "}
                SEO Optimisation{" "}
              </a>
            </nav>
          </div>
          <div>
            <p className="font-medium">Helpful Links</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a className="hover:opacity-75" href="">
                {" "}
                Contact{" "}
              </a>
              <a className="hover:opacity-75" href="">
                {" "}
                FAQs{" "}
              </a>
              <a className="hover:opacity-75" href="">
                {" "}
                Live Chat{" "}
              </a>
            </nav>
          </div>
          <div>
            <p className="font-medium">Legal</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a className="hover:opacity-75" href="">
                {" "}
                Privacy Policy{" "}
              </a>
              <a className="hover:opacity-75" href="">
                {" "}
                Terms &amp; Conditions{" "}
              </a>
              <a className="hover:opacity-75" href="">
                {" "}
                Returns Policy{" "}
              </a>
              <a className="hover:opacity-75" href="">
                {" "}
                Accessibility{" "}
              </a>
            </nav>
          </div>
        </div>
      </div>
      <p className="mt-8 text-xs text-gray-800">© 2024 Atmosoft&trade;</p>
    </div>
  </footer>
</>

    </section>
  )
}

export default Hero
