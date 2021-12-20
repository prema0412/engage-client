

import React, { useEffect }  from 'react';
import { resetServerContext } from 'react-beautiful-dnd';
import { useForm } from 'react-hook-form';
import './NewEngagement.scss';


const NewEngagement = (props) => {

    const { register, handleSubmit, watch, formState:  {errors}, reset } = useForm();

    const onSubmit = (data, e) => {



        console.log(data);
        console.log(JSON.stringify(data));

        fetch("http://localhost:8080/engagement",{
            method : "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    preferredId: data.preferredId,
                    providerType: data.providerType,
                    category: data.category,
                    engagementType: data.engagementType,
                    title: data.title,
                    description: data.description,
                    workingPreference: data.workingPreference,
                    contactName: data.contactName,
                    contactEmail: data.contactEmail,
                    location: data.location,
                    remunerationPreference: data.remunerationPreference,
                    status: "OPEN",
                    createdBy: data.contactEmail
                })
             })
             .then(response => response.text())
           //  .then( text => console.log(text))
             .then( error => console.log(error))
            

        
        e.target.reset();

    }

    
    
  
   

    


   // console.log(watch);

    // you can use valueas e.g. { valueasNumber: true }

    return (
        
            <form className="eng-form" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="eng-form__title">Post new Engagement</h3>
            <div className="eng-form__elements">
                <input className="eng-form__input" placeholder="Enter ID of your choice" {...register("preferredId", { required: true, maxLength:10 })} />
                {/* {errors.} */}
                <label className="eng-form__label">Provider Type</label>
                <select className="eng-form__input" {...register("providerType")}>
                    <option value="ENTITY">Entity</option>
                     <option value="INDIVIDUAL">Individual</option>
                </select>
                <input className="eng-form__input eng-form__elements--category" 
                placeholder="categorise - creative, professional, service, research, educational, ....."
                {...register("category")} />
                <label className="eng-form__label">Engagement Type</label>
                <select className="eng-form__input" {...register("engagementType")}>
                    <option value="FULLTIME">Full Time</option>
                     <option value="PARTTIME">Part Time</option>
                     <option value="ONEOF">One Of</option>
                     <option value="WEEKDAYS">Week Days</option>
                     <option value="WEEKENDS">Week Ends</option>
                     <option value="PROJECT">Project Based</option>
                     <option value="EVENT">Event Based</option>
                </select>
                <input className="eng-form__input" placeholder="Enter title" {...register("title", { required: true, maxLength:30 })} />
                <input className="eng-form__input" placeholder="Describe little more" {...register("description", { required: true, maxLength:300})} />
                <label className="eng-form__label">Location Preference</label>
                <select className="eng-form__input" {...register("workingPreference")}>
                    <option value="REMOTE">Remote</option>
                    <option value="ONSITE">Onsite</option>
                    <option value="OFFICE">Office</option>
                    <option value="DELIVERY">Delivery</option>
                </select>
                <input className="eng-form__input" placeholder="Enter work location if Remote is not the opton" {...register("location", {maxLength:50})}></input>
                <label className="eng-form__label">Remuneration Option</label>
                <select className="eng-form__input" {...register("remunerationPreference")}>
                    <option value="PAID">Paid Engagemnt</option>
                     <option value="PROBONO">Probono</option>
                </select>
                <input className="eng-form__input" placeholder="Enter Contact Name" {...register("contactName", { required: true, maxLength:50 })} />
                <input className="eng-form__input" placeholder="Enter Contact Email" {...register("contactEmail", { required: true, maxLength:50 })} />
                </div>
                
                <input className="eng-form__submit" type="submit" onSubmit={handleSubmit(onSubmit)}/>

            </form>  
        

    
    )
}

export default NewEngagement


