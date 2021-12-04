
import React from "react";
import Chartist from "react-chartist";
import ChartistTooltip from 'chartist-plugin-tooltips-updated';

export const SalesValueChart = ({data: seriesData}) => {
  const data = {
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    series: [seriesData]
  };

  const options = {
    low: 0,
    showArea: true,
    fullWidth: true,
    chartPadding: {
      right: 40,
      left: 40
    },
    axisX: {
      position: 'end',
      showGrid: true,
      showLabel: true
    },
    axisY: {
      // On the y-axis start means left and end means right
      showGrid: true,
      showLabel: true,
      labelInterpolationFnc: value => `${value / 1000000 >= 1 ? `${value / 1000000}mln` : `${value / 1000}k`}`
    }
  };

  const plugins = [
    ChartistTooltip()
  ]

  return (
    <Chartist data={data} options={{...options, plugins}} type="Line" className=" ct-double-octave" />
  );
};

export const CircleChart = (props) => {
  const { series = [], donutWidth = 20 } = props;
  const sum = (a, b) => a + b;

  const options = {
    low: 0,
    high: 8,
    donutWidth,
    donut: true,
    donutSolid: true,
    fullWidth: false,
    showLabel: false,
    labelInterpolationFnc: value => `${Math.round(value / series.reduce(sum) * 100)}%`,
  }

  const plugins = [
    ChartistTooltip()
  ]

  return (
    <Chartist data={{ series }} options={{...options, plugins}} type="Pie" className="ct-golden-section" />
  );
};

export const BarChart = (props) => {
  const { labels = [], series = [], chartClassName = "ct-golden-section" } = props;
  const data = { labels, series };

  const options = {
    low: 0,
    showArea: true,
    axisX: {
      position: 'end'
    },
    axisY: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  };

  const plugins = [
    ChartistTooltip()
  ]

  return (
    <Chartist data={data} options={{...options, plugins}} type="Bar" className={chartClassName} />
  );
};
