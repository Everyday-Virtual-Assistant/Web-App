import EvaTransparentLogo from '../assets/EvaTransparentLogo.jsx'
import DoubleDownArrow from '../assets/DoubleDownArrown.jsx';

export default function Hero(props) {
  const { scrollRefOne } = props;
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-eva-bg to-black h-screen">
      <div className="flex justify-center items-center xs:pt-24 xs:h-full lg:w-full lg:h-full">
        <EvaTransparentLogo />
      </div>
      <div
        className="flex w-full justify-center"
        onClick={() => scrollRefOne.current.scrollIntoView({behavior: 'smooth'})}
      >
        <DoubleDownArrow  />
      </div>
    </div>
  )
}