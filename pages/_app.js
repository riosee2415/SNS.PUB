import React from "react";
import AppHeader from "../components/AppHeader";
import "antd/dist/antd.css";

const AppShell = ({ Component }) => {
  return (
    <>
      <AppHeader />
      <Component />
    </>
  );
};

export default AppShell;
