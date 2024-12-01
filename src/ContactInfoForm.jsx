import InputField from "./InputField"

export default function ContactInfoForm({data,setter}) {

    return <>
    <form>
        <InputField label="Full name" type="text" value={data.name} onChange={
            (e) => setter({...data,name:e.target.value})}/>
        <InputField label="Email" type="text" value={data.email} onChange={
            (e) => setter({...data,email:e.target.value})}/>
        <InputField label="Phone number" type="text" value={data.phone} onChange={
            (e) => setter({...data,phone:e.target.value})}/>
        <InputField label="Address" type="text" value={data.address} onChange={
            (e) => setter({...data,address:e.target.value})}/>
            {/* TODO: assign proper types */}
    </form>
    </>
}