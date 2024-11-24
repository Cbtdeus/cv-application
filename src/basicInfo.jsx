import TextField from "./textField";

export default function BasicInfo() {
    return <form className="infoBlock">
    <h2>Basic Information</h2>
    < TextField label = "Full Name" />
    < TextField label = "Email" />
    < TextField label = "Phone" />
    </form>
}

