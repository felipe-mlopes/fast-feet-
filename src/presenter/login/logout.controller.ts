import { LogoutModel } from "@/models/login/logout.model";
import { redirect } from "next/navigation";

export class LogoutController {
    private logoutModel: LogoutModel;

    constructor() {
        this.logoutModel = new LogoutModel();
    }

    async handle(): Promise<boolean> {
        const isLogout = await this.logoutModel.execute()

        if (isLogout) {
            redirect('/')
        } else {
            return Promise.resolve(false)
        }
    }
}