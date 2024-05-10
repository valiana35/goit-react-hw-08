import AppBar from '@mui/material/AppBar';

const Header = ({children}) => {
    return (
        <AppBar position="static" color="transparent">
            {children}
        </AppBar>
    )
} 

export default Header;