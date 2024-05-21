import Link from "next/link";

export function Banner() {
  return (
    <section
      id="banner"
      className="py-8 h-[20rem] border-b-[1px] md:border-b-0 border-gray-light bg-[url('/img/package.png')] bg-opacity-85"
    >
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col items-center gap-3 text-gray-light">
          <h3 className="text-3xl">Faça aqui o seu cadastro grátis</h3>
          <p className="text-lg">
            Se torne um dos nossos{" "}
            <span className="underline decoration-orange-light decoration-2">
              entregadores parceiros
            </span>
          </p>
        </div>
        <Link
          href={"/signup"}
          className="p-4 rounded bg-gray-light font-bold text-lavender-gray hover:bg-orange-light hover:transition-all hover:duration-150"
        >
          Cadastre-se
        </Link>
      </div>
    </section>
  );
}
