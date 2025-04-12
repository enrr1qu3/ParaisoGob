import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
export const MenuLayout = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Button
                id="basic-button1"
                aria-controls={open ? 'basic-menu1' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='inherit'
                className='nav-link'
            >
                MUNICIPIO
            </Button>
            <Menu
                id="basic-menu1"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button1',
                }}
                className='textFor-link'
            >
                <MenuItem onClick={handleClose} >Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <Button
                id="basic-button1"
                aria-controls={open ? 'basic-menu1' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='inherit'
                className='nav-link'
            >
                GOBIERNO
            </Button>
            <Menu
                id="basic-menu1"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button1',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <Button
                id="basic-button3"
                // aria-controls={open ? 'basic-menu1' : undefined}
                aria-haspopup="true"
                // aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='inherit'
                className='nav-link'
            >
                ATENCIÓN CIUDADANA
            </Button>
            <Button
                id="basic-button4"
                // aria-controls={open ? 'basic-menu1' : undefined}
                aria-haspopup="true"
                // aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='inherit'
                className='nav-link'
            >
                TRANSPARENCIA
            </Button>

        </>
    )
}
