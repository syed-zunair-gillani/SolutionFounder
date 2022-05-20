import Link from 'next/link';
import Image from 'next/image';

export default function StoryBox(props) {
  return (
    <>
      <div className="relative flex flex-col w-full bg-white rounded-md shadow-sh hover:shadow-shl">
        {props.imglink ? (
          <Image
            src={props.imglink}
            alt={props.title}
            className=""
            width={500}
            height={350}
          />
        ) : (
          <Image
            src={props.icon}
            alt={props.title}
            className=""
            width={500}
            height={350}
          />
        )}
        <div className="p-5 space-y-1">
          <h3 className="box-title">
            <Link href={`news-updates/${props.uri}`}>{props.title}</Link>
          </h3>
          <p className="text-base font-medium text-[#535353]">
            {props.description}
          </p>
        </div>
        <div className="absolute bottom-0 right-0 flex justify-end">
          <figure className="max-h-[18px]">
            <Image
              src="/images/color-bar-light.jpg"
              alt="images/color-bar-light.jpg"
              className="w-[55%] h-[10px]"
              width={155}
              height={10}
            />
          </figure>
        </div>
      </div>
    </>
  );
}
