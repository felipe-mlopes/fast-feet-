'use server'

import { LogoutController } from "@/presenter/login/logout.controller"

export async function logoutAction(): Promise<boolean> {
    const logoutController = new LogoutController()

    return await logoutController.handle()
}