'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Link,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import NextLink from 'next/link';

const SecondNavbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detect mobile screen

  // Styles for active and hover links
  const linkStyles = {
    marginRight: 2,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: '#a73439',
      textDecorationThickness: '2px',
      textUnderlineOffset: '4px',
    },
    '&:focus': {
      textDecoration: 'underline',
      textDecorationColor: '#a73439',
      textDecorationThickness: '2px',
      textUnderlineOffset: '4px',
    },
    '&.active': {
      textDecoration: 'underline',
      textDecorationColor: '#a73439',
      textDecorationThickness: '2px',
      textUnderlineOffset: '4px',
    },
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  // Return null to hide on small screens (mobile)
  if (isMobile) return null;

  return (
    <Box sx={{ backgroundColor: '#F8F5F0' }}>
      <AppBar
        position="static"
        sx={{
          height: '50px',
          marginTop: 0,
          border: 'none',
          boxShadow: 'none',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Toolbar
          sx={{
            height: '50px',
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            backgroundColor: '#F8F5F0',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              height: '50px',
              gap: 4,
              alignItems: 'center',
              paddingLeft: '240px',
            }}
          >
            <Link
              component={NextLink}
              href="/recipes/categories"
              color="inherit"
              sx={linkStyles}
              className={activeLink === 'categories' ? 'active' : ''}
              onClick={() => handleLinkClick('categories')}
            >
              Categories
            </Link>
            <Link
              component={NextLink}
              href="/recipes/collections"
              sx={linkStyles}
              color="inherit"
              className={activeLink === 'collections' ? 'active' : ''}
              onClick={() => handleLinkClick('collections')}
            >
              Collections
            </Link>
            <Link
              component={NextLink}
              href="/recipesresources"
              sx={linkStyles}
              color="inherit"
              className={activeLink === 'resources' ? 'active' : ''}
              onClick={() => handleLinkClick('resources')}
            >
              Resources
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SecondNavbar;
