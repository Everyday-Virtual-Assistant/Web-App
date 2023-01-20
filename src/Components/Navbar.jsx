import EvaTransparentLogo from '../assets/EvaTransparentLogo.svg'

export default function Navbar() {
  return (
    <nav class="fixed top-0 left-0 right-0 z-10 bg-eva-bg">
      <div class="container-2xl flex items-center justify-between">
        <div class="flex items-center">
          <img src={EvaTransparentLogo} alt="Logo" class="w-32" />
        </div>
        <div class="flex items-center pr-16">
          <a href="#" class="font-brandmark text-3xl px-8 text-eva-text hover:bg-gray-200">SIGN UP</a>
        </div>
      </div>
    </nav>
  )
}