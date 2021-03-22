import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  productImg: {
    width: "100%",
    height: "auto",
    position: "relative"
  },
  productName: {
    fontSize: "12px",
    textTransform: "uppercase",
    paddingLeft: theme.spacing(.75),
    paddingTop: theme.spacing(.5),
    maxWidth: "130px"
  },
  productListPrice: {
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(.75),
    paddingTop: theme.spacing(.5),
    fontSize: "15px"
  },
  productBadge: {
    background: "#000",
    color: "#fff",
    position: "absolute",
    zIndex: "1",
    display: "inline-block",
    [theme.breakpoints.up("xs")]: {
      right: theme.spacing(1),
      top: theme.spacing(1)
    },
    [theme.breakpoints.up("sm")]: {
      right: theme.spacing(1.5),
      top: theme.spacing(1.5)
    },
    [theme.breakpoints.up("md")]: {
      right: theme.spacing(2),
      top: theme.spacing(2)
    },
    fontSize: "11px",
    paddingTop:  theme.spacing(.25),
    paddingRight:  theme.spacing(.75),
    paddingLeft:  theme.spacing(.75),
    paddingBottom:  theme.spacing(.25)
  },
  productCuotas: {
    color: "#D81313",
    fontSize: "12px",
    fontWeight: "700",
    paddingLeft:  theme.spacing(.75),
    paddingTop: theme.spacing(.75)
  }
});

function ProductCard(props) {
  const { classes, name, listPrice, badge, imageSrc } = props;
  return (
    <Fragment>
      <div>
        <Typography className={classes.productBadge}>
          {badge}
        </Typography>
        <img src={imageSrc} alt={name} className={classes.productImg}  />
      </div>
      <Typography variant="h5" className={classes.productName}>
        {name}
      </Typography>
      <Typography variant="h5" className={classes.productListPrice}>
        {listPrice}
      </Typography>
      {/*<Typography variant="h5" className={classes.productListPrice}>
        {bestPrice}
  </Typography>*/}
      
      <Typography className={classes.productCuotas}>
        Hasta 12 cuotas
      </Typography>
    </Fragment>
  );
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  listPrice: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(ProductCard);
