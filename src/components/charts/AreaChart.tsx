import {
  createChart,
  DeepPartial,
  SingleValueData,
  WhitespaceData,
  ChartOptions,
  SeriesOptionsCommon,
  AreaStyleOptions
} from 'lightweight-charts';
import { useEffect, useRef } from 'react';
import { Box, BoxProps } from 'theme-ui';
import { useTheme } from '../../hooks';

export type DataSerie = {
  data: SingleValueData[] | WhitespaceData[];
  styleOptions: DeepPartial<SeriesOptionsCommon & AreaStyleOptions>;
};

type AreaChartProps = {
  dataSeries: DataSerie[];
  chartOptions: DeepPartial<ChartOptions>;
  title?: string;
} & BoxProps;

export default function AreaChart({
  dataSeries,
  chartOptions,
  title,
  ...props
}: AreaChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>();
  const { theme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current?.clientWidth
      });
    };

    const chart = createChart(chartContainerRef.current || '', chartOptions);
    chart.timeScale().fitContent();

    for (const dataSerie of dataSeries) {
      const newSeries = chart.addAreaSeries({
        ...dataSerie.styleOptions
      });

      newSeries.setData(dataSerie.data);
    }

    if (title) {
      const prevTooltip = document.getElementById('tooltip-id');
      const node = document.getElementById('chart-id');

      if (prevTooltip && node) {
        node.removeChild(prevTooltip);
      }

      const toolTip = document.createElement('div');
      toolTip.setAttribute('id', 'tooltip-id');

      chartContainerRef.current?.appendChild(toolTip);

      toolTip.style.position = 'absolute';
      toolTip.style.display = 'block';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore:next-line
      toolTip.style.fontWeight = theme?.fontWeights?.heading || '700';
      toolTip.style.top = '0';
      toolTip.style.left = '0';
      toolTip.style.backgroundColor = 'transparent';
      toolTip.style.zIndex = '1';
      toolTip.innerHTML = `<div style="font-size: ${theme.fontSizes?.[6]}; color: ${theme.colors?.text};">${title}</div>`;
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      chart.remove();
    };
  }, [chartOptions, chartOptions.height, dataSeries, theme, title]);

  return (
    <Box
      role="graphics-doc"
      as="div"
      ref={chartContainerRef}
      sx={{ position: 'relative' }}
      {...props}
    />
  );
}
