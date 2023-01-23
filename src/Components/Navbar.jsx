import EvaTransparentLogo from '../assets/EvaTransparentLogo.jsx'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-eva-bg">
      <div className="container-2xl flex items-center justify-between">
        <div className="flex items-center">
          <img src={EvaTransparentLogo} alt="Logo" className="w-32" />
        </div>
        <div className="flex items-center pr-16">
          <a href="#" className="font-brandmark text-3xl px-8 text-eva-text hover:bg-gray-200">SIGN UP</a>
        </div>
      </div>
    </nav>
  )
}