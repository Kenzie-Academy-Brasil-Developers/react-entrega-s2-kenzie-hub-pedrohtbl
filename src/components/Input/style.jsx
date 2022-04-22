import styled from "@emotion/styled";

export const CustomInput = styled.label`

display: flex;
flex-direction: column;
color: var(--grey-0);
font-size: 9px;
margin-bottom: 17px;

p{
    display: flex;
    justify-content: space-between;
    color: ${(props) => (props.error? '#E83F5B' : '#F8F9FA')};
}

span{
    color: var(--negative);
}

input{
    background-color: var(--grey-2);
    border: solid 2px var(--grey-2);
    border-color: ${(props) => (props.error? '#E83F5B' : '#343B41')};
    height: 38px;
    border-radius: 3px;
    padding: 0 16px;
    margin-top: 17px;
    color: var(--grey-0);
    font-size:12px;
    width: 100%;
}

input::placeholder{
 color: var(--grey-1);
}

input:focus{
    border-color: ${(props) => (props.error? '#E83F5B' : '#F8F9FA')};
    ::placeholder{
        color: var(--grey-0);
    }
}

@media (min-width: 728px){
    font-size: 12px;
    margin-bottom: 22px;

    input{
        height: 48px;
        font-size:16px;
        margin-top: 22px;
    }
}

`