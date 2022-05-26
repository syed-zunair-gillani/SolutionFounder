import Link from 'next/link';
import Image from 'next/image';
import bar from '../../public/images/color-bar-light.jpg'

export default function StoryBox(props) {
  let story = props.storydata.allSuccessStories.edges;
  let sliceData = story.slice(0, 4);
  console.log("story-box", sliceData);
  return (
    <>
      {sliceData ? '' : '<div className="relative flex flex-col w-full bg-white rounded-md shadow-sh hover:shadow-shl">'}
      {props.imglink ? (
        <Image
          src={props.imglink}
          alt={props.title}
          className=""
          width={500}
          height={350}
        />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto mb-8">
            {
              sliceData.map((item, index) => (
                <div className='flex flex-col'>
                  <Image
                    src={item.node.featuredImage.node.mediaItemUrl}
                    alt={item.node.title}
                    className=""
                    width={500}
                    height={350}
                  />
                  <div className='relative p-1 shadow-sm'>
                    <div className="p-5 space-y-1">
                      <h3 className="box-title">
                        <Link href={item.node.uri}>{item.node.title}</Link>
                      </h3>
                      <p className="text-base font-medium text-[#535353]">
                        {item.node.successStoryExtra.shortInfo}
                      </p>
                    </div>
                    <div className="absolute bottom-0 right-0 flex justify-end">
                      <figure className="max-h-[18px]">
                        <Image
                          src="/images/color-bar-light.jpg"
                          alt="images/color-bar-light.jpg"
                          className="w-[55%] h-[10px]"
                          width={155}
                          height={8}
                        />
                      </figure>
                    </div>
                  </div>

                </div>
              ))
            }
          </div>
        </>
      )}
      <div className={sliceData ? "hidden" : "block"}>
        <div className="p-5 space-y-1">
          <h3 className="box-title">
            <Link href={`news-updates/${props.uri}`}>{props.title}</Link>
          </h3>
          <p className="text-base font-medium text-[#2e2929]">
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
      {sliceData ? '' : '</div>'}
    </>
  );
}
