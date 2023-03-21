import { AreaChart as AreaChartComponent, Text } from '../components';
import { ColorType } from 'lightweight-charts';
import summaryData from '../../fixtures/summary.json';
import { Box, Flex, useColorMode } from 'theme-ui';
import Story from './Story';

export function AreaChart() {
  const [colorMode] = useColorMode();

  return (
    <Story title="Charts">
      <Text variant="smallHeading">Area Chart</Text>
      <Flex sx={{ flexDirection: 'column' }}>
        <Box sx={{ marginBottom: '2rem' }}>
          <AreaChartComponent
            dataSeries={dataSeries}
            chartOptions={{
              layout: {
                background: {
                  type: ColorType.Solid,
                  color: colorMode === 'light' ? '#F1F4FB' : '#0F0F0F'
                },
                textColor: colorMode === 'light' ? '#231536' : '#F1F1F1'
              },
              grid: {
                vertLines: {
                  visible: false
                },
                horzLines: {
                  visible: false
                }
              },
              height: 200,
              localization: {
                priceFormatter: Intl.NumberFormat('en', {
                  style: 'currency',
                  currency: 'EUR'
                }).format
              }
            }}
          />
        </Box>

        <pre
          style={{
            color: 'rgb(214, 222, 235)',
            backgroundColor: 'var(--ladle-bg-color-secondary)',
            textAlign: 'left',
            margin: '0.5em 0px 1em',
            padding: '1em 0px',
            overflow: 'auto'
          }}>
          {`<AreaChart
          dataSeries={dataSeries}
          chartOptions={{
            layout: {
              background: {
                type: ColorType.Solid,
                color: colorMode === 'light' ? '#F1F4FB' : '#0F0F0F'
              },
              textColor: colorMode === 'light' ? '#231536' : '#F1F1F1'
            },
            grid: {
              vertLines: {
                visible: false
              },
              horzLines: {
                visible: false
              }
            },
            height: 200,
            localization: {
              priceFormatter: Intl.NumberFormat('en', {
                style: 'currency',
                currency: 'EUR'
              }).format
            }
          }}
        />`}
        </pre>
      </Flex>
    </Story>
  );
}

const dataSeries = [
  {
    styleOptions: {
      lineColor: '#2962FF',
      topColor: '#2962FF',
      bottomColor: 'rgba(41, 98, 255, 0.28)'
    },
    data: Object.keys(summaryData.total_supply.OPTIMISM)
      .filter((key) =>
        Boolean(
          summaryData.total_supply.OPTIMISM[
            key as keyof typeof summaryData.total_supply.OPTIMISM
          ]
        )
      )
      .map((key) => ({
        time: key,
        value: summaryData.total_supply.OPTIMISM[
          key as keyof typeof summaryData.total_supply.OPTIMISM
        ] as number
      }))
  },
  {
    styleOptions: {
      lineColor: '#ff818f',
      topColor: '#ff818f',
      bottomColor: 'rgba(255, 125, 130, 0.28)'
    },
    data: Object.keys(summaryData.total_supply.ARBITRUM)
      .filter((key) =>
        Boolean(
          summaryData.total_supply.ARBITRUM[
            key as keyof typeof summaryData.total_supply.ARBITRUM
          ]
        )
      )
      .map((key) => ({
        time: key,
        value:
          summaryData.total_supply.ARBITRUM[
            key as keyof typeof summaryData.total_supply.ARBITRUM
          ]
      }))
  },
  {
    styleOptions: {
      lineColor: '#9191b0',
      topColor: '#9191b0',
      bottomColor: 'rgba(126, 125, 161, 0.28)'
    },
    data: Object.keys(summaryData.total_supply.STARKNET)
      .filter((key) =>
        Boolean(
          summaryData.total_supply.STARKNET[
            key as keyof typeof summaryData.total_supply.STARKNET
          ]
        )
      )
      .map((key) => ({
        time: key,
        value:
          summaryData.total_supply.STARKNET[
            key as keyof typeof summaryData.total_supply.STARKNET
          ]
      }))
  }
];
