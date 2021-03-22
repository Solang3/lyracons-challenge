import { withStyles } from "@material-ui/core";

const styles = theme => ({
  "@global": {
    "body": {
      fontFamily: "Montserrat"
    },
    /**
     * Disable the focus outline, which is default on some browsers like
     * chrome when focusing elements
     */
    "*:focus": {
      outline: 0
    },
    ".text-white": {
      color: theme.palette.common.white
    },
    ".container": {
      width: "100%",
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      marginRight: "auto",
      marginLeft: "auto",
      [theme.breakpoints.up("sm")]: {
        maxWidth: 540
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 720
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: 1170
      }
    },
    ".row": {
      display: "flex",
      flexWrap: "wrap",
      marginRight: -theme.spacing(2),
      marginLeft: -theme.spacing(2)
    },
    ".container-fluid": {
      width: "100%",
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: 1370
    },
    ".lg-p-top": {
      paddingTop: `${theme.spacing(20)}px !important`,
      [theme.breakpoints.down("md")]: {
        paddingTop: `${theme.spacing(18)}px !important`
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: `${theme.spacing(12)}px !important`
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: `${theme.spacing(11)}px !important`
      }
    },
    ".titulo": {
      fontSize: "22px!important",
      fontWeight: "100!important",
      margin: `${theme.spacing(3)}px`
    },
    ".breadcrumb": {
      display: "flex",
      alignItems: "center"
    },
    ".breadcrumb .MuiSvgIcon-root": {
      marginRight: `${theme.spacing(1)}px`
    }
  }
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
