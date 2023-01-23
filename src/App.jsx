import { useRef } from 'react';
import Hero from './Components/Hero';
import IPhoneDisplay from './Components/iOSDisplay';

function App() {

  const scrollToRef = useRef();

  return (
    <>
      <div className="w-screen h-screen">
        <Hero scrollRef={scrollToRef} />
      </div>
      <div className="w-screen h-screen">
        <IPhoneDisplay scrollRef={scrollToRef} />
      </div>
    </>
  )
}

export default App
