import { Button, ButtonGroup, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
const generateOptions = (data) => {
  return {
    title: {
      text: "Tổng ca nhiễm",
    },
    colors: ["red"],
    series: [
      {
        data: data.length && data.map((item) => item.Confirmed),
      },
    ],
    xAxis: {
      categories:
        data.length &&
        data.map((item) => moment(item.Date).format("DD/MM/yyyy")),
    },
  };
};
export default function LineChart({ summary }) {
  const [options, setOptions] = useState({});
  const [filters, setFilters] = useState(0);
  useEffect(() => {
    if (filters === 0) {
      setOptions(generateOptions(summary));
    } else if (filters === 1) {
      setOptions(generateOptions([...summary].splice(summary.length - 30)));
    } else if (filters === 2) {
      setOptions(generateOptions([...summary].splice(summary.length - 7)));
    }
  }, [summary, filters]);
  return (
    <Grid container spacing={3} sx={{ mt: 0.5 }}>
      <Grid item xs={12}>
        <div style={{ margin: "10px 0", width: "100%", textAlign: "right" }}>
          <ButtonGroup>
            <Button onClick={() => setFilters(0)}>Tất cả</Button>
            <Button onClick={() => setFilters(1)}>30 ngày</Button>
            <Button onClick={() => setFilters(2)}>7 ngày</Button>
          </ButtonGroup>
        </div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Grid>
    </Grid>
  );
}
