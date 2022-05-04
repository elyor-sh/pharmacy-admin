import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {
    Avatar,
    Button,
    CssBaseline,
    Box,
    Grid,
    GridProps
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {createTheme, styled, ThemeProvider} from '@mui/material/styles';
import {toast} from "react-toastify";

import {CopyRightPh} from "../../components/CopyRightPh/CopyRightPh";
import {Validate} from "../../helpers/validate";
import {useStore} from "../../store";
import {TextFieldPh} from "../../components/Molecules/TextFieldPh";
import {CheckBoxPh} from "../../components/Molecules/CheckBoxPh";
import {TypographyPh} from "../../components/Molecules/TypographyPh";

const theme = createTheme();

interface WrapperProps extends GridProps {
    bgcolor: string
    component?: React.ReactNode;
    elevation?: Number;
    square?: boolean;
}

const Wrapper = styled(Grid)<WrapperProps>(({bgcolor}) => ({
    backgroundColor: bgcolor
}))

export const LoginPage = observer(() => {

    const {currentUserStore, themeStore} = useStore()

    const {user: currentUser} = currentUserStore

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

    return (
        <ThemeProvider theme={theme}>
            <Wrapper container bgcolor={themeStore.bgColor} sx={{ height: '100vh', background: themeStore.bgColor }}>
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
                <Wrapper bgcolor={themeStore.bgColor} item xs={12} sm={8} md={5} >
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
                        <TypographyPh component="h1" variant="h5">
                            Kirish
                        </TypographyPh>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextFieldPh
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Login"
                                name="username"
                                autoComplete="username"
                                onChange={e => setUser({...user, username: e.target.value})}
                            />
                            <TextFieldPh
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                onChange={e => setUser({...user, email: e.target.value})}
                            />
                            <TextFieldPh
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
                            <CheckBoxPh
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
                </Wrapper>
            </Wrapper>
        </ThemeProvider>
    );
})