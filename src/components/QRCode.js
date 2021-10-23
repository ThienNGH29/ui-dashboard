import React from "react";
import PropTypes from "prop-types";
import { BsFillCloudArrowDownFill } from "react-icons/bs";

QRCode.propTypes = {
  classes: PropTypes.string,
};

QRCode.defaultProps = {
  classes: "col-12 col-lg-4",
};

function QRCode({ classes }) {
  return (
    <div className={classes}>
      <div className="box lg-size">
        <div className="box-header">
          <div className="title-with-image">
            <div className="ico-wrap">
              <img src="/qr.png" alt="" />
            </div>
            <h2>Company QR Code</h2>
          </div>
          <ul className="chart-switcher">
            <li>
              <a href="/" className="active">
                <BsFillCloudArrowDownFill className="me-2" />
                Export
              </a>
            </li>
          </ul>
        </div>
        <div className="qr-wrap">
          <div className="qr-wrap-inner">
            <img src="/qr-big.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QRCode;
