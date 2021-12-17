

import React, { useEffect }  from 'react';
import { resetServerContext } from 'react-beautiful-dnd';
import { useForm } from 'react-hook-form';
import './NewEngagement.scss';


const NewEngagement = (props) => {

    const { register, handleSubmit, watch, formState:  {errors}, reset } = useForm();

    const onSubmit = (data, e) => {

        console.log(data);
        e.target.reset();
    };
  
   

    


   // console.log(watch);

    // you can use valueas e.g. { valueasNumber: true }

    return (
        
            <form className="engagament-form" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="engagament-form__title">Post new Engagement</h3>
            <div className="engagament-form__elements">
                <input className="engagament-form__input" placeholder="Enter ID of your choice" {...register("preferredId", { required: true, maxLength:10 })} />
                {/* {errors.} */}
                <select {...register("providerType")}>
                    <option value="ENTITY">Entity</option>
                     <option value="INDIVIDUAL">Individual</option>
                </select>
                <input className="engagament-form__elements--category" 
                placeholder="categorise - creative, professional, service, research, educational, ....."
                {...register("engagementPreference")} />
                <label>Engagement Type</label>
                <select {...register("engagementType")}>
                    <option value="FULLTIME">Full Time</option>
                     <option value="PARTTIME">Part Time</option>
                     <option value="INDIVIDUAL">Week Ends</option>
                     <option value="WEEKDAYS">Week Days</option>
                     <option value="PROJECT">Project Based</option>
                     <option value="EVENT">Event Based</option>
                </select>
                <input className="engagament-form__input" placeholder="Enter title" {...register("title", { required: true, maxLength:30 })} />
                <input className="engagament-form__input" placeholder="Describe little more" {...register("title", { required: true, maxLength:300})} />
                <label>Remuneration Option</label>
                <select placeholder="Remuneration Preference" {...register("remuneration")}>
                    <option value="PAID">Paid Engagemnt</option>
                     <option value="PROBONO">Probono</option>
                </select>
                <input className="engagament-form__input" placeholder="Enter Contact Name" {...register("contactName", { required: true, maxLength:50 })} />
                <input className="engagament-form__input" placeholder="Enter Contact Email" {...register("contactEmail", { required: true, maxLength:50 })} />
                </div>
                
                <input type="submit" onSubmit={handleSubmit(onSubmit)}/>

            </form>  
        

    
    )
}

export default NewEngagement


