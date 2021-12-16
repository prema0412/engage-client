

import React from 'react';
import { useForm } from 'react-hook-form';
import './NewEngagement.scss';


const NewEngagement = (props) => {

    const { register, handleSubmit, watch } = useForm();
    return (
        
            <form className="engagament-form" onSubmit={handleSubmit}>
                <div className="engagament-form__element">
                <input  placeholder="Enter ID of your choice" {...register("preferredId", { required: true, maxLength:10 })} />
                <select {...register("providerType")}>
                    <option value="ENTITY">Entity</option>
                     <option value="INDIVIDUAL">Individual</option>
                </select>
                <input className="engagament-form__element--category" 
                placeholder="categorise - creative, professional, service, research, educational, ....."
                {...register("engagementPreference")} />
                <select placeholder="Engagement Preference" {...register("engagementType")}>
                    <option value="FULLTIME">Full Time</option>
                     <option value="PARTTIME">Part Time</option>
                     <option value="INDIVIDUAL">Week Ends</option>
                     <option value="WEEKDAYS">Week Days</option>
                     <option value="PROJECT">Project Based</option>
                     <option value="EVENT">Event Based</option>
                </select>
                <input  placeholder="Enter title" {...register("title", { required: true, maxLength:30 })} />
                <input  placeholder="Describe little more" {...register("title", { required: true, maxLength:300})} />
                <select placeholder="Remuneration Preference" {...register("remuneration")}>
                    <option value="PAID">Paid Engagemnt</option>
                     <option value="PROBONO">Probono</option>
                </select>
                </div>

                
               

            </form>  
        

    
    )
}

export default NewEngagement


