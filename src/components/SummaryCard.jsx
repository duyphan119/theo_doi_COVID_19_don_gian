import React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography } from "@mui/material";
const Item = styled(Card)(({ theme }) => ({
  ...theme.typography.body2,
  color: "black",
}));

const useStyles = makeStyles({
  root: {
    borderLeft: (props) => `5px solid ${props.color}`,
  },
});
export default function SummaryCard({ item }) {
  const classes = useStyles({ color: item.color });
  return (
    <Grid item xs={4}>
      <Item className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography>{item.value}</Typography>
        </CardContent>
      </Item>
    </Grid>
  );
}
