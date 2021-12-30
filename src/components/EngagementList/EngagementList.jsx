
import React, { useState, useEffect } from 'react'
import Autosuggest from 'react-autosuggest';
import Engagement from '../Engagement/Engagement';
import EngagementDetail from '../EngagementDetail/EngagementDetail';
import './EngagementList.scss';


const EngagementList = (props) => {
    const { engagementList, header, getEngagements } = props;

    const [showEngagementDetail, setShowEngagementDetail] = useState(false);

    const [engagementToView, setEngagementToView] = useState({});

    const [value, setSearchTerm] = useState('');

    const [suggestions, setSuggestions] = useState([]);

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        getEngagements();

    }, []);

    const getCategories = () => {
        fetch("http://localhost:8080/categories")
            .then(res => res.json())
            .then(json => setCategories(json))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getCategories();
    }, [])

    let listToRender = engagementList;
    console.log(listToRender);

    let filteredList = [];


    const getSuggestionValue = suggestion => {
        return suggestion

    };



    const renderSuggestion = (suggestion, { query }) => {
        return (
            <span>
                {suggestion}
            </span>
        )

    };

    const handleSearchTerm = (filteredList, value) => {

        console.log("seraching for :" + value);

        filteredList = engagementList.filter(item => {
            const categoryTitleLower = item.category.toLowerCase();

            return categoryTitleLower.includes(value.trim().toLowerCase());
        })

        return filteredList;
    }

    if (value) {



        filteredList = handleSearchTerm(filteredList, value);

        if (filteredList.length > 0) {
            listToRender = filteredList

        }
        else listToRender = engagementList;



    }

    return (

        <>

            <section className='engagement__main'>
                <div className='autoSuggest'>
                    <Autosuggest
                        inputProps={{
                            value: value,
                            placeholder: "Enter category",
                            autoComplete: "abcd",
                            type: "search",
                            onChange: (_event, { newValue }) => {
                                setSearchTerm(newValue);
                            }
                        }}
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={async ({ value }) => {
                            if (!value) {
                                setSuggestions([]);
                                return
                            }
                            setSuggestions(categories.filter(category => (
                                (category.toLowerCase()).includes(value.trim().toLowerCase())
                            )));
                        }}
                        onSuggestionsClearRequested={() => {
                            setSuggestions({ suggestions: [] });
                        }}
                        onSuggetionSelected={(event, { suggestion, method }) => {
                            setSearchTerm(suggestion);
                        }}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                    />
                </div>

                <div className="engagement__detail">

                    {showEngagementDetail && <EngagementDetail engagementToView={engagementToView} showEngagementDetail={showEngagementDetail} setShowEngagementDetail={setShowEngagementDetail} />}
                    {listToRender.map((engagement, index) => {

                        return (

                            <Engagement className="engagement" key={engagement.id + engagement.preferredId} index={index} engagement={engagement} header={header}
                                showEngagementDetail={showEngagementDetail} setShowEngagementDetail={setShowEngagementDetail}

                                engagementToView={engagementToView} setEngagementToView={setEngagementToView} />
                        )

                    })}

                </div>
            </section>
        </>
    )
}

export default EngagementList;
