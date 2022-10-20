import { FaHome, FaUsersCog } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { useState } from 'react'

interface userTypeProps {
    dataContains: {
       details: {  userTypeName: string; id: number; category?: string; numOfUsers: string; icon?: JSX.Element }[];
    };
}

const data = { 
    details: [
        {
            userTypeName: "users", id: 1, category: "user", numOfUsers: "2453", icon: <FaHome />
        },
        {
            userTypeName: "active users", id: 2, category: "userActive", numOfUsers: "2453", icon: <FaHome />
        },
        {
            userTypeName: "users with loan", id: 3, category: "loan", numOfUsers: "12453", icon: <FaHome />
        },
        {
            userTypeName: "active with savings", id: 4, category: "savings", numOfUsers: "102453", icon: <FaHome />
        }
    ],
}

const UserTypes = (props: userTypeProps) => {
    const { details } = props.dataContains
    return(
            <div>
                {details.map((item) => {
                    return(
                        <div key={item.id}>
                            <span>{item.icon}</span>
                            <h1>{item.userTypeName}</h1>
                            <p>{item.numOfUsers}</p>
                        </div>
                    )
                })}
            </div>
    )
}


export const UserInfo = () => {
    return(
        <div>
            <div>
               <UserTypes dataContains={data} /> 
            </div>
        </div>
    )
} 

