'use server'

import { LogoutController } from "@/presenter/controllers/login/logout.controller"

export async function logoutAction(): Promise<boolean> {
    const logoutController = new LogoutController()

    return await logoutController.handle()
}