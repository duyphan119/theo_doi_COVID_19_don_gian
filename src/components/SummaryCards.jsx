import React from "react";
import Grid from "@mui/material/Grid";
import SummaryCard from "./SummaryCard";

export default function SummaryCards({ summary }) {
  const report = summary && summary.length ? summary[summary.length - 1] : [];
  const cards = [
    {
      title: "Ca mắc bệnh",
      color: "red",
      value: report.Confirmed,
    },
    {
      title: "Ca khỏi bệnh",
      color: "green",
      value: report.Active,
    },
    {
      title: "Ca tử vong",
      color: "gray",
      value: report.Deaths,
    },
  ];
  return (
    <Grid container spacing={3} sx={{ mt: 0.5 }}>
      {cards.map((item, index) => (
        <SummaryCard key={index} item={item} />
      ))}
    </Grid>
  );
}
