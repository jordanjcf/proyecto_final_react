import { useRef, useState } from "react";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import { HiEye, HiEyeOff } from "react-icons/hi";

export function Login() {
  const emailInputRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-[url('https://images.unsplash.com/photo-1604079628040-94301bb21b91?auto=format&fit=crop&q=80')] bg-cover bg-center relative overflow-hidden"
    >

      <div className="absolute inset-0 bg-gradient-to-b from-[#000a1a]/90 via-[#00152e]/80 to-[#000a1a]/90"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.08)_0%,_transparent_70%)] animate-pulse"></div>

      <div className="relative w-full max-w-md bg-[#0a1124]/90 border border-cyan-500/50 backdrop-blur-md rounded-2xl shadow-[0_0_25px_#00ffff80] p-8 space-y-8">
        <h2 className="text-3xl font-extrabold text-center text-cyan-400 drop-shadow-[0_0_8px_#00ffff]">
          Inicia sesión
        </h2>
        <p className="text-center text-gray-300 text-sm tracking-wide">
          Inicia sesión en tu cuenta o crea una nueva para impulsar tu empresa 🚀
        </p>

        <div>
          <Label htmlFor="email" className="mb-2 block">
            <span className="text-cyan-300 text-lg font-semibold tracking-wide">
              Tu Email
            </span>
          </Label>
          <TextInput
            id="email"
            ref={emailInputRef}
            type="email"
            placeholder="ejemplo@empresa.com"
            required
            className="text-gray-100 border-cyan-500/50 bg-[#0e1b35]/60 placeholder-gray-500 focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div>
          <Label htmlFor="password" className="mb-2 block">
            <span className="text-cyan-300 text-lg font-semibold tracking-wide">
              Tu Contraseña
            </span>
          </Label>
          <div className="relative">
            <TextInput
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              required
              className="text-gray-100 border-cyan-500/50 bg-[#0e1b35]/60 placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 pr-10"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute inset-y-0 right-3 flex items-center text-cyan-400 hover:text-white transition-all duration-300"
              tabIndex={-1}
            >
              {showPassword ? (
                <HiEyeOff className="w-5 h-5" />
              ) : (
                <HiEye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" className="border-cyan-500 text-cyan-500" />
            <Label htmlFor="remember">
              <span className="text-cyan-300 hover:text-cyan-200 cursor-pointer">
                Recordar
              </span>
            </Label>
          </div>
          <a href="#" className="text-cyan-400 hover:text-white transition-all duration-300">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <Button
          color="blue"
          className="w-full text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 shadow-[0_0_20px_#00ffff80] border-none transition-all duration-300"
        >
          Ingresar al Sistema
        </Button>

        <div className="text-center text-sm font-medium text-gray-400">
          ¿No tienes cuenta?{" "}
          <a
            href="#"
            className="text-cyan-400 hover:text-white transition-all duration-300 font-semibold"
          >
            Crear una ahora
          </a>
        </div>
      </div>
    </div>
  );
}
