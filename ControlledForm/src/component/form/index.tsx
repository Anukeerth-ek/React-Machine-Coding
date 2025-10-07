import { useState } from 'react'
import './style.css'
const Form = () => {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleFormValidation = (e:any) => {
        const { name, value } = e.target
        
        setFormData((prev) => ({
            ...prev, [name]: value
        }))

        if (name === 'email') {
            setErrors((prev) => ({
               ...prev, email: value.includes("@") ? " " : "please add @ "
            }))
        }

        if (name === 'password') {
            if (name.length < 6) {
          
                setErrors((prev) => ({
                        ...prev, password: value.length > 6 ? "" : "password should have more than 6 characters"
                    }))
            }
        }
    }
     const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!errors.email && !errors.password) {
      console.log("Form submitted ✅", formData);
    } else {
      console.log("Fix validation errors ❌");
    }
  };
  return (
      <div>
          <div>
              <form className="form"  onSubmit={handleSubmit}>
                  <h2>Login Form</h2>
                  <input name="name" onChange={handleFormValidation} placeholder='name' type="text" />
                  <input name="email"  onChange={handleFormValidation} placeholder="Email" type="email" />
                  {errors.email && <p>{ errors.email}</p>}
                  <input name="password"  onChange={handleFormValidation} placeholder="password" type="password" />
                  {errors.password && <p>{errors.password}</p>}
                   <button type="submit">Submit</button>
              </form>
          </div>

    </div>
  )
}

export default Form