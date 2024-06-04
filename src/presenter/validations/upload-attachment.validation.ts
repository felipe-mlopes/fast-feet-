import { z } from "zod";

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