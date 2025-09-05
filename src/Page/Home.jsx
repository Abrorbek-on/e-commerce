import React from "react";
import Navbar from "../Components/Navbar";
import { Box, Typography, Button, Grid, Avatar, Checkbox } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { IconButton } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {
  FavoriteBorder, ArrowOutward, Bed, Bathtub, Garage, SquareFoot, LocationOn,
  Phone,
  Email,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  KeyboardArrowUp,
  Room,
  Favorite,
} from "@mui/icons-material";
import { BookmarkIcon } from "lucide-react";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function Home() {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "600px",
          backgroundImage: "url(assets/unsplash_2gDwlIim3Uw.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          alignItems: "center",
          marginTop: "90px",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.1))",
          }}
        />

        <Box sx={{ position: "relative", textAlign: "center", zIndex: 1 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Skyper Pool Partment
          </Typography>
          <Typography variant="body1" gutterBottom>
            112 Glenwood Ave Hyde Park, Boston, MA
          </Typography>

          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 2, mb: 2 }}
          >
            <Grid item>
              <Box display="flex" alignItems="center" gap={1}>
                <HotelIcon />
                <Typography>4 beds</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center" gap={1}>
                <BathtubIcon />
                <Typography>5 baths</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center" gap={1}>
                <DirectionsCarIcon />
                <Typography>Garage</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center" gap={1}>
                <SquareFootIcon />
                <Typography>1200 Sq Ft</Typography>
              </Box>
            </Grid>
          </Grid>

          <Typography variant="h4" fontWeight="bold" gutterBottom>
            $5,250/mo
          </Typography>

          <Button
            variant="outlined"
            color=""
            sx={{ mt: 2, px: 4, py: 1 }}
          >
            Read More
          </Button>
        </Box>
      </Box>

      <section className="bg-[#595959] h-[480px]"><br />
        <div className="max-w-[1500px] m-auto text-center">
          <p className="text-[30px]">Recommended</p>
          <h1 className="text-gray-500">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h1>
        </div>
        <div className="max-w-[1200px] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-[20px]">
          <div className="w-[350px] overflow-hidden shadow-lg bg-white">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="House"
                className="w-full h-[200px] object-cover"
              />

              <div className="absolute top-3 left-3 flex gap-42">
                <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  FEATURED
                </span>
                <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  FOR SALE
                </span>
              </div>

              <div className="absolute bottom-[-20px] right-4">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold">New Apartment Nice View</h2>
              <p className="text-gray-500 text-sm">Quincy St, Brooklyn, NY, USA</p>

              <div className="flex justify-between text-gray-600 text-sm mt-3">
                <div className="flex flex-col items-center">
                  <Bed fontSize="small" />
                  <span>4 Beds</span>
                </div>
                <div className="flex flex-col items-center">
                  <Bathtub fontSize="small" />
                  <span>5 Baths</span>
                </div>
                <div className="flex flex-col items-center">
                  <Garage fontSize="small" />
                  <span>1 Garage</span>
                </div>
                <div className="flex flex-col items-center">
                  <SquareFoot fontSize="small" />
                  <span>1200 Sq Ft</span>
                </div>
              </div><hr />


              <div className="mt-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-400 line-through text-sm">$2,800/mo</p>
                  <p className="text-blue-700 font-bold text-lg">$7,500/mo</p>
                </div>
                <div className="flex gap-2">
                  <IconButton size="small">
                    <ArrowOutward fontSize="small" />
                  </IconButton>
                  <div>
                    <Checkbox {...label} color="error" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[350px] overflow-hidden shadow-lg bg-white">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="House"
                className="w-full h-[200px] object-cover"
              />

              <div className="absolute top-3 left-3 flex gap-42">
                <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  FEATURED
                </span>
                <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  FOR SALE
                </span>
              </div>

              <div className="absolute bottom-[-20px] right-4">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold">New Apartment Nice View</h2>
              <p className="text-gray-500 text-sm">Quincy St, Brooklyn, NY, USA</p>

              <div className="flex justify-between text-gray-600 text-sm mt-3">
                <div className="flex flex-col items-center">
                  <Bed fontSize="small" />
                  <span>4 Beds</span>
                </div>
                <div className="flex flex-col items-center">
                  <Bathtub fontSize="small" />
                  <span>5 Baths</span>
                </div>
                <div className="flex flex-col items-center">
                  <Garage fontSize="small" />
                  <span>1 Garage</span>
                </div>
                <div className="flex flex-col items-center">
                  <SquareFoot fontSize="small" />
                  <span>1200 Sq Ft</span>
                </div>
              </div>



              <div className="mt-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-400 line-through text-sm">$2,800/mo</p>
                  <p className="text-blue-700 font-bold text-lg">$7,500/mo</p>
                </div>
                <div className="flex gap-2">
                  <IconButton size="small">
                    <ArrowOutward fontSize="small" />
                  </IconButton>
                  <div>
                    <Checkbox {...label} color="error" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[350px] overflow-hidden shadow-lg bg-white">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="House"
                className="w-full h-[200px] object-cover"
              />

              <div className="absolute top-3 left-3 flex gap-42">
                <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  FEATURED
                </span>
                <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  FOR SALE
                </span>
              </div>

              <div className="absolute bottom-[-20px] right-4">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold">New Apartment Nice View</h2>
              <p className="text-gray-500 text-sm">Quincy St, Brooklyn, NY, USA</p>

              <div className="flex justify-between text-gray-600 text-sm mt-3">
                <div className="flex flex-col items-center">
                  <Bed fontSize="small" />
                  <span>4 Beds</span>
                </div>
                <div className="flex flex-col items-center">
                  <Bathtub fontSize="small" />
                  <span>5 Baths</span>
                </div>
                <div className="flex flex-col items-center">
                  <Garage fontSize="small" />
                  <span>1 Garage</span>
                </div>
                <div className="flex flex-col items-center">
                  <SquareFoot fontSize="small" />
                  <span>1200 Sq Ft</span>
                </div>
              </div>


              <div className="mt-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-400 line-through text-sm">$2,800/mo</p>
                  <p className="text-blue-700 font-bold text-lg">$7,500/mo</p>
                </div>
                <div className="flex gap-2">
                  <IconButton size="small">
                    <ArrowOutward fontSize="small" />
                  </IconButton>
                  <div>
                    <Checkbox {...label} color="error" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="max-w-[1500px] m-auto">
        <div className="text-center mt-[20px]">
          <p className="text-[30px] mt-[100px]">Why Choose Us?</p>
          <h1 className="text-gray-500 mb-[60px]">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h1>
        </div>
        <div className="flex justify-between">
          <div>
            <img className="ml-[70px]" src="assets/Vector.png" alt="" /><br />
            <p className="text-center"><strong className="text-[#0d263b]">
              Trusted By Thousands</strong> <br /> <span className="text-[#838485]">With over 1 million+ homes <br /> for sale available on the <br /> website, Trulia can match <br /> you with a house you will <br /> want to call home.</span></p>
          </div>

          <div>
            <img className="ml-[70px]" src="assets/Vector.png" alt="" /><br />
            <p className="text-center"><strong className="text-[#0d263b]">
              Trusted By Thousands</strong> <br /> <span className="text-[#838485]">With over 1 million+ homes <br /> for sale available on the <br /> website, Trulia can match <br /> you with a house you will <br /> want to call home.</span></p>
          </div>

          <div>
            <img className="ml-[70px]" src="assets/Vector.png" alt="" /><br />
            <p className="text-center"><strong className="text-[#0d263b]">
              Trusted By Thousands</strong> <br /> <span className="text-[#838485]">With over 1 million+ homes <br /> for sale available on the <br /> website, Trulia can match <br /> you with a house you will <br /> want to call home.</span></p>
          </div>

          <div>
            <img className="ml-[70px]" src="assets/Vector.png" alt="" /><br />
            <p className="text-center"><strong className="text-[#0d263b]">
              Trusted By Thousands</strong> <br /> <span className="text-[#838485]">With over 1 million+ homes <br /> for sale available on the <br /> website, Trulia can match <br /> you with a house you will <br /> want to call home.</span></p>
          </div>
        </div>

      </section>


      <section className="max-w-[1500px] m-auto">
        <div className="text-center mt-[50px]">
          <strong className="text-[30px]">Category</strong>
          <p className="text-gray-500">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-between">
            <div className="relative">
              <img src="assets/unsplash_XbwHrt87mQ0.png" alt="" />

              <div className="absolute inset-0 flex items-center justify-center">
                <img src="assets/Group (1).png" alt="" />
              </div>
              <div className="absolute inset-0 flex mt-[100px] items-center text-white justify-center">
                <p>House</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="relative">
              <img src="assets/unsplash_XbwHrt87mQ0.png" alt="" />

              <div className="absolute inset-0 flex items-center justify-center">
                <img src="assets/Group (1).png" alt="" />
              </div>
              <div className="absolute inset-0 flex mt-[100px] items-center text-white justify-center">
                <p>House</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="relative">
              <img src="assets/unsplash_XbwHrt87mQ0.png" alt="" />

              <div className="absolute inset-0 flex items-center justify-center">
                <img src="assets/Group (1).png" alt="" />
              </div>
              <div className="absolute inset-0 flex mt-[100px] items-center text-white justify-center">
                <p>House</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="relative">
              <img src="assets/unsplash_XbwHrt87mQ0.png" alt="" />

              <div className="absolute inset-0 flex items-center justify-center">
                <img src="assets/Group (1).png" alt="" />
              </div>
              <div className="absolute inset-0 flex mt-[100px] items-center text-white justify-center">
                <p>House</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "600px",
          backgroundImage: "url(assets/unsplash_g39p1kDjvSY.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          alignItems: "center",
          marginTop: "90px",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.1))",
          }}
        />

        <Box sx={{ position: "relative", textAlign: "center", zIndex: 1 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Vermont Farmhouse With Antique Jail Is <br />
            the Week's Most Popular Home
          </Typography>


          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, px: 4, py: 1 }}
          >
            Read More
          </Button>
        </Box>
      </Box>



      <section className="bg-[#595959] h-[300px]"><br />
        <div className="max-w-[1500px] m-auto text-center">
          <p className="text-[30px] mt-[20px]">Recent Properties for Rent</p>
          <h1 className="text-gray-500">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h1>
        </div>
        <div className="max-w-[1200px] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-[20px]">
          <div className="w-[350px] overflow-hidden shadow-lg bg-white">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="House"
                className="w-full h-[200px] object-cover"
              />

              <div className="absolute top-3 left-3 flex gap-42">
                <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  FEATURED
                </span>
                <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  FOR SALE
                </span>
              </div>

              <div className="absolute bottom-[-20px] right-4">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold">New Apartment Nice View</h2>
              <p className="text-gray-500 text-sm">Quincy St, Brooklyn, NY, USA</p>

              <div className="flex justify-between text-gray-600 text-sm mt-3">
                <div className="flex flex-col items-center">
                  <Bed fontSize="small" />
                  <span>4 Beds</span>
                </div>
                <div className="flex flex-col items-center">
                  <Bathtub fontSize="small" />
                  <span>5 Baths</span>
                </div>
                <div className="flex flex-col items-center">
                  <Garage fontSize="small" />
                  <span>1 Garage</span>
                </div>
                <div className="flex flex-col items-center">
                  <SquareFoot fontSize="small" />
                  <span>1200 Sq Ft</span>
                </div>
              </div>


              <div className="mt-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-400 line-through text-sm">$2,800/mo</p>
                  <p className="text-blue-700 font-bold text-lg">$7,500/mo</p>
                </div>
                <div className="flex gap-2">
                  <IconButton size="small">
                    <ArrowOutward fontSize="small" />
                  </IconButton>
                  <div>
                    <Checkbox {...label} color="error" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[350px] overflow-hidden shadow-lg bg-white ">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="House"
                className="w-full h-[200px] object-cover"
              />

              <div className="absolute top-3 left-3 flex gap-42">
                <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  FEATURED
                </span>
                <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  FOR SALE
                </span>
              </div>

              <div className="absolute bottom-[-20px] right-4">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold">New Apartment Nice View</h2>
              <p className="text-gray-500 text-sm">Quincy St, Brooklyn, NY, USA</p>

              <div className="flex justify-between text-gray-600 text-sm mt-3">
                <div className="flex flex-col items-center">
                  <Bed fontSize="small" />
                  <span>4 Beds</span>
                </div>
                <div className="flex flex-col items-center">
                  <Bathtub fontSize="small" />
                  <span>5 Baths</span>
                </div>
                <div className="flex flex-col items-center">
                  <Garage fontSize="small" />
                  <span>1 Garage</span>
                </div>
                <div className="flex flex-col items-center">
                  <SquareFoot fontSize="small" />
                  <span>1200 Sq Ft</span>
                </div>
              </div>


              <div className="mt-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-400 line-through text-sm">$2,800/mo</p>
                  <p className="text-blue-700 font-bold text-lg">$7,500/mo</p>
                </div>
                <div className="flex gap-2">
                  <IconButton size="small">
                    <ArrowOutward fontSize="small" />
                  </IconButton>
                  <div>
                    <Checkbox {...label} color="error" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[350px] overflow-hidden shadow-lg bg-white">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="House"
                className="w-full h-[200px] object-cover"
              />

              <div className="absolute top-3 left-3 flex gap-42">
                <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  FEATURED
                </span>
                <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  FOR SALE
                </span>
              </div>

              <div className="absolute bottom-[-20px] right-4">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
            </div>

            <div className="p-4 ">
              <h2 className="text-lg font-bold">New Apartment Nice View</h2>
              <p className="text-gray-500 text-sm">Quincy St, Brooklyn, NY, USA</p>

              <div className="flex justify-between text-gray-600 text-sm mt-3">
                <div className="flex flex-col items-center">
                  <Bed fontSize="small" />
                  <span>4 Beds</span>
                </div>
                <div className="flex flex-col items-center">
                  <Bathtub fontSize="small" />
                  <span>5 Baths</span>
                </div>
                <div className="flex flex-col items-center">
                  <Garage fontSize="small" />
                  <span>1 Garage</span>
                </div>
                <div className="flex flex-col items-center">
                  <SquareFoot fontSize="small" />
                  <span>1200 Sq Ft</span>
                </div>
              </div>


              <div className="mt-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-400 line-through text-sm">$2,800/mo</p>
                  <p className="text-blue-700 font-bold text-lg">$7,500/mo</p>
                </div>
                <div className="flex gap-2">
                  <IconButton size="small">
                    <ArrowOutward fontSize="small" />
                  </IconButton>
                  <div>
                    <Checkbox {...label} color="error" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      <section className="max-w-[1500px] m-auto mt-[300px]">
        <div className="text-center mt-[20px]">
          <strong className="text-[30px]">Testimonials</strong>
          <h1 className="text-gray-500">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h1>
        </div>
        <div className="flex justify-between mt-[20px]">

          <div className="max-w-md mx-auto  rounded-lg shadow-sm p-6 text-center bg-white h-[170px] w-[25%]">

            <p className="text-gray-600 text-lg italic">
              I believe in lifelong learning and Skola is a great place to learn from
              experts. I've learned a lot and recommend it to all my friends
            </p>

            <div className="mt-10 flex flex-col items-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Marvin McKinney"
                className="w-14 h-14 rounded-full border-2 border-white shadow-md -mt-8"
              />
              <h3 className="mt-2 font-semibold text-gray-900">Marvin McKinney</h3>
              <p className="text-gray-500 text-sm">Designer</p>
            </div>
          </div><div className="max-w-md mx-auto  rounded-lg shadow-sm p-6 text-center bg-white h-[170px] w-[25%]">

            <p className="text-gray-600 text-lg italic">
              I believe in lifelong learning and Skola is a great place to learn from
              experts. I've learned a lot and recommend it to all my friends
            </p>

            <div className="mt-10 flex flex-col items-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Marvin McKinney"
                className="w-14 h-14 rounded-full border-2 border-white shadow-md -mt-8"
              />
              <h3 className="mt-2 font-semibold text-gray-900">Marvin McKinney</h3>
              <p className="text-gray-500 text-sm">Designer</p>
            </div>
          </div><div className="max-w-md mx-auto rounded-lg shadow-sm p-6 text-center bg-white h-[170px] w-[25%]">

            <p className="text-gray-600 text-lg italic">
              I believe in lifelong learning and Skola is a great place to learn from
              experts. I've learned a lot and recommend it to all my friends
            </p>

            <div className="mt-10 flex flex-col items-center ">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Marvin McKinney"
                className="w-14 h-14 rounded-full border-2 border-white shadow-md -mt-8"
              />
              <h3 className="mt-2 font-semibold text-gray-900">Marvin McKinney</h3>
              <p className="text-gray-500 text-sm">Designer</p>
            </div>
          </div>
        </div>

      </section>


      <footer className="bg-[#0f2c46] text-white pt-10 mt-[120px]">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="flex items-start mb-3">
              <LocationOn className="text-blue-400 mr-2" />
              <p className="text-sm">
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
              </p>
            </div>
            <div className="flex items-center mb-3">
              <Phone className="text-blue-400 mr-2" />
              <p className="text-sm">123 456 7890</p>
            </div>
            <div className="flex items-center mb-3">
              <Email className="text-blue-400 mr-2" />
              <p className="text-sm">support@houzing.com</p>
            </div>

            <div className="flex space-x-4 mt-4">
              <Facebook className="cursor-pointer hover:text-blue-400" />
              <Twitter className="cursor-pointer hover:text-blue-400" />
              <Instagram className="cursor-pointer hover:text-blue-400" />
              <LinkedIn className="cursor-pointer hover:text-blue-400" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Discover</h3>
            <ul className="space-y-2 text-sm">
              <li>Chicago</li>
              <li>Los Angeles</li>
              <li>Miami</li>
              <li>New York</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Lists by Category</h3>
            <ul className="space-y-2 text-sm">
              <li>Apartments</li>
              <li>Condos</li>
              <li>Houses</li>
              <li>Offices</li>
              <li>Retail</li>
              <li>Villas</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Lists by Category</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Support Center</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 py-4 px-6 flex justify-between items-center max-w-[1500px] m-auto">
          <div className="flex items-center space-x-2">
            <img src="assets/logo.png" alt="" />
          </div>
          <p className="text-sm text-gray-400">
            Copyright © 2021 CreativeLayers. All Right Reserved.
          </p>
          <button className="bg-blue-600 p-2 rounded">
            <KeyboardArrowUp className="text-white" />
          </button>
        </div>
      </footer>

    </>
  );
}
