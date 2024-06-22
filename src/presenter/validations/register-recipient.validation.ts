import { z } from "zod";

export type FormRegisterRecipientProps = z.infer<typeof formSchemaRegisterRecipient>;

export const formSchemaRegisterRecipient = z.object({
    clientName: z.string().trim().min(4, 'Favor informar um nome válido.'),
    clientEmail: z.string().trim().email({ message: 'Favor informar um e-mail válido.' }),
    zipcode: z.string().refine((cep) => cep.length === 9, "CEP deve ter 8 dígitos").refine((cep) => /^\d{5}-\d{3}$/.test(cep), { message: "CEP inválido" }),
    address_street: z.string().trim().min(3, 'Favor informar um endereço válido.'),
    address_number: z.string().trim().min(1, 'Favor informar um número válido.'),
    address_complement: z.string().trim(),
    neighborhood: z.string().trim().min(3, 'Favor informar um bairro válido.'),
    city: z.string().trim().min(2, 'Favor informar um cidade válida.'),
    state: z.string().trim().toUpperCase().refine(st => st.length === 2, "A UF deve conter 2 dígitos válidos."),
})

export const formSchemaOutputRegisterRecipient = z.object({
    clientName: formSchemaRegisterRecipient.shape.clientName,
    clientEmail: formSchemaRegisterRecipient.shape.clientEmail,
    zipcode: formSchemaRegisterRecipient.shape.zipcode,
    address: z.string(),
    neighborhood: formSchemaRegisterRecipient.shape.neighborhood,
    city: formSchemaRegisterRecipient.shape.city,
    state: formSchemaRegisterRecipient.shape.state
})