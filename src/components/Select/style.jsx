import styled from "@emotion/styled";

export const CustomSelect = styled.label`
font-size: 9px;

select{
    background-color: var(--grey-2);
    height: 38px;
    width: 100%;
    border: 2px solid var(--grey-2);
    border-radius: 3px;
    padding: 0 16px;
    margin: 17px 0;
    color: var(--grey-1);
    font-size: 12px;
}

select:focus{
    border: 2px solid var(--grey-0);
}

@media (min-width: 728px){
    font-size: 12px;
    select{
        font-size: 16px;
        height: 48px;
        margin: 22px 0;
    }
        
}
`