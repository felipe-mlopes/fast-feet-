import { redirect } from "next/navigation";

import { SignUpModel } from "@/models/login/sign-up.model";

import { formSchemaSignUp } from "@/presenter/validations/sign-up.validation";

import { FormStateTypes } from "@/view/ui-logic/types/form-state";

export class SignUpPresenter {
    private signUpModel: SignUpModel;

    constructor() {
        this.signUpModel = new SignUpModel();
    }

    async handleFormSubmit(formData: FormData): Promise<FormStateTypes> {
        const rawFormData = Object.fromEntries(formData.entries());
        const result = formSchemaSignUp.safeParse(rawFormData)

        if (!result.success) {
            return { error: result.error.issues };
        }

        const { name, email, cpf, password } = result.data;

        const isRegistered = await this.signUpModel.handle({
            name,
            email,
            cpf,
            password
        })

        if (isRegistered) {
            redirect("/signin")
        } else {
            return { data: null, error: [{ path: [], message: "Register failed" }] };
        }
    }

}