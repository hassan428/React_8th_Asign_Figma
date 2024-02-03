import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { ImGift } from "react-icons/im";
import { CiSettings } from "react-icons/ci";
import { PiBellSimpleLight } from "react-icons/pi";
import { sidebarDataArr } from '../utils/Sidebar_data';
import { Link, Outlet } from 'react-router-dom';
import { Avatar, Badge } from '@mui/material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export function Layout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', bgcolor: "rgb(230, 230, 230)" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ bgcolor: "rgb(230, 230, 230)" }} open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }), color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <div className="flex justify-between items-center w-full space-x-5">
            <input type="text" placeholder='Search here' className='w-full text-xs rounded-md p-2 mx-2' />


            <div className="sm:flex hidden justify-between items-center space-x-3">

              <div className='bg-blue-200 px-3 py-3 rounded-full'>
                <Badge badgeContent={8} color="primary">
                  <PiBellSimpleLight color="rgb(29 78 216)" size={25} />
                </Badge>
              </div>
              <div className='bg-blue-200 px-3 py-3 rounded-full'>
                <Badge badgeContent={4} color="primary">
                  <IoChatboxEllipsesOutline color="rgb(29 78 216)" size={25} />
                </Badge>
              </div>
              <div className='bg-purple-300 px-3 py-3 rounded-full'>
                <Badge badgeContent={6} color="secondary">
                  <ImGift color="purple" size={25} />
                </Badge>
              </div>
              <div className='bg-red-200 px-3 py-3 rounded-full'>
                <Badge badgeContent={1} color="error">
                  <CiSettings color='red' size={25} />
                </Badge>
              </div>

            </div>


            <div className='flex items-center space-x-3 text-black'>
              <div className="hidden xsm:flex">
              <h1 >Hello. </h1>  <strong>Samantha</strong>
              </div>
              <Avatar sx={{ bgcolor: "gray" }}>S</Avatar>
            </div>


          </div>

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          textAlign: "center",
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{
          my: 2
        }}>
          <div className='font-sans'>
            <h1 className='text-[40px] font-bold'>Sedap.</h1>
            <h1 className='text-xs text-gray-500'>Modern Admin Dashboard</h1>
          </div>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sidebarDataArr.map((obj, index) => {
            const { icon, link, text } = obj

            return <Link to={link} key={index} onClick={handleDrawerClose} >
              <ListItem disablePadding sx={{ m: "none", overflow: "hidden" }} >
                <ListItemButton>
                  <ListItemIcon sx={{ mr: -2 }}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          })}
        </List>
        <Divider />
      </Drawer>
      ` <Main open={open}>
        <DrawerHeader />

        <Outlet />
      
      </Main>`
    </Box>
  );
}