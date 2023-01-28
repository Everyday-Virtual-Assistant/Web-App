import { useRef } from 'react';
import Hero from './Components/Hero';
import IPhoneDisplay from './Components/iOSDisplay';
import SignUp from './Components/SIgnUp';

function App() {

  const scrollRefOne = useRef(null);
  const scrollRefTwo = useRef(null);

  return (
    <>
      <div className="w-screen h-screen">
        <Hero scrollRefOne={scrollRefOne} />
      </div>
      <div className="w-screen h-screen">
        <IPhoneDisplay scrollRefOne={scrollRefOne} scrollRefTwo={scrollRefTwo} />
      </div>
      <div className="w-screen h-screen ">
        <SignUp scrollRefTwo={scrollRefTwo} />
      </div>
    </>
  )
}

export default App
