import { useState } from 'react';
export default function SignUp(props) {
  const { scrollRefTwo } = props;

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const signUpRequest = (event) => {
    event.preventDefault();
    alert('Sign Up is currently disabled. Please try again later. We apologize for any inconvenience this may have caused you.')
  }

  return (
    <>
      <div ref={scrollRefTwo} className="flex justify-center w-full h-screen bg-layered-waves bg-no-repeat bg-cover">
        <div className="mt-40">
          <div className="flex flex-col items-center">
            <h1 className="pb-5 text-8xl font-brandmark text-eva-text" >Sign Up</h1>
            <h1 className="text-8xl font-brandmark text-eva-text" >For Early Access!</h1>
          </div>
          <div className="flex mx-auto w-1/2 mt-20 border-4 border-eva-highlight rounded-xl h-fit bg-black drop-shadow-[0_25px_25px_rgb(0,0,0,0.6)]">
            <form className="mx-10">
              <div className="mt-10">
                <label for="name" className="block text-4xl font-brandmark text-eva-text">Full Name</label>
                <input onChange={(e) => setName(e.target.value)} required={true} placeholder="John Doe" type="text" className="pl-2 rounded-lg py-2 w-full my-2 text-2xl font-brandmark outline-none"/>
              </div>
              <div className="mt-10">
                <label for="email" className="block text-4xl font-brandmark text-eva-text">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} required={true} placeholder="example@gmail.com" type="email" className="pl-2 rounded-lg py-2 w-full my-2 text-2xl font-brandmark outline-none" />
              </div>
              <div className="flex justify-center my-10">
                <button onClick={(e) => signUpRequest(e)} className=" bg-black text-4xl font-brandmark w-full hover:bg-eva-bg hover:text-eva-text hover:border-eva-highlight text-eva-text" >Sign Up!</button>
              </div>
              <p className="flex flex-wrap font-brandmark text-gray-500">When the app becomes available, you will receive an email notifying you to download the app.</p>
              <p className="flex flex-wrap font-brandmark mb-10 text-gray-500">Expected release in Q2 2023.</p>
            </form>
          </div>
          </div>
      </div>
    </>
  )
}