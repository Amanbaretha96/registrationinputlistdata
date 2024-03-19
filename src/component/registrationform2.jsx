import { useState } from "react";

const Registrationform2 = () => {
  const initialstate = {
    name: "",
    email: "",
    password: "",
  };
  const [candidate, setCandidate] = useState(initialstate);
  console.log(candidate);
  const [allcandidate,setAllcandidate] = useState([])
  console.log(allcandidate)
  const HandelChange = (e) => {
    const { name, value } = e.target;
    setCandidate({
      ...candidate,
      [name]: value,
    });
  };
  const HandelSubmit = (event) => {
    event.preventDefault();
    setAllcandidate({
        ...allcandidate,candidate
    })
  };
  const {name,email,password} = candidate
  return (
    <div>
      <form onSubmit={HandelSubmit}>
        <div>
          <input
            value={name}
            name="name"
            type="text"
            placeholder="enter your name"
            onChange={HandelChange}
          />
        </div>
        <div>
          <input
            value={email} 
            name="email"
            type="email"
            placeholder="enter your email"
            onChange={HandelChange}
          />
        </div>
        <div>
          <input
          value={password}
            name="password"
            type="password"
            placeholder="enter your password"
            onChange={HandelChange}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};
export default Registrationform2;
