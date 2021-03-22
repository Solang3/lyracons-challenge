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
    maxWidth: "130px",
    marginBottom: "26px"
  },
  productPrice: {
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
  },
  productListPriceStriked: {
    textDecoration: "line-through",
    paddingLeft:  theme.spacing(.75),
    paddingTop: theme.spacing(.75),
    fontSize: "11px",
    color: "#b5b5b5",
    marginTop: "-28px",
  }
});

function ProductCard(props) {
  const { classes, name, listPrice, bestPrice, badge, imageSrc, oferta} = props;

  if (badge !=="") {
    var span
    span = <Typography variant="h5" className={classes.productBadge}>{badge}</Typography>
  }
  if (bestPrice !=="") {
    var price
    price = <div>
              <Typography variant="h5" className={classes.productListPriceStriked}>{listPrice}</Typography>
              <Typography variant="h5" className={classes.productPrice}>{bestPrice}</Typography>
            </div>
            
  } else {
    price = <Typography variant="h5" className={classes.productPrice}>{listPrice}</Typography>
  }
  if (oferta !=="") {
    var cuotas
    cuotas = <Typography className={classes.productCuotas}>Hasta {oferta} cuotas</Typography>
  }
  return (
    <Fragment>
      <div>
        {span}
        <img src={imageSrc} alt={name} className={classes.productImg}  />
      </div>
      <Typography variant="h5" className={classes.productName}>
        {name}
      </Typography>
      {price}
      {cuotas}
    </Fragment>
  );
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  listPrice: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  oferta: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(ProductCard);
