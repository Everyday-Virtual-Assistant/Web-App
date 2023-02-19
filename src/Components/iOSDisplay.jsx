import iPhoneSide from '../assets/iPhone_3_quarter.png'
import DoubleDownArrow from '../assets/DoubleDownArrown.jsx';

export default function IPhoneDisplay(props) {
  const {scrollRefOne, scrollRefTwo} = props;
  return (
    <div ref={scrollRefOne} className="flex flex-col w-full h-screen bg-black">
      <div className="flex h-[90%]">
        <div className="flex flex-col lg:w-3/4 justify-center lg:px-20">
          <h1 className="xs:px-10 lg:text-8xl font-brandmark lg:mt-20 text-eva-text">Introducing EVA, </h1>
          <p className="xs:px-10 lg:text-3xl font-brandmark text-eva-text">EVA is the cutting-edge AI assistant app powered by OpenAI's GPT-3 and soon GPT-4. It understands your needs, anticipates your requests, and completes tasks for you. Upgrade your life with EVA today!</p>
        </div>
        <div className="xs:hidden lg:flex w-1/2 justify-center">
          <img
            className="self-center h-3/4 mt-20"
            src={iPhoneSide}
            alt="iPhone"
          />
        </div>
      </div>
      <div
        className="flex w-full justify-center xs:mb-24"
        onClick={() => scrollRefTwo.current.scrollIntoView({behavior: 'smooth'})}
      >
        <DoubleDownArrow  />
      </div>
    </div>
  )
}