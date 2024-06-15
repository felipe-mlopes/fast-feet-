"use client";

import { useContactForm } from "@/view/ui-logic/hooks/use-contact-form";

import { Button } from "@/view/components/global/button";

export function ContactForm() {
  const { formRef, register, reset, errors, state, handleSendContactForm } =
    useContactForm();

  if (state.data) {
    alert("E-mail enviado");
    reset();
  }

  return (
    <form
      ref={formRef}
      action={handleSendContactForm}
      className="flex flex-col gap-6 w-full md:w-[30rem]"
    >
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="w-full">
          <input
            type="text"
            placeholder="Digite seu nome completo"
            className="flex items-center justify-between py-2 px-3 gap-4 w-full border rounded outline-none appearance-none bg-white text-lavender-gray"
            {...register("name")}
          />
          {errors.name && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.name?.message}
            </span>
          )}
        </div>

        <div className="w-full">
          <input
            type="email"
            placeholder="Digite seu email"
            className="flex items-center justify-between py-2 px-3 gap-4 w-full border rounded outline-none appearance-none bg-white text-lavender-gray"
            {...register("email")}
          />
          {errors.email && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.email?.message}
            </span>
          )}
        </div>

        <fieldset className="w-full">
          <div className="flex gap-8">
            <div className="space-x-2">
              <input
                type="radio"
                id="deliveryman"
                value="Entregador"
                {...register("contact", { value: "Entregador" })}
              />
              <label htmlFor="deliveryman" className="text-gray-light">
                Entregador
              </label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                id="recipient"
                value="Destinatário"
                {...register("contact", { value: "Destinatário" })}
              />
              <label htmlFor="recipient" className="text-gray-light">
                Destinatário
              </label>
            </div>
          </div>
          {errors.contact && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.contact?.message}
            </span>
          )}
        </fieldset>

        <div className="w-full">
          <textarea
            placeholder="Descreva aqui sua dúvida, sugestão ou reclamação"
            className="flex items-center justify-between py-2 px-3 gap-4 w-full min-h-32 border rounded outline-none appearance-none resize-none bg-white text-lavender-gray "
            {...register("description")}
          />
          {errors.description && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.description?.message}
            </span>
          )}
        </div>
      </div>
      <Button
        content="Enviar"
        className="p-3 max-w-20 rounded bg-orange-light"
      />
    </form>
  );
}
