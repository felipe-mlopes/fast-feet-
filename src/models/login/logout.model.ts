import { getSession } from "../auth/auth";

interface ILoginModel {
    execute(): Promise<boolean>
}

export class LoginModel implements ILoginModel {
    async execute(): Promise<boolean> {
        const session = await getSession()

        if (session) {
            session.destroy()
            
            return Promise.resolve(true)
        }

        return Promise.resolve(false)
    }
}