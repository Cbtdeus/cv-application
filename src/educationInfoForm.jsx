export default function EducationInfoForm({data,onChange,onClick}) {


return <div className="info-card">
<h1>Education</h1>
<label>Degree<br/>
      <input value={data.degree} type="text" onChange={(event) =>
       onChange({...data,degree:event.target.value})
      } />
   </label>
   <br/>
   <label>Institution<br/>
      <input value={data.institution} type="text" onChange={(event) =>
      onChange  ({...data,institution:event.target.value})
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