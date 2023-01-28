import iPhoneSide from '../assets/iPhone_3_quarter.png'
import DoubleDownArrow from '../assets/DoubleDownArrown.jsx';

export default function IPhoneDisplay(props) {
  const {scrollRefOne, scrollRefTwo} = props;
  return (
    <>
      <div ref={scrollRefOne} className="flex w-screen h-screen bg-black">
        <div className="flex w-full justify-center items-center">
          <div className='w-3/4'>
            <h1 className="text-8xl font-brandmark">Introducing EVA, </h1>
            <p className=" text-3xl font-brandmark">The cutting-edge AI assistant app powered by OpenAI's GPT-3 and soon GPT-4. EVA is designed to make your life easier by providing you with a personal assistant that can understand your needs, anticipate your requests and complete tasks for you. With EVA, you will have access to the most advanced natural language processing technology available. EVA can understand and respond to your requests in a way that is both efficient and natural, making it feel like you are talking to a real person. EVA uses GPT-4's state-of-the-art machine learning algorithms to learn about you and your preferences, making it more efficient and personalized with every interaction. With EVA, you can focus on what matters most and leave the rest to us. Upgrade your life with EVA today!</p>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            className="self-center h-4/5"
            src={iPhoneSide}
            alt="iPhone"
          />
        </div>
        <div
          className="animate-bounce absolute top-[190%] lg:left-[48%] md:left-[45%] xs:left-[38%] hover:cursor-pointer"
          onClick={() => scrollRefTwo.current.scrollIntoView({behavior: 'smooth'})}
        >
          <DoubleDownArrow  />
        </div>
      </div>
    </>
  )
}