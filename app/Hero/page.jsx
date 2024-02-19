'use client'
import React from 'react'
import { Container, Box , Typography} from '@mui/material'
import { Allerta_Stencil , Bruno_Ace , Roboto} from "next/font/google";


const allertaStencil = Allerta_Stencil({ subsets: ["latin"], weight: ["400"],});
const BrunoAce= Bruno_Ace({ subsets: ["latin"], weight: ["400"],});
const RobotoFont = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"],});



export default function Hero() {




  return (
   
        <Container sx={{background: 'linear-gradient(to bottom, rgb(123, 8, 255, 0.9), rgb(123, 8, 255,0.87))'}}>
                 
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
                            className={`${BrunoAce.className} antialiased`}
                            >
                            Hola, soy</Typography>
                                                
                         <Typography 
                             variant="h1" 
                             fontSize={90} 
                             fontWeight="Bold"
                             color={'primary'}
                             lineHeight={1}
                             className={`${allertaStencil.className} antialiased`}
                             >
                            Ramiro</Typography>
                                                
                         <Typography 
                             variant="h1" 
                             fontSize={90} 
                             fontWeight="Bold"
                             color={'primary'}
                             className={`${allertaStencil.className} antialiased`}
                             lineHeight={1}
                             >Acosta</Typography>
                                               
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
