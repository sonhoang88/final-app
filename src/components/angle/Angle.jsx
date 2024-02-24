import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
export const Angle = () => {
    const [myAngle, setMyAngle] = useState([]);

    const getAngle = async () => {
        try {
            const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-qkzjg/endpoint/get_data_table');
            setMyAngle(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getAngle();
    }); // Empty dependency array to run the effect only once

    return (
        <div>
            Current Angle: {myAngle.length > 0 && myAngle[0].currentangle ? `${myAngle[0].currentangle} độ` : 'Loading...'}
        </div>
    );
};