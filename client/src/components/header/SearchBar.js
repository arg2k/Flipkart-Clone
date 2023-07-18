import { List, ListItem, makeStyles } from "@material-ui/core";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { blue } from "@material-ui/core/colors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getItems as listItems } from "../../redux/actions/itemsActions";
import { Link } from "react-router-dom";
//import { withRouter } from 'react-router';

//import SearchIcon from '@mui/icons/Search';
//import { makeStyles , List, ListItem } from '@mui/core';

// const Search = styled('div')(({ theme }) => ({
//     //padding: 3,
//     //position: 'relative',
//     borderRadius: 2,
//     backgroundColor: '#fff',
//     marginLeft: 10,
//     marginTop: 90,
//     marginBottom: 100,
//     width: '33%',
//     height: '60%',
//     display: 'flex',
//     color: 'blue',
//   }));

//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: 158,
//     //height: '100%',
//     //position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'blue',
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     padding: theme.spacing(1, 1, 1, 0),
//   }));

const useStyle = makeStyles((theme) => ({
  search: {
    //float: 'left',
    // paddingLeft: 15,
    // borderRadius: 2,
    // marginLeft: 15,
    // marginBottom: 8,
    // width: "29%",
    // height: "55%",
    // backgroundColor: "#fff",
    // display: "flex",
    borderRadius: 2,
    marginLeft: 10,
    width: '38%',
    backgroundColor: '#fff',
    display: 'flex'
  },
  searchIcon: {
    marginLeft: "auto",
    padding: 5,
    display: "flex",
    color: "#2874f0",
  },
  inputRoot: {
    fontSize: "unset",
    width: "100%",
    paddingLeft: 15
  },
  inputInput: {
    paddingLeft: 20,
  },
  resultsstyling: {
    position: 'absolute',
    color: 'black',
    backgroundColor: 'white',
    marginTop: '36px',
    //marginLeft: '-15px',
    textDecoration: 'none'
  }
}));
const SearchBar = () => {
  const classes = useStyle();
  const item_id =  null ;
  //let navigate = useNavigate();
  const [show, setShow] =  useState(true);
  const [data, setData] = useState();
  const getData = (data) => {
    setData(data);
    setShow(false);
  };
  const { items } = useSelector((state) => state.getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listItems());
  }, [dispatch]);

  const clickHandler = (item) => {
    setShow(true);
    //navigate(`item/${item.id}`);
    //this.props.history.push(`/item/${item.id}`);
  }

  

  return (
    // <Search>
    //   <SearchIconWrapper>
    //   </SearchIconWrapper>
    //   <StyledInputBase
    //     placeholder="Search…"
    //     inputProps={{ "aria-label": "search" }}
    //   />
    //   <SearchIcon />
    // </Search>
    <div className={classes.search}>
      <InputBase
        placeholder="Search for products, brands and more"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={(event) => getData(event.target.value)}
      />
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      {data && (
        <List className={classes.resultsstyling} hidden={show}>
          {items
            .filter((item) =>
              item.title.longTitle.toLowerCase().includes(data.toLowerCase())
            )
            .map((item) => (
              <ListItem key={item.id}><Link to={`/item/${item.id}`} onClick = {() => clickHandler(item)} style ={{textDecoration: 'none',color:'inherit',cursor: 'pointer'}}>{item.title.longTitle}</Link></ListItem>
            ))}
        </List>
      )}
    </div>
  );
};

export default SearchBar;
