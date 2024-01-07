import React, { useContext } from "react";
import MyContext from "../MyContext";

function Home() {
  const { screenWidth } = useContext(MyContext)!;
  return <div>{screenWidth}</div>;
}

export default Home;
