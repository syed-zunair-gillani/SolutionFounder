import Image from 'next/image';

export default function Cardnew(props) {

  const features = props.post;
  
  return (
    <>
      {
        features ?

        features.map((feature, index) => (
          <>
            <div key={index} className="relative flex flex-col items-center px-6 space-y-4 bg-white rounded-md justify-items-center py-11 shadow-sh hover:shadow-shl">
              <img
                src="/images/F.png"
                alt="F.png"
                className="absolute top-0 left-0 rounded-md"
              />
              <img
                src={feature.icon.mediaItemUrl}
                alt={feature.title}
                className="w-[32%] h-[48%] mb-4"
              />
              <h3 className="mt-4 text-center box-title">{feature.title}</h3>
            </div>
          </>
        )) : 
          <div className="relative flex flex-col items-center px-6 space-y-4 bg-white rounded-md new_card_wrapper justify-items-center py-11 shadow-sh hover:shadow-shl">
            <figure className='bg_wrapper'>
              <Image
                src="/images/F.png"
                alt="F.png"
                // className="absolute top-0 left-0 rounded-md"
                width={50}
                height={50}
              />
            </figure>
            <Image
                src={props.icon}
                alt={props.title}
                className="w-[32%] h-[48%] mb-4"
                width={55}
                height={55}
              />
            <h3 className="text-center box-title">{props.title}</h3>
          </div>
      }
    </>
  );
}


