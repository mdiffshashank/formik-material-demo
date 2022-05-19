import React from "react";

import clsx from "clsx";
import { Snackbar, SnackbarContent, IconButton } from "@mui/material";
import { SnackbarContext } from "../../context/SnackbarController";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styles from "./SnackbarStyles";

const useStyles = styles;

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorOutlineIcon,
  info: InfoOutlinedIcon,
};

export default function CusotmSnackbar() {
  const classes = useStyles();
  const { snack, dismiss } = React.useContext(SnackbarContext);
  if (!snack || !snack.variant) {
    return null;
  }

  const Icon = variantIcon[snack.variant];

  function handleClose(_event?: React.SyntheticEvent, reason?: string) {
    if (reason === "clickaway") {
      return;
    }
    dismiss();
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={true}
      autoHideDuration={6000}
      //@ts-ignore
      onClose={handleClose}
    >
      <SnackbarContent
        className={clsx(classes[snack.variant], classes.margin)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {snack.message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={dismiss}
          >
            <CloseRoundedIcon className={classes.icon} />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
}
