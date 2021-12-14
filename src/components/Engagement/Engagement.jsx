
import React from 'react'
import dayjs from 'dayjs';
import './Engagement.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
library.add(faAngleRight);




const Engagement = (props) => {

 const { key, index, engagement, header} = props;

 console.log(engagement, header);

 const formateCreationdDate = dayjs(engagement.createdOn).format("DD/MM/YY");
 //const formateUpdationDate = dayjs(engagement.updatedOn).format("DD/MM/YY");
 

    return (
        <div className="engagement">
            <p>{engagement.title}</p>
            <p>{engagement.description}</p>
            <p>{engagement.workingPreference}</p>
            <p>{formateCreationdDate}</p>

            <div>
                 <FontAwesomeIcon icon={faAngleRight} />
            </div>
        </div>
    )
}

export default Engagement
