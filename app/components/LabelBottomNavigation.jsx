"use client"
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import AboutIcon from '../assets/svg/AboutIcon';
import HomeIcon from '../assets/svg/HomeIcon';
import SkillsIcon from '../assets/svg/SkillsIcon';
import ProjectsIcon from '../assets/svg/ProjectsIcon';
import EducationIcon from '../assets/svg/EducationIcon';
import ContactIcon from '../assets/svg/ContactIcon';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
  <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '5rem', bgcolor: 'red'}} >
    <BottomNavigation  value={value} onChange={handleChange} sx={{ bgcolor: 'red', height: '5rem', color:'red'}}>
    <BottomNavigationAction
        
        
        label="Inicio"
        value="Home"
        icon={<HomeIcon IconColor ={"black"}/>}
        
      />
      <BottomNavigationAction
        
        label="Sobre Mi"
        value="About"
        icon={<AboutIcon IconColor ={"black"}/>}
      />
      <BottomNavigationAction
        
        label="Habilidades"
        value="Skills"
        icon={<SkillsIcon IconColor ={"black"}/>}
      />
      <BottomNavigationAction
        
        label="Proyectos"
        value="Projects"
        icon={<ProjectsIcon />}
      />
      <BottomNavigationAction
        
        label="Formación"
        value="Education"
        icon={<EducationIcon />}
      />
      <BottomNavigationAction 
        
        label="Contacto" 
        value="Contact" 
        icon={<ContactIcon />} 
      />
    </BottomNavigation>
  </Paper>
  );
}
