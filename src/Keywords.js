import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import ChipInput from "material-ui-chip-input";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "#D3D3D3",
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

export default function ChipsArray(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <ChipInput
        defaultValue={props.data}
        fullWidth
        placeholder="Type and press enter to add Keywords"
        onChange={props.onChange}
      />
    </Paper>
  );
}
