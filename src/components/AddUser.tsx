import { useState } from "react";

interface User {
  img: string;
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  birthday: string;
}
export function AddUser(): JSX.Element {
  const [data, setData] = useState<User>();
  const [show, setShow] = useState(true);
  const [showUser, setShowUser] = useState(false);
  function genUser() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((res) =>
        setData({
          name: res.results[0].name.last,
          age: res.results[0].dob.age,
          gender: res.results[0].gender,
          email: res.results[0].email,
          img: res.results[0].picture.large,
          phone: res.results[0].cell,
          birthday: res.results[0].dob.date,
        })
      );
    setShow(false);
    setShowUser(true);
  }
  const userStyle = {
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
  };
  const botButtonStyle = {
    borderRadius: "10px",
    backgroundColor: "#75F336",
    border: "none",
  };
  return (
    <>
      {show ? <button onClick={genUser}>Generate Random User</button> : null}
      {showUser ? (
        <div>
          <div style={userStyle}>
            <img src={data?.img} style={{ width: "400px" }} />
            <div style={{ marginLeft: "30px" }}>
              <p>name:{data?.name}</p>
              <p>age:{data?.age}</p>
              <p>gender:{data?.gender}</p>
              <p>email:{data?.email}</p>
              <p>phone:{data?.phone}</p>
              <p>birthday:{data?.birthday}</p>
            </div>
          </div>
          <div
            className="d-flex m-5"
            style={{ justifyContent: "space-evenly" }}
          >
            <button style={botButtonStyle}>Add user to List</button>
            <button style={botButtonStyle}>Generate New</button>
            <button style={botButtonStyle}>Cancel</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
