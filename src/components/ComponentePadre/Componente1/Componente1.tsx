import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const Componente1 = ({children}: Props) => {
    const user = "Usuario 1"
    return (
        <div>
            <h2>{user}</h2>
            {children}
        </div>
    )
}