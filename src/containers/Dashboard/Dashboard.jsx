import React from 'react'
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import EngagementList from '../../components/EngagementList/EngagementList';
import NewEngagement from '../../components/NewEngagement/NewEngagement';
import About from '../../components/About/About';
import './Dashboard.scss';

const Dashboard = () => {

    const [engagementList, setEngagements] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const [suggestions, setSuggestions] = useState([]);



    const getEngagements = () => {

        console.log("in fetch");

        fetch("http://localhost:8080/engagements")
            .then(res => res.json())
            .then(json => setEngagements(json))
            .catch(err => console.log(err))

    }

    useEffect(() => {
        getEngagements();

    }, []);

    let listToRender = engagementList;


    return (
        <>
            <div className="main">


                <NavBar />


                <Routes>

                    <Route path='/' element={<About />} />

                    <Route path='/about' element={<About />} />

                    <Route path='/engagements' element={<EngagementList className="engagement" engagementList={listToRender} header={"Explore Engagements"} getEngagements={getEngagements} />} />

                    <Route path='/post' element={<NewEngagement className="newEngagement" header={"Post an Engagement"} />} />

                    {/* <Route path='/' element={<PrepareEngagementList engagamentList={engagements} header={"Explore Engagements"} />} /> */}

                </Routes>




            </div>
        </>
    )
}

export default Dashboard
