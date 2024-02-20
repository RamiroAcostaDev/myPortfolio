'use client'
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AboutIcon from '../assets/svg/AboutIcon';
import ContactIcon from '../assets/svg/ContactIcon';
import EducationIcon from '../assets/svg/EducationIcon';
import HomeIcon from '../assets/svg/HomeIcon';
import ProjectsIcon from '../assets/svg/ProjectsIcon';
import SkillsIcon from '../assets/svg/SkillsIcon';
import Logo from '../assets/svg/Logo';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    /**
     * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
     * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
     * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
     * proper interaction with the underlying content.
     */
    position: 'relative',
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
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{background: 'linear-gradient(to right, #F220C4, #342054)'}}>
        <Toolbar>
          <Box  noWrap sx={{ flexGrow: 1 }} component="div">
            <Logo IconColor={'white'}/>
          </Box>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open} >
        <DrawerHeader />
       
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: '#181D2A'
          },
          
          
        }}
        
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose} sx={{color:"white"}}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
      
        <List sx={{color:"white"}}>
          {['Inicio','Sobre mi', 'Habilidades', 'Proyectos', "Educación" , "Contacto"].map((text, index) => (
            <ListItem key={text} disablePadding >
              <ListItemButton >
                <ListItemIcon>
                {(() => {
                    switch (index) {
                    case 0: return <HomeIcon IconColor={'white'}/>;
                    case 1: return <AboutIcon IconColor={'white'}/>;
                    case 2: return <SkillsIcon IconColor={'white'}/>;
                    case 3: return <ProjectsIcon IconColor={'white'}/>;
                    case 4: return <EducationIcon IconColor={'white'}/>;
                    case 5: return <ContactIcon IconColor={'white'}/>;
                }})()}
                </ListItemIcon>
                <ListItemText primary={text}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        
      </Drawer>
    </Box>
  );
}