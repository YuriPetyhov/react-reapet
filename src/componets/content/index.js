import React, {useEffect} from "react";
import {FlexWrap} from "../../elements/flexWrap";
import axios from "axios";

export const Main = () => {



    const options = {
        method: 'GET',
        url: 'https://theaudiodb.com/api/v1/json/1/discography.php?s=free',


    };
    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    },[])

    return <FlexWrap
        justifyContent={'space-between'}
        padding={'0 10px'}
    >
            <div>1</div>
            <div>2</div>
    </FlexWrap>
}