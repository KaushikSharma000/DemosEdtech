import { HiSearch } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md"; // Import location icon
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c"; // Your OpenWeatherMap API Key

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchValue?.length > 0) {
            navigate(`/search/${searchValue}`);
            setSearchValue("");
        } else {
            alert("Please enter a search term or click the location icon to use your current location.");
        }
    };

    const handleLocationSearch = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;

                    try {
                        // Fetch city name using reverse geocoding API
                        const response = await fetch(
                            `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`
                        );
                        const data = await response.json();

                        if (data && data[0]?.name) {
                            navigate(`/search/${data[0].name}`);
                        } else {
                            alert("Unable to determine your city. Please enter a search term.");
                        }
                    } catch (error) {
                        alert("An error occurred while fetching location data. Please try again.");
                    }
                },
                (error) => {
                    alert("Location access denied or unavailable. Please enter a search term.");
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    };

    return (
        <div className="flex">
            <form onSubmit={handleSearch} className="lg:flex -mt-6 -mx-44 items-center relative sm:hidden md:hidden">
                <input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    id="searchinput"
                    type="text"
                    placeholder="Search by city, name, or category"
                    className="absolute h-12 top-0 left-0 rounded-lg focus:ring-1 ring-richblack-400 w-96 px-2 py-1 text-xs font-bold text-white focus:outline-none bg-richblack-700"
                />
               
                    <div className="flex items-center absolute left-72 top-4 cursor-pointer text-xs gap-1 whitespace-nowrap" onClick={handleLocationSearch}>
                            <MdLocationOn size={16} className="text-richblack-5" />
                            <p className="text-white">Near Me</p>
                    </div>


            </form>
        </div>
    );
};

export default SearchBar;
