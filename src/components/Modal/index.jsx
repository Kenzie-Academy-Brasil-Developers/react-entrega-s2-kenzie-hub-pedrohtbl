import { CustomModal } from "./style"
import { DialogTitle } from "@mui/material"

const Modal = ({title,children,close, ...rest}) =>{
    return(
        <>
            <CustomModal {...rest}>
                <div>
                    <DialogTitle>{title}</DialogTitle>
                    <button onClick={()=>close(false)}>X</button>
                </div>
                {children}
            </CustomModal>
        </>
    )
}

export default Modal