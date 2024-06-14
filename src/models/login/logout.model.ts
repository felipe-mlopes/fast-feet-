import { getSession } from "../auth/auth";

interface ILogoutModel {
    execute(): Promise<boolean>
}

export class LogoutModel implements ILogoutModel {
    async execute(): Promise<boolean> {
        const session = await getSession()

        if (session) {
            session.destroy()
            
            return Promise.resolve(true)
        }

        return Promise.resolve(false)
    }
}