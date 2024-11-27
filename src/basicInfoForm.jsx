export default function BasicInfoForm({data,onChange}) {
   

return <div className="info-card">
<h1>Basic Information</h1>
   <label> Full Name<br/>
      <input value={data.name} type="text" onChange={(event) =>
      onChange({...data,name:event.target.value})} />
   </label>
   <br/>
   <label> Email<br/>
      <input value={data.email} type="text" onChange={(event) =>
      onChange({...data,email:event.target.value})} />
   </label>
   <br/>
   <label> Phone Number<br/>
      <input type="tel" value={data.phone}  onChange={(event) =>
      onChange({...data,phone:event.target.value})} />
   </label>
</div>
}