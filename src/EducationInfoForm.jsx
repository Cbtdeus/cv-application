import InputField from "./InputField"

export default function EducationInfoForm({data,setter,onSubmit}) {

    return <form onSubmit={onSubmit}>
    <InputField label="Institution" type="text" value={data.place} onChange={
            (e) => setter({...data,place:e.target.value})} />
    <InputField label="Degree" type="text" value={data.degree} onChange={
            (e) => setter({...data,degree:e.target.value})} />  
            {/* DateFields go here */}
    <InputField label="Location" type="text" value={data.location} onChange={
            (e) => setter({...data,location:e.target.value})} /> 
            <input type="submit" value="Save" />
    </form>
}