import { useState } from "react";
import Image from 'next/image'

export default function TabsSection() {
  const [tab, setTab] = useState(1);

  return (
    <>
      <section className="py-12 px-7">
        <div className="max-w-[1200px] mx-auto">
          <ul
            id="tabs"
            className="justify-between space-x-0 space-y-4 md:inline-flex md:space-x-4 md:space-y-0"
          >
            <li className="min-w-[187px] m-0">
              <a onClick={()=>setTab(1)}>
                <div className="relative flex flex-col items-center w-full px-6 space-y-4 bg-white rounded-md cursor-pointer justify-items-center py-11 shadow-sh hover:shadow-shl">
                  <figure className="absolute top-0 left-0 rounded-md">
                    <Image
                      src="/images/F.png"
                      alt="F.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/images/setting.png"
                      alt="setting.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <h3 className="text-sm text-center">Project Initiation</h3>
                </div>
              </a>
             <figure className={`w-full -mt-2 h-2 ${tab === 1 ? 'block' : 'hidden'}`}>
                <Image src="/images/color-bar.jpg" alt="bottom line" width={185} height={7}/>
             </figure>
            </li>
            <li className="min-w-[187px] m-0">
              <a onClick={()=>setTab(2)}>
                <div className="relative flex flex-col items-center w-full px-6 space-y-4 bg-white rounded-md cursor-pointer justify-items-center py-11 shadow-sh hover:shadow-shl">
                  <figure className="absolute top-0 left-0 rounded-md">
                    <Image
                      src="/images/F.png"
                      alt="F.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/images/setting.png"
                      alt="setting.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <h3 className="text-sm text-center">Project Initiation</h3>
                </div>
              </a>
             <figure className={`w-full -mt-2 h-2 ${tab === 2 ? 'block' : 'hidden'}`}>
                <Image src="/images/color-bar.jpg" alt="bottom line" width={185} height={7}/>
             </figure>
            </li>
            <li className="min-w-[187px] m-0">
              <a onClick={()=>setTab(3)}>
                <div className="relative flex flex-col items-center w-full px-6 space-y-4 bg-white rounded-md cursor-pointer justify-items-center py-11 shadow-sh hover:shadow-shl">
                  <figure className="absolute top-0 left-0 rounded-md">
                    <Image
                      src="/images/F.png"
                      alt="F.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/images/setting.png"
                      alt="setting.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <h3 className="text-sm text-center">Project Initiation</h3>
                </div>
              </a>
             <figure className={`w-full -mt-2 h-2 ${tab === 3 ? 'block' : 'hidden'}`}>
                <Image src="/images/color-bar.jpg" alt="bottom line" width={185} height={7}/>
             </figure>
            </li>
            <li className="min-w-[187px] m-0">
              <a onClick={()=>setTab(4)}>
                <div className="relative flex flex-col items-center w-full px-6 space-y-4 bg-white rounded-md cursor-pointer justify-items-center py-11 shadow-sh hover:shadow-shl">
                  <figure className="absolute top-0 left-0 rounded-md">
                    <Image
                      src="/images/F.png"
                      alt="F.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/images/setting.png"
                      alt="setting.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <h3 className="text-sm text-center">Project Initiation</h3>
                </div>
              </a>
             <figure className={`w-full -mt-2 h-2 ${tab === 4 ? 'block' : 'hidden'}`}>
                <Image src="/images/color-bar.jpg" alt="bottom line" width={185} height={7}/>
             </figure>
            </li>
            <li className="min-w-[187px] m-0">
              <a onClick={()=>setTab(5)}>
                <div className="relative flex flex-col items-center w-full px-6 space-y-4 bg-white rounded-md cursor-pointer justify-items-center py-11 shadow-sh hover:shadow-shl">
                  <figure className="absolute top-0 left-0 rounded-md">
                    <Image
                      src="/images/F.png"
                      alt="F.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/images/setting.png"
                      alt="setting.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <h3 className="text-sm text-center">Project Initiation</h3>
                </div>
              </a>
             <figure className={`w-full -mt-2 h-2 ${tab === 5 ? 'block' : 'hidden'}`}>
                <Image src="/images/color-bar.jpg" alt="bottom line" width={185} height={7}/>
             </figure>
            </li>
            <li className="min-w-[187px] m-0">
              <a onClick={()=>setTab(6)}>
                <div className="relative flex flex-col items-center w-full px-6 space-y-4 bg-white rounded-md cursor-pointer justify-items-center py-11 shadow-sh hover:shadow-shl">
                  <figure className="absolute top-0 left-0 rounded-md">
                    <Image
                      src="/images/F.png"
                      alt="F.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/images/setting.png"
                      alt="setting.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <h3 className="text-sm text-center">Project Initiation</h3>
                </div>
              </a>
             <figure className={`w-full -mt-2 h-2 ${tab === 6 ? 'block' : 'hidden'}`}>
                <Image src="/images/color-bar.jpg" alt="bottom line" width={185} height={7}/>
             </figure>
            </li>


          </ul>

          <div id="tab-contents" className="mt-[10px]">
            <div id="first" className={`border-t border-black ${tab === 1 ? 'block' : 'hidden'}`}>
              <div className="flex flex-col items-center pt-5 space-y-2 md:flex-row md:space-y-0">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  Simplifying transportation operations with real-time processes
                  Meet new technology requirements and changing customer needs
                  by streamlining processes and using analytics for real-time
                  Insights linked to your financial results.
                </p>
                <div className="flex justify-center w-full md:w-1/5 md:justify-end">
                  <button className="main-button hover:bg-[#302E2E] items-center ">
                    Explore More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={`border-t border-black ${tab === 2 ? 'block' : 'hidden'}`}>
              <div className="flex flex-col items-center pt-5 space-y-2 md:flex-row md:space-y-0">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  2 Simplifying transportation operations with real-time
                  processes Meet new technology requirements and changing
                  customer needs by streamlining processes and using analytics
                  for real-time Insights linked to your financial results.
                </p>
                <div className="flex justify-center w-full md:w-1/5 md:justify-end">
                  <button className="main-button hover:bg-[#302E2E] items-center ">
                    Explore More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div id="third" className={`border-t border-black ${tab === 3 ? 'block' : 'hidden'}`}>
              <div className="flex flex-col items-center pt-5 space-y-2 md:flex-row md:space-y-0">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  3 Simplifying transportation operations with real-time
                  processes Meet new technology requirements and changing
                  customer needs by streamlining processes and using analytics
                  for real-time Insights linked to your financial results.
                </p>
                <div className="flex justify-center w-full md:w-1/5 md:justify-end">
                  <button className="main-button hover:bg-[#302E2E] items-center ">
                    Explore More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div id="fourth" className={`border-t border-black ${tab === 4 ? 'block' : 'hidden'}`}>
              <div className="flex flex-col items-center pt-5 space-y-2 md:flex-row md:space-y-0">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  4 Simplifying transportation operations with real-time
                  processes Meet new technology requirements and changing
                  customer needs by streamlining processes and using analytics
                  for real-time Insights linked to your financial results.
                </p>
                <div className="flex justify-center w-full md:w-1/5 md:justify-end">
                  <button className="main-button hover:bg-[#302E2E] items-center ">
                    Explore More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div id="fifth" className={`border-t border-black ${tab === 5 ? 'block' : 'hidden'}`}>
              <div className="flex flex-col items-center pt-5 space-y-2 md:flex-row md:space-y-0">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  5 Simplifying transportation operations with real-time
                  processes Meet new technology requirements and changing
                  customer needs by streamlining processes and using analytics
                  for real-time Insights linked to your financial results.
                </p>
                <div className="flex justify-center w-full md:w-1/5 md:justify-end">
                  <button className="main-button hover:bg-[#302E2E] items-center ">
                    Explore More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div id="sixth" className={`border-t border-black ${tab === 6 ? 'block' : 'hidden'}`}>
              <div className="flex flex-col items-center pt-5 space-y-2 md:flex-row md:space-y-0">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  6 Simplifying transportation operations with real-time
                  processes Meet new technology requirements and changing
                  customer needs by streamlining processes and using analytics
                  for real-time Insights linked to your financial results.
                </p>
                <div className="flex justify-center w-full md:w-1/5 md:justify-end">
                  <button className="main-button hover:bg-[#302E2E] items-center ">
                    Explore More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
