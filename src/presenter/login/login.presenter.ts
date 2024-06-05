import { redirect } from "next/navigation";

import { LoginModel } from "@/models/login/login.model";

import { formSchemaLogin } from "@/presenter/validations/login.validation";

import { FormStateTypes } from "@/view/ui-logic/types/form-state";

export class LoginPresenter {
    private loginModel: LoginModel;

    constructor() {
        this.loginModel = new LoginModel();
    }

    async handleFormSubmit(formData: FormData): Promise<FormStateTypes> {
        const rawFormData = Object.fromEntries(formData.entries());
        const result = formSchemaLogin.safeParse(rawFormData);

        if (!result.success) {
            return { error: result.error.issues };
        }

        const { email, password } = result.data;

        const isAuthenticated = await this.loginModel.handle({
            email,
            password,
        });

        if (isAuthenticated) {
            redirect("/admin");
            // return { data: "success", error: null };
        } else {
            return { data: null, error: [{ path: [], message: "Authentication failed" }] };
        }
    }
}