export default function InputField({label,type,value,onChange}) {
    return <div className="input-container"> 
    <label>{label}
    {}
     {(type === "textarea") ? <textarea value={value} onChange={onChange}></textarea>
      : <input type={type} value={value} onChange={onChange} /> }
    </label>
    </div>
}
/* todo:text field for job description */