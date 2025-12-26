import React, { useState } from 'react'
export default function Register(){


  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [gender, setGender] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState('general staff');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleFirstnameChange(event) {
    setFirstname(event.target.value);
  }

  function handleLastnameChange(event) {
    setLastname(event.target.value);
  }

  function handleGenderChange(event) {
    setGender(event.target.value);
  }

  function handleRoleChange(event) {
    setRole(event.target.value);
  }

  function onCheckboxClick(event){
    const checked = event.target.checked;
    const value = event.target.value;

    console.log("Checked: ", checked);
    console.log("Value: ", value);

    if(checked){
      setHobbies((prev)=>{
        return [...prev, value];
      })
    } else {
      setHobbies((prev)=>{
        return prev.filter((item) => {
          return item != value;
        })
      })
    }
  }

  return (
    <div className="container">
      <div className="form-group">
        <label className="form-label">Username</label>
        <input 
          type="text" 
          value={username} 
          onChange={handleUsernameChange} 
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Firstname</label>
        <input 
          type="text" 
          value={firstname} 
          onChange={handleFirstnameChange} 
        />
      </div>

      <div className="form-group">
        <label className="form-label">Lastname</label>
        <input 
          type="text" 
          value={lastname} 
          onChange={handleLastnameChange} 
        />
      </div>

      <div className="form-group">
        <label className="form-label">Gender</label>
        <div>
          <label>
            <input 
              type="radio" 
              name="gender" 
              value="male" 
              checked={gender === 'male'} 
              onChange={handleGenderChange} 
            /> Male
          </label>
        </div>
        <div>
          <label>
            <input 
              type="radio" 
              name="gender" 
              value="female" 
              checked={gender === 'female'} 
              onChange={handleGenderChange} 
            /> Female
          </label>
        </div>
        <div>
          <label>
            <input 
              type="radio" 
              name="gender" 
              value="other" 
              checked={gender === 'other'} 
              onChange={handleGenderChange} 
            /> Other
          </label>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Hobbies</label>
        <div>
          <label>
            <input 
              type="checkbox" 
              value="Music" 
              checked={hobbies.includes('Music')} 
              onChange={onCheckboxClick} 
            /> Music
          </label>
        </div>
        <div>
          <label>
            <input 
              type="checkbox" 
              value="Movies" 
              checked={hobbies.includes('Movies')} 
              onChange={onCheckboxClick} 
            /> Movies
          </label>
        </div>
        <div>
          <label>
            <input 
              type="checkbox" 
              value="Plastic Model" 
              checked={hobbies.includes('Plastic Model')} 
              onChange={onCheckboxClick} 
            /> Plastic Model
          </label>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Role</label>
        <select value={role} onChange={handleRoleChange}>
          <option value="general staff">General Staff</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <hr />

      <div className="display-section">
        <div>Username: <span className="display-value">{username}</span></div>
        <div>Firstname: <span className="display-value">{firstname}</span></div>
        <div>Lastname: <span className="display-value">{lastname}</span></div>
        <div>Gender: <span className="display-value">{gender}</span></div>
        <div>Hoobies: <span className="display-value">{hobbies.join(', ')}</span></div>
        <div>Role: <span className="display-value">{role}</span></div>
      </div>
    </div>
  )
}

