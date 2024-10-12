import { NextResponse } from "next/server";

// Recebendo dados da requisição
export async function GET(req: Request) {
    console.log('Olá')
    return NextResponse.json({ message: 'Olá Mundo backend' })
}