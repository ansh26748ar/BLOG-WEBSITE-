import { Box, Button, TextField, styled, Typography } from '@mui/material';

const Containers_image = styled('img')({
    width: '100%',
    height: '100vh', // Ensure it takes full height for better overlay effect
    opacity: 0.6,
    position: 'relative', // Set relative positioning for the container image
});

const Component = styled(Box)`
    width: 350px;
    // margin: auto;
    box-shadow: 7px 7px rgb(0 0 0/ 0.6);
    position: absolute; // Absolute positioning for overlay
    top: 50%; // Center vertically
    left: 50%; // Center horizontally
    transform: translate(-50%, -50%); // Adjust position for perfect centering
    background: rgba(255, 255, 255, 0.6); // Add a semi-transparent background
    padding-top: 20px ; 
    border-radius: 8px; 
`;

const Wrapper = styled(Box)`
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 25px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 13px;
    }
`;
const Image = styled('img')({
    width: 300,
    height: 170,
    margin: 'auto',
    display: 'flex',

});

const LoginButton = styled(Button)`
    text-transform: none;
    border-radius: 2px;
    box-shadow: 3px 3px rgb(0 0 0/50%);
`

const SignupButton = styled(Button)`
    text-transform: none;
    background: rgb(255 255 255);
    border-radius: 2px;
    box-shadow: 3px 3px rgb(0 0 0/50%);
`
const Text = styled(Typography)`
    color: rgb(0 0 255);
    
`

const Login = () => {
    const conatiner =
        'https://img.lovepik.com/background/20211021/large/lovepik-abstract-blue-background-image_401327580.jpg';
    const imageurl =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdReLeTDjSn6-KVDiVMd4KJ7bE9TPxn82_g&s';

    return (
        <Box sx={{ position: 'relative', height: '100vh' }}>
            <Containers_image src={conatiner} alt="container image" />
            <Component>
                <Box>
                    <Image src={imageurl} alt="LOGIN image" />
                    <Wrapper>
                        <TextField label="Email" variant="standard"/>
                        <TextField label="Password" variant="standard"/>
                        <LoginButton variant="contained">Login</LoginButton>
                        <Text style={{textAlign: 'center'}} >OR</Text>
                        <SignupButton>Create an Account</SignupButton>
                    </Wrapper>   
                    {/* <Wrapper>
                        <TextField label="Name" variant='standard' ></TextField>
                        <TextField label="Email" variant="standard" />
                        <TextField label="Password" variant="standard" />
                        <SignupButton>Signup</SignupButton>
                        <Text style={{ textAlign: 'center' }} >OR</Text>
                        <LoginButton variant="contained">Already have an Account</LoginButton>
                    </Wrapper> */}

                </Box>
            </Component>
        </Box>
    );
};

export default Login;
