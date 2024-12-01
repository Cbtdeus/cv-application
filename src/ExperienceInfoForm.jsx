import InputField from "./InputField"

export default function ExperienceInfoForm({data,setter}) {
    return <form>
    <InputField label="Company Name" data={data.place} type="text" value={data.place} onChange={
        (e) => setter({...data,place:e.target.value})}/>
    
    </form>
}