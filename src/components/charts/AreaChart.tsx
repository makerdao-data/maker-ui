import {
  createChart,
  DeepPartial,
  SingleValueData,
  WhitespaceData,
  ChartOptions
} from 'lightweight-charts';
import { useEffect, useRef } from 'react';
import { Box } from 'theme-ui';

type DataSerie = {
  data: SingleValueData[] | WhitespaceData[];
  colors: {
    backgroundColor: string;
    lineColor: string;
    textColor: string;
    areaTopColor: string;
    areaBottomColor: string;
  };
};

type AreaChartProps = {
  dataSeries: DataSerie[];
  chartOptions: DeepPartial<ChartOptions>;
};

export default function AreaChart({
  dataSeries,
  chartOptions
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
        lineColor: dataSerie.colors.lineColor,
        topColor: dataSerie.colors.areaTopColor,
        bottomColor: dataSerie.colors.areaBottomColor
      });

      newSeries.setData(dataSerie.data);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      chart.remove();
    };
  }, [chartOptions, chartOptions.height, dataSeries]);

  return <Box as="div" ref={chartContainerRef} />;
}
