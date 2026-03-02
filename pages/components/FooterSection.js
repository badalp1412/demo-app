import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

export default function FooterSection() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1A3C34',
        color: '#ffffff',
        padding: { xs: '30px 20px', md: '30px 70px' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '40px',
        }}
      >
        {/* Newsletter Section */}
        <Box sx={{ flex: 1, minWidth: '300px' }}>
          <Typography
            sx={{
              color: '#F8F3E3',
              fontFamily: '"Chobani Serif", serif',
              fontSize: '16px',
              lineHeight: '130%',
              letterSpacing: '-0.032px',
              mb: '20px',
            }}
          >
            Get the freshest Chobani news
          </Typography>
          <Box
            sx={{
              display: 'flex',
              pb: '10px',
              maxWidth: '400px',
            }}
          >
            <Box
              component="input"
              type="email"
              placeholder="Enter email here"
              sx={{
                backgroundColor: 'transparent',
                border: 'none',
                flex: 1,
                outline: 'none',
                color: 'rgba(255, 255, 255, 0.50)',
                fontFamily: '"Chobani Serif", serif',
                fontSize: '16px',
                lineHeight: '130%',
                paddingRight: '20px',
                '&::placeholder': { color: 'rgba(255, 255, 255, 0.6)' },
              }}
            />
            <Box
              component="button"
              sx={{
                color: '#F8F3E3',
                fontFamily: '"Chobani Sans", sans-serif',
                fontSize: '14px',
                lineHeight: '100%',
                textTransform: 'capitalize',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                p: 0,
              }}
            >
              Subscribe
            </Box>
          </Box>
          <Typography
            sx={{
              color: '#F8F3E3',
              fontFamily: '"Chobani Sans", sans-serif',
              fontSize: '12px',
              lineHeight: '130%',
              mt: '20px',
            }}
          >
            By checking the box, you agree that you are at least 18 years of
            age.
          </Typography>
          {/* Social Media Icons */}
          <Box sx={{ display: 'flex', gap: '20px', mb: '20px', mt: '50px' }}>
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              style={{
                fill: 'white',
                opacity: 0.9,
                cursor: 'pointer',
                transition: 'opacity 0.3s',
              }}
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{
                opacity: 0.9,
                cursor: 'pointer',
                transition: 'opacity 0.3s',
              }}
            >
              <g clipPath="url(#clip0_3053_457)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0006 0C4.47816 0 0 4.47698 0 10.0006C0 14.0942 2.46252 17.6127 5.98695 19.1592C5.95872 18.4618 5.98224 17.6222 6.15982 16.8625C6.35268 16.051 7.44635 11.4141 7.44635 11.4141C7.44635 11.4141 7.12765 10.7756 7.12765 9.83125C7.12765 8.3495 7.9873 7.2429 9.05627 7.2429C9.96531 7.2429 10.4051 7.92615 10.4051 8.74463C10.4051 9.65838 9.82184 11.026 9.52196 12.2926C9.27148 13.3545 10.0535 14.2189 11.1001 14.2189C12.9946 14.2189 14.2706 11.7857 14.2706 8.90222C14.2706 6.71135 12.7947 5.07085 10.11 5.07085C7.07709 5.07085 5.18728 7.33227 5.18728 9.85829C5.18728 10.7309 5.44364 11.3447 5.84583 11.8198C6.03163 12.0397 6.05633 12.1268 5.9893 12.3784C5.94226 12.5607 5.83172 13.0052 5.78585 13.1805C5.71882 13.4333 5.5142 13.525 5.28606 13.4309C3.88781 12.8606 3.23749 11.3306 3.23749 9.61016C3.23749 6.77015 5.63297 3.36215 10.384 3.36215C14.2024 3.36215 16.7155 6.12689 16.7155 9.09155C16.7155 13.0146 14.5352 15.9452 11.3189 15.9452C10.2405 15.9452 9.22444 15.3619 8.87634 14.6998C8.87634 14.6998 8.29541 17.0036 8.17311 17.4481C7.96143 18.2184 7.5463 18.9898 7.16646 19.5896C8.06609 19.8554 9.01629 20 10.0006 20C15.523 20 20 15.523 20 10.0006C20 4.47698 15.523 0 10.0006 0Z"
                  fill="#F8F3E3"
                />
              </g>
              <defs>
                <clipPath id="clip0_3053_457">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              style={{
                opacity: 0.9,
                cursor: 'pointer',
                transition: 'opacity 0.3s',
              }}
            >
              <g clipPath="url(#clip0_3053_461)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.1451 2.36764C23.2527 2.76923 22.292 3.04081 21.2842 3.16215C22.3134 2.5381 23.1031 1.54857 23.4751 0.369809C22.5115 0.947635 21.4467 1.368 20.3092 1.59335C19.4026 0.612495 18.1068 0 16.6728 0C13.9231 0 11.6922 2.26074 11.6922 5.04875C11.6922 5.44456 11.735 5.82882 11.8205 6.19863C7.6795 5.98772 4.00892 3.97978 1.54998 0.921632C1.12091 1.66992 0.875734 2.5381 0.875734 3.46262C0.875734 5.21343 1.75525 6.75912 3.09234 7.66486C2.27697 7.6403 1.50722 7.41062 0.834396 7.03503V7.09715C0.834396 9.54424 2.55209 11.5854 4.83284 12.0477C4.41517 12.1661 3.9747 12.2254 3.51998 12.2254C3.19925 12.2254 2.88565 12.195 2.58202 12.1358C3.21635 14.1408 5.05521 15.6013 7.23618 15.6403C5.53132 16.9953 3.38171 17.8028 1.04822 17.8028C0.646234 17.8028 0.248528 17.7797 -0.140625 17.7335C2.06458 19.1636 4.68459 20 7.49704 20C16.6628 20 21.6733 12.3077 21.6733 5.63525C21.6733 5.41567 21.6691 5.1961 21.6605 4.98086C22.6341 4.26869 23.4794 3.38028 24.1451 2.36764Z"
                  fill="#F8F3E3"
                />
              </g>
              <defs>
                <clipPath id="clip0_3053_461">
                  <rect width="24" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Box>
        </Box>

        {/* Links Sections */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: '30px', md: '60px' },
          }}
        >
          <Box>
            <Typography
              component="h4"
              sx={{
                color: '#F8F3E3',
                fontFamily: '"Chobani Sans", sans-serif',
                fontSize: '14px',
                lineHeight: '100%',
                textTransform: 'capitalize',
                mb: '15px',
                cursor: 'pointer',
                m: '0 0 15px 0',
              }}
            >
              Chobani Café
            </Typography>
            <Typography
              sx={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.9)',
                cursor: 'pointer',
                m: '0 0 12px 0',
                fontFamily: '"Chobani Sans", sans-serif',
              }}
            >
              Foodservice
            </Typography>
          </Box>
          <Box>
            <Typography
              component="h4"
              sx={{
                color: '#F8F3E3',
                fontFamily: '"Chobani Sans", sans-serif',
                fontSize: '14px',
                lineHeight: '100%',
                textTransform: 'capitalize',
                mb: '15px',
                cursor: 'pointer',
                m: '0 0 15px 0',
              }}
            >
              Careers
            </Typography>
            <Typography
              sx={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.9)',
                cursor: 'pointer',
                m: '0 0 12px 0',
                fontFamily: '"Chobani Sans", sans-serif',
              }}
            >
              Alumni
            </Typography>
          </Box>
          <Box>
            <Typography
              component="h4"
              sx={{
                color: '#F8F3E3',
                fontFamily: '"Chobani Sans", sans-serif',
                fontSize: '14px',
                lineHeight: '100%',
                textTransform: 'capitalize',
                mb: '15px',
                cursor: 'pointer',
                m: '0 0 15px 0',
                fontFamily: '"Chobani Sans", sans-serif',
              }}
            >
              Consumer Care
            </Typography>
            <Typography
              sx={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.9)',
                cursor: 'pointer',
                m: '0 0 12px 0',
                fontFamily: '"Chobani Sans", sans-serif',
              }}
            >
              Chobani News
            </Typography>
          </Box>
        </Box>

        {/* Region Selector */}
        <Box
          sx={{
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minWidth: '240px',
            height: 'fit-content',
            cursor: 'pointer',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          <Typography component="span" sx={{ fontSize: '14px', fontFamily: '"Chobani Sans", sans-serif', }}>
            Choose Region
          </Typography>
          <Typography
            component="span"
            sx={{ fontSize: '0.7rem', display: 'flex', alignItems: 'center' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
            >
              <path
                d="M0.510254 0.549805L7.51025 7.0498L14.5103 0.549805"
                stroke="#F8F3E3"
                strokeWidth="1.5"
              />
            </svg>
          </Typography>
        </Box>
      </Box>

      {/* Bottom Legal Section */}
      <Box
        sx={{
          paddingTop: '30px',
        }}
      >
        <Typography
          sx={{
            color: '#F8F3E3',
            fontFamily: '"Chobani Sans", sans-serif',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '130%',
            opacity: 0.5,
            borderBottom: '1px solid rgba(255, 255, 255, 0.50)',
            paddingBottom: '15px',
            marginBottom: '15px',
          }}
        >
          ©2023 Chobani, LLC. All Rights Reserved.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '15px',
            color: '#F8F3E3',
            fontFamily: '"Chobani Sans", serif',
            fontSize: '12px',
            opacity: 0.5,
          }}
        >
          {[
            'Website Terms',
            'Privacy Policy',
            'Accessibility Statement',
            'CA Transparency in Supply Chains Act',
            'Supplier Code of Conduct',
            'Marketing to Children',
            'Do Not Sell My Information',
          ].map((text, idx) => (
            <Box
              component="span"
              key={idx}
              sx={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <Typography
                component="span"
                sx={{ fontSize: '12px', cursor: 'pointer', fontFamily: '"Chobani Sans", serif',}}
              >
                {text}
              </Typography>
              {idx !== 6 && (
                <Typography
                  component="span"
                  sx={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.3)',
                    marginLeft: '15px',
                  }}
                >
                  |
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
