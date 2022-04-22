import styled from "@emotion/styled";

export const CustomCard = styled.li`

    width: 279px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-4);
    margin-top: 16px;
    border-radius: 4px;

    :hover{
        background-color: var(--grey-2);
    }
    
    h1{
        width: 180px;
        height: 48px;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        align-items: center;
        margin-left: 12px;
    }

    span{
        width: 78px;
        height: 48px;
        color: var(--grey-1);
        font-size: 12px ;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 12px;
    }

    @media (min-width: 728px){
        
        width: 96%;
        
        h1{
            align-items: center;
        }

        span{
            margin-right: 12px;
            
        }
    }
`