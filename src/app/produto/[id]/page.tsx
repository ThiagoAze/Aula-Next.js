'use client'
import { Menu } from "@/components/Menu"
import { useState } from "react"

export default function Produto(
    { params }: { params: { id: string } }
) {

    return (
        <>
            <Menu />
            <h1>Produto {params.id}</h1>
        </>
    )
}