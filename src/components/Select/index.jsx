import { CustomSelect } from "./style"

const Select = ({register,children,course_module}) =>{
    return(
        
        <CustomSelect>
            <p>Selecionar módulo</p>
            <select {...register(course_module)}>
            {children}
            </select>
        </CustomSelect>
        
        
    )
}

export default Select