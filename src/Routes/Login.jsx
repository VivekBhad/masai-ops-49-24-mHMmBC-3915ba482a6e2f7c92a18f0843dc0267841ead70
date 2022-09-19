import {useContext, useState} from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate,Link } from "react-router-dom";


function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  const {loginUser} = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();

    const payload ={
      email,
      password
    }

    fetch("https://reqres.in/api/login",{
      method:"POST",
      headers:{
      "Content-Type" : "application/json"
      },
      body:JSON.stringify(payload)
    }).then((res)=>{
      return res.json()
    }).then ((res)=>{
      console.log(res.token)
      loginUser(res.token);
      navigate("/dashboard")
    })
  }



  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" value={email} 
            onChange={(e)=>setEmail(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
