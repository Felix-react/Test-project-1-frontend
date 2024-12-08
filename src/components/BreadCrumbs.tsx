'use client';
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { usePathname } from 'next/navigation';

const BreadCrumbs = () => {
  const pathname = usePathname();

  const pathParts = pathname?.split('/').filter(Boolean);

  return (
    <div className="">
      <Breadcrumbs
        separator={
          <NavigateNextIcon fontSize="small" sx={{ color: '#a73439' }} />
        }
        aria-label="breadcrumb"
      >
        {pathParts?.map((part, index) => {
          const path = `/${pathParts.slice(0, index + 1).join('/')}`;
          const capitalizedPart = part.toUpperCase();
          return (
            <Link
              key={index}
              underline="hover"
              color="#666666"
              sx={{
                fontWeight: 'bold',
                fontSize: 14,
              }}
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
