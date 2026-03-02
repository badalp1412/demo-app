import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Button,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen((prev) => !prev);

  const desktopLinks = ['Products', 'Recipes', 'Partnerships'];
  const mobileLinks = ['Products', 'Recipes', 'Partnerships'];

  const APPBAR_HEIGHT = 64;

  return (
    <>
      {/* ✅ AppBar above Drawer so X is clickable */}
      <AppBar
        position="relative"
        elevation={0}
        sx={{
          bgcolor: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 6 }, minHeight: APPBAR_HEIGHT }}>
          {/* Mobile Menu (hamburger -> cross) */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              onClick={toggleDrawer}
              aria-label={open ? 'Close menu' : 'Open menu'}
              sx={{ color: '#1A3C34' }}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {desktopLinks.map((item) => (
              <Typography
                key={item}
                component="a"
                href="#"
                variant="body1"
                sx={{
                  textDecoration: 'none',
                  color: '#1A3C34',
                  fontFamily: 'Chobani Serif, serif',
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* Center Logo */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image
              src="/images/logo.svg"
              alt="Chobani"
              width={120}
              height={35}
            />
          </Box>

          {/* Right Button (desktop only) */}
          <Box sx={{ ml: 'auto', display: { xs: 'none', md: 'block' } }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#1A3C34',
                color: '#1A3C34',
                fontFamily: 'Chobani Sans, serif',
                textTransform: 'none',
                fontWeight: 400,
                padding: '8px 10px',
                lineHeight: '1',
                '&:hover': { bgcolor: '#1A3C34', color: '#fff' },
              }}
            >
              Back to chobani.com
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* FULL-WIDTH Drawer (starts below navbar) */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{
          keepMounted: true,
          BackdropProps: {
            sx: {
              top: `${APPBAR_HEIGHT}px`,
              height: `calc(100% - ${APPBAR_HEIGHT}px)`,
            },
          },
        }}
        PaperProps={{
          sx: {
            width: '100vw',
            maxWidth: '100vw',
            top: `${APPBAR_HEIGHT}px`,
            height: `calc(100% - ${APPBAR_HEIGHT}px)`,
            borderRadius: 0,
          },
        }}
      >
        <List sx={{ p: 0 }}>
          {mobileLinks.map((item, idx) => (
            <React.Fragment key={item}>
              <ListItemButton
                onClick={() => setOpen(false)}
                sx={{ px: 3, py: 3 }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    sx: {
                      fontFamily: 'Chobani Serif, serif',
                      fontWeight: 600,
                      fontSize: 18,
                      color: '#1A3C34',
                    },
                  }}
                />
              </ListItemButton>
              {idx !== mobileLinks.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </>
  );
}
