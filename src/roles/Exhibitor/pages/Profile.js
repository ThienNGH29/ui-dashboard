import React from "react";
import ChangePassword from "../../../components/ChangePassword";
import CompanyProfile from "../../../components/CompanyProfile";
import QRCode from "../../../components/QRCode";

function ExProfile(props) {
  return (
    <>
      <QRCode />
      <CompanyProfile />
      <ChangePassword />
    </>
  );
}

export default ExProfile;
