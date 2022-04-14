import styled from 'styled-components';

export const Main = styled.div`
    padding: 1rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:start;
    min-height: 100vh;
    h1{
        margin: 2rem 1rem;
        text-align: center;
        color: #494949;
    }
`
// roxo -> : #7867bf
export const Containers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  background-color: #f5f4fc;
  width: 100%;
  max-width: 700px;
  padding: 1rem;
`
export const Contracts = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  padding: 1rem;
`
export const Contract = styled.div`
  border: 1px solid gray;
  width: 100%;
  padding: 20px;
  background-color:#FFFFFF;
  border:  #7867bf solid 2px;
  margin: 10px;
  padding: 20px;
    >div{  
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        
        h3{
            background-color: white;
            z-index: 1;
            color: #494949;
        }
    }
    button{
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
        text-decoration: underline;
    }
`
export const Buttons = styled.div`
    width: 100%;
    button{
        margin: 0 1.3rem 0 0 ;
        padding: 6px 15px;
        font-size: 1.2rem;
        cursor: pointer;
        background-color: white;
        color: #7867bf;
        font-weight: 700;
        border:  #7867bf solid 2px;
        :hover{
            background-color: #7867bf;
            color: white;
        }
    }
`