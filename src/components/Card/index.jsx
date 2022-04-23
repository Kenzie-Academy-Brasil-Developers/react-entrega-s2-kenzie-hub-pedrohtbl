import { CustomCard } from "./style"

const Card = ({id,title, status, onClick}) =>{
    return(
        <>
        <CustomCard id={id} onClick={onClick}>
            <h1>{title}</h1>
            <span>{status}</span>
        </CustomCard>
        </>
    )
}

export default Card