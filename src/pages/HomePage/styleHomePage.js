import styled from "styled-components"

export const Container = styled.div`
    width: 100% ;
    height: auto;
    display: flex;
    flex-direction: column;
`
export const Header = styled.div`
    width: 100%;
    height: 40px;
    background-color: #ef9ea3;
    display: flex;
    align-items: center;
    border: 1px solid #898989;
`
export const HeaderInfo = styled.div`
    margin-left: 20px;
    font-size: 20px;
    color: #0f0100;
    display: flex;
    align-items: center;
    img{
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
`
export const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #ffffff;
    justify-content: center;
`
export const Table = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
`
export const TableHeader = styled.div`
    width: 100%;
    height: 25px;
    background-color: #9389bd;
    display: flex;
    font-weight: bold;
    font-size: 14px;
    color: #121212;
`
export const SmallCell = styled.div`
    width: 10%;
    height: 25px;
    display: flex;
    align-items: center;
    border: 1px solid #9389bd;
    button{
        border: none;
        width: 25px;
        height: 25px;
        background-color: #ffffff;
    }
    
    
    img{
        margin-left: 10px;
        width: 18px;
        height: 18px;
    }
`
export const BigCell = styled.div`
    width: 20%;
    height: 25px;
    display: flex;
    align-items: center;
    border: 1px solid #ffffff;
    
`
export const TableLine = styled.div`
    width: 100%;
    height: 25px;
    background-color: #ffffff;
    display: flex;
    font-size: 12px;
    color: #121212;
`