'use client'
import { Card } from "@/components/Card";
import { Menu } from "@/components/Menu"
import { IProdutos } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react"

interface ICategoria {
    id: string;
    nome: string;
}
export default function Categorias(
    { params }: { params: { id: string } }
) {
    // Armazena os dados dos produtos tipados
    const [produtos, setProdutos] = useState<Array<IProdutos>>([])
    const [categorias, setCategorias] = useState<Array<ICategoria>>()

    useEffect(() => {
        // Busca produtos pelo ID da categoria da URL
        axios.get(process.env.NEXT_PUBLIC_API_URL + "/produtos",
        {
            params: {id_categoria: params.id}
        })
            .then((res) => {
                // Armazena no array produtos a resposta
                console.log(res)
                setProdutos(res.data)
            })
            .catch((err) => {
                console.error("Erro ao buscar produtos:", err)
            })

        // Busca a categoria específica pelo ID
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categorias/${params.id}`)
            .then((res) => {
                setCategorias(res.data); // Armazena a categoria única em `categoria`
            })
            .catch((err) => {
                console.error("Erro ao buscar categoria:", err);
            });
    }, [params.id])

    return (
        <>
            <Menu />
            <h1>Categoria - {categorias ? categorias.nome : "Carregando..."}</h1>
            
            
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {/* Mapeia cada produto e renderiza o card para cada um se existir */}
                {produtos.length > 0 ? (
                    produtos.map((produto) => (
                        <Card
                            key={produto.id}
                            id={produto.id}
                            id_categoria={produto.id_categoria}
                            imagemg={produto.imagemg}
                            nome={produto.nome}
                            valor={produto.valor}
                            promo={produto.promo}
                        />
                    ))
                ) : (
                    // Se não existir é adicionado uma mensagem
                    <p>Nenhum produto encontrado para esta categoria.</p>
                )}
            </div>

        </>
    )
}
