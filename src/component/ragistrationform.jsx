import { useState } from "react";

const Ragistrationform = () => {
  const initialstate = {
    name: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialstate);
  console.log(data, 123);
  const [alluserdetail, setAlluserdetail] = useState([]);
  console.log(alluserdetail, 456);
  const HandelChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const HandelSubmit = (event) => {
    event.preventDefault();
    setAlluserdetail([...alluserdetail, data]);
  };
  const { name, email, password } = data;
  return (
    <>
      <h1>registrations form </h1>
      <form onSubmit={HandelSubmit}>
        <div>
          <input
            value={name}
            type="text"
            name="name"
            placeholder="enter your name"
            onChange={HandelChange}
          />
        </div>
        <div>
          <input
            value={email}
            type="email"
            name="email"
            placeholder="enter your email"
            onChange={HandelChange}
          />
        </div>
        <div>
          <input
            value={password}
            type="password"
            name="password"
            placeholder="enter your password"
            onChange={HandelChange}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>

      <div>
        <table>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>password</th>
          </tr>
          {alluserdetail?.map((value, i) => (
            <tr key={i}>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.password}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
export default Ragistrationform;
