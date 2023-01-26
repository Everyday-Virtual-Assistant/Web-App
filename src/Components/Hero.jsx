import EvaTransparentLogo from '../assets/EvaTransparentLogo.jsx'
import DoubleDownArrow from '../assets/DoubleDownArrown.jsx';

export default function Hero(props) {
  const { scrollRefOne } = props;
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-b from-eva-bg to-black">
        <EvaTransparentLogo />
      </div>
      <div
        className="animate-bounce absolute top-[90%] lg:left-[48%] md:left-[45%] xs:left-[38%] hover:cursor-pointer"
        onClick={() => scrollRefOne.current.scrollIntoView({behavior: 'smooth'})}
      >
        <DoubleDownArrow  />
      </div>
    </>
  )
}