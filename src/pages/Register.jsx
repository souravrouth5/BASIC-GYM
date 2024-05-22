import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../redux/Authslice';
import { BtnLoader } from '../components/common/BtnLoader';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export function Register() {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const { registerResponse, status } = useSelector(state => state?.authentication)
    const dispatch = useDispatch()

    console.log(registerResponse);

    const onSubmit = (data) => {
        const formdata = new FormData(document.getElementsByTagName('form')[0])
        dispatch(userRegister(formdata))
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            {...register('name', { required: true})}
                        />
                        {errors.name?.type === 'required' && <span style={{color: 'white', backgroundColor: 'red', fontSize: '12px', padding: '5px 5px', marginTop: '0', marginLeft: '20px'}}>@Name is required</span>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            {...register('email', { required: true })}
                        />
                        {errors.email?.type === 'required' && <span style={{ color: 'white', backgroundColor: 'red', fontSize: '12px', padding: '5px 5px', marginTop: '0', marginLeft: '20px' }}>@Email is required</span>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="phone"
                            label="phone"
                            name="phone"
                            autoComplete="phone"
                            autoFocus
                            {...register('phone', { required: true, minLength: 10, maxLength: 20 })}
                        />
                        {errors.phone?.type === 'required' && <span style={{ color: 'white', backgroundColor: 'red', fontSize: '12px', padding: '5px 5px', marginTop: '0', marginLeft: '20px' }}>@Phone is required</span>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            {...register('password', { required: true })}
                        />
                        {errors.password?.type === 'required' && <span style={{ color: 'white', backgroundColor: 'red', fontSize: '12px', padding: '5px 5px', marginTop: '0', marginLeft: '20px' }}>@Password is required</span>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="answer"
                            label="answer"
                            name="answer"
                            autoComplete="answer"
                            autoFocus
                            {...register('answer', { required: true })}
                        />
                        {errors.answer?.type === 'required' && <span style={{ color: 'white', backgroundColor: 'red', fontSize: '12px', padding: '5px 5px', marginTop: '0', marginLeft: '20px' }}>@Answer is required</span>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="image"
                            name="image"
                            autoComplete="image"
                            type='file'
                            autoFocus
                            {...register('image', { required: true })}
                        />
                        {errors.image?.type === 'required' && <span style={{ color: 'white', backgroundColor: 'red', fontSize: '12px', padding: '5px 5px', marginTop: '0', marginLeft: '20px' }}>@Profile Pic is required</span>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {status === 'loading' ? <BtnLoader height={25} /> : 'Sign Up'}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}