import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Form = styled.form`

    background-color: var(--grey-3);
    width: 295px;
    height: 568px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    

    label,button{
        width: 90%;
    }

    @media (min-width: 728px){
        width: 370px;
        height: 720px;
    }

`
export const BoxHeader = styled(Box)`
    width: 295px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 49px;
    margin-bottom: 30px;

    img{
        width: 97px;
        height: 13px;
    }

    @media (min-width: 728px){
        width: 370px;
        margin-bottom: 38px;

        img{
            width: 122px;
            height: 22px;
        }
    }
`

export const CustomBox = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 23px;
    margin-bottom: 22px;
    
    h1{
        color: var(--grey-0);
        font-size: 14px;
        margin-bottom: 17px;
    }

    p{
        font-size: 9px;
        color: var(--grey-1);
    }

    @media (min-width: 728px){
        margin-top: 32px;
        margin-bottom: 20px;

        p{
            font-size: 12px;
        }

        h1{
            font-size: 18px;
            margin-bottom: 18px;
        }
    }

`