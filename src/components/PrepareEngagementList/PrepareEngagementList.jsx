
import React from 'react'
import Engagement from '../Engagement/Engagement';

const PrepareEngagementList = (props) => {
    const { engagamentList, header} = props;

    console.log(engagamentList);

    const categoryArray = ["professional", "creative", "sports", "technical", "educational", "domestic", "research"];
    const categoryHeaders = ["Professional", "Creative", "Sports", "Technical", "Educational", "Domestic", "Research"];

    const filteredCategoryEngagements = [];
    for (let i = 0; i < categoryArray.length; i++) 
    {
         filteredCategoryEngagements[i] = engagamentList.filter(engagement => engagement.category === categoryArray[i]);
        
    };

    console.log(filteredCategoryEngagements);

    const renderEngagements = (engagements, headers) => {

        const columns = headers.map( (eachCategory, index) => (

            <section className="engagement">
                <h3>{eachCategory}</h3>
                { (eachCategory) && engagements[index].map ( (engagement, index1) => {

                    return (

                        <Engagement key={engagement.id+index1} index={index1} engagement={engagement} header={header} />
                    )

                     } ) }

            </section>
        ));
        console.log(columns);
        return columns;
 }


    return (
     <section>  

         {renderEngagements(filteredCategoryEngagements,categoryHeaders)}

     </section>  
    )
}

export default PrepareEngagementList;
