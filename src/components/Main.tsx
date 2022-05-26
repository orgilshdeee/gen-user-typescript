import { useEffect, useState } from "react";

export function Main(): JSX.Element {
  const [data, setData] = useState<any>();
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((res) => console.log(res.results[0].gender));
  }, []);
  return <>Hello I'm Main page</>;
}
