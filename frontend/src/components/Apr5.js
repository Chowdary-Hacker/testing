import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Apr5(){
    const [regcheck, setRegCheck] = useState(false);
    const [alrcheck, setAlrCheck] = useState(false);
    const [fail, setFail] = useState(false);
    const [name, setName] = useState();
    const [pass, setPass] = useState();
    useEffect(() => {
        const handleChange = () => {
          if (regcheck !== false) {
            const timeout1 = setTimeout(() => {
              setRegCheck(false);
            }, 5000);
            return () => clearTimeout(timeout1);
          }
    
          if (alrcheck !== false) {
            const timeout1 = setTimeout(() => {
              setAlrCheck(false);
            }, 5000);
            return () => clearTimeout(timeout1);
          }

          if (fail !== false) {
            const timeout2 = setTimeout(() => {
              setFail(false);
            }, 5000);
            return () => clearTimeout(timeout2);
          }
        };
    
        handleChange();
      }, [regcheck, fail, alrcheck]);
    let post = () =>{
      axios.post('http://localhost:3000/reg', {name:""+name+"",pass:""+pass+""})
      .then(res=>res.status)
      .then(status=>{if(status===201){setRegCheck(true);}else{setAlrCheck(true);}});
    }
    let log = () =>{
        axios.post('http://localhost:3000/log', {name:""+name+"",pass:""+pass+""})
        .then(res=>res.status)
        .then(status=>{if(status===201){window.location.href = '/Home'}else{setFail(true)}});
    }
return(<div>
    <h1>Simple register and authentication page</h1>
    Name :  <input type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
    password :  <input type="text" placeholder="Enter password" value={pass} onChange={e => setPass(e.target.value)}/>
    <button onClick={post}>Register</button>
    <button onClick={log}>Login</button>
    {regcheck && <h2>Successfully registered in our database..</h2> }
    {alrcheck && <h2>Already name has taken</h2>}
    {fail && <h2>Authentication failed..</h2>}
</div>);
}
export default Apr5;