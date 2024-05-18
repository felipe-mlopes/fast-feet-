import { ContactForm } from "./contact-form";

export function Contacts() {
  return (
    <section id="contact" className="flex flex-col items-center gap-10">
      <div>
        <h2 className="text-3xl text-center text-gray-light">Contato</h2>
        <p className="text-lg text-center text-gray-light">
          Encaminhe sua dúvida, sugestão ou reclamação
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
