import Image from 'next/image';

export default function ImageBox(props) {
  
  return (
    <>
      <div className="flex flex-col items-center w-full px-6 space-y-4 md:w-2/6 justify-items-center py-11">
        <Image
          src={props.icon}
          alt={props.title}
          className="w-[15%]"
          width={70}
          height={65}
        />
        <h3 className="text-[#302E2E] text-xl font-medium">{props.title}</h3>
        <p className="text-base font-medium text-center text-[#535353]">
          {props.description}
        </p>
      </div>
    </>
  );
}
