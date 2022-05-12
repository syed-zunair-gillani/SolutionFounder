import { useState } from "react";

export default function TabsSection() {
  const [tab, setTab] = useState(1);

  return (
    <>
      <section className="py-12 px-7">
        <div className="max-w-[1200px] mx-auto">
          <ul
            id="tabs"
            className="md:inline-flex md:space-x-4 md:space-y-0 space-x-0 space-y-4"
          >
            <li>
              <a onClick={()=>setTab(1)}>
                <div className="w-full relative flex items-center cursor-pointer justify-items-center py-11 pb-6 px-6 space-y-4 rounded-md flex-col shadow-sh hover:shadow-shl bg-white">
                  <img
                    src="/images/F.png"
                    alt="F.png"
                    className="absolute top-0 left-0 rounded-md"
                  />
                  <img
                    src="/images/setting.png"
                    alt="setting.png"
                    className="w-[32%] h-[48%] mb-4"
                  />
                  <h3 className="text-sm text-center">
                    Logistics & Transportation
                  </h3>
                </div>
              </a>
              <img src="/images/color-bar.jpg" className={`w-full h-2 ${tab === 1 ? 'block' : 'hidden'}`} />
            </li>
            <li>
              <a onClick={()=>setTab(2)}>
                <div className="w-full relative flex items-center cursor-pointer justify-items-center py-11 px-6 space-y-4 rounded-md flex-col shadow-sh hover:shadow-shl bg-white">
                  <img
                    src="/images/F.png"
                    alt="F.png"
                    className="absolute top-0 left-0 rounded-md"
                  />
                  <img
                    src="/images/setting.png"
                    alt="setting.png"
                    className="w-[32%] h-[48%] mb-4"
                  />
                  <h3 className="text-sm text-center">Project Initiation</h3>
                </div>
              </a>
              <img src="/images/color-bar.jpg" className={`w-full h-2 ${tab === 2 ? 'block' : 'hidden'}`} />
            </li>
            <li>
              <a onClick={()=>setTab(3)}>
                <div className="w-full relative flex items-center cursor-pointer justify-items-center py-11 px-6 space-y-4 rounded-md flex-col shadow-sh hover:shadow-shl bg-white">
                  <img
                    src="/images/F.png"
                    alt="F.png"
                    className="absolute top-0 left-0 rounded-md"
                  />
                  <img
                    src="/images/setting.png"
                    alt="setting.png"
                    className="w-[32%] h-[48%] mb-4"
                  />
                  <h3 className="text-sm text-center">Project Initiation</h3>
                </div>
              </a>
              <img src="/images/color-bar.jpg" className={`w-full h-2 ${tab === 3 ? 'block' : 'hidden'}`} />
            </li>
            <li>
              <a onClick={()=>setTab(4)}>
                <div className="w-full relative flex items-center cursor-pointer justify-items-center py-11 px-6 space-y-4 rounded-md flex-col shadow-sh hover:shadow-shl bg-white">
                  <img
                    src="/images/F.png"
                    alt="F.png"
                    className="absolute top-0 left-0 rounded-md"
                  />
                  <img
                    src="/images/setting.png"
                    alt="setting.png"
                    className="w-[32%] h-[48%] mb-4"
                  />
                  <h3 className="text-sm text-center">Project Initiation</h3>
                </div>
              </a>
              <img src="/images/color-bar.jpg" className={`w-full h-2 ${tab === 4 ? 'block' : 'hidden'}`} />
            </li>
            <li>
              <a onClick={()=>setTab(5)}>
                <div className="w-full relative flex items-center cursor-pointer justify-items-center py-11 px-6 space-y-4 rounded-md flex-col shadow-sh hover:shadow-shl bg-white">
                  <img
                    src="/images/F.png"
                    alt="F.png"
                    className="absolute top-0 left-0 rounded-md"
                  />
                  <img
                    src="/images/setting.png"
                    alt="setting.png"
                    className="w-[32%] h-[48%] mb-4"
                  />
                  <h3 className="text-sm text-center">Project Initiation</h3>
                </div>
              </a>
              <img src="/images/color-bar.jpg" className={`w-full h-2 ${tab === 5 ? 'block' : 'hidden'}`} />
            </li>
            <li>
              <a onClick={()=>setTab(6)}>
                <div className="w-full relative flex items-center cursor-pointer justify-items-center py-11 px-6 space-y-4 rounded-md flex-col shadow-sh hover:shadow-shl bg-white">
                  <img
                    src="/images/F.png"
                    alt="F.png"
                    className="absolute top-0 left-0 rounded-md"
                  />
                  <img
                    src="/images/setting.png"
                    alt="setting.png"
                    className="w-[32%] h-[48%] mb-4"
                  />
                  <h3 className="text-sm text-center">Project Initiation</h3>
                </div>
              </a>
              <img src="/images/color-bar.jpg" className={`w-full h-2 ${tab === 6 ? 'block' : 'hidden'}`} />
            </li>
          </ul>

          {/* <div id="first" className={`border-t border-black pt-14 ${tab === 1 ? 'block' : 'hidden'}`}>
            <div className="flex md:flex-row flex-col pt-5 md:space-y-0 space-y-2 items-center">
                  <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                    Simplifying transportation operations with real-time processes
                    Meet new technology requirements and changing customer needs
                    by streamlining processes and using analytics for real-time
                    Insights linked to your financial results.
                  </p>
                  <div className="md:w-1/5 w-full flex md:justify-end justify-center">
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
          <div id="second" className={`border-t border-black pt-14 ${tab === 2 ? 'block' : 'hidden'}`}>
              <div className="grid md:grid-cols-4 gap-5">
                  35435
              </div>
          </div> */}

          <div id="tab-contents">
            <div id="first" className={`border-t border-black ${tab === 1 ? 'block' : 'hidden'}`}>
              <div className="flex md:flex-row flex-col pt-5 md:space-y-0 space-y-2 items-center">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  Simplifying transportation operations with real-time processes
                  Meet new technology requirements and changing customer needs
                  by streamlining processes and using analytics for real-time
                  Insights linked to your financial results.
                </p>
                <div className="md:w-1/5 w-full flex md:justify-end justify-center">
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
              <div className="flex md:flex-row flex-col pt-5 md:space-y-0 space-y-2 items-center">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  2 Simplifying transportation operations with real-time
                  processes Meet new technology requirements and changing
                  customer needs by streamlining processes and using analytics
                  for real-time Insights linked to your financial results.
                </p>
                <div className="md:w-1/5 w-full flex md:justify-end justify-center">
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
              <div className="flex md:flex-row flex-col pt-5 md:space-y-0 space-y-2 items-center">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  3 Simplifying transportation operations with real-time
                  processes Meet new technology requirements and changing
                  customer needs by streamlining processes and using analytics
                  for real-time Insights linked to your financial results.
                </p>
                <div className="md:w-1/5 w-full flex md:justify-end justify-center">
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
              <div className="flex md:flex-row flex-col pt-5 md:space-y-0 space-y-2 items-center">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  4 Simplifying transportation operations with real-time
                  processes Meet new technology requirements and changing
                  customer needs by streamlining processes and using analytics
                  for real-time Insights linked to your financial results.
                </p>
                <div className="md:w-1/5 w-full flex md:justify-end justify-center">
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
              <div className="flex md:flex-row flex-col pt-5 md:space-y-0 space-y-2 items-center">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  5 Simplifying transportation operations with real-time
                  processes Meet new technology requirements and changing
                  customer needs by streamlining processes and using analytics
                  for real-time Insights linked to your financial results.
                </p>
                <div className="md:w-1/5 w-full flex md:justify-end justify-center">
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
              <div className="flex md:flex-row flex-col pt-5 md:space-y-0 space-y-2 items-center">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  6 Simplifying transportation operations with real-time
                  processes Meet new technology requirements and changing
                  customer needs by streamlining processes and using analytics
                  for real-time Insights linked to your financial results.
                </p>
                <div className="md:w-1/5 w-full flex md:justify-end justify-center">
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
