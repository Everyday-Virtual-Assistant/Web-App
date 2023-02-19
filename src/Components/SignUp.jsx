import { useState, Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react'
import axios from 'axios';

export default function SignUp(props) {
  const { scrollRefTwo } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [disabledInputs, setDisabledInputs] = useState(false);

  const signUpRoute = `${import.meta.env.VITE_DB_ENDPOINT}/add-new-early-user`;
  // const signUpRoute = `http://localhost:3000/add-new-early-user`; this is for locally testing purposes

  const signUpRequest = async (event) => {
    console.log(name, email);
    event.preventDefault();
    try {
      const result = await axios.post(signUpRoute, { name, email });
      if (result.status === 200) setDisabledInputs(true);
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div ref={scrollRefTwo} className="flex justify-center items-center w-full h-screen bg-layered-waves bg-no-repeat bg-cover">
      <div>
        <div className="flex flex-col items-center">
          <h1 className="xs:text-5xl lg:pb-5 lg:text-8xl font-brandmark text-eva-text" >Sign Up</h1>
          <h1 className="xs:text-4xl lg:text-8xl font-brandmark text-eva-text" >For Early Access!</h1>
        </div>
        <div className="flex xs:w-11/12 lg:w-1/2 mx-auto w-1/2 xs:mt-10 lg:mt-20 border-4 border-eva-highlight rounded-xl h-fit bg-black drop-shadow-[0_25px_25px_rgb(0,0,0,0.6)]">
          <form className=" xs:mx-5 lg:mx-10">
            <div className="xs:mt-5 lg:mt-10">
              <label className="block text-4xl font-brandmark text-eva-text">Full Name</label>
              <input disabled={disabledInputs} onChange={(e) => setName(e.target.value)} required={true} placeholder="John Doe" type="text" className="pl-2 rounded-lg py-2 w-full my-2 text-2xl font-brandmark outline-none"/>
            </div>
            <div className="mt-10">
              <label className="block text-4xl font-brandmark text-eva-text">Email</label>
              <input disabled={disabledInputs} onChange={(e) => setEmail(e.target.value)} required={true} placeholder="example@gmail.com" type="email" className="pl-2 rounded-lg py-2 w-full my-2 text-2xl font-brandmark outline-none" />
            </div>
            <div className="flex justify-center my-10">
              <button onClick={(e) => signUpRequest(e)} disabled={disabledInputs} className=" bg-black text-4xl font-brandmark w-full hover:bg-eva-bg hover:text-eva-text hover:border-eva-highlight text-eva-text" >Sign Up!</button>
            </div>
            <p className="flex flex-wrap font-brandmark text-gray-500">When the app becomes available, you will receive an email notifying you to download the app.</p>
            <p className="flex flex-wrap font-brandmark mb-10 text-gray-500">Expected release in Q2 2023.</p>
          </form>
        </div>
      </div>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setShowModal(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center h-screen">
            <div className="text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="border-4 border-eva-highlight bg-black xs:mx-auto xs:w-11/12 md:lg:xl:w-full max-w-xl p-6 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-center text-eva-text xs:text-5xl md:lg:xl:text-6xl font-brandmark mb-10"
                  >
                    Thank You for Signing Up!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-eva-text text-xl font-brandmark">
                      Everyone here at EVA thanks you for signing up to be an Early Access User. We Will keep you updated via email and let you know when a version is available for download.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="bg-eva-bg text-4xl w-full text-eva-text font-brandmark mt-5 xs:py-7 xs:px-0"
                      onClick={() => setShowModal(false)}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}