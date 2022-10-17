import { FaHome } from 'react-icons/fa'
import { useState } from 'react'

type dataContains = {
    title?: string,
    icon?: JSX.Element,
    num?: number,
}

interface DataCard {
    card: dataContains | undefined
}


export const UserInfo = () => {
    const [details, setDetails] = useState<DataCard>()
    return(
        <div>
            <div>
                
            </div>
        </div>
    )
} 

