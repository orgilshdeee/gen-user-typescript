import { type } from "os";
import { useEffect, useState } from "react";
import { HomePageContent } from "./HomePageContent";
import { User, selectType } from "../types/type";

// interface User {
//   img: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   birthday: string;
//   address: string;
//   phone: string;
//   password: string;
// }
// type names =
//   | "name"
//   | "email address"
//   | "birthday"
//   | "address"
//   | "phone number"
//   | "password";

export function Main(): JSX.Element {
  const [data, setData] = useState<User>();
  const icons = [
    "name",
    "email address",
    "birthday",
    "address",
    "phone number",
    "password",
  ];
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((res) =>
        setData({
          img: res.results[0].picture.large,
          firstName: res.results[0].name.first,
          lastName: res.results[0].name.last,
          email: res.results[0].email,
          birthday: res.results[0].dob.date,
          address: res.results[0].location.street,
          phone: res.results[0].phone,
          password: res.results[0].login.password,
        })
      );
  }, []);
  const imgStyle = {
    width: "50px",
    margin: "20px",
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20vh",
      }}
    >
      <div>
        <img
          src={data?.img}
          alt=""
          style={{
            borderRadius: "70px",
            border: "1px solid grey",
            padding: "5px",
            marginBottom: "20px",
          }}
        />
      </div>

      {icons.map((icon, i) => {
        return <HomePageContent data={data} names={icon} />;
      })}
      {/* <div className="userInfo">
        <p style={{ display: "flex", justifyContent: "center" }}>
          Hi, My name is
        </p>
        <h2>{`${data?.firstName} ${data?.lastName}`}</h2>
      </div>
      <div className="d-flex justify-content-evenly">
        <img src="/icons/user-411.svg" alt="" style={imgStyle} />
        <img src="/icons/mail-norm.svg" alt="" style={imgStyle} />
        <img src="/icons/date-63.svg" alt="" style={imgStyle} />
        <img src="/icons/location-52.svg" alt="" style={imgStyle} />
        <img src="/icons/phone-109.svg" alt="" style={imgStyle} />
        <img src="/icons/password-18.svg" alt="" style={imgStyle} />
      </div> */}
    </div>
  );
}
