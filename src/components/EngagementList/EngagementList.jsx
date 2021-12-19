
import React, {useState} from 'react'
import Engagement from '../Engagement/Engagement';
import EngagementDetail from '../EngagementDetail/EngagementDetail';

const EngagementList = (props) => {
    const { engagamentList, header} = props;

    const [ showEngagementDetail, setShowEngagementDetail ] = useState(false);

    const [engagementToView, setEngagementToView] = useState({});
    console.log("in engagement list");

   console.log(engagamentList);

    const categoryArray = ["professional", "creative", "sports", "technical", "educational", "domestic", "research"];
    const categoryHeaders = ["Professional", "Creative", "Sports", "Technical", "Educational", "Domestic", "Research"];

    const filteredCategoryEngagements = [];
    for (let i = 0; i < categoryArray.length; i++) 
    {
         filteredCategoryEngagements[i] = engagamentList.filter(engagement => engagement.category === categoryArray[i]);
        
    };

  //  console.log(filteredCategoryEngagements);

    const renderEngagements = (engagements, headers) => {

    

        const columns = headers.map( (eachCategory, index) => (

            <section>
                {/* <h3 className="engagemenr__category">{eachCategory}</h3> */}

                {showEngagementDetail && <EngagementDetail engagementToView={engagementToView} showEngagementDetail={showEngagementDetail} setShowEngagementDetail={setShowEngagementDetail}/>}
                { (eachCategory) && engagements[index].map ( (engagement, index1) => {

                    return (

                        <Engagement className="engagement" key={engagement.id+engagement.preferredId} index={index1} engagement={engagement} header={header} 
                        showEngagementDetail={showEngagementDetail} setShowEngagementDetail={setShowEngagementDetail}
                        
                        engagementToView={engagementToView} setEngagementToView={setEngagementToView}  />
                    )

                     } ) }

            </section>
        ));
      
        console.log(columns);
        return columns;
 }


    return (

     <>
     <section className="engagement__detail">  

         {renderEngagements(filteredCategoryEngagements,categoryHeaders)}

     </section> 
     </> 
    )
}

export default EngagementList;
