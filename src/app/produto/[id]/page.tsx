'use client'
import { Menu } from "@/components/Menu"
import { IProdutos } from "@/interfaces"
import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Col4, Col6, Input, Row, TextButton } from "./style"

export default function Produto(
    { params }: { params: { id: string } }
) {
    const [produto, setProduto] = useState<IProdutos>()
    
    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_API_URL + '/produtos',
            {
                // Exemplo: /produtos?id=123
                params: { id: params.id }
            }).then((dados) => {
                setProduto(dados.data[0])
            }).catch((error) => {
                console.log(error)
            })
    }, [params])

    return (
        <>
            <Menu />
            <div style={{paddingLeft: '6%', paddingRight: '6%', marginTop: 20, marginBottom: 40}}>
                {
                    // Se encontrar o produto, criará o produto, se não aparece a mensagem de não encontrado
                    produto ? 
                    <> 
                        <h1>Produto</h1> 
                        <Row>
                            <Col4>
                                <img style={{width: '100%'}} src={"https://raw.githubusercontent.com/profchines/Imagens/refs/heads/main/Imagens/" + produto.imagemg}/>
                            </Col4>
                            <Col6>
                                <h3>{produto.nome}</h3>
                                <p style={{textDecoration: 'line-through'}}>R$ {produto.valor}</p>
                                <p style={{color: 'red', fontWeight: 'bold'}}>R$ {produto.promo}</p>
                                <form>
                                    <Input type="number" name="quantidade" defaultValue={1} min={'1'} required />
                                    <Button type="submit"><TextButton>Adicionar ao carrinho</TextButton></Button>
                                </form>
                            </Col6>
                        </Row>
                    </> 
                    : 
                    <h2>Nehum produto encontrado :/</h2>
                }
            </div>
            
        </>
    )
}