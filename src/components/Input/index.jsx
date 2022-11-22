import "./styles.css"

const SearchInput = ({ type, placeholder, value, onChange, xmlns, viewBox, d }) => {
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div className='input-container'> 
      <div className='input-login'>
        <div>
          <svg xmlns={xmlns} viewBox={viewBox}>
            {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
            <path d={d}/>
          </svg>
        </div>

        <input 
          type={type} 
          placeholder={placeholder}
          onChange={handleChange} 
          value={value} 
        />
      </div>
    </div>
  );
}

export default SearchInput
