import { Container, Box , Typography} from '@mui/material'
import { Allerta_Stencil , Bruno_Ace , Roboto} from "next/font/google";

const allertaStencil = Allerta_Stencil({ subsets: ["latin"], weight: ["400"],});
const BrunoAce= Bruno_Ace({ subsets: ["latin"], weight: ["400"],});
const RobotoFont = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"],});

export default function About() {
  return (
    <Container sx={{background: '#ffffff'}} id="Sobre mi">
                 
    <Box 
        height={'93vh'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}>

        
            <Typography 
               variant="h3" 
               fontSize={20} 
               fontWeight="Bold"
               color={'black'}
               className={`${BrunoAce.className} antialiased`}>About</Typography>
                                   
             
               
    </Box>

</Container>

  )
}
