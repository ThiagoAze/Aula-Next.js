'use client'
import { useEffect, useState } from "react"
import { LeftContainer, NavBarContainer, NavBarLink, NavbarInnerContainer, NavbarLinkContainer, NavbarLinkExtended, RightContainer } from "./style"
import axios, { AxiosError } from "axios"
import Image from "next/image"

interface ICategoria {
    id: number,
    nome: string
}
export const Menu = () => {

    // Quando é Array [] utiliza o useState com array vazio para não dar erro
    const [categorias, setCategorias] = useState<Array<ICategoria>>([]) // Prepara para inserir na tela

    // Busca pelas categorias ao iniciar a página
    useEffect(() => {
        axios.get('http://localhost:3001/categorias')
        .then((res) => {
            setCategorias(res.data) // Resposta do back-end
        })
        .catch((err: AxiosError) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <NavBarContainer>
                <NavbarInnerContainer>
                    <LeftContainer>
                        <NavbarLinkContainer>
                            <NavbarLinkExtended href={"/"} style={{ color: '#fff'}}>
                                Americanos
                            </NavbarLinkExtended>

                            <NavBarLink href={"/"} >
                                Home
                            </NavBarLink>

                            
                            {
                                categorias.map((categoria) => (                                    
                                    <NavBarLink key={categoria.id} href={`/categoria/${categoria.id}`}>
                                        {categoria.nome}
                                    </NavBarLink>
                                ))
                            }
                        </NavbarLinkContainer>
                    </LeftContainer>
                    <RightContainer>
                        <NavbarLinkExtended href={'/carrinho'}>
                            Carrinho
                        </NavbarLinkExtended>
                    </RightContainer>
                </NavbarInnerContainer>
            </NavBarContainer>
        </>
    )
}