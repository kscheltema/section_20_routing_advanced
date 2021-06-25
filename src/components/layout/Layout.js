import { classes } from "istanbul-lib-coverage";
import { Fragment } from "react";
import MainNav from "./MainNav";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNav />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
