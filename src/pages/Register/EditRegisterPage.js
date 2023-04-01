import styled from "styled-components"
import { Link } from "react-router-dom"
import back from "../../assets/back.png"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Container, Header, Body, FormContainer, InputArea, Top, Nome, Endereco, Bottom, Cidade, UF, Telefone, ButtonArea} from "./styleRegisterPage"

export default function EditRegisterPage({editID}){
    const [TECL_CIDADE, setTECL_CIDADE] = useState('')
    const [TECL_NOME, setTECL_NOME] = useState('')
    const [TECL_ENDERECO, setTECL_ENDERECO] = useState('')
    const [TECL_UF, setTECL_UF] = useState('')
    const [TECL_TELEFONE, setTECL_TELEFONE] = useState('')
    const TECL_ID = editID;
    const navigate = useNavigate()
    function edit(e){
        e.preventDefault()
        const body = {TECL_NOME, TECL_CIDADE, TECL_ENDERECO, TECL_TELEFONE, TECL_UF, TECL_ID}
        console.log(body)
        const promise = axios.put("https://interno.saibweb.com.br/api/v1/teste/cliente", body)
        promise.then(res => {
        navigate("/")
        })
        promise.catch((err) => alert(err))
    }
    function nomeChange(e) {
        setTECL_NOME(e.target.value)
    }
    function enderecoChange(e) {
        setTECL_ENDERECO(e.target.value)
    }
    function cidadeChange(e) {
        setTECL_CIDADE(e.target.value)
    }
    function ufChange(e) {
        setTECL_UF(e.target.value)
    }
    function telefoneChange(e) {
        setTECL_TELEFONE(e.target.value)
    }
    return(
        <Container>
            <Header>
                <Link to="/">
                    <img src={back} />
                </Link>
                Editar Registro
            </Header>
            <Body>
                <FormContainer onSubmit={edit}>
                    <InputArea>
                        <Top>
                        <Nome>
                            Nome 
                            <input value={TECL_NOME} onChange={nomeChange}></input>
                        </Nome>
                        <Endereco>
                            Endereço
                            <input value={TECL_ENDERECO} onChange={enderecoChange}></input>
                        </Endereco>
                        </Top>
                        <Bottom>
                        <Cidade>
                            Cidade 
                            <input value={TECL_CIDADE} onChange={cidadeChange}></input>
                        </Cidade>
                        <UF>
                            UF 
                            <input value={TECL_UF} onChange={ufChange}></input>
                        </UF>
                        <Telefone>
                            Telefone 
                            <input value={TECL_TELEFONE}onChange={telefoneChange}></input>
                        </Telefone>
                        </Bottom>
                    </InputArea>
                    <ButtonArea>
                        <button type="submit">Salvar</button>
                        <button>Cancelar</button>
                    </ButtonArea>
                </FormContainer>
            </Body>
        </Container>
    )
}
