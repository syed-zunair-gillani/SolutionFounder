import Image from 'next/image'; 

export default function CTA() {
  return (
    <>
      <section className="relative bg-center bg-no-repeat bg-cover bg-cta-banner py-14">
        <figure className='cta'>
          <Image
            src="/images/f-large.png"
            alt="f-large.png"
            className="absolute top-[120px] left-0"
            width={300}
            height={260}
          />
        </figure>
        <div className="flex md:flex-row flex-col items-center max-w-[1200px] mx-auto md:px-6 px-3 py-28">
          <div className="items-center w-full space-y-6 md:w-1/2">
            <h2 className="text-3xl font-bold leading-8 text-white uppercase md:text-4xl">
              OUR PARTNERS
            </h2>
            <p className="sub-title">
              We care about your project on all levels, so we’ve made
              partnership agreements with companies that can help you to develop
              and expand your business.
            </p>
            <div className="flex flex-row items-center">
              <Image
                src="/images/ibm-white.png"
                alt="ibm-white.png"
                className="w-[16%] h-[16%]"
                width={90}
                height={42}
              />
              <figure className='mt-1 ml-28'>
                <Image
                  src="/images/micro-white.png"
                  alt="micro-white.png"
                  className="w-[24%] h-[24%] ml-20"
                  width={140}
                  height={78}
                />
              </figure>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <figure className='md:float-right'>
              <Image
                src="/images/odoo.png"
                alt="odoo.png"
                className=""
                width={310}
                height={172}
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
