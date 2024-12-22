import { assign } from 'lodash';
import { useTheme } from 'tamagui';
// *
// * Colors
// *
const colors1 = ['#252525', '#525252', '#737373', '#969696', '#bdbdbd', '#d9d9d9', '#f0f0f0'];

const charcoal = '#252525';
// const grey = '#969696';
// *
// * Typography
// *
const sansSerif = "'Gill Sans', 'Seravek', 'Trebuchet MS', sans-serif";
const letterSpacing = 'normal';
const fontSize = 12;

// *
// * Layout
// *
const baseProps = {
  colorScale: colors1,
};
// *
// * Strokes
// *
const strokeLinecap = 'round';
const strokeLinejoin = 'round';

const VictoryNativeTheme = (props: any) => {
  const { pie, axis } = props;
  const { oceanBoatBlue100: { val: oceanBoatBlue100 } } = useTheme();

  // *
  // * Labels
  // *
  const baseLabelStyles = {
    fontFamily: sansSerif,
    fontSize,
    letterSpacing,
    padding: 10,
    fill: 'transparent',
    stroke: 'transparent',
  };
  const centeredLabelStyles = assign({ textAnchor: 'middle' }, baseLabelStyles);

  return {
    axis: assign(
      {
        style: {
          axis: {
            stroke: axis ? 'transparent' : 'none',
            strokeWidth: 1,
            strokeLinecap,
            strokeLinejoin,
          },
          axisLabel: assign({}, centeredLabelStyles, {
            padding: 10,
          }),
          grid: {
            fill: 'none',
            stroke: 'none',
            pointerEvents: 'painted',
          },
          ticks: {
            fill: 'transparent',
            size: 1,
            stroke: 'transparent',
          },
          tickLabels: baseLabelStyles,
        },
        fixLabelOverlap: true,
      },
      baseProps,
    ),

    tooltip: {
      style: {
        ...baseLabelStyles,
        fill: 'grey',
        fontWeight: 600,
      },
      flyoutStyle: { fill: 'white', stroke: oceanBoatBlue100, strokeWidth: 1 },
      flyoutPadding: { left: 10, right: 20 },
      pointerLength: 20,
      constrainToVisibleArea: true,
    },

    legend: {
      gutter: 20,
      orientation: 'horizontal',
      titleOrientation: 'top',
      style: {
        labels: {
          ...baseLabelStyles,
        },
        title: assign({}, baseLabelStyles, { padding: 5 }),
      },
    },

    area: assign(
      {
        style: {
          labels: baseLabelStyles,
        },
      },
      baseProps,
    ),
    bar: assign(
      {
        style: {
          data: {
            fill: oceanBoatBlue100,
          },
          labels: baseLabelStyles,
        },
        barRatio: 0.7,
      },
      baseProps,
    ),

    chart: baseProps,

    errorbar: assign(
      {
        borderWidth: 8,
        style: {
          data: {
            fill: 'transparent',
            stroke: charcoal,
            strokeWidth: 2,
          },
          labels: baseLabelStyles,
        },
      },
      baseProps,
    ),
    group: assign(
      {
        colorScale: colors1,
      },
      baseProps,
    ),
    line: assign(
      {
        style: {
          data: {
            stroke: oceanBoatBlue100,
          },
        },
      },
      baseProps,
    ),
    scatter: assign(
      {
        style: {
          data: {
            fill: oceanBoatBlue100,
          },
        },
        size: 3,
      },
      baseProps,
    ),
    pie: {
      ...pie,
    },

    stack: assign(
      {
        colorScale: colors1,
      },
      baseProps,
    ),
  };
};

export default VictoryNativeTheme;
