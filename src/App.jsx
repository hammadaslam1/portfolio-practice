
import "./App.css";
import { useState } from "react";

function App() {
  
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

  return (
    <div className="App">
      <form action="" className='form'>
        <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={()=>alert(email+' '+ name)}>submit</button>
      </form>
    </div>
  );
}

export default App;
