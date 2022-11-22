import './styles.css'

const InputField = ({ type, textLabel, placeholder, onChange, value }) => {
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (  
    <div className='input-field'>
      <label className="label">
        {textLabel}
      </label>

      <input 
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  )
}

export default InputField
