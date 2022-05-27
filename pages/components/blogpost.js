import StoryBox from './story-box';

export default function BlogPost({ posts }) {
  return (
    <>
      {posts &&
        posts.map((data, index) => (
          <div key={index}>
            <div className="relative flex flex-col w-full bg-white rounded-md shadow-sh hover:shadow-shl">
              <Image
                src={data.imglink}
                alt={data.title}
                className=""
                width={500}
                height={350}
              />

              <div className="p-5 space-y-1">
                <h3 className="box-title">
                  <Link href={`news-updates/${data.uri}`}>Title</Link>
                </h3>
                <p className="text-base font-medium text-[#2e2929]">
                  Descriasdf
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
          </div>
        ))}
    </>
  );
}
