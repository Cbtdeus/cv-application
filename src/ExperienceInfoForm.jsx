import InputField from "./InputField"

export default function ExperienceInfoForm({data,setter,onSubmit}) {
    return <form onSubmit={onSubmit}>
    <InputField label="Company Name"  type="text" value={data.place} onChange={
        (e) => setter({...data,place:e.target.value})}/>
    <InputField label="Position"  type="text" value={data.position} onChange={
        (e) => setter({...data,position:e.target.value})}/>
    <InputField label="Location"  type="text" value={data.location} onChange={
        (e) => setter({...data,location:e.target.value})}/>
    <InputField label="Job Description"  type="textarea" value={data.description} onChange={
        (e) => setter({...data,description:e.target.value})}/>
      <input type="submit" value="save" />
    </form>
}