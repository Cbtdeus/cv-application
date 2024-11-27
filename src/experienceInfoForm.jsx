export default function  ExperienceInfoForm({data,onChange,onClick}) {
return <div className="info-card">
<h1>Work Experience</h1>
<label>Company<br/>
      <input value={data.company} type="text" onChange={(event) =>
       onChange({...data,company:event.target.value})
      } />
   </label>
   <br/>
   <label>Position<br/>
      <input value={data.position} type="text" onChange={(event) =>
      onChange  ({...data,position:event.target.value})
      } />
   </label>
   <br/>
   <label>Location<br/>
      <input value={data.location} type="text" onChange={(event) =>
      onChange  ({...data,location:event.target.value})
      } />
   </label>
   <br/>
   <label >Start Date <br/>
      <input type="date" value={data.startDate} onChange={(event) =>
      onChange  ({...data,startDate:event.target.value})} />
   </label>
   <br/>
   <label >End Date <br/>
      <input type="date" value={data.endDate} onChange={(event) =>
      onChange  ({...data,endDate:event.target.value})}  />
   </label>
   <br/>
   <button onClick={onClick}>Add</button>
   </div>
}