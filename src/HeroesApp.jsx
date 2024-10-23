
import Button from '@mui/material/Button';
import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth/context/AuthProvider';

export const HeroesApp = () => {


    return (

        <AuthProvider>
            <AppRouter />
            {/* <PrimarySearchAppBar/> */}
            {/* <h1>HeroesApp</h1>

            <Button variant="contained">Ir a heore</Button> */}
        </AuthProvider>

    )
}
