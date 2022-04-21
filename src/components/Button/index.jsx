import { CustomButton} from "./style";

const Button = ({ children, ...rest}) =>{
    return (
        <>
            <CustomButton variant="contained"  {...rest}>{children}</CustomButton>
        </>
    )
}

export default Button