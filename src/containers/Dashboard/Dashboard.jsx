import React from 'react'
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import NavBar from '../../components/NavBar/NavBar';
import EngagementList from '../../components/EngagementList/EngagementList';
import NewEngagement from '../../components/NewEngagement/NewEngagement';
import './Dashboard.scss';

const Dashboard = () => {

    const [engagementList, setEngagements] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const [suggestions, setSuggestions] = useState([]);



    const getEngagements = () => {

        fetch("http://localhost:8080/engagements")
            .then(res => res.json())
            .then(json => setEngagements(json))
            .catch(err => console.log(err))

    }

    useEffect(() => {
        getEngagements();

    }, []);

    let listToRender = engagementList;

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
            matches = engagementList.filter(engagement => {
                const regx = new RegExp(`${searchTerm}`, "gi");
                return engagement.category.match(regx)
            })
        }
        console.log('matches', matches);
        setSuggestions(matches);
        setSearchTerm(searchTerm);
    }

    const handleSearchTerm = (filteredList, searchTerm) => {

        filteredList = engagementList.filter(item => {
            const categoryTitleLower = item.category.toLowerCase();

            return categoryTitleLower.includes(searchTerm);
        })

        return filteredList;
    }

    if (searchTerm) {



        filteredList = handleSearchTerm(filteredList, searchTerm);

        if (filteredList.length > 0) {
            listToRender = filteredList
            // console.log(listToRender);
        }
        else listToRender = engagementList;
        //  console.log(listToRender);

    }

    //  console.log(listToRender.length);






    return (
        <>
            <div className='container'>
                <input type="text" className="col-md-12 input" style={{ marginTop: 10 }}
                    onChange={e => onChangeHandler(e.target.value)}
                    onBlur={() => {
                        setTimeout(() => {
                            setSuggestions([]);
                        }, 100)
                    }}
                    value={searchTerm} />
                {suggestions && suggestions.map((suggestion, i) =>
                    <div key={i} className='suggestion col-md-12 justify-content-md-center' onClick={() => onSuggestionHandler(suggestion.category)}>{suggestion.category}
                    </div>
                )
                }
            </div>
            <div className="main">


                <NavBar />


                <Routes>

                    <Route path='/engagements' element={<EngagementList className="engagement" engagamentList={listToRender} header={"Explore Engagements"} />} />
                    <Route path='/post' element={<NewEngagement className="newEngagement" header={"Post an Engagement"} />} />

                    {/* <Route path='/' element={<PrepareEngagementList engagamentList={engagements} header={"Explore Engagements"} />} /> */}

                </Routes>




            </div>
        </>
    )
}

export default Dashboard
