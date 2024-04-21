import { ZodIssue } from "zod"

export type ValidationError = Partial<Pick<ZodIssue, 'path' | 'message'>>

export interface FormStateTypes {
    data?: string | null
    error?: ValidationError[] | null
}

export enum Color {
    Default = "#FFC042",
    Ok = "#4C33CC",
    Error = "#EF4444",
  }