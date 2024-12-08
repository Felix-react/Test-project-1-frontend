'use client';
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Link,
  useMediaQuery,
  useTheme,
  Container,
} from '@mui/material';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

const SecondNavbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [links, setLinks] = useState<{ name: string; href: string }[]>([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const linkStyles = {
    marginRight: 2,
    fontSize: 13,
    fontWeight: '600',
    textDecoration: 'none',
    color: '#44413E',
    '&:hover, &:focus, &.active': {
      textDecoration: 'underline',
      textDecorationColor: '#a73439',
      textDecorationThickness: '2px',
      textUnderlineOffset: '4px',
    },
  };

  // Handle link generation logic based on pathname
  useEffect(() => {
    if (!isClient || !pathname) return;

    // Define the base path for the links
    let basePath = '';

    if (pathname.startsWith('/shop')) {
      basePath = '/shop';
      setLinks([
        { name: 'FLOURS', href: `${basePath}/flours` },
        { name: 'INGREDIENTS', href: `${basePath}/ingredients` },
        { name: 'MIXES', href: `${basePath}/mixes` },
        { name: 'GLUTEN-FREE', href: `${basePath}/gluten-free` },
        { name: 'TOOLS', href: `${basePath}/tools` },
        { name: 'PANS', href: `${basePath}/pans` },
      ]);
    } else if (pathname.startsWith('/recipes')) {
      basePath = '/recipes';
      setLinks([
        { name: 'CATEGORIES', href: `${basePath}/categories` },
        { name: 'COLLECTIONS', href: `${basePath}/collections` },
        { name: 'RESOURCES', href: `${basePath}/resources` },
      ]);
    } else if (pathname.startsWith('/learn')) {
      basePath = '/learn';
      setLinks([
        { name: 'BAKING', href: `${basePath}/baking` },
        { name: 'GUIDES', href: `${basePath}/guides` },
        { name: 'VIDEOS', href: `${basePath}/videos` },
        { name: 'BAKE FOR GOOD', href: `${basePath}/bake-for-good` },
        { name: 'RESOURCES', href: `${basePath}/resources` },
      ]);
    } else {
      setLinks([]); // Default to empty links
    }
  }, [pathname, isClient]);

  if (isMobile) return null; // Hide navbar on mobile screens

  return (
    <Box sx={{ backgroundColor: '#F8F5F0' }}>
      <AppBar
        position="static"
        sx={{
          height: '20px',
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
          <Container>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                height: '50px',
                gap: 4,
                alignItems: 'center',
                pl: 15,
              }}
            >
              {links.map((link) => (
                <Link
                  key={link.name}
                  component={NextLink}
                  href={link.href}
                  sx={linkStyles}
                  className={activeLink === link.name ? 'active' : ''}
                  onClick={() => setActiveLink(link.name)}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SecondNavbar;
