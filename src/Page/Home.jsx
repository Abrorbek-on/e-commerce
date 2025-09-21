import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Box, Typography, Button, Grid, Avatar, Checkbox } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { IconButton } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
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
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function Home() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [properties, setProperties] = useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("http://localhost:4000/accommodations");
        setProperties(res.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };
    fetchProperties();
  }, []);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:4000/accommodations");
        setCategories(res.data);
      } catch (error) {
        console.error("Error fetching accommodations:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <>
      <Navbar />

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "400px", md: "600px" }, // kichik ekranlar uchun balandlik kamayadi
          backgroundImage: "url(assets/unsplash_2gDwlIim3Uw.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          alignItems: "center",
          mt: { xs: "60px", md: "90px" },
          justifyContent: "center",
          px: { xs: 2, md: 0 }, // mobil uchun yonlardan padding
        }}
      >
        {/* Gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.1))",
          }}
        />

        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            zIndex: 1,
            maxWidth: "900px",
            width: "100%",
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" }, // responsive font
            }}
          >
            Skyper Pool Partment
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
          >
            112 Glenwood Ave Hyde Park, Boston, MA
          </Typography>

          {/* Info grid */}
          <Grid
            container
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 2, mb: 2 }}
          >
            <Grid item xs={6} sm="auto">
              <Box display="flex" alignItems="center" gap={1}>
                <HotelIcon fontSize="small" />
                <Typography variant="body2">4 beds</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm="auto">
              <Box display="flex" alignItems="center" gap={1}>
                <BathtubIcon fontSize="small" />
                <Typography variant="body2">5 baths</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm="auto">
              <Box display="flex" alignItems="center" gap={1}>
                <DirectionsCarIcon fontSize="small" />
                <Typography variant="body2">Garage</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm="auto">
              <Box display="flex" alignItems="center" gap={1}>
                <SquareFootIcon fontSize="small" />
                <Typography variant="body2">1200 Sq Ft</Typography>
              </Box>
            </Grid>
          </Grid>

          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
          >
            $5,250/mo
          </Typography>

          <Button
            variant="outlined"
            sx={{
              mt: 2,
              px: { xs: 3, md: 4 },
              py: 1,
              fontSize: { xs: "0.8rem", md: "1rem" },
            }}
          >
            Read More
          </Button>
        </Box>
      </Box>


      <section className="bg-[#595959] py-10">
        <div className="max-w-[1500px] m-auto text-center px-4">
          <p className="text-[30px]">Recommended</p>
          <h1 className="text-gray-500">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </h1>
        </div>

        <div className="max-w-[1200px] m-auto mt-6 px-4">
          <Swiper
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="mySwiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >


            {properties.map((item) => {
              const avgRating = item.Rating?.length
                ? (
                  item.Rating.reduce((sum, r) => sum + r.clean, 0) /
                  item.Rating.length
                ).toFixed(1)
                : "No rating";

              return (
                <SwiperSlide key={item.id}>
                  <div className="w-full overflow-hidden shadow-lg bg-white rounded-lg">
                    <div className="relative">
                      <img
                        src={item.house_img?.[0] || "https://via.placeholder.com/350x200"}
                        alt={item.title}
                        className="w-full h-[200px] object-cover"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {item.featured && (
                          <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                            FEATURED
                          </span>
                        )}
                        <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                          {item.listing_type.toUpperCase()}
                        </span>
                        <span className="bg-gray-600 text-white text-xs font-semibold px-2 py-1 rounded">
                          {item.Category?.name}
                        </span>
                      </div>
                      <div className="absolute bottom-[-20px] right-4">
                        <img
                          src={item.User?.avatar || "https://i.pravatar.cc/40"}
                          alt="profile"
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />
                      </div>
                    </div>

                    <div className="p-4">
                      <h2 className="text-lg font-bold">{item.title}</h2>
                      <p className="text-gray-500 text-sm">{item.location}</p>
                      <p className="text-yellow-500">{avgRating} ★</p>

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

                      <hr className="text-gray-400 mt-2" />

                      <div className="mt-4 flex justify-between items-center">
                        <div>
                          <p className="text-gray-400 line-through text-sm">
                            ${item.price}
                          </p>
                          <p className="text-blue-700 font-bold text-lg">
                            ${item.total_price}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Link to={`/product_view`}>
                            <IconButton size="small">
                              <ArrowOutward fontSize="small" />
                            </IconButton>
                          </Link>
                          <Checkbox
                            color="error"
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>


      <section className="max-w-[1500px] m-auto px-4">
        <div className="text-center mt-10">
          <p className="text-[30px] mt-[50px]">Why Choose Us?</p>
          <h1 className="text-gray-500 mb-10">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </h1>
        </div>

        <div className="grid grid-cols-1 max-sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {Array(4).fill(0).map((_, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src="assets/Vector.png" alt="" className="w-16 mb-4" />
              <p>
                <strong className="text-[#0d263b]">Trusted By Thousands</strong>
                <br />
                <span className="text-[#838485]">
                  With over 1 million+ homes <br />
                  for sale available on the <br />
                  website, Trulia can match <br />
                  you with a house you will <br />
                  want to call home.
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>


      <section className="max-w-[1500px] m-auto">
        <div className="text-center mt-[50px]">
          <strong className="text-[30px]">Category</strong>
          <p className="text-gray-500">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </div>

        <div className="mt-10 max-w-[1500px] m-auto">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            navigation
            modules={[Navigation]}
            loop={true}
            className="mySwiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {categories.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative">
                  <img
                    src={item.house_img}
                    alt={item.title}
                    className="rounded-2xl w-[100%] h-[250px] object-cover"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="assets/Group (1).png" alt="overlay" />
                  </div>

                  <div className="absolute inset-0 flex mt-[100px] items-center text-white justify-center">
                    <p className="text-xl font-semibold drop-shadow-lg">
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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



      <section className="h-[300px]"><br />
        <div className="max-w-[1500px] m-auto text-center">
          <p className="text-[30px] mt-[20px]">Recent Properties for Rent</p>
          <h1 className="text-gray-500">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h1>
        </div>
        <div className="max-w-[1200px] m-auto mt-[20px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="mySwiperli"
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {properties.map((item) => {
              const avgRating = item.Rating?.length
                ? (
                  item.Rating.reduce((sum, r) => sum + r.clean, 0) /
                  item.Rating.length
                ).toFixed(1)
                : "No rating";

              return (
                <SwiperSlide key={item.id}>
                  <div className="w-[350px] overflow-hidden shadow-lg bg-white rounded-lg">
                    <div className="relative">
                      <img
                        src={
                          item.house_img?.[0] || "https://via.placeholder.com/350x200"
                        }
                        alt={item.title}
                        className="w-full h-[200px] object-cover"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {item.featured && (
                          <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                            FEATURED
                          </span>
                        )}
                        <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                          {item.listing_type.toUpperCase()}
                        </span>
                        <span className="bg-gray-600 text-white text-xs font-semibold px-2 py-1 rounded">
                          {item.Category?.name}
                        </span>
                      </div>
                      <div className="absolute bottom-[-20px] right-4">
                        <img
                          src={item.User?.avatar || "https://i.pravatar.cc/40"}
                          alt="profile"
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />
                      </div>
                    </div>

                    <div className="p-4">
                      <h2 className="text-lg font-bold">{item.title}</h2>
                      <p className="text-gray-500 text-sm">{item.location}</p>
                      <p className="text-yellow-500">{avgRating} ★</p>

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

                      <hr className="text-gray-400 mt-2" />

                      <div className="mt-4 flex justify-between items-center">
                        <div>
                          <p className="text-gray-400 line-through text-sm">
                            ${item.price}
                          </p>
                          <p className="text-blue-700 font-bold text-lg">
                            ${item.total_price}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Link to={`/product_view/`}>
                            <IconButton size="small">
                              <ArrowOutward fontSize="small" />
                            </IconButton>
                          </Link>
                          <Checkbox
                            color="error"
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

      </section>


      <section className="max-w-[1500px] m-auto mt-[300px] px-4">
        <div className="text-center mt-[20px]">
          <strong className="text-[30px]">Testimonials</strong>
          <h1 className="text-gray-500">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[20px]">
          {Array(3).fill(0).map((_, i) => (
            <div
              key={i}
              className="max-w-md mx-auto rounded-lg shadow-sm p-6 text-center bg-white"
            >
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
            </div>
          ))}
        </div>
      </section>

      <Footer />

    </>
  );
}
