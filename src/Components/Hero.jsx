import EvaTransparentLogo from '../assets/EvaTransparentLogo.jsx'
import DoubleDownArrow from '../assets/DoubleDownArrown.jsx';

export default function Hero() {
  return (
    <>
    <div class="flex items-center justify-center w-screen h-screen bg-gradient-to-b from-eva-bg to-black">
      <EvaTransparentLogo />
    </div>
    <div class="animate-bounce absolute top-[90%] lg:left-[47%] md:left-[45%] xs:left-[38%] hover:cursor-pointer">
      <DoubleDownArrow  />
    </div>
    </>
  )
}