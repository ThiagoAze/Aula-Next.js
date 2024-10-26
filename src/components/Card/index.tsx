'use client'

import Image from "next/image"
import { Button, CardBody, TextButton, TextPromo, Title, TitlePreco } from "./style"

interface IProdutos{
    id: number,
    id_categoria: number,
    nome: string,
    valor: number,
    promo: number,
    imagem: string
}
export const Card = () => {
    return(
        <CardBody>
            <Image src={''} alt="Pendrive"/>
            <Title>Pendrive</Title>
            <TitlePreco>90.90</TitlePreco>
            <TextPromo>79.90</TextPromo>
            <Button>
                <TextButton>Detalhes</TextButton>
            </Button>
        </CardBody>
    )
}