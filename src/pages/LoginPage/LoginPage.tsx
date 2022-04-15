import * as React from 'react';
import {Avatar,  Button, CssBaseline, TextField, FormControlLabel, Checkbox, Paper, Box, Grid, Typography} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CopyRightPh} from "../../components/CopyRightPh/CopyRightPh";
import {useEffect, useState} from "react";
import {Validate} from "../../helpers/validate";
import {toast} from "react-toastify";
import {useStore} from "../../store";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

const theme = createTheme();

export const LoginPage = observer(() => {

    const {currentUserStore} = useStore()

    const {user: currentUser, error} = currentUserStore

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: '',
        password: '',
        username: ''
    })

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!Validate.email(user.email)) {
            toast.error(`Email noto'g'ri kiritilgan!`)
            return
        }

        if(!Validate.text(user.username)) {
            toast.error(`Login to'liq kiritilmagan!`)
            return
        }

        if(!Validate.password(user.password)) {
            toast.error(`Parolning uzunligi kamida 6 ga va ko'pi bilan 16 ga teng bo'lishi kerak!`)
            return
        }

        await currentUserStore.login(user)
    };

    useEffect(() => {
        if(currentUser){
            navigate('/')
        }
    }, [currentUser, navigate])

    useEffect(() => {
        if(error){
            toast.error(error, {
                toastId: 'loginError'
            })
        }
    }, [error])

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Kirish
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Login"
                                name="username"
                                autoComplete="username"
                                onChange={e => setUser({...user, username: e.target.value})}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                onChange={e => setUser({...user, email: e.target.value})}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Parol"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={e => setUser({...user, password: e.target.value})}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Eslab qolish"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Kirish
                            </Button>
                            <CopyRightPh sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
})