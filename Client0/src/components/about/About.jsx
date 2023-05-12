import {Box,Typography,styled} from '@mui/material';
import { borderRadius } from '@mui/system';
const Container = styled(Box)`
  margin: 100px 10px;
  display:flex;
`;
const Heading = styled(Typography)`
font-size:50px;
font-weight:600;
border:1px solid #878787;
border-radius:5px;


`;
const Title = styled(Typography)`
  margin-top:10px;
  margin-bottom:10px;
  padding:5px;
  font-size:20px;
  

`;
const Image = styled('img')({
   width:'100%',
   padding:'10px 0 0 100px',
   height:'60vh',
   border:'border:1px solid #878787',
   borderRadius:'100%',
   objectFit:'cover',
});

const Details = styled(Box)`
 border:1px solid #878787;
 margin-top:20px;
 border-radius:5px;
`;

const About = () => {

    const url = 'https://media.istockphoto.com/id/1472010419/photo/marketing-team.jpg?s=1024x1024&w=is&k=20&c=Ln7Jl69Fewuk7MSqmdaWfgtfHOX1zyr_Aj7JCrgnapM='
  return (
    <>
    <Container>
       <Box>
          <Heading>About Me:</Heading>
          <Details>
              <Title>Name:Vaibhav Singh</Title>
              <Title>Email:SinghVaibhav1305@gmail.com</Title>
              <Title>College:IET Lucknow</Title>
              <Title>Branch:CSE</Title>
              <Title>Project:Personal Project(Blog App)</Title>

           </Details>
       </Box>
      <Box>
        <Image src={url} alt="vab"/>
      </Box>
     </Container>
     </>
    
  )
}

export default About;
