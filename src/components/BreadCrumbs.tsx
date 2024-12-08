'use client';
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs'; // Ensure the component name starts with uppercase
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { usePathname } from 'next/navigation'; // Import from next/navigation instead of next/router

const BreadCrumbs = () => {
  const pathname = usePathname(); // usePathname will return the current path

  const pathParts = pathname?.split('/').filter(Boolean);

  return (
    <div className="">
      <Breadcrumbs
        separator={
          <NavigateNextIcon fontSize="small" sx={{ color: '#a73439' }} />
        } // Custom color for separator
        aria-label="breadcrumb"
      >
        {pathParts?.map((part, index) => {
          const path = `/${pathParts.slice(0, index + 1).join('/')}`;
          const capitalizedPart = part.charAt(0).toUpperCase() + part.slice(1); // Capitalize the first letter of each part
          return (
            <Link
              key={index}
              underline="hover"
              color="#666666"
              sx={{ fontWeight: 'bold' }}
              href={path}
            >
              {capitalizedPart}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
