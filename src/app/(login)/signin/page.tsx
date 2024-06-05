import { redirect } from "next/navigation";
import Link from "next/link";

import { getSession } from "@/models/auth/auth";

import { SignInForm } from "@/view/components/login/signin-form";

export default async function SignIn() {
  const { role } = await getSession();

  if (role === "ADMIN") {
    return redirect("/admin");
  }

  if (role === "DELIVERYMAN") {
    return redirect("/deliveries/pending");
  }

  return (
    <main className="flex flex-col gap-16 md:flex-row md:justify-between md:items-center md:pt-40 xl:justify-evenly">
      <div className="flex flex-col gap-4">
        <h2 className="flex flex-col text-5xl font-bold text-white italic">
          <span className="text-orange-light">Entregador,</span>
          <span>você é nosso maior valor</span>
        </h2>
        <p className="text-base font-normal text-lilac-smooth mr-28">
          Faça seu login para começar suas entregas.
        </p>
      </div>
      <SignInForm>
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
      </SignInForm>
    </main>
  );
}
