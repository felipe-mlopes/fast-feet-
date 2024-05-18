"use client";

export function ContactForm() {
  return (
    <form action="" className="flex flex-col gap-6 w-full md:w-[30rem]">
      <div className="flex flex-col items-center gap-4 w-full">
        <input
          type="text"
          placeholder="Digite seu nome completo"
          className="flex items-center justify-between py-2 px-3 gap-4 w-full border rounded outline-none appearance-none bg-white text-lavender-gray"
        />
        <input
          type="email"
          placeholder="Digite seu email"
          className="flex items-center justify-between py-2 px-3 gap-4 w-full border rounded outline-none appearance-none bg-white text-lavender-gray"
        />
        <textarea
          placeholder="Descreva aqui sua dúvida, sugestão ou reclamação"
          className="flex items-center justify-between py-2 px-3 gap-4 w-full min-h-32 border rounded outline-none appearance-none resize-none bg-white text-lavender-gray "
        />
      </div>
      <button type="submit" className="p-3 max-w-20 rounded bg-orange-light">
        Enviar
      </button>
    </form>
  );
}
