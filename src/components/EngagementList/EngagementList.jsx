
import React, { useState, useEffect } from 'react'
import Engagement from '../Engagement/Engagement';
import EngagementDetail from '../EngagementDetail/EngagementDetail';

const EngagementList = (props) => {
    const { engagamentList, header, getEngagements } = props;

    const [showEngagementDetail, setShowEngagementDetail] = useState(false);

    const [engagementToView, setEngagementToView] = useState({});

    useEffect(() => {
        console.log("in fetch2");
        getEngagements();

    }, []);

    return (

        <>
            <section className="engagement__detail">

                {showEngagementDetail && <EngagementDetail engagementToView={engagementToView} showEngagementDetail={showEngagementDetail} setShowEngagementDetail={setShowEngagementDetail} />}
                {engagamentList.map((engagement, index) => {

                    return (

                        <Engagement className="engagement" key={engagement.id + engagement.preferredId} index={index} engagement={engagement} header={header}
                            showEngagementDetail={showEngagementDetail} setShowEngagementDetail={setShowEngagementDetail}

                            engagementToView={engagementToView} setEngagementToView={setEngagementToView} />
                    )

                })}

            </section>
        </>
    )
}

export default EngagementList;
