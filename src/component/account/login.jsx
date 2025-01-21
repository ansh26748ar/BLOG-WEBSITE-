import { Box, Button, TextField, styled } from '@mui/material';

const Containers_image = styled('img')({
    width: '100%',
    height: '100vh', // Ensure it takes full height for better overlay effect
    opacity: 0.6,
    position: 'relative', // Set relative positioning for the container image
});

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 10px 15px 5px 5px rgb(0 0 0/ 0.6);
    position: absolute; // Absolute positioning for overlay
    top: 50%; // Center vertically
    left: 50%; // Center horizontally
    transform: translate(-50%, -50%); // Adjust position for perfect centering
    background: rgba(255, 255, 255, 0.9); // Add a semi-transparent background
    padding: 20px; // Add some padding
    border-radius: 8px; // Add rounded corners
`;

const Image = styled('img')({
    width: 390,
    height: 200,
    marginBottom: 16, // Space below the image
});

const Login = () => {
    const conatiner =
        'https://img.lovepik.com/background/20211021/large/lovepik-abstract-blue-background-image_401327580.jpg';
    const imageurl =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdReLeTDjSn6-KVDiVMd4KJ7bE9TPxn82_g&s';

    return (
        <Box sx={{ position: 'relative', height: '100vh' }}>
            <Containers_image src={conatiner} alt="container image" />
            <Component>
                <Image src={imageurl} alt="LOGIN image" />
                <TextField label="Email" variant="standard"/>
                <TextField label="Password" variant="standard"/>
                <Button variant="contained">Login</Button>
                <Button>Create an Account</Button>
            </Component>
        </Box>
    );
};

export default Login;
