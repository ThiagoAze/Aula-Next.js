import { Card } from "@/components/Card";
import { Menu } from "@/components/Menu";

export default function Home() {
    return(
        <>
            <Menu />
            <div style={{paddingLeft: '6%', paddingRight: '6%'}}>
                <h2>Produtos em Destaque</h2>
                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                    <Card
                        
                    />
                </div>
            </div>
        </>
    )
}