import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import image from "./1200px-Missing_avatar.png"

const UserList = () => {
    const [data, setData] = useState([]);
    console.log(data);
    const getData = () => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => { getData() }, [])

    return (
        <div className='home'>

            {
                data.map(item =>
                    <div className="card" key={item.id}>
                        <div className="imageUsers">
                            <img src={image} alt="" />
                            <div className="cardUser">
                                <h3>{item.name}</h3>
                                <h5>Email: {item.email}</h5>
                                <h5>Tel: {item.phone} </h5>
                                <h5>City: {item.address.city} </h5>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default UserList