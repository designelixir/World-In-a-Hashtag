/**
 *
 * PieChart
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as d3 from 'd3';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { pie, arc } from 'd3-shape';
import { tip } from 'd3-tip';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
/* eslint-disable react/prefer-stateless-function */
class PieChart extends React.PureComponent {
  constructor(props) {
    super(props);
    // this.colorScale = scaleOrdinal(schemeCategory10);
  }
  render() {
    // //var data = [5, 2, 7, 1, 1, 3, 4, 9];
    // var width = 100;
    // var height = 100;
    // var radius = (Math.min(width, height) * 0.9) / 2;
    // // Centers the pie chart
    // let x = width / 2;
    // let y = height / 2;
    // let arcPlot = arc()
    //   .innerRadius(0)
    //   .outerRadius(radius);
    // let piePlot = pie()
    //   .value(d => d.doc_count)
    //   .sort(null);
    const height = 400;
    const width = 400;

    let pie = d3.pie()(this.props.data);

    return (
      // <div>
      //   <svg width="100%" height="100%" viewBox="-25 -25 150 150">
      //     {/* <Pie x={x} y={y} radius={radius} data={this.props.data} /> */}
      //     <g transform={`translate(${x}, ${y})`}>
      //       {/* Render a slice for each data point */}
      //       {piePlot(this.props.data).map((value, i) => {
      //         return (
      //           <g>
      //             <path
      //               key={i}
      //               d={arcPlot(value)}
      //               fill={this.colorScale(i)}
      //               onClick={() => console.log(value.data.key)}
      //             >
      //               <title font-size="0.5em">{value.data.key}</title>
      //             </path>
      //             <text
      //               transform={`translate(${arcPlot.centroid(value)})`}
      //               dy=".35em"
      //               textAnchor="middle"
      //               font-size="0.5em"
      //             >
      //               {value.data.key ? (
      //                 <title>{value.data.key}</title>
      //               ) : (
      //                 console.log('No data')
      //               )}
      //               {value.data.doc_count}
      //             </text>
      //           </g>
      //         );
      //       })}
      //     </g>
      //   </svg>
      // </div>

      <svg height={height} width={width}>
        <g transform={`translate(${width / 2},${height / 2})`}>
          <Slice pie={pie} />
        </g>
      </svg>
    );
  }
}
const Slice = props => {
  let { pie } = props;

  let arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(100);

  let interpolate = d3.interpolateRgb('#eaaf79', '#bc3358');

  return pie.map((slice, index) => {
    let sliceColor = interpolate(index / (pie.length - 1));

    return <path d={arc(slice)} fill={sliceColor} />;
  });
};

PieChart.propTypes = {
  data: PropTypes.array,
};

export default PieChart;
