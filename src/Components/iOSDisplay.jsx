import iPhoneSide from '../assets/iPhone_3_quarter.png'

export default function IPhoneDisplay(props) {
  const {scrollRef} = props;
  return (
    <>
      <div ref={scrollRef} className="flex w-screen h-screen bg-black">
        <div className="flex w-full justify-end items-center">
          <div>
            <h2 className="text-4xl font-brandmark">Say goodbye to chaos and hello to EVA.</h2>
            <p className="font-brandmark">The AI assistant that helps you streamline your day, stay on track,</p>
            <p className="font-brandmark">and accomplish more than ever before.</p>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            className="self-center h-4/5"
            src={iPhoneSide}
            alt="iPhone"
          />
        </div>
      </div>
    </>
  )
}