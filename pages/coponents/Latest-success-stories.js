import post1 from '../../public/images/Nawara-Transportation-dp.png'
import post2 from '../../public/images/HamatReady.png'
import post3 from '../../public/images/Quality-Education-Holdings-dp.png'
import post4 from '../../public/images/Unifood-dp.png'
import StoryBox from './story-box'

export default function LatestSuccessStories() {
    return (
        <>
            <section className="py-28 px-7">
                <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
                    OUR SUCCESS STORIES
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto mb-8">
                    <StoryBox
                        icon={post1}
                        title="Nawara Transportation"
                        description="Nawara is one of leading logistics company in Saudi Arabia with head..."
                    />
                    <StoryBox
                        icon={post2}
                        title="Hamat Readymix"
                        description="Hamat Readymix is Manufacturing company who manufacture different type of Readymix based on customer demand"
                    />
                    <StoryBox
                        icon={post3}
                        title="Quality Education Holdings"
                        description="QEC was founded in the year 2001..."
                    />
                    <StoryBox
                        icon={post4}
                        title="Unifood"
                        description="Unifood (National Foodstuff Manufacturing Company Limited)..."
                    />
                </div>
            </section>
        </>
    )
}
