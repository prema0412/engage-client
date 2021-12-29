
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


    useEffect(() => {
        getEngagements();

    }, []);

    let listToRender = engagementList;
    console.log(listToRender);

    let filteredList = [];


    const getSuggestionValue = suggestion => {
        return suggestion.category

    };



    const renderSuggestion = (suggestion, { query }) => {
        return (
            <span>
                {suggestion.category}
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

            <section>
                <div>
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
                        onSuggestionsFetchRequested={({ value }) => {
                            if (!value) {
                                setSuggestions([]);
                                return
                            }
                            setSuggestions(engagementList.filter(engagement => (
                                (engagement.category.toLowerCase()).includes(value.trim().toLowerCase())
                            )));
                        }}
                        onSuggestionsClearRequested={() => {
                            setSuggestions({ suggestions: [] });
                        }}
                        onSuggetionSelected={(event, { suggestion, method }) => {
                            setSearchTerm(suggestion.category);
                        }}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                    />
                </div>
            </section>
            <section className="engagement__detail">

                {showEngagementDetail && <EngagementDetail engagementToView={engagementToView} showEngagementDetail={showEngagementDetail} setShowEngagementDetail={setShowEngagementDetail} />}
                {listToRender.map((engagement, index) => {

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
