import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'

export const AiEye = styled(AiFillEye)`
    color: var(--grey-1);
    position: relative;
    top: -28px;
    left: 110px;
    cursor: pointer;

    @media (min-width: 728px){
        top: -38px;
        left: 140px;
    }
`
export const AiEyeInvisible = styled(AiFillEyeInvisible)`
     color: var(--grey-1);
    position: relative;
    top: -28px;
    left: 110px;
    cursor: pointer;

    @media (min-width: 728px){
        top: -38px;
        left: 140px;
    }
`

export const BoxLogo = styled(Box)`
    width: 100%;
    margin-top: 81px;
    display: flex;
    justify-content: center;
    margin-bottom: 19px;

    img{
        width: 101px;
        height: 14px;
    }

    @media (min-width: 728px){
        margin-bottom: 35px;

        img{
            width: 144px;
            height: 19px;
        }
    }
`
export const Form = styled.form`
    width: 296px;
    height: 402px;
    background-color: var(--grey-3);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin-top: 33px;
        font-size: 14px;
        margin-bottom: 22px;
    }


    >div{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    >div>button{
        background-color: var(--grey-1);
    }

    >div>button:hover{
        background-color: var(--grey-2);
    }

    label{
        width: 90%;
    }

    p>span{
        margin: 0;
    }

    label:nth-of-type(2){
       margin-bottom: 1px;
    }

    button{
        width: 87%;
    }

    span{
        margin-top: 27px;
        margin-bottom: 17px;
        font-size: 9px;
        color: var(--grey-1);
    }

    @media (min-width: 728px){
        width: 369px;
        height: 502px;

        label:nth-of-type(2){
            margin-bottom: 6px;
        }

        h1{
            margin-top: 42px;
            font-size: 18px;
            margin-bottom: 28px;
        }

        span{
            margin-top: 34px;
            margin-bottom: 22px;
            font-size: 12px;
        }
    }
`