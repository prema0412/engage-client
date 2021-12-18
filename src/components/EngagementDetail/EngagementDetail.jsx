
import React from 'react'
import dayjs from 'dayjs';
import cross from '../../assets/images/cross-grey.svg';
import ReactModal from 'react-modal';
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
          <img className="engagementView__cross" src={cross} alt="close" onClick={() => {setShowEngagementDetail(false)}} />
          <p className="engagementView__top">Posted {postedTimeToNow}</p>
          <div className="engagementView__items">
              <p>{engagementToView.category}</p>
              <p>Posted By: {engagementToView.providerType}</p>
              <p>{engagementToView.title}</p>
              <p>{engagementToView.description}</p>
              <p>{engagementToView.engagementType}</p>
              <p> Location {engagementToView.workingPreference} {engagementToView.location}</p>
              <p>More Info: {engagementToView.informationUrls}</p>
              <p>Paid/Probono {engagementToView.remunerationPreference}</p>
              <p>Recommendation: {engagementToView.recommendation}</p>
              <p>Team Size: {engagementToView.teamSize}</p>
             <p>Connect On - {engagementToView.contactEmail}</p>
          </div>
        </div>
        </ReactModal>
    )
}

export default EngagementDetail
