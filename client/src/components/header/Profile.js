import { Typography, Menu, MenuItem, makeStyles, Link } from "@material-ui/core";
import { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
// import { Link } from "react-router-dom";

const useStyle = makeStyles({
  styling: {
    marginTop: 40,
  },
  logoutstyling: {
    marginLeft: 20,
    fontSize: 15,
  },
});

const Profile = ({ acc, setAcc }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  const menuCloseHandler = () => {
    setOpen(false);
  };

  const menuOpenHandler = (event) => {
    setOpen(event.currentTarget);
  };

  const logout = () => {
    setAcc("");
  }

  return (
    <>
      <Link style={{cursor: "pointer",textDecoration: "none" }} >
        <Typography onClick={menuOpenHandler} style={{ marginTop: 2 }}>
          {acc}
        </Typography>
      </Link>
      <Menu
        className={classes.styling}
        anchorEl={open}
        open={open}
        onClose={() => menuCloseHandler()}
      >
        <MenuItem onClick={() => {menuCloseHandler();logout()}}>
          <PowerSettingsNewIcon fontSize="small" color="primary" />
          <Typography className={classes.logoutstyling}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
