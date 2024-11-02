import { Card } from "@/components/Card";
import { Menu } from "@/components/Menu";
import { IProdutos } from "@/interfaces";
import axios from "axios";

// Tipando a resposta do axios
interface IReqProduto {
    data: Array<IProdutos>
}
export default async function Home() {

    // Requisição para guardar os produtos
    const {data}: IReqProduto = await axios.get(process.env.NEXT_PUBLIC_API_URL +'/produtos')
    // Como estava: 'http://localhost:3001/produtos'

    return(
        <>
            <Menu />
            <div style={{paddingLeft: '6%', paddingRight: '6%'}}>
                <h2>Produtos em Destaque</h2>
                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                    {
                        // Parenteses por não ter return, chavez quando tem return
                        // Mapeia os produtos existentes e já retorna esses produtos
                        data.map((produto) => (
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
                    }
                </div>
            </div>
        </>
    )
}