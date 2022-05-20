import Cardnew from './card-new';
import setting_icon from '../../public/images/setting.png'

export default function Card() {
  
  return (
    <>
      <section className="py-28 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          Our approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 max-w-[1200px] mx-auto mb-8">
          <Cardnew title="Project Initiation" icon={setting_icon.src} />
          <Cardnew title="Business Requirements Gathering" icon={setting_icon.src} />
          <Cardnew title="Gap Analysis" icon={setting_icon.src} />
          <Cardnew title="Solution Design" icon={setting_icon.src} />
          <Cardnew title="Project Timelines Management" icon={setting_icon.src} />
          <Cardnew title="Kick Start Development" icon={setting_icon.src} />
          <Cardnew
            title="Testing, Documentation & Training"
            icon={setting_icon.src}
          />
          <Cardnew title="Go Alive & Support" icon={setting_icon.src} />
        </div>
      </section>
    </>
  );
}
