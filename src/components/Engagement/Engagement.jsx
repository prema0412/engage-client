
import React, { useState } from 'react'
import dayjs from 'dayjs';
import './Engagement.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import EngagementDetail from '../EngagementDetail/EngagementDetail';
library.add(faAngleRight);




const Engagement = (props) => {

    const { key, index, engagement, header, showEngagementDetail, setShowEngagementDetail, setEngagementToView } = props;
    console.log("in engagement");

    console.log(engagement);




    const handleEngagementview = () => {

        setShowEngagementDetail(true);
        setEngagementToView(engagement);

    }

    const formateCreationdDate = dayjs(engagement.createdOn).format("DD/MM/YY");
    //const formateUpdationDate = dayjs(engagement.updatedOn).format("DD/MM/YY");


    return (

        <div className="engagement" >
            <h3>{engagement.category}</h3>
            <p>{engagement.title}</p>
            <p className="engagement-description">{engagement.description} </p>
            <p>{engagement.workingPreference}</p>
            <p>{formateCreationdDate}</p>



            <div className='arrow'>
                <FontAwesomeIcon icon={faAngleRight} onClick={handleEngagementview} />

            </div>

        </div>

    )
}

export default Engagement
