import { getSession } from "../auth/auth";

interface ILoginModel {
    handle(): Promise<boolean>
}

export class LoginModel implements ILoginModel {
    async handle(): Promise<boolean> {
        const session = await getSession()

        if (session) {
            session.destroy()
            
            return Promise.resolve(true)
        }

        return Promise.resolve(false)
    }
}