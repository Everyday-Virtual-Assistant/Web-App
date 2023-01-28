export default function SignUp(props) {
  const { scrollRefTwo } = props;

  return (
    <>
      <div ref={scrollRefTwo} className="flex justify-center w-screen h-screen bg-layered-waves bg-no-repeat bg-cover">
        <div className="mt-40">
          <div className="flex flex-col items-center">
            <h1 className="pb-5 text-8xl font-brandmark" >Sign Up</h1>
            <h1 className="text-8xl font-brandmark" >For Early Access!</h1>
          </div>
          <div className="flex mx-auto w-1/2 mt-20 border-4 border-eva-highlight rounded-xl h-fit bg-black drop-shadow-[0_25px_25px_rgb(0,0,0,0.6)]">
            <form className="mx-10">
              <div className="mt-10">
                <label for="name" className="block text-4xl font-brandmark">Full Name</label>
                <input type="text" className="pl-2 rounded-lg py-2 w-full my-2 text-2xl font-brandmark outline-none"/>
              </div>
              <div className="mt-10">
                <label for="email" className="block text-4xl font-brandmark">Email</label>
                <input type="email" className="pl-2 rounded-lg py-2 w-full my-2 text-2xl font-brandmark outline-none" />
              </div>
              <div className="flex justify-center my-10">
                <button className="text-4xl font-brandmark w-full hover:bg-eva-bg hover:text-eva-text hover:border-eva-highlight" >Sign Up!</button>
              </div>
            </form>
          </div>
          </div>
      </div>
    </>
  )
}