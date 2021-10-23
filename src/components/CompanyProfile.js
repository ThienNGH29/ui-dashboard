import React from "react";
import PropTypes from "prop-types";

CompanyProfile.propTypes = {
  classes: PropTypes.string,
};

CompanyProfile.defaultProps = {
  classes: "col-12 col-lg-8",
};

function CompanyProfile({ classes }) {
  return (
    <div className={classes}>
      <div className="box lg-size">
        <div className="box-header">
          <div className="title-with-image">
            <div className="ico-wrap">
              <img src="/pencil.png" alt="" />
            </div>
            <h2>Company Information</h2>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="form-floating mb-4">
                <input
                  id="company-name"
                  name="company-name"
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                />
                <label for="company-name" className="form-label">
                  Company Name
                </label>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="form-floating mb-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <label for="email" className="form-label">
                  Email
                </label>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="form-floating mb-4">
                <input
                  id="website"
                  name="website"
                  type="text"
                  className="form-control"
                  placeholder="Company Website"
                />
                <label for="website" className="form-label">
                  Company Website
                </label>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="form-floating mb-4">
                <select
                  aria-label="Industry"
                  className="form-select"
                  id="select-industry"
                >
                  <option>Aerospace</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label for="select-industry">Works with selects</label>
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label className="form-label" for="file-brochcure">
                  Brochure
                </label>
                <input
                  type="file"
                  id="file-brochcure"
                  className="form-control"
                ></input>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompanyProfile;
