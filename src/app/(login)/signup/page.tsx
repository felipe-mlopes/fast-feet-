import Image from "next/image";

import { signUpAction } from "@/data/actions/login";

import { SignUpForm } from "@/components/login/signup-form";

export default function SignUp() {
  return (
    <main className="block lg:flex lg:justify-around lg:items-start lg:gap-8">
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
