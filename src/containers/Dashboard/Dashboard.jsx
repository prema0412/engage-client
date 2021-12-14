import React from 'react'
import {  Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import PrepareEngagementList from '../../components/PrepareEngagementList/PrepareEngagementList';

const Dashboard = () => {

    const [engagementList, setEngagements] = useState([]);

    const list = [
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
            "category": "technical",
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
    //         .then(res => res.json)
    //         .then(json => setEngagements(json) )
    //         .catch(err => console.log(err))
        
    // }

    // useEffect( () => {
    //     getEngagements();

    // }, []);
    return (
        <div>
            <NavBar />

            <Routes>

                <Route path='/engagements' element={<PrepareEngagementList engagamentList={list} header={"Explore Engagements"}/>} />

                {/* <Route path='/' element={<PrepareEngagementList engagamentList={engagements} header={"Explore Engagements"} />} /> */}

            </Routes>

            
        </div>
    )
}

export default Dashboard
