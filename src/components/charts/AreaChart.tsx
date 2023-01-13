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

export type DataSerie = {
  data: SingleValueData[] | WhitespaceData[];
  styleOptions: DeepPartial<SeriesOptionsCommon & AreaStyleOptions>;
};

type AreaChartProps = {
  dataSeries: DataSerie[];
  chartOptions: DeepPartial<ChartOptions>;
} & BoxProps;

export default function AreaChart({
  dataSeries,
  chartOptions,
  ...props
}: AreaChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>();

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

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      chart.remove();
    };
  }, [chartOptions, chartOptions.height, dataSeries]);

  return (
    <Box role="graphics-doc" as="div" ref={chartContainerRef} {...props} />
  );
}
