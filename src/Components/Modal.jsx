export default function Modal(props) {
  const { modalTrigger } = props;
  return (
    <div className="flex transition-all absolute justify-center items-center w-full h-screen z-50 bg-opacity-50 bg-black">
      <div className="border-4 border-eva-highlight rounded-xl bg-black w-1/4">
        <div className="flex flex-col mx-10 my-10">
          <h1 className="self-center text-eva-text text-6xl font-brandmark">Thank You</h1>
          <h1 className="self-center text-eva-text text-6xl font-brandmark mb-10">for Signing Up!</h1>
          <p className="text-eva-text text-xl font-brandmark">Everyone here at EVA thanks you for signing up to be an Early Access User. We Will keep you updated via email and let you know when a version is available for download.</p>
          <button onClick={() => modalTrigger(false)} className="bg-eva-bg text-4xl w-full text-eva-text font-brandmark mt-10" >Close</button>
        </div>
      </div>
    </div>
  )
}