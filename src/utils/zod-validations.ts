import { z } from "zod";

export const formSchemaSignIn = z.object({
    cpf: z
        .string()
        .trim()
        .refine((val) => val.length === 14, { message: "CPF inválido" })
        .refine((val) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(val), { message: "CPF inválido" }),
    password: z
        .string()
        .trim()
        .min(6, { message: "A senha deve conter no mínimo 6 caracteres." })
})

export const formSchemaLogin = z.object({
    email: z.string().trim().email({ message: "Deve conter o formato de um e-mail válido." }),
    password: z
        .string()
        .trim()
        .min(6, { message: "A senha deve conter no mínimo 6 caracteres." })
})

export const formSchemaSignUp = z.object({
    name: z.string().trim(),
    email: z.string().trim().email({ message: "Deve conter o formato de um e-mail válido." }),
    cpf: z
        .string()
        .trim()
        .refine((val) => val.length === 14, { message: "CPF inválido" })
        .refine((val) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(val), { message: "CPF inválido" }),
    password: z
        .string()
        .trim()
        .min(6, { message: "A senha deve conter no mínimo 6 caracteres." }),
    confirmPassword: z
        .string()
        .trim()
        .min(6, { message: "A senha deve conter no mínimo 6 caracteres." })    
}).refine(({ password,  confirmPassword}) => password === confirmPassword, {
    message: "As senhas precisam ser iguais.",
    path: ["confirmPassword"]
})

export const formSchemaRegisterRecipient = z.object({
    clientName: z.string().trim().min(4, 'Favor informar um nome válido.'),
    clientEmail: z.string().trim().email({ message: 'Favor informar um e-mail válido.' }),
    zipcode: z.coerce.number().refine((cep) => String(cep).length === 8, "CEP deve ter 8 dígitos"),
    address: z.object({
        street: z.string().trim().min(3, 'Favor informar um endereço válido.'),
        number: z.string().trim().min(1, 'Favor informar um número válido.'),
        complement: z.string().trim()
    }),
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

export const formSchemaCreateOrder = z.object({
    title: z.string().trim().min(4, 'O título deve conter pelo menos 4 dígitos.'),
    email: z.string().email({ message: 'Favor informar um e-mail válido.' })
})

export const recipientSchema = z.object({
    email: z.string().email()
})

export const formSchemaUploadAttachment = z.object({
    orderId: z.string().uuid(),
    file: z.instanceof(File)
        .refine(file => String(file).length !== 0, 'Deve conter um arquivo incluído.')
        .refine(file => file.size < 1000000, 'O tamanho do arquivo deve ser menor que 1MB')
        .refine(file => checkFileType(file), 'O formato do arquivo deve ser PNG, JPG ou JPGE.')
})

function checkFileType(file: File) {
    if (file?.name) {
        const fileType = file.name.split(".").pop();
        if (fileType === "png" || fileType === "jpg" || fileType === "jpge") return true;
    }
    return false;
}