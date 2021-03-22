import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withWidth } from "@material-ui/core";
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
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

ProductSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(ProductSection);
