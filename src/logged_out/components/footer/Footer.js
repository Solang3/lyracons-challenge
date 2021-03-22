import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Box,
  withStyles,
  withWidth,
  TextField
} from "@material-ui/core";
import transitions from "@material-ui/core/styles/transitions";
import ColoredButton from "../../../shared/components/ColoredButton";

const styles = theme => ({
  footerInner: {
    backgroundColor: theme.palette.common.white,
    color:  theme.palette.common.black,
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    borderTop: "1px solid #ccc",
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
      paddingBottom: theme.spacing(10)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingBottom: theme.spacing(10)
    }
  },
  footerLinks: {
    marginTop: theme.spacing(2.5),
    marginBot: theme.spacing(1.5),
    color: theme.palette.common.white
  },
  link: {
    cursor: "Pointer",
    color: theme.palette.common.white,
    transition: transitions.create(["color"], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeIn
    }),
    "&:hover": {
      color: theme.palette.primary.light
    }
  },
  suscribeButton: {
    height: "55px",
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: "14px"
  }
});


function Footer(props) {
  const { classes, theme } = props;
  return (
    <footer className="lg-p-top">
      <div className={classes.footerInner}>
            <form>
              <Box display="flex" flexDirection="column" style={{ maxWidth: "350px", margin: "auto"}}>
                <Box mb={1}>
                  <Typography variant="h6" align="center" style={{ fontWeight: "600" }}>
                    News
                  </Typography>
                  <Typography paragraph align="center" style={{ fontSize: "13px" }}>
                    Suscribite y entérate de las promos!
                  </Typography>
                  <TextField
                    variant="outlined"
                    multiline
                    placeholder="Escribi tu mail"
                    inputProps={{ "aria-label": "Suscribete" }}
                    rows={1}
                    fullWidth
                    required
                  />
                </Box>
                <ColoredButton
                  color={theme.palette.common.black}
                  variant="contained"
                  type="submit"
                  className={classes.suscribeButton}
                >
                  Suscribite
                </ColoredButton>
              </Box>
            </form>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles, { withTheme: true })(Footer));
