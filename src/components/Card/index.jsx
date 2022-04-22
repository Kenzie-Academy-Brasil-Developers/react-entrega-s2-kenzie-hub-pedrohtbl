import { CustomCard } from "./style"

const Card = ({id,title, status}) =>{
    return(
        <>
        <CustomCard id={id}>
            <h1>{title}</h1>
            <span>{status}</span>
        </CustomCard>
        </>
    )
}

export default Card