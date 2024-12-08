'use client';
import * as React from 'react';
import BreadCrumbs from '@/components/BreadCrumbs';
import Image from 'next/image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import Divider from '@mui/material/Divider';
import { Button, Box, Typography, Grid, Container } from '@mui/material';
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
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          pt: 6,
          mb: 4,
          bgcolor: 'white',
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            flex: 1,
            pr: { xs: 0, md: 8 },
            width: { xs: '100%', md: '50%' },
          }}
        >
          <BreadCrumbs />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: 40,
              mb: { xs: 2, md: 8 },
              mt: 3,
            }}
          >
            {recipe.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', fontSize: 16 }}
          >
            {recipe.description}
          </Typography>
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
      {/* Bottom Section */}
      <Box sx={{ alignItems: 'center', padding: '0px', mb: 5 }}>
        <Grid
          spacing={4}
          sx={{
            display: 'flex',
          }}
        >
          <AccessTimeIcon sx={{ fontSize: 50, mr: 2 }} />
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
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 'bold', fontSize: 12 }}
                  >
                    PREP
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', fontSize: 18 }}
                  >
                    {recipe.prepTime}
                  </Typography>
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
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 'bold', fontSize: 12 }}
                  >
                    BAKE
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', fontSize: 18 }}
                  >
                    {recipe.bakeTime}
                  </Typography>
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
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 'bold', fontSize: 12 }}
                  >
                    TOTAL
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', fontSize: 18 }}
                  >
                    {recipe.totalTime}
                  </Typography>
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
                fontSize: 44,
                mr: 3,
                color: 'white',
                background: '#202020',
                borderRadius: 30,
              }}
            />
            <Box sx={{}}>
              <Typography
                variant="body2"
                sx={{ fontWeight: 'bold', fontSize: 12 }}
              >
                YIELD
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', fontSize: 18 }}
              >
                {recipe.servings}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="outlined"
              color="error"
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <AddIcon sx={{ color: '#202020', mr: 1 }} />{' '}
              <Typography
                sx={{
                  color: '#202020',
                  fontSize: 12,
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                }}
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
                flexDirection: 'row',
              }}
            >
              <PrintIcon sx={{ color: '#202020', mr: 1 }} />
              <Typography
                sx={{
                  color: '#202020',
                  fontSize: 12,
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                }}
              >
                PRINT
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
