import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
export const Target = () => {
    const [myTarget, setMyTarget] = useState([]);

    const getTarget = async () => {
        try {
            const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-qkzjg/endpoint/get_data_table');
            setMyTarget(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getTarget();
    }); // Empty dependency array to run the effect only once

    return (
        <div>
            Target Angle: {myTarget.length > 0 && myTarget[0].targetangle ? `${myTarget[0].targetangle} độ` : 'Loading...'}
        </div>
    );
};