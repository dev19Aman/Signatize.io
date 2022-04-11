import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const Chart = () => {
  const chartData = useSelector((state) => state.chart.chartData);
  const data = {
    labels: ["curret month views", "total views"],
    datasets: [
      // TODO: uncomment to see the line
      {
        type: "line",
        label: "curret-month",
        borderColor: "rgba(100, 125, 255, 1)",
        borderWidth: 2,
        tension: 0.4,
        data: [
          {
            // x: 0,
            // y: 0,
          },
          {
            // x: 1 / 2,
            // y: 200,
          },
          {
            // x: 0,
            y: 400,
          },
        ],
      },
      {
        type: "bar",
        label: "Gmail",
        backgroundColor: "rgba(202, 220, 237, 1)",
        data: [
          chartData.current_month ? chartData.current_month.gmail_count : "0",
          chartData.all_month ? chartData.all_month.gmail_count : "0",
        ],
        borderColor: "white",
        borderWidth: 2,
        options: {
          title: {
            display: true,
            text: "Google",
          },
        },
      },
      {
        type: "bar",
        label: "Yahoo",
        backgroundColor: "#62fdfd",
        data: [
          chartData.current_month ? chartData.current_month.yahoo_count : "0",
          chartData.all_month ? chartData.all_month.yahoo_count : "0",
        ],
      },
      {
        type: "bar",
        label: "Outlook",
        backgroundColor: "rgba(1, 55, 192, 1)",
        data: [
          chartData.current_month ? chartData.current_month.outlook_count : "0",
          chartData.all_month ? chartData.all_month.outlook_count : "0",
        ],
      },
    ],
    data: {
      datasets: [],
    },
  };

  return (
    <>
      <Bar
        data={data}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            yAxes: [
              {
                display: true,
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: 800,
                  stepSize: 200,
                },
              },
            ],
          },
        }}
      />
    </>
  );
};

export default Chart;
