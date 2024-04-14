import { signUpAction } from "@/data/actions/login";

import { SignUpForm } from "@/components/login/signup-form";

export default function SignUp() {
  return (
    <main className="space-y-4">
      <h2 className="text-xl text-gray-light">Faça seu cadastro abaixo:</h2>
      <SignUpForm action={signUpAction} />
    </main>
  );
}
