interface Props {
    sharedProp: string
}

export const ComponenteHijo1 = ({ sharedProp }: Props) => {
    return (
        <div>
            {sharedProp}
        </div>
    )
}