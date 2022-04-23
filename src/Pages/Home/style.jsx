import styled from "@emotion/styled";
import { Dialog, Modal, Skeleton } from "@mui/material";
import { CustomModal } from "../../components/Modal/style";

export const Nav = styled.nav`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 73px;
    border-bottom: solid 1px var(--grey-3);
    background-color: var(--grey-4);

    img{
        margin-left: 13px;
        width: 105px;
        height: 14px;
    }

    button{
        height: 32px;
        width: 55px;
        margin-right: 10px;
        background-color: var(--grey-3);
    }
    button:hover{
        background-color: var(--grey-2);
    }

    @media (min-width: 728px){
        img{
            margin-left: 20%;
        }
        button{
            margin-right: 20%;
        }
    }

`

export const Header = styled.header`

    width: 100%;
    height: 131px;
    display: flex;
    border-bottom: solid 1px var(--grey-3);
    padding-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
        font-weight: 700;
        color: var(--grey-0);
        font-size: 18px;
        margin-bottom: 10px;
    }

    p{
        font-size: 12px;
        font-weight: 600;
        color: var(--grey-1);
    }

    @media (min-width: 728px){
        height: 118px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 0;

        h1{
            margin-left: 20%;
            margin-bottom: 0;
        }

        p{
            margin-right: 20%;
        }
    }
`

export const Content = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-right: 20%;
    padding-left: 20%;
`

export const AddTech = styled.div`

    width: 294px;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;
    margin-bottom: 21px;

    h1{
        font-size: 16px;
        font-weight: 600;
        color: var(--grey-0);
    }

    button{
        height: 32px;
        font-size: 26px;
        font-weight: 500;
        background-color: var(--grey-3);
        width: 32px;
        padding: 0;
        border: none;
        color: var(--grey-0);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 5px;
    }

    button:hover{
        background-color: var(--grey-2);
    }

    @media (min-width: 728px){
        width: 100%;
        margin-left: 20%;
        margin-right: 20%;
        margin-top: 22px;
    }
`

export const Tecnologias = styled.ul`

    width: 296px;
    background-color: var(--grey-3);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding-top: 6px;
    padding-bottom: 22px;
    align-items: center;
    overflow-y: auto;

    @media (min-width: 728px){
        width: 100%;
        max-height: 416px;
    }
`

export const EmptyTech = styled.li`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 279px;
    height: 150px;
    margin-bottom: 20px;

    h1{
        font-size: 16px;
        text-align: center;
        color: var(--grey-0);
        margin-top: 30px;
    }
    span{
        font-size: 14px;
        margin-top: 20px;
        color: var(--grey-1);
    }

    button{
        height: 32px;
        font-size: 26px;
        font-weight: 500;
        background-color: var(--grey-4);
        width: 32px;
        padding: 0;
        margin-top: 5px;
        border: none;
        color: var(--grey-0);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 5px;
    }

    button:hover{
        background-color: var(--grey-2);
    }

    @media (min-width: 728px){
        margin-top: 20px;
        width: 95%;
        h1{
            font-size: 22px;
        }
    }
`


