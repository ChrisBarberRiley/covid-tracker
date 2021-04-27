import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6' color='inherit' noWrap>
            COVID Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
