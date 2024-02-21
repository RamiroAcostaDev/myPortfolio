import { Container, Box , Typography} from '@mui/material'
import { Allerta_Stencil , Bruno_Ace , Roboto} from "next/font/google";


const BrunoAce= Bruno_Ace({ subsets: ["latin"], weight: ["400"],});


export default function Projects() {
  return (
    <Container sx={{background: 'orange'}} id="Contacto">
                 
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
               color={'black'}
               className={`${BrunoAce.className} antialiased`}>Contact</Typography>
                                   
             
               
    </Box>

</Container>

  )
}
