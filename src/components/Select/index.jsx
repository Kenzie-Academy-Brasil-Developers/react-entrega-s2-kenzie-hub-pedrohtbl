import { CustomSelect } from "./style"

const Select = ({register,children,course_module, title}) =>{
    return(
        
        <CustomSelect>
            <p>{title}</p>
            <select {...register(course_module)}>
            {children}
            </select>
        </CustomSelect>
        
        
    )
}

export default Select