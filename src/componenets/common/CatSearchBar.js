import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdLocationOn } from "react-icons/md"; // Location Icon
import toast from "react-hot-toast";

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

const CatSearchBar = ({ selectedCategory }) => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchValue.trim()) {
            const filteredCourses = selectedCategory?.courses?.filter((course) =>
                course.courseDescription && course.courseDescription.toLowerCase().includes(searchValue.toLowerCase()) // Check if description exists
            );
    
            if (filteredCourses?.length > 0) {
                navigate(`/search`, { state: { courses: filteredCourses } });
                // navigate(`/search/${searchValue}`);
            } else {
                toast.error("No courses found matching your search term.");
            }
        } else {
            toast.error("Please enter a search term.");
        }
    };
    

    const handleLocationSearch = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;

                    try {
                        // Reverse Geocode to get the city name
                        const response = await fetch(
                            `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`
                        );
                        const data = await response.json();

                        if (data && data[0]?.name) {
                            const cityName = data[0].name.toLowerCase();
                            const locationCourses = selectedCategory?.courses?.filter((course) =>
                                course.location?.toLowerCase().includes(cityName)
                            );

                            if (locationCourses?.length > 0) {
                                navigate(`/search-results`, { state: { courses: locationCourses } });
                            } else {
                                toast.error("No courses found near your location.");
                            }
                        } else {
                            toast.error("Unable to determine your city. Please try again.");
                        }
                    } catch (error) {
                        toast.error("Error fetching location data.");
                    }
                },
                () => {
                    toast.error("Location access denied. Please use the search bar.");
                }
            );
        } else {
            toast.error("Geolocation is not supported by your browser.");
        }
    };

    return (
        <div className="flex">
            <form onSubmit={handleSearch} className="flex items-center relative">
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search by course description"
                    className="rounded-lg h-12 px-2 py-1 text-white bg-richblack-700 focus:outline-none"
                />
                <button type="submit" className="ml-2 bg-yellow-500 p-2 rounded-lg">
                    Search
                </button>
                <div
                    className="flex items-center ml-4 cursor-pointer"
                    onClick={handleLocationSearch}
                >
                    <MdLocationOn size={20} className="text-yellow-500" />
                    <span className="text-white ml-1">Near Me</span>
                </div>
            </form>
        </div>
    );
};

export default CatSearchBar;
