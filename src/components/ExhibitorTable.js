import React from "react";
import PropTypes from "prop-types";
import {
  BsFillEnvelopeFill,
  BsChevronLeft,
  BsChevronBarLeft,
  BsChevronRight,
  BsChevronBarRight,
} from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import RightEditmodal from "./RightEditmodal";

ExhibitorTable.propTypes = {
  classes: PropTypes.string,
};

ExhibitorTable.defaultProps = {
  classes: "col-12",
};

function ExhibitorTable({ classes }) {
  return (
    <div className={classes}>
      <div className="box">
        <div class="table-responsive table-height">
          <table class="table table-striped table-borderless">
            <thead>
              <tr>
                <th scope="col">Visitor</th>
                <th scope="col">Website</th>
                <th scope="col">Industry</th>
                <th scope="col">Brochure</th>
                <th scope="col">QR code</th>
                <th scope="col">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="avatar-wrap">
                    <span className="text-primary">RA</span>
                    <div>
                      <p>Viatick</p>
                      <small className="avatar-mail">
                        <BsFillEnvelopeFill className="me-1" />
                        thien.ngh2905@gmail.com
                      </small>
                    </div>
                  </div>
                </td>
                <td>www.company1.com</td>
                <td>Aerospace</td>
                <td>
                  <a href="/">Brochure1.png</a>
                </td>
                <td>
                  <img
                    src="/qr-small.png"
                    alt="QR Code"
                    width="70"
                    height="70"
                    className="img-fluid"
                  />
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    @Sep 7, 2021 10:20:22
                    <RightEditmodal />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="avatar-wrap">
                    <span className="text-danger">RA</span>
                    <div>
                      <p>Viatick</p>
                      <small className="avatar-mail">
                        <BsFillEnvelopeFill className="me-1" />
                        thien.ngh2905@gmail.com
                      </small>
                    </div>
                  </div>
                </td>
                <td>www.company1.com</td>
                <td>Aerospace</td>
                <td>
                  <a href="/">Brochure1.png</a>
                </td>
                <td>
                  <img
                    src="/qr-small.png"
                    alt="QR Code"
                    width="70"
                    height="70"
                    className="img-fluid"
                  />
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    @Sep 7, 2021 10:20:22
                    <RightEditmodal />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="avatar-wrap">
                    <span className="text-success">RA</span>
                    <div>
                      <p>Viatick</p>
                      <small className="avatar-mail">
                        <BsFillEnvelopeFill className="me-1" />
                        thien.ngh2905@gmail.com
                      </small>
                    </div>
                  </div>
                </td>
                <td>www.company1.com</td>
                <td>Aerospace</td>
                <td>
                  <a href="/">Brochure1.png</a>
                </td>
                <td>
                  <img
                    src="/qr-small.png"
                    alt="QR Code"
                    width="70"
                    height="70"
                    className="img-fluid"
                  />
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    @Sep 7, 2021 10:20:22
                    <RightEditmodal />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="avatar-wrap">
                    <span className="text-info">RA</span>
                    <div>
                      <p>Viatick</p>
                      <small className="avatar-mail">
                        <BsFillEnvelopeFill className="me-1" />
                        thien.ngh2905@gmail.com
                      </small>
                    </div>
                  </div>
                </td>
                <td>www.company1.com</td>
                <td>Aerospace</td>
                <td>
                  <a href="/">Brochure1.png</a>
                </td>
                <td>
                  <img
                    src="/qr-small.png"
                    alt="QR Code"
                    width="70"
                    height="70"
                    className="img-fluid"
                  />
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    @Sep 7, 2021 10:20:22
                    <RightEditmodal />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="avatar-wrap">
                    <span className="text-warning">RA</span>
                    <div>
                      <p>Viatick</p>
                      <small className="avatar-mail">
                        <BsFillEnvelopeFill className="me-1" />
                        thien.ngh2905@gmail.com
                      </small>
                    </div>
                  </div>
                </td>
                <td>www.company1.com</td>
                <td>Aerospace</td>
                <td>
                  <a href="/">Brochure1.png</a>
                </td>
                <td>
                  <img
                    src="/qr-small.png"
                    alt="QR Code"
                    width="70"
                    height="70"
                    className="img-fluid"
                  />
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    @Sep 7, 2021 10:20:22
                    <RightEditmodal />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="avatar-wrap">
                    <span className="text-danger">RA</span>
                    <div>
                      <p>Viatick</p>
                      <small className="avatar-mail">
                        <BsFillEnvelopeFill className="me-1" />
                        thien.ngh2905@gmail.com
                      </small>
                    </div>
                  </div>
                </td>
                <td>www.company1.com</td>
                <td>Aerospace</td>
                <td>
                  <a href="/">Brochure1.png</a>
                </td>
                <td>
                  <img
                    src="/qr-small.png"
                    alt="QR Code"
                    width="70"
                    height="70"
                    className="img-fluid"
                  />
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    @Sep 7, 2021 10:20:22
                    <RightEditmodal />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="avatar-wrap">
                    <span className="text-primary">RA</span>
                    <div>
                      <p>Viatick</p>
                      <small className="avatar-mail">
                        <BsFillEnvelopeFill className="me-1" />
                        thien.ngh2905@gmail.com
                      </small>
                    </div>
                  </div>
                </td>
                <td>www.company1.com</td>
                <td>Aerospace</td>
                <td>
                  <a href="/">Brochure1.png</a>
                </td>
                <td>
                  <img
                    src="/qr-small.png"
                    alt="QR Code"
                    width="70"
                    height="70"
                    className="img-fluid"
                  />
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    @Sep 7, 2021 10:20:22
                    <RightEditmodal />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="avatar-wrap">
                    <span className="text-warning">RA</span>
                    <div>
                      <p>Viatick</p>
                      <small className="avatar-mail">
                        <BsFillEnvelopeFill className="me-1" />
                        thien.ngh2905@gmail.com
                      </small>
                    </div>
                  </div>
                </td>
                <td>www.company1.com</td>
                <td>Aerospace</td>
                <td>
                  <a href="/">Brochure1.png</a>
                </td>
                <td>
                  <img
                    src="/qr-small.png"
                    alt="QR Code"
                    width="70"
                    height="70"
                    className="img-fluid"
                  />
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    @Sep 7, 2021 10:20:22
                    <RightEditmodal />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="avatar-wrap">
                    <span className="text-danger">RA</span>
                    <div>
                      <p>Viatick</p>
                      <small className="avatar-mail">
                        <BsFillEnvelopeFill className="me-1" />
                        thien.ngh2905@gmail.com
                      </small>
                    </div>
                  </div>
                </td>
                <td>www.company1.com</td>
                <td>Aerospace</td>
                <td>
                  <a href="/">Brochure1.png</a>
                </td>
                <td>
                  <img
                    src="/qr-small.png"
                    alt="QR Code"
                    width="70"
                    height="70"
                    className="img-fluid"
                  />
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    @Sep 7, 2021 10:20:22
                    <RightEditmodal />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pagination-wrap">
          <p>Showing 1 to 10 of 12 items</p>
          <div className="pagination-inner">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="/">
                    <BsChevronBarLeft />
                  </a>
                </li>
                <li className="page-item disabled">
                  <a className="page-link" href="/">
                    <BsChevronLeft />
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="/">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    <BsChevronBarRight />
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    <BsChevronRight />
                  </a>
                </li>
              </ul>
            </nav>
            <Dropdown>
              <Dropdown.Toggle variant="outlined-info">10</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/">15</Dropdown.Item>
                <Dropdown.Item href="/">20</Dropdown.Item>
                <Dropdown.Item href="/">25</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExhibitorTable;
