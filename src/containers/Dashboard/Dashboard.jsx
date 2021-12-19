import React from 'react'
import {  Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import EngagementList from '../../components/EngagementList/EngagementList';
import NewEngagement from '../../components/NewEngagement/NewEngagement';
import './Dashboard.scss';

const Dashboard = () => {

    const [engagementList, setEngagements] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const [ suggestions, setSuggestions ] = useState([]);

    let list = [
        {
            "id": 1,
            "preferredId": "Eng123",
            "providerType": "ENTITY",
            "category": "creative",
            "engagementType": "SHORTTERM",
            "title": "Content Writing",
            "description": "I invite content writers for an upcoming open source platform",
            "imageUrls": null,
            "informationUrls": null,
            "contactName": null,
            "contactEmail": "prema.chhaya@gmail.com",
            "contactNumber": null,
            "contactAddress": null,
            "location": null,
            "preferredContactMode": null,
            "expectedStartDate": null,
            "period": null,
            "expectedEndDate": null,
            "totalPositions": null,
            "openPositions": null,
            "teamSize": 0,
            "requiredSkills": null,
            "expectedProficiency": null,
            "ageGroup": null,
            "languagePreference": null,
            "workingPreference": "REMOTE",
            "remunerationPreference": null,
            "locationPreference": null,
            "recommendation": null,
            "specialneed": null,
            "status": null,
            "additionalInformation": null,
            "createdOn": "2021-12-14T11:02:16.210+00:00",
            "createdBY": null,
            "updatedOn": null,
            "updatedBy": null
        },
        {
            "id": 2,
            "preferredId": "Eng456",
            "providerType": "INDIVIDUAL",
            "category": "creative",
            "engagementType": "SHORTTERM",
            "title": "Construction",
            "description": "I need a mason for constructing Rain Water Harvesting Tank",
            "imageUrls": null,
            "informationUrls": null,
            "contactName": null,
            "contactEmail": "prema.chhaya@gmail.com",
            "contactNumber": null,
            "contactAddress": null,
            "location": null,
            "preferredContactMode": null,
            "expectedStartDate": null,
            "period": null,
            "expectedEndDate": null,
            "totalPositions": null,
            "openPositions": null,
            "teamSize": 0,
            "requiredSkills": null,
            "expectedProficiency": null,
            "ageGroup": null,
            "languagePreference": null,
            "workingPreference": "ONSITE",
            "remunerationPreference": null,
            "locationPreference": null,
            "recommendation": null,
            "specialneed": null,
            "status": null,
            "additionalInformation": null,
            "createdOn": "2021-12-14T11:04:48.262+00:00",
            "createdBY": null,
            "updatedOn": null,
            "updatedBy": null
        },
        {
            "id": 3,
            "preferredId": "Eng557",
            "providerType": "INDIVIDUAL",
            "category": "research",
            "engagementType": "SHORTTERM",
            "title": "Civic Issue Analysis",
            "description": "I need a list of garbage recyclers and contacts",
            "imageUrls": null,
            "informationUrls": null,
            "contactName": null,
            "contactEmail": "prema.chhaya@gmail.com",
            "contactNumber": null,
            "contactAddress": null,
            "location": null,
            "preferredContactMode": null,
            "expectedStartDate": null,
            "period": null,
            "expectedEndDate": null,
            "totalPositions": null,
            "openPositions": null,
            "teamSize": 0,
            "requiredSkills": null,
            "expectedProficiency": null,
            "ageGroup": null,
            "languagePreference": null,
            "workingPreference": "HOME",
            "remunerationPreference": null,
            "locationPreference": null,
            "recommendation": null,
            "specialneed": null,
            "status": null,
            "additionalInformation": null,
            "createdOn": "2021-12-14T14:51:33.408+00:00",
            "createdBY": null,
            "updatedOn": null,
            "updatedBy": null
        },
        {
            "id": 4,
            "preferredId": "Eng655",
            "providerType": "ENTITY",
            "category": "professional",
            "engagementType": "FULLTIME",
            "title": "Client Service Executive",
            "description": "A fulltime engagement for outgoing individual",
            "imageUrls": null,
            "informationUrls": null,
            "contactName": null,
            "contactEmail": "prema.chhaya@gmail.com",
            "contactNumber": null,
            "contactAddress": null,
            "location": null,
            "preferredContactMode": null,
            "expectedStartDate": null,
            "period": null,
            "expectedEndDate": null,
            "totalPositions": null,
            "openPositions": null,
            "teamSize": 0,
            "requiredSkills": null,
            "expectedProficiency": null,
            "ageGroup": null,
            "languagePreference": null,
            "workingPreference": "OFFICE",
            "remunerationPreference": null,
            "locationPreference": null,
            "recommendation": null,
            "specialneed": null,
            "status": null,
            "additionalInformation": null,
            "createdOn": "2021-12-14T14:56:23.306+00:00",
            "createdBY": null,
            "updatedOn": null,
            "updatedBy": null
        }
    ];

    // const getEngagements = () => {

    //     fetch("http://localhost:8080/engagements")
    //         // .then(res => {
    //         //        var a = res.headers.get("strict-transport-security"),
    //         //         b = res.headers.get("content-security-policy")
    //         //         console.log(a,b);
    //         //     })
    //         .then(res => res.json)
    //         .then(json => setEngagements(json) )
    //         .catch(err => console.log(err))
        
    // }

    // useEffect( () => {
    //     getEngagements();

    // }, []);

   let listToRender = list; 

   let filteredList = [];
  

    const onSuggestionHandler = (searchTerm) => {
      //  console.log("in suggetion handler");
        setSearchTerm(searchTerm);
        setSuggestions([]);
       
    }

    const onChangeHandler = (searchTerm) => {
     //   console.log("in change handler");
        let matches = [];
       
        if (searchTerm.length > 0) {
            matches = list.filter(engagement => {
                const regx = new RegExp(`${searchTerm}`, "gi");
                return engagement.category.match(regx)
            })
        }
        console.log('matches', matches);
        setSuggestions(matches);
        setSearchTerm(searchTerm);
    }

    const handleSearchTerm = (filteredList,searchTerm) => {

        filteredList = list.filter(item => 
          {
             const categoryTitleLower = item.category.toLowerCase();
    
              return categoryTitleLower.includes(searchTerm);
           })
    
           return filteredList;
    }

    if (searchTerm) {

       
     
         filteredList = handleSearchTerm(filteredList,searchTerm);
     
         if (filteredList.length > 0) {
            listToRender = filteredList
          // console.log(listToRender);
         }
         else listToRender = list;
       //  console.log(listToRender);
       
       }

  //  console.log(listToRender.length);

  

    


    return (
        <>
        <div className='container'>
          <input type="text" className="col-md-12 input" style={{ marginTop:10 }} 
          onChange={e=>onChangeHandler(e.target.value)} 
          onBlur={() => {
              setTimeout( () => {
              setSuggestions([]);
              },100)
          }}
          value={searchTerm}/>
          {suggestions && suggestions.map( (suggestion, i) => 
            <div key={i} className='suggestion col-md-12 justify-content-md-center' onClick={() => onSuggestionHandler(suggestion.category)}>{suggestion.category} 
            </div>
          )
          }
        </div>
        <div className="main">
            

            <NavBar />

           
            <Routes>

                <Route path='/engagements' element={<EngagementList className="engagement" engagamentList={listToRender} header={"Explore Engagements"}/>} />
                <Route path='/post' element={<NewEngagement className="newEngagement"  header={"Post an Engagement"}/>} />

                {/* <Route path='/' element={<PrepareEngagementList engagamentList={engagements} header={"Explore Engagements"} />} /> */}

            </Routes>

        

            
        </div>
        </>
    )
}

export default Dashboard
