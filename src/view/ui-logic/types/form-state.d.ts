import { ZodIssue } from "zod"

type ValidationError = Partial<Pick<ZodIssue, 'path' | 'message'>>

export interface FormStateTypes {
    data?: string | null
    error?: ValidationError[] | null
}