import EvaTransparentLogo from '../assets/EvaTransparentLogo.svg'

export default function Hero() {
  return (
    <div class=" w-screen h-screen bg-gradient-to-b from-eva-bg to-black">
      <img src={EvaTransparentLogo} alt="Logo" class="lg:w-64" />
    </div>
  )
}