import Link from "next/link";

import { LoginForm } from "@/view/components/login/login-form";

export default function Login() {
  return (
    <main className="flex flex-col gap-16 w-full pt-16 md:flex-row md:justify-between md:items-center md:pt-40 md:w-auto xl:justify-evenly">
      <div className="flex flex-col gap-4">
        <p className="text-base font-normal text-lilac-smooth mr-28">
          Faça seu login para acessar o painel administrativo.
        </p>
      </div>
      <LoginForm>
        <div className="flex justify-between items-center">
          <label htmlFor="remember" className="flex gap-3 items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="w-5 h-5 rounded bg-gray-light border border-gray-light checked:border-[6px] checked:border-orange-light checked:gray-gray-light"
            />
            <span className="text-lilac-smooth text-xs">Lembrar-me</span>
          </label>
          <Link
            href={"/forgot-password"}
            className="text-lilac-smooth text-xs md:ml-8"
          >
            Esqueci minha senha
          </Link>
        </div>
      </LoginForm>
    </main>
  );
}
