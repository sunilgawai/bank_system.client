import {
    Container,
    Paper,
    Typography,
    Divider
} from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode;
}
const PageLayout: FC<Props> = ({ children }) => {
    return (
        <Container component="div" style={{ border: '1px solid gray', width: '100%', height: '100%', paddingTop: '10px' }}>
            <Paper style={{ border: '1px solid gray', padding: '10px' }}>
                <Typography textAlign={'center'}>Welcome to The Dev Bank</Typography>
            </Paper>
            <Divider />
            {children}
        </Container>
    )
}

export default PageLayout;