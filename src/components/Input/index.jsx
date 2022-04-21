import { CustomInput } from "./style"

const Input = ({label, error, register, name, ...rest}) =>{
    return(
        <>
            <CustomInput error={!!error}>
                <p>{label} {!!error && <span>{error}</span>}</p>
                <input {...register(name)} {...rest}/>
            </CustomInput>
        </>
    )
}

export default Input