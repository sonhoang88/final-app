import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
export const Sound = () => {
    const [mySound, setMySound] = useState([]);

    const getSound = async () => {
        try {
            const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-qkzjg/endpoint/get_data_table');
            setMySound(response.data);
            // console.log("data", response.data[0].prediction);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getSound();
    });

    return (
        <div>
            Sound: {mySound.length>0 ? mySound[0].prediction : ''}
        </div>
    )
}