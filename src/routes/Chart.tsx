import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";


interface IHistoryData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistoryData[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    });
  return <div>{isLoading ? "Loading chart..." :
    <ApexChart
      type="line"
      series={[
        {
          name: "price",
          data: data?.map((price => price.close)) ?? [],
        },
      ]}
      options={{
        theme: {
          mode: "dark",
        },
        chart: {
          height: 300,
          width: 500,
          toolbar: {
            show: false,
          },
          background: "transparent"
        },
        stroke: {
          curve: "smooth",
          width: 4,
        },
        grid: {
          show: false,
        },
        yaxis: {
          show: false,
        },
        xaxis: {
          labels: { show: false, },
          axisTicks: { show: false },
          axisBorder: { show: false },
          type: "datetime",
          categories: data?.map((price => price.time_close)) ?? [],
        },
        fill: { type: "gradient", gradient: { gradientToColors: ["#0be881"], stops: [0, 100], } },
        colors: ["#0fbcf9"],
        tooltip: {
          y: {
            formatter: (value) => `$ ${value.toFixed(3)}`,
          }
        }
      }}
    />
  }
  </div>
}

export default Chart;