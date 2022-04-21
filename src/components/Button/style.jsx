import { Button} from "@mui/material";
import styled from "@emotion/styled";
import "../../styles";


export const CustomButton = styled(Button)`
    background-color: ${(props) => (props.className === 'grey' ? '#212529' : '#FF577F')};
    font-weight: 500;
    height: 38px;

    :hover{
        background-color: ${(props) => (props.className === 'grey' ? '#343B41' : '#FF427F')};
    }

    @media (min-width: 728px){
        height: 48px;
    }

`
