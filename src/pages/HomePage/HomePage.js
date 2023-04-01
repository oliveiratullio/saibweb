import { Container, Header, HeaderInfo, BodyContainer, Table, TableHeader, SmallCell, BigCell, TableLine } from './styleHomePage'
import back from '../../assets/back.png'
import axios from "axios"
import { useEffect, useState } from "react"
import plus from "../../assets/plus.png"
import minus from "../../assets/minus.png"
import edit from "../../assets/edit.png"
import { Link, useNavigate } from 'react-router-dom'


export default function HomePage({editID, setEditID}){
    const [clientList, setClientList] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        const promise = axios.get("https://interno.saibweb.com.br/api/v1/teste/clientes")
        promise.then((res) => {
            setClientList(res.data.data)
            console.log(clientList)
        })
        promise.catch((err) => console.log(err.response.data))
    }, [])
    if(clientList.length === 0){
        return(
            <div>Carregando...</div>
        )
    }
    function excluir(id){
        console.log(id)
        const promise = axios.delete(`https://interno.saibweb.com.br/api/v1/teste/cliente/${id}`)
        promise.then((res) => (window.location.reload))
        promise.catch((err) => console.log(err))   
    }
    function editar(id){
        setEditID(id)
        console.log()
        navigate("/edit-register")
    }
    return(
        <Container>
            <Header>
                <HeaderInfo>
                    <img src={back} /> Teste ReactJS - SaibWeb
                </HeaderInfo>
            </Header>
            <BodyContainer>
               <Table>
                    <TableHeader>
                        
                        <SmallCell>
                             <Link to='new-register'>
                                 <img src={plus} />
                            </Link>
                        </SmallCell>
                        <BigCell>Nome</BigCell>
                        <BigCell>Endereço</BigCell>
                        <BigCell>Cidade</BigCell>
                        <SmallCell>UF</SmallCell>
                        <BigCell>Telefone</BigCell>
                    </TableHeader>
                
                     {clientList.map((c) => ( 
                        <TableLine key={c.TECL_ID}>
                        <SmallCell>
                            <button onClick={() => excluir(c.TECL_ID)}><img src={minus}/></button>
                            <button onClick={() => editar(c.TECL_ID)}><img src={edit} /></button>
                        </SmallCell>
                        <BigCell>{c.TECL_NOME}</BigCell>
                        <BigCell>{c.TECL_ENDERECO}</BigCell>
                        <BigCell>{c.TECL_CIDADE}</BigCell>
                        <SmallCell>{c.TECL_UF}</SmallCell>
                        <BigCell>{c.TECL_TELEFONE}</BigCell>
                    </TableLine>
                     ))}
                    
               </Table>
            </BodyContainer>
        </Container>
    )
}


