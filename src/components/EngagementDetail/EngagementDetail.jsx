
import React from 'react'
import dayjs from 'dayjs';
import cross from '../../assets/images/cross-grey.svg';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { patchApi } from '../../api/apiCall';
import '../EngagementDetail/EngagementDetail.scss';


const EngagementDetail = (props) => {
    const { engagementToView, setShowEngagementDetail, showEngagementDetail } = props;

    console.log("in engagement detail");

    console.log(engagementToView);

    const postingDate = dayjs(engagementToView.createdOn).format("DD/MM/YY");
    var relativeTime = require('dayjs/plugin/relativeTime');
    dayjs.extend(relativeTime);

    const postedTimeToNow = dayjs(engagementToView.createdOn).fromNow();

    const handleCloseModel = () => {
        setShowEngagementDetail(false);
    }

    const saveEngagementforUser = (e) => {
        console.log("engagement saved for you");
        window.localStorage.setItem('engagement', JSON.stringify(engagementToView));
        console.log(JSON.parse(window.localStorage.getItem('engagement')));
    }

    const reportEngagement = () => {

        console.log("engagement has been reported" + engagementToView);
    }

    return (

        <ReactModal
            isOpen={showEngagementDetail}
            contentLabel={engagementToView.category}
            onRequestClose={handleCloseModel}
            shouldCloseOnOverlayClick={true}
            preventScroll={false}
            className="engagemenViewtModel"
            appElement={document.getElementById('root')}
            overlayClassName="Overlay"
        //        style={{
        //        overlay: {
        //       backgroundColor: 'rgba(145, 150, 172, 0.18)'
        //     }
        //   }}
        >

            <div className='engagementView'>
                <FontAwesomeIcon className="far fa-bookmark bookmark" icon={faBookmark} style={{ color: '#228B22' }} onClick={saveEngagementforUser} />
                <FontAwesomeIcon className="fab fa-flag flag" icon={faFlag} style={{ color: '#CD5C5C' }}
                    onClick={() => {
                        (
                            fetch(`http://localhost:8080/engagement/${engagementToView.id}/Report`,
                                {
                                    method: 'PATCH'
                                })
                                .then(res => res.text())
                                .then(text => console.log(text))
                                .catch(e => console.log(e)))
                    }} />
                <img className="engagementView__cross" src={cross} alt="close" onClick={() => { setShowEngagementDetail(false) }} />
                <h3 className='engagementView__title'>Engagament Detail</h3>
                <p className="engagementView__top">Posted {postedTimeToNow}</p>
                <div className="engagementView__items">
                    <h3>{engagementToView.category}</h3>
                    <p>Posted By: {engagementToView.providerType}</p>
                    <h3>{engagementToView.title}</h3>
                    <p>{engagementToView.description}</p>
                    <p>{engagementToView.engagementType}</p>
                    <p> Location: {engagementToView.workingPreference} :{engagementToView.location}</p>
                    <p>More Info: {engagementToView.informationUrls}</p>
                    <h3>Paid/Probono: {engagementToView.remunerationPreference}</h3>
                    <p>Recommendation: {engagementToView.recommendation}</p>
                    <p>Team Size: {engagementToView.teamSize}</p>
                    <p>Connect On - {engagementToView.contactEmail}</p>
                </div>
            </div>
        </ReactModal>
    )
}

export default EngagementDetail
