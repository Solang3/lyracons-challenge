import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Hidden,
  IconButton,
  withStyles
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from "@material-ui/icons/Menu";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";

const styles = theme => ({
  appBar: {
    boxShadow: "none",
    backgroundColor: theme.palette.common.white,
    borderBottom: "1px solid #ccc"
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight
  },
  brandLogo: {
    height: "32px"
  },
  noDecoration: {
    textDecoration: "none !important"
  },
  toolbar: {
    minHeight: "75px",
    padding: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      flex: "1 1 100%"
    },
    [theme.breakpoints.up("sm")]: {
      flex: "1 1 100%"
    },
    [theme.breakpoints.up("md")]: {
      flex: "auto",
    },
  },
  navIcons: {
    display: "flex",
    flexGrow: "1"
  },
  navCart: {
    flexGrow: "1",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "16px"
  },
  navBrand: {
    flexGrow: "2",
    display: "flex",
    justifyContent: "center",
  }
});

function NavBar(props) {
  const {
    classes,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;
  const menuItems = [
    {
      link: "/",
      name: "Shop"
    },{
      link: "/winter",
      name: "Real Winter"
    },{
      link: "/complementos",
      name: "Complementos"
    },{
      link: "/editoriales",
      name: "Editoriales"
    }
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
            <Hidden mdUp>
              <div className={classes.navIcons}>
                <IconButton
                  className={classes.menuButton}
                  onClick={handleMobileDrawerOpen}
                  aria-label="Open Navigation"
                  color="primary"
                >
                  <MenuIcon />
                </IconButton>
                <IconButton
                  className={classes.menuButton}
                >
                  <SearchIcon />
                </IconButton>
              </div>
              <div className={classes.navBrand}>
                <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} className={classes.brandLogo} alt="Lyracons Logo" />
              </div>
              <div className={classes.navCart}>
                <img src={`${process.env.PUBLIC_URL}/images/icon-cart.svg`} alt="Cart icon" />
              </div>
            </Hidden>
          
            <Hidden smDown>
              <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} className={classes.brandLogo} alt="Lyracons Logo" />
              {menuItems.map(element => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        color="secondary"
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Button
                    color="secondary"
                    size="large"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
              
              <img src={`${process.env.PUBLIC_URL}/images/icon-cart.svg`} alt="Cart icon" />
            </Hidden>

        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="left"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
