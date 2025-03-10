import { useEffect, useState } from "react"

const PromiseErrorExample = () => {
    const[data, setData] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            throw new Error("la promesa no funciono")
        }

        fetchData().catch(err => {
            setData(err.message)
            throw new Error("La promesa no funciono")
        })
    }, [])

    return <div>{data}</div>
}

export default PromiseErrorExample