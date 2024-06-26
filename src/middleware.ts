import { NextRequest, NextResponse } from "next/server";

import { getSession } from "./models/auth/auth";

export async function middleware(request: NextRequest) {
    const { isLoggedIn, token } = await getSession();

    const arrayToken = token ? token?.split(".") : null
    const tokenPayload = arrayToken ? JSON.parse(atob(arrayToken[1])) : null

    const role = token ? tokenPayload.role : null

    const signUp = request.nextUrl.pathname.startsWith('/signup') && isLoggedIn
    const signIn = request.nextUrl.pathname.startsWith('/signin') && isLoggedIn
    const login = request.nextUrl.pathname.startsWith('/login') && isLoggedIn
    const deliveries = request.nextUrl.pathname.startsWith('/deliveries') && !isLoggedIn
    const dashboard = request.nextUrl.pathname.startsWith('/admin') && !isLoggedIn
    const recipient = request.nextUrl.pathname.startsWith('/admin/recipient') && !isLoggedIn
    const order = request.nextUrl.pathname.startsWith('/admin/order') && !isLoggedIn
    const userAdmin = request.nextUrl.pathname.startsWith('/deliveries') && role === 'ADMIN'
    const userDeliveryman = request.nextUrl.pathname.startsWith('/admin') && role === 'DELIVERYMAN'

    if (signUp || signIn || login) {
        if (role === 'ADMIN') {
            return NextResponse.redirect(new URL('/admin', request.url))
        } else {
            return NextResponse.redirect(new URL('/deliveries/pending', request.url))
        }
    }

    if (deliveries) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (dashboard || recipient || order) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (userAdmin) {
        return NextResponse.redirect(new URL('/admin', request.url))
    }

    if (userDeliveryman) {
        return NextResponse.redirect(new URL('/deliveries/pending', request.url))
    }
}

export const config = {
    matcher: [
        "/signin",
        "/signup",
        "/login",
        "/admin/:path*",
        "/deliveries/:path*",
    ]
}