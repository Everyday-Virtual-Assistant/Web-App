import iPhoneSide from '../assets/iPhone_3_quarter.png'
import DoubleDownArrow from '../assets/DoubleDownArrown.jsx';

export default function IPhoneDisplay(props) {
  const {scrollRefOne, scrollRefTwo} = props;
  return (
    <div ref={scrollRefOne} className="flex flex-col w-full h-screen bg-black">
      <div className="flex h-[90%]">
        <div className="flex flex-col w-3/4 justify-center px-20">
          <h1 className="text-8xl font-brandmark mt-20 text-eva-text">Introducing EVA, </h1>
          <p className=" text-3xl font-brandmark text-eva-text">The cutting-edge AI assistant app powered by OpenAI's GPT-3 and soon GPT-4. EVA is designed to make your life easier by providing you with a personal assistant that can understand your needs, anticipate your requests and complete tasks for you. With EVA, you will have access to the most advanced natural language processing technology available. EVA can understand and respond to your requests in a way that is both efficient and natural, making it feel like you are talking to a real person. EVA uses OpenAI's state-of-the-art machine learning algorithms to learn about you and your preferences, making it more efficient and personalized with every interaction. With EVA, you can focus on what matters most and leave the rest to us. Upgrade your life with EVA today!</p>
        </div>
        <div className="flex w-1/2 justify-center">
          <img
            className="self-center h-3/4 mt-20"
            src={iPhoneSide}
            alt="iPhone"
          />
        </div>
      </div>
      <div
        className="flex w-full justify-center"
        onClick={() => scrollRefTwo.current.scrollIntoView({behavior: 'smooth'})}
      >
        <DoubleDownArrow  />
      </div>
    </div>
  )
}