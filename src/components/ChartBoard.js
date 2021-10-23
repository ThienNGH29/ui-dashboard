import PropTypes from "prop-types";
import React, { useState } from "react";
import Chart from "react-apexcharts";

ChartBoard.propTypes = {
  classes: PropTypes.string,
};

ChartBoard.defaultProps = {
  classes: "col-12 col-lg-8",
};

function ChartBoard({ classes }) {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23,
      ],
    },
    stroke: {
      curve: "smooth",
    },
  });
  const [series, setSeries] = useState([
    {
      name: "Number of sent emails",
      data: [
        55, 37, 37, 14, 49, 21, 39, 17, 9, 31, 51, 51, 43, 22, 17, 34, 55, 46,
        14, 13, 51, 11, 8, 51,
      ],
    },
    {
      name: "Number of interactions",
      data: [
        4, 8, 56, 45, 27, 46, 52, 35, 13, 34, 25, 11, 7, 9, 11, 21, 9, 41, 43,
        18, 30, 33, 31, 11,
      ],
    },
  ]);

  return (
    <div className={classes}>
      <div className="box">
        <div className="box-header">
          <h3>Event Overview</h3>
          <ul className="chart-switcher">
            <li>
              <a href="/" className="active">
                Day
              </a>
            </li>
            <li>
              <a href="/">Week</a>
            </li>
          </ul>
        </div>
        <Chart className="mb-2" options={options} series={series} type="line" />
      </div>
    </div>
  );
}

export default ChartBoard;
