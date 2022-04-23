import styled from "@emotion/styled"
import { Dialog } from "@mui/material"

export const CustomModal = styled(Dialog)`    

    .MuiDialog-paper{
        width: 296px;
        height: 284px;
        background-color: var(--grey-3);
        color: var(--grey-0);
    }

    .MuiDialog-paper>div{
        background-color: var(--grey-2);
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 19px;
    }

    .MuiDialog-paper>div>button{
        border: none;
        background-color: transparent;
        color: var(--grey-1);
        font-size: 12px;
        font-weight: 600;
        margin-right: 16px;
    }

    .MuiDialog-paper>div>h2{
        font-size: 11px;
        font-weight: bold;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    label{
        width: 85%;
    }

    form>button{
        width: 85%;
        font-size: 12px;
    }

    .MuiDialog-paper>form>div>button:nth-of-type(2){
            width: 78px;
            margin-left: 15px;
        }

        .MuiDialog-paper>form>div>button:nth-of-type(1){
            width: 160px;
            font-size: 11px;
        }

        .MuiDialog-paper>form>div>button:nth-of-type(2){
            background-color: var(--grey-1);
            font-size: 12px;
        }

        .MuiDialog-paper>form>div>button:nth-of-type(2):hover{
            background-color: var(--grey-2);
        }

    @media (min-width: 728px){
        .MuiDialog-paper{
            width: 369px;
            height: 362px;
        }

        .MuiDialog-paper>div{
            height: 50px;
        }

        .MuiDialog-paper>div>h2{
            font-size: 14px;
        }

        .MuiDialog-paper>div>button{
            font-size: 16px;
        }

        form>button{
            font-size: 16px;
        }

        .MuiDialog-paper>form>div>button:nth-of-type(2){
            width: 98px;
            margin-left: 15px;
            font-size: 14px;
        }

        .MuiDialog-paper>form>div>button:nth-of-type(1){
            width: 204px;
            font-size: 14px;
        }

    }

`