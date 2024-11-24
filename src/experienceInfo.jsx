import TextField from "./textField"

export default function ExperienceInfo() {
    return <form className="infoBlock">
    <h2>Basic Information</h2>
    < TextField label = "Company" />
    < TextField label = "Position" />
    < TextField label = "Description" />
    < TextField label = "DateStart" />
    < TextField label = "DateEnd" />
    </form>
}