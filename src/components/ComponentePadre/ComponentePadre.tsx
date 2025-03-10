import { UserProvider } from "../../context";
import { Componente1 } from "./Componente1/Componente1"
import { Componente2 } from "./Componente2/Componente2"
import { ComponenteHijo1 } from "./ComponenteHijo1/ComponenteHijo1";

export const ComponentePadre = () => {
    const sharedProp = "informacion desde el padre";

    return (
        <UserProvider>
            <Componente1>
                <ComponenteHijo1 sharedProp={sharedProp}/>
            </Componente1>
            <Componente2 />
        </UserProvider>
    )
}