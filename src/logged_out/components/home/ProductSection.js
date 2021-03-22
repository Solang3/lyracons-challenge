import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withWidth, Hidden } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import calculateSpacing from "./calculateSpacing";
import ProductCard from "./ProductCard";
import productsData from "../home/productsData";

function ProductSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="p" className="breadcrumb">
          <ChevronLeftIcon /> Invierno 2020
        </Typography>
        <Typography variant="h4" align="center" className="titulo">
          Título de categoría
        </Typography>

        <div>
          <Hidden mdDown>
            <Grid container spacing={1}>
              <Grid container item md={3} spacing={3}>
                Filtros
              </Grid>
              <Grid container item md={9} spacing={3}>
                <Grid container spacing={calculateSpacing(width)}>
                  {productsData.map(element => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      lg={4}
                      data-aos="zoom-in-up"
                      key={element.id}
                    >
                      <ProductCard
                        imageSrc={element.imageSrc}
                        name={element.name}
                        listPrice={element.listPrice}
                        bestPrice={element.bestPrice}
                        badge={element.badge}
                        oferta={element.oferta}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden lgUp>
            <Grid container spacing={calculateSpacing(width)}>
              {productsData.map(element => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  data-aos="zoom-in-up"
                  key={element.id}
                >
                  <ProductCard
                    imageSrc={element.imageSrc}
                    name={element.name}
                    listPrice={element.listPrice}
                    bestPrice={element.bestPrice}
                    badge={element.badge}
                    oferta={element.oferta}
                  />
                </Grid>
              ))}
            </Grid>
          </Hidden>
        </div>
      </div>
    </div>
  );
}

ProductSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(ProductSection);
