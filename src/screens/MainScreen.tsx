'use client';
import * as React from 'react';
import BreadCrumbs from '@/components/BreadCrumbs';
import Image from 'next/image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import Divider from '@mui/material/Divider';
import { Button, Box, Typography, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';

type Recipe = {
  id: number;
  title: string;
  description: string;
  prepTime: string;
  bakeTime: string;
  totalTime: string;
  servings: string;
  imageUrl: string;
};

export default function Main({ recipe }: { recipe: Recipe }) {
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    setImageUrl(recipe.imageUrl);
  }, [recipe.imageUrl]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        p: 6,
        bgcolor: 'white',
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          pl: { xs: 3, md: 8 },
          pr: { xs: 0, md: 10 },
          width: { xs: '100%', md: '50%' },
        }}
      >
        <BreadCrumbs />
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', fontSize: 48, mb: 6, mt: 3 }}
        >
          {recipe.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', fontSize: 20, mb: 6 }}
        >
          {recipe.description}
        </Typography>
        <Box sx={{ alignItems: 'center' }}>
          <Grid
            spacing={4}
            sx={{
              display: 'flex',
            }}
          >
            <AccessTimeIcon sx={{ fontSize: 60, mr: 2 }} />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
              }}
            >
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      PREP
                    </Typography>
                    <Typography variant="h6">{recipe.prepTime}</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      BAKE
                    </Typography>
                    <Typography variant="h6">{recipe.bakeTime}</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      TOTAL
                    </Typography>
                    <Typography variant="h6">{recipe.totalTime}</Typography>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Grid>
          <Divider sx={{ my: 4 }} />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2, pl: 0.8 }}>
              <GroupWorkIcon
                sx={{
                  fontSize: 51,
                  mr: 3,
                  color: 'white',
                  background: '#202020',
                  borderRadius: 30,
                }}
              />
              <Box sx={{}}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  YIELD
                </Typography>
                <Typography variant="h6">{recipe.servings}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                variant="outlined"
                color="error"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row', // Ensures the icon and text are on the same line
                }}
              >
                <AddIcon sx={{ color: '#202020', mr: 1 }} />{' '}
                {/* Add margin-right to space out the icon */}
                <Typography
                  sx={{
                    color: '#202020',
                    fontSize: 14,
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap',
                  }} // Prevent text wrapping
                >
                  SAVE RECIPE
                </Typography>
              </Button>

              <Button
                variant="outlined"
                color="error"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row', // Ensures the icon and text are on the same line
                }}
              >
                <PrintIcon sx={{ color: '#202020', mr: 1 }} />
                <Typography
                  sx={{
                    color: '#202020',
                    fontSize: 13,
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap',
                  }} // Prevent text wrapping
                >
                  PRINT
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Right Section (Image) */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: 'auto',
        }}
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={recipe.title}
            layout="responsive"
            width={680}
            height={430}
            style={{ objectFit: 'cover' }}
          />
        )}
      </Box>
    </Box>
  );
}
