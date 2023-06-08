import React from "react";
import "./App.css";
import { HomeLeft } from "./components/Homeleft/HomeLeft";
import {HomeMid} from   "./components/Homemid/HomeMid"
import { HomeRight } from "./components/Homeright/HomeRight"
export function App() {
  return (
    <div className="main">
      <HomeLeft classname="left" />
      <HomeMid className="mid" />
      <HomeRight className="right" />
    </div>
  );
}
