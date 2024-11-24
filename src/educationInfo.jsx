import TextField from "./textField"

export default function EducationInfo() {
    return <form className="infoBlock">
    <h2>Basic Information</h2>
    < TextField label = "School" />
    < TextField label = "Degree" />
    < TextField label = "DateStart" />
    < TextField label = "DateEnd" />
    </form>
}