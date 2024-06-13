import styled from "styled-components";

const Pantalla=styled.div`
    width:100%;
    font-size:22px;
    line-height: 20px;
    text-align:right;
    background-color: #252525;
    color:#fff;
    letter-spacing:1px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2px 10px 2px 2px;
    border-radius: 5px;
    grid-column:1/5;
    overflow: hidden;
    gap: 10px;
    min-height: 60px;
    transition: all 1s;

    &.ancho{
      width: 20px;
    }


    .pantalla1{
        width:100%;
        min-height: 20px;
    }
    .pantalla2{
        width:100%;
        font-size:16px;
        min-height: 20px;
    }
`;

const Boton=styled.button`
    padding: 2px;
    cursor: pointer;
    font-size:16px;
    border-radius: 5px;
    background-color: #fff;

    &.operacion{
        line-height: 20px;
        background-color: #9196d1;
        color:#fff;
        font-size: 20px;
        
        &.multiplicar{
            position: relative;
            font-size: 40px;
            line-height: 0px;
            padding-top: 15px;
            }
        }
    }

    &.borrar{
        letter-spacing:1px ;
        grid-column: 1/3;
        color:#fff;
        background-color: #ff5353;
    }
    
    &.igual{
        background-color: #008000;
        font-size: 19px;
        color:#fff;
        grid-column:4/5;
        grid-row:5/7;
    }

    &.eliminar{
        color:#fff;
        background-color: #7f848b;
    }
`;

export {Pantalla,Boton};