'use client'
import React from 'react'
import { Container, Box , Typography} from '@mui/material'
import { Allerta_Stencil , Bruno_Ace , Roboto} from "next/font/google";


const allertaStencil = Allerta_Stencil({ subsets: ["latin"], weight: ["400"],});
const BrunoAce= Bruno_Ace({ subsets: ["latin"], weight: ["400"],});
const RobotoFont = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"],});



export default function Hero() {




  return (
   
        <Container sx={{background: '#181D2A'}}>
                 
                 <Box 
                     height={'100vh'}
                     display={'flex'}
                     justifyContent={'center'}
                     alignItems={'center'}
                     flexDirection={'column'}>
         
                     
                         <Typography 
                            variant="h3" 
                            fontSize={20} 
                            fontWeight="Bold"
                            color={'primary'}
                            className={`${BrunoAce.className} antialiased`}>Hola, soy</Typography>
                                                
                         <Typography 
                             variant="h1" 
                             fontSize={90} 
                             fontWeight="Bold"
                             sx={{
                                background: 'linear-gradient(to right, #F220C4, #7761FF)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                              }}
                             lineHeight={1}
                             className={`${allertaStencil.className} antialiased`}>Ramiro</Typography>
                                                
                         <Typography 
                             variant="h1" 
                             fontSize={90} 
                             fontWeight="Bold"
                             color={'primary'}
                             className={`${allertaStencil.className} antialiased`}
                             lineHeight={1}
                             sx={{
                                background: 'linear-gradient(to right, #F220C4, #7761FF)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                              }}>Acosta</Typography>
                                               
                         <Typography 
                             variant="h2" 
                             fontSize={25} 
                             fontWeight={500}
                             color={'primary'}
                             lineHeight={2}
                             className={`${RobotoFont.className} antialiased`}>Software Developer</Typography>
                            
                 </Box>
             
        </Container>

    
  )
}
