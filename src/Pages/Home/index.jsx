import { Height } from '@mui/icons-material'
import { Box, List, ListItem, ListItemText, Stack } from '@mui/material'
import React, { useState } from 'react'
import home1 from '../../Components/Pics/Homepage-APR-Promo-Hero-Desktop-v3.jpg'
import home2 from '../../Components/Pics/Homepage-Cybertruck-Desktop-v3.jpg'
import home3 from '../../Components/Pics/Homepage-Model-X-Desktop-US.jpg'
import home4 from '../../Components/Pics/Homepage-Model-3-Desktop-US.jpg'
import home5 from '../../Components/Pics/Homepage-Model-S-Desktop-US.jpg'
import home6 from '../../Components/Pics/Homepage-SolarPanels-01-Desktop.jpg'
import home7 from '../../Components/Pics/Homepage-SolarRoof-Desktop-US.jpg'
import home8 from '../../Components/Pics/Homepage-Powerwall-Desktop-US.jpg'
import home9 from '../../Components/Pics/Homepage-Accessories-Desktop-US.jpg'
import home10 from '../../Components/Pics/Mega-Menu-Vehicles-HMC-RedBlue-LHD (1).png'
import DriveEtaIcon from '@mui/icons-material/DriveEta';








import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Grid,
  Typography,

} from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom'
export default function Home() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <>
      <Box sx={{ width: "100%", height: "95vh", position: "relative", display: 'flex', flexDirection: 'row' }}>
        {/* بنر */}
        <img
          src={home1}
          alt="Banner"
          className="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />

        {/* لوگو */}
        <svg
          className="logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 342 35"
          style={{
            position: "absolute",
            top: '1%', // فاصله از بالا
            left: "60px", // فاصله از چپ
            zIndex: 1000, // بالاترین مقدار برای اطمینان از نمایش
            color: 'white'
          }}
          width="130px"
          height="40px"
        >
          <path
            fill="currentColor"
            d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"
          />
        </svg>
        <AppBar elevation={0} sx={{ width: '600px', background: 'none', position: 'absolute', left: '35%' }}>
          <Toolbar>
            <List sx={{
              display: 'flex', flexDirection: 'row', gap: 1, flexWrap: 'no-wrap', fontWeight: 'bold', "& > li:hover": {
                background: "gainsboro",
                cursor: "pointer",
                borderRadius: '5px',

              },
            }}>
              <ListItem sx={{ fontSize: '13px' }} onClick={handleOpen}>

                Vehicles
              </ListItem>
              <ListItem sx={{ fontSize: '13px' }} onClick={handleOpen}>
                Energy
              </ListItem>
              <ListItem sx={{ fontSize: '13px' }} onClick={handleOpen}>
                Charging
              </ListItem>
              <ListItem sx={{ fontSize: '13px' }} onClick={handleOpen}>
                Discover
              </ListItem>
              <ListItem sx={{ fontSize: '13px' }} onClick={handleOpen}>
                Shop
              </ListItem>
            </List>
          </Toolbar>
        </AppBar>

        {/* منوی بازشو */}
        <Menu
          id="mega-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
          PaperProps={{
            sx: {
              width: "100%",
              padding: 0,
              height: '70vh'
            },
          }}
        >
          {/* محتوای مگامنو */}
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="h6" gutterBottom>
                دسته‌بندی ۱
              </Typography>
              <MenuItem onClick={handleClose}>لینک ۱</MenuItem>
              <MenuItem onClick={handleClose}>لینک ۲</MenuItem>
              <MenuItem onClick={handleClose}>لینک ۳</MenuItem>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" gutterBottom>
                دسته‌بندی ۲
              </Typography>
              <MenuItem onClick={handleClose}>لینک ۴</MenuItem>
              <MenuItem onClick={handleClose}>لینک ۵</MenuItem>
              <MenuItem onClick={handleClose}>لینک ۶</MenuItem>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" gutterBottom>
                دسته‌بندی ۳
              </Typography>
              <MenuItem onClick={handleClose}>لینک ۷</MenuItem>
              <MenuItem onClick={handleClose}>لینک ۸</MenuItem>
              <MenuItem onClick={handleClose}>لینک ۹</MenuItem>
            </Grid>
          </Grid>
        </Menu>
        <List sx={{ position: 'absolute', right: '2%', color: 'white', display: 'flex', flexDirection: 'row', zIndex: '1000' }}>
          <ListItem>
            <LanguageIcon color='white !important' />
          </ListItem>
          <ListItem>
            <ContactSupportIcon color='white' />
          </ListItem>
          <ListItem>
            <PersonOutlineIcon />
          </ListItem>
        </List>
        <Box sx={{ position: 'absolute', top: '15%', paddingLeft: '35%', zIndex: '1000', color: 'white' }}>
          <Typography fontWeight={'bold'} variant='h2' component={'p'}>
            $299/mo Leasing
          </Typography>
          <Box gap={2} sx={{ marginTop: '20px', display: 'flex', alignItems: 'center', marginRight: '80px' }}>
            <Typography sx={{ width: '250px', backgroundColor: 'white', borderRadius: '5px', color: 'black', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px' }}>Order Model 3</Typography>
            <Typography sx={{ width: '250px', backgroundColor: 'white', borderRadius: '5px', color: 'black', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px' }}>Order Model Y</Typography>

          </Box>
        </Box>
      </Box>



      <Box sx={{ width: "100%", height: "95vh", position: "relative", display: 'flex', flexDirection: 'row' }}>
        <img
          src={home2}
          alt="Banner"
          className="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <Box gap={2} sx={{ position: 'absolute', top: '10%', right: '41%', zIndex: '1000', color: 'white' }}>



          <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '0px', marginBottom: '20px' }} >
            <Typography variant='h3' >Cyber Truck</Typography>


            <Typography fontWeight={'bold'} variant='h5' component={'h5'}>
              Lease Starting at $899/mo1


            </Typography></Stack>

        </Box>
        <Box gap={2} sx={{ marginTop: '20px', display: 'flex', alignItems: 'center', marginRight: '80px', position: 'absolute', bottom: '5%', zIndex: 1000, right: '30%' }}>
          <Typography sx={{ width: '250px', backgroundColor: 'black', borderRadius: '5px', color: 'white', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8', borderTop: '2px  gainsbro' }}>Order Now</Typography>
          <Typography sx={{ width: '250px', backgroundColor: 'black', borderRadius: '5px', color: 'white', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8' }}>Learn More</Typography>

        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "95vh", position: "relative", display: 'flex', flexDirection: 'row' }}>
        <img
          src={home3}
          alt="Banner"
          className="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <Box gap={2} sx={{ position: 'absolute', top: '10%', right: '41%', zIndex: '1000', color: 'white' }}>



          <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '0px', marginBottom: '20px' }} >
            <Typography variant='h3' >Model Y</Typography>

            <Typography fontWeight={'bold'} variant='h4' component={'h5'}>
              $299/mo Leasing


            </Typography></Stack>

        </Box>
        <Box gap={2} sx={{ marginTop: '20px', display: 'flex', alignItems: 'center', marginRight: '80px', position: 'absolute', bottom: '5%', zIndex: 1000, right: '30%' }}>
          <Typography sx={{ width: '250px', backgroundColor: ' rgb(39, 96, 251)', borderRadius: '5px', color: 'white', borderRadius: '5px', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8', borderTop: '2px  gainsbro' }}>Order Now</Typography>
          <Typography sx={{ width: '250px', backgroundColor: 'white', borderRadius: '5px', color: 'black', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8' }}>Learn More</Typography>

        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "95vh", position: "relative", display: 'flex', flexDirection: 'row' }}>
        <img
          src={home4}
          alt="Banner"
          className="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <Box gap={2} sx={{ position: 'absolute', top: '10%', right: '41%', zIndex: '1000', color: 'white' }}>



          <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '0px', marginBottom: '20px' }} >
            <Typography variant='h3' >Model Y</Typography>

            <Typography fontWeight={'bold'} variant='h4' component={'h5'}>
              $299/mo Leasing


            </Typography></Stack>

        </Box>
        <Box gap={2} sx={{ marginTop: '20px', display: 'flex', alignItems: 'center', marginRight: '80px', position: 'absolute', bottom: '5%', zIndex: 1000, right: '30%' }}>
          <Typography sx={{ width: '250px', backgroundColor: ' rgb(39, 96, 251)', borderRadius: '5px', color: 'white', borderRadius: '5px', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8', borderTop: '2px  gainsbro' }}>Order Now</Typography>
          <Typography sx={{ width: '250px', backgroundColor: 'white', borderRadius: '5px', color: 'black', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8' }}>Learn More</Typography>

        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "95vh", position: "relative", display: 'flex', flexDirection: 'row' }}>
        <img
          src={home5}
          alt="Banner"
          className="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <Box gap={2} sx={{ position: 'absolute', top: '10%', right: '41%', zIndex: '1000', color: 'white' }}>



          <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '0px', marginBottom: '20px' }} >
            <Typography variant='h3' >Model X</Typography>

            <Typography fontWeight={'bold'} variant='h5' component={'h5'}>
              From $65,9904

            </Typography>
            <Typography fontSize={'16px'} fontWeight={'bolder'} variant='p' component={'h5'}>
              After Federal Tax Credit $7,500</Typography>
            <Typography fontSize={'16px'} fontWeight={'bolder'} variant='p' component={'h5'}>
              and Est. Gas Savings $6,500
            </Typography>
          </Stack>

        </Box>
        <Box gap={2} sx={{ marginTop: '20px', display: 'flex', alignItems: 'center', marginRight: '80px', position: 'absolute', bottom: '5%', zIndex: 1000, right: '30%' }}>
          <Typography sx={{ width: '250px', backgroundColor: ' rgb(39, 96, 251)', borderRadius: '5px', color: 'white', borderRadius: '5px', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8', borderTop: '2px  gainsbro' }}>Order Now</Typography>
          <Typography sx={{ width: '250px', backgroundColor: 'white', borderRadius: '5px', color: 'black', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8' }}>Learn More</Typography>

        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "95vh", position: "relative", display: 'flex', flexDirection: 'row' }}>
        <img
          src={home6}
          alt="Banner"
          className="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <Box gap={2} sx={{ position: 'absolute', top: '15%', right: '30%', zIndex: '1000', color: 'white' }}>



          <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '0px', marginBottom: '20px' }} >
            <Typography variant='h3' fontWeight={'bold'}>Solar Panels</Typography>

            <Typography fontWeight={'bold'} variant='h4' component={'h5'} borderBottom={'5px '}>
              Schedule a Virtual Consultation

            </Typography>
          </Stack>

        </Box>
        <Box gap={2} sx={{ marginTop: '20px', display: 'flex', alignItems: 'center', marginRight: '80px', position: 'absolute', bottom: '5%', zIndex: 1000, right: '30%' }}>
          <Typography sx={{ width: '250px', backgroundColor: ' rgb(39, 96, 251)', borderRadius: '5px', color: 'white', borderRadius: '5px', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8', borderTop: '2px  gainsbro' }}>Order Now</Typography>
          <Typography sx={{ width: '250px', backgroundColor: 'white', borderRadius: '5px', color: 'black', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8' }}>Learn More</Typography>

        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "95vh", position: "relative", display: 'flex', flexDirection: 'row' }}>
        <img
          src={home7}
          alt="Banner"
          className="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <Box gap={2} sx={{ position: 'absolute', top: '15%', right: '30%', zIndex: '1000', color: 'white' }}>



          <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '0px', marginBottom: '20px' }} >
            <Typography variant='h3' fontWeight={'bold'}>Solar Roof</Typography>

            <Typography fontWeight={'bold'} variant='h4' component={'h5'} borderBottom={'5px '}>
              Produce Clean Energy From Your Roof
            </Typography>
          </Stack>

        </Box>
        <Box gap={2} sx={{ marginTop: '20px', display: 'flex', alignItems: 'center', marginRight: '80px', position: 'absolute', bottom: '5%', zIndex: 1000, right: '30%' }}>
          <Typography sx={{ width: '250px', backgroundColor:' rgb(39, 96, 251)', borderRadius: '5px', color: 'white', borderRadius: '5px', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8', borderTop: '2px  gainsbro' }}>Order Now</Typography>
          <Typography sx={{ width: '250px', backgroundColor: 'white', borderRadius: '5px', color: 'black', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8' }}>Learn More</Typography>

        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "95vh", position: "relative", display: 'flex', flexDirection: 'row' }}>
        <img
          src={home8}
          alt="Banner"
          className="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <Box gap={2} sx={{ position: 'absolute', top: '15%', right: '43%', zIndex: '1000', color: 'white' }}>



          <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '0px', marginBottom: '20px' }} >
            <Typography variant='h3' fontWeight={'bold'}>Powerwall</Typography>


          </Stack>

        </Box>
        <Box gap={2} sx={{ marginTop: '20px', display: 'flex', alignItems: 'center', marginRight: '80px', position: 'absolute', bottom: '5%', zIndex: 1000, right: '30%' }}>
          <Typography sx={{ width: '250px', backgroundColor: ' rgb(39, 96, 251)', borderRadius: '5px', color: 'white', borderRadius: '5px', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8', borderTop: '2px  gainsbro' }}>Order Now</Typography>
          <Typography sx={{ width: '250px', backgroundColor: 'white', borderRadius: '5px', color: 'black', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8' }}>Learn More</Typography>

        </Box>
      </Box>

      <Box sx={{ width: "100%", height: "95vh", position: "relative", display: 'flex', flexDirection: 'row' }}>
        <img
          src={home7}
          alt="Banner"
          className="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <Box gap={2} sx={{ position: 'absolute', top: '15%', right: '30%', zIndex: '1000', color: 'white' }}>



          <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '0px', marginBottom: '20px' }} >
            <Typography variant='h3' fontWeight={'bold'}>Solar Roof</Typography>

            <Typography fontWeight={'bold'} variant='h4' component={'h5'} borderBottom={'5px '}>
              Produce Clean Energy From Your Roof
            </Typography>
          </Stack>

        </Box>
        <Box gap={2} sx={{ marginTop: '20px', display: 'flex', alignItems: 'center', marginRight: '80px', position: 'absolute', bottom: '5%', zIndex: 1000, right: '30%' }}>
          <Typography sx={{ width: '250px', backgroundColor: ' rgb(39, 96, 251)', borderRadius: '5px', color: 'white', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8', borderTop: '2px  gainsbro' }}>Order Now</Typography>
          <Typography sx={{ width: '250px', backgroundColor: 'white', borderRadius: '5px', color: 'black', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8' }}>Learn More</Typography>

        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "95vh", position: "relative", display: 'flex', flexDirection: 'row' }}>
        <img
          src={home9}
          alt="Banner"
          className="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <Box gap={2} sx={{ position: 'absolute', top: '15%', right: '43%', zIndex: '1000', color: 'white' }}>



          <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '0px', marginBottom: '20px' }} >
            <Typography variant='h3' fontWeight={'bold'}>Accessories</Typography>


          </Stack>

        </Box>
        <Box gap={2} sx={{ marginTop: '20px', display: 'flex', alignItems: 'center', marginRight: '80px', position: 'absolute', bottom: '5%', zIndex: 1000, right: '30%' }}>
          <Typography sx={{ width: '250px', backgroundColor: ' rgb(39, 96, 251)', borderRadius: '5px', color: 'white', borderRadius: '5px', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8', borderTop: '2px  gainsbro' }}>Order Now</Typography>
          <Typography sx={{ width: '250px', backgroundColor: 'white', borderRadius: '5px', color: 'black', fontSize: '14px', height: '40px', textAlign: 'center', alignItems: 'center', fontWeight: 'italyc', paddingTop: '10px', opacity: '0.8' }}>Learn More</Typography>

        </Box>
      </Box>
      <Box sx={{ width: "100%", position: "relative", display: 'flex', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap', marginTop: '20px', marginTop: '50px', opacity: '0.8' }}>
        <Typography fontSize={'12px'}>
          1 Monthly lease payment excludes taxes and fees, is based on $79,990 Cybertruck All-Wheel Drive
        </Typography>
        <Typography fontSize={'12px'}>
          purchase price and is subject to change at any time. Requires $7,500 down with 36 months and 10,000
        </Typography>
        <Typography fontSize={'12px'}>
          miles. Subject to credit approval and available in select U.S. states. Terms apply.


        </Typography>
      </Box>
      <Box sx={{ width: "100%", position: "relative", display: 'flex', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap', opacity: '0.8', marginTop: '20px' }}>
        <Typography fontSize={'12px'}>
          2 Price before estimated savings is $46,630, including Destination and Order Fees, but excluding taxes and
        </Typography>
        <Typography fontSize={'12px'}>
          other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings
        </Typography>
        <Typography fontSize={'12px'}>
          includes $6,500 in gas savings estimated over five years, the $7,500 Federal Tax Credit and state

        </Typography>
        <Typography fontSize={'12px'}>
          incentives, available to eligible buyers and subject to MSRP caps. Not all vehicles, customers or finance
        </Typography>
        <Typography fontSize={'12px'}>
          options will be eligible. <Link>Terms apply.</Link>       </Typography>
      </Box>
      <Box sx={{ width: "100%", position: "relative", display: 'flex', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap', margin: 'auto', opacity: '0.8', marginTop: '20px' }}>
        <Typography fontSize={'12px'}>
          Price before estimated savings is $44,130, including Destination and Order Fees, but excluding taxes and        </Typography>
        <Typography fontSize={'12px'}>
          other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings
        </Typography>
        <Typography fontSize={'12px'}>
          includes $6,500 in gas savings estimated over five years, the $7,500 Federal Tax Credit and state
        </Typography>
        <Typography fontSize={'12px'}>
          incentives, available to eligible buyers and subject to MSRP caps. Not all vehicles, customers or finance
        </Typography>
        <Typography fontSize={'12px'}>
          options will be eligible. <Link>Terms apply.</Link>       </Typography>
      </Box>
      <Box sx={{ width: "100%", position: "relative", display: 'flex', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap', margin: 'auto', opacity: '0.8', marginTop: '20px' }}>
        <Typography fontSize={'12px'}>
          4 Price before estimated savings is $81,630, including Destination and Order Fees, but excluding taxes and     </Typography>
        <Typography fontSize={'12px'}>
          other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings
        </Typography>
        <Typography fontSize={'12px'}>
          includes $6,500 in gas savings estimated over five years, the $7,500 Federal Tax Credit and state
        </Typography>
        <Typography fontSize={'12px'}>
          incentives, available to eligible buyers and subject to MSRP caps. Not all vehicles, customers or finance
        </Typography>
        <Typography fontSize={'12px'}>
          options will be eligible. <Link>Terms apply.</Link>       </Typography>
      </Box>
      <Box sx={{ width: "100%", position: "relative", display: 'flex', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap', margin: 'auto', opacity: '0.8', marginTop: '20px' }}>
        <Typography fontSize={'12px'}>
          5 Price before estimated savings is $81,630, including Destination and Order Fees, but excluding taxes and    </Typography>
        <Typography fontSize={'12px'}>
          other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings
        </Typography>
        <Typography fontSize={'12px'}>
          includes $6,500 in gas savings estimated over five years, the $7,500 Federal Tax Credit and state
        </Typography>
        <Typography fontSize={'12px'}>
          includes $6,500 in gas savings estimated over five years and state incentives, available to eligible buyers
        </Typography>
        <Typography fontSize={'12px'}>
          and subject to MSRP caps. Not all vehicles, customers or finance options will be eligible. <Link>Terms apply.</Link>       </Typography>
      </Box>


      <Box
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'center', // مرکز کردن افقی
        alignItems: 'center', // مرکز کردن عمودی
        flexDirection: 'column', // قرار دادن آیتم‌ها به صورت عمودی در مرکز
        borderTop: '1px solid #ddd',
        width: '100%',
      }}
    >
      <List
        sx={{
          display: 'flex',
          justifyContent: 'center', // مرکز کردن افقی
          alignItems: 'center', // مرکز کردن عمودی
          padding: 0, // حذف پدینگ
          margin: 0, // حذف مارژین
         
        
        }}
      >
        <ListItem sx={{ padding: 0, margin: 0 }}>
          <Link href="/products" sx={{ textDecoration: 'none', color: 'black', fontSize: '14px' }}>
            Tesla © 2025
          </Link>
        </ListItem>
        <ListItem sx={{ padding: 0, margin: 0 }}>
          <Link href="/products" sx={{ textDecoration: 'none', color: 'black', fontSize: '14px' }}>
            Privacy & Legal
          </Link>
        </ListItem>
        <ListItem sx={{ padding: 0, margin: 0 }}>
          <Link href="/products" sx={{ textDecoration: 'none', color: 'black', fontSize: '14px' }}>
            Vehicle Recalls
          </Link>
        </ListItem>
        <ListItem sx={{ padding: 0, margin: 0 }}>
          <Link href="/products" sx={{ textDecoration: 'none', color: 'black', fontSize: '14px' }}>
            Contact
          </Link>
        </ListItem>
        <ListItem sx={{ padding: 0, margin: 0 }}>
          <Link href="/products" sx={{ textDecoration: 'none', color: 'black', fontSize: '14px' }}>
            News
          </Link>
        </ListItem>
        <ListItem sx={{ padding: 0, margin: 0 }}>
          <Link href="/products" sx={{ textDecoration: 'none', color: 'black', fontSize: '14px' }}>
            Get Updates
          </Link>
        </ListItem>
        <ListItem sx={{ padding: 0, margin: 0 }}>
          <Link href="/products" sx={{ textDecoration: 'none', color: 'black', fontSize: '14px' }}>
            Locations
          </Link>
        </ListItem>
      </List>
    </Box>

      <Box gap={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60px', // ارتفاع نوار
          backgroundColor: 'white', // پس‌زمینه سفید
          position: 'sticky', // موقعیت sticky
          bottom: 0, // چسباندن به پایین صفحه
          zIndex: 1002, // روی سایر عناصر قرار بگیرد
          borderTop: '1px solid #e0e0e0', // خط جداکننده در بالای نوار
          padding: { xs: '0 10px', sm: '0 20px' }, // فاصله داخلی برای ریسپانسیو

        }}
      > <DriveEtaIcon color='rgb(62, 106, 225)' />
        <Typography
          component="p"
          fontSize={{ xs: '14px', sm: '14px' }} // اندازه متن ریسپانسیو
          sx={{
            color: 'black',
            textAlign: 'center', // وسط‌چین کردن متن
          }}
        >
          <Link
            to="./products"
            style={{
              textDecoration: 'none', // حذف خط زیر لینک
              color: 'black', // رنگ لینک
              fontWeight: 'bolder', // ضخیم کردن متن لینک
            }}
          >
            Schedule a Drive Today
          </Link>
        </Typography>

      </Box>
    </>
  )
}
