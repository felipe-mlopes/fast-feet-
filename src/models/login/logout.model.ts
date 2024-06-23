import { cookies } from "next/headers";

import { getSession } from "../auth/auth";

interface ILogoutModel {
    execute(): Promise<boolean>
}

export class LogoutModel implements ILogoutModel {
    async execute(): Promise<boolean> {
        const session = await getSession()
        const cookieStore = cookies()

        if (session) {
            session.destroy()
            cookieStore.delete('city')

            return Promise.resolve(true)
        }

        return Promise.resolve(false)
    }
}