import Image from "next/image";
import { redirect } from "next/navigation";

import { getSession } from "@/models/auth/auth";
import { signUpAction } from "@/models/login/login";

import { SignUpForm } from "@/view/components/login/signup-form";

export default async function SignUp() {
  const { role } = await getSession();

  if (role === "ADMIN") {
    return redirect("/admin");
  }

  if (role === "DELIVERYMAN") {
    return redirect("/deliveries/pending");
  }

  return (
    <main className="flex justify-center pb-4 lg:justify-around lg:items-start lg:gap-8">
      <Image
        src={"/img/deliveryman2.jpg"}
        alt=""
        width={1000}
        height={1500}
        className="hidden lg:block lg:w-[500px] lg:h-[720px] lg:rounded"
      />
      <div className="space-y-8 md:space-y-12 md:px-72 lg:px-0">
        <h2 className="text-xl text-gray-light">Faça seu cadastro abaixo:</h2>
        <SignUpForm action={signUpAction} />
      </div>
    </main>
  );
}
