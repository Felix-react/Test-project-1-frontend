'use client';

import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Link,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import SecondNavbar from './SecondNavbar';
import Image from 'next/image';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();

  const linkStyles = {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 2,
    textDecoration: 'none',
    '&:hover, &:focus': {
      textDecoration: 'underline',
      textDecorationColor: '#a73439',
      textDecorationThickness: '2px',
      textUnderlineOffset: '4px',
    },
  };

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  // Set flag to true after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {/* First Row: Logo and First Navbar */}
      <Box sx={{ display: 'flex', position: 'relative', width: '100%' }}>
        {/* Render Image only on the client and hide on mobile */}
        {isClient && !isMobile && (
          <Box sx={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
            <Image
              src="/image/monkey.png"
              alt="Monkey Icon"
              width={130}
              height={130}
              style={{ marginLeft: '100px' }}
              priority
            />
          </Box>
        )}

        {/* First Navbar */}
        <AppBar
          position="static"
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 100,
            boxShadow: 'none',
            flex: 1,
            zIndex: 5,
            marginLeft: isMobile ? 0 : '240px',
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              width: '100%',
              height: '100px',
              alignItems: 'center',
              justifyContent: isMobile ? 'space-between' : 'flex-start',
            }}
          >
            {/* Hamburger Menu for Mobile */}
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={toggleDrawer}
                sx={{ display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Box
              sx={{
                display: isMobile ? 'none' : 'flex',
                alignItems: 'center',
                gap: 8,
                flexWrap: 'wrap',
              }}
            >
              <Link
                component={NextLink}
                href="/shop"
                color="inherit"
                sx={linkStyles}
              >
                Shop
              </Link>
              <Link
                component={NextLink}
                href="/recipes"
                color="inherit"
                sx={linkStyles}
              >
                Recipes
              </Link>
              <Link
                component={NextLink}
                href="/learn"
                color="inherit"
                sx={linkStyles}
              >
                Learn
              </Link>
              <Link
                component={NextLink}
                href="/about"
                color="inherit"
                sx={linkStyles}
              >
                About
              </Link>
              <Link
                component={NextLink}
                href="/blog"
                color="inherit"
                sx={linkStyles}
              >
                Blog
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Conditionally render SecondNavbar for /recipes and its subroutes */}
      {pathname.startsWith('/recipes') && <SecondNavbar />}

      {/* Drawer for mobile navigation */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          width: 250,
          flexShrink: 0,
          zIndex: 1000,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
          },
        }}
      >
        {/* Links inside Drawer */}
        <Link component={NextLink} href="/shop" color="inherit" sx={linkStyles}>
          Shop
        </Link>
        <Link
          component={NextLink}
          href="/recipes"
          color="inherit"
          sx={linkStyles}
        >
          Recipes
        </Link>
        <Link
          component={NextLink}
          href="/learn"
          color="inherit"
          sx={linkStyles}
        >
          Learn
        </Link>
        <Link
          component={NextLink}
          href="/about"
          color="inherit"
          sx={linkStyles}
        >
          About
        </Link>
        <Link component={NextLink} href="/blog" color="inherit" sx={linkStyles}>
          Blog
        </Link>
      </Drawer>
    </Box>
  );
}
