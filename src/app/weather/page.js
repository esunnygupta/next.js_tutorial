"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function WeatherPage() {
  // State for weather data
  const [weather, setWeather] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [weatherError, setWeatherError] = useState(null);
  const [selectedCity, setSelectedCity] = useState("London");
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side to avoid hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Available cities for demo
  const cities = [
    "London",
    "New York",
    "Tokyo",
    "Paris",
    "Sydney",
    "Berlin",
    "Toronto",
    "Mumbai",
  ];

  // Function to fetch weather data for selected city
  const fetchWeather = async (city = selectedCity) => {
    // Mock weather conditions for variety
    const weatherConditions = [
      "Sunny",
      "Cloudy",
      "Rainy",
      "Partly Cloudy",
      "Snowy",
      "Windy",
    ];

    setWeatherLoading(true);
    setWeatherError(null);

    try {
      // Using a mock API since we don't have a real API key
      // In a real app, you'd use:
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Generate realistic mock data based on city
      const cityWeatherData = {
        London: { baseTemp: 12, humidity: 75, windSpeed: 8 },
        "New York": { baseTemp: 18, humidity: 65, windSpeed: 12 },
        Tokyo: { baseTemp: 22, humidity: 70, windSpeed: 6 },
        Paris: { baseTemp: 15, humidity: 68, windSpeed: 10 },
        Sydney: { baseTemp: 25, humidity: 60, windSpeed: 15 },
        Berlin: { baseTemp: 8, humidity: 80, windSpeed: 7 },
        Toronto: { baseTemp: 14, humidity: 72, windSpeed: 11 },
        Mumbai: { baseTemp: 32, humidity: 85, windSpeed: 5 },
      };

      const cityData = cityWeatherData[city] || {
        baseTemp: 20,
        humidity: 70,
        windSpeed: 8,
      };

      const mockWeatherData = {
        name: city,
        main: {
          temp: cityData.baseTemp + Math.floor(Math.random() * 8) - 4, // ±4°C variation
          feels_like: cityData.baseTemp + Math.floor(Math.random() * 6) - 3,
          humidity: cityData.humidity + Math.floor(Math.random() * 20) - 10,
        },
        weather: [
          {
            main: weatherConditions[
              Math.floor(Math.random() * weatherConditions.length)
            ],
            description: "simulated weather data",
          },
        ],
        wind: {
          speed: cityData.windSpeed + Math.floor(Math.random() * 6) - 3,
        },
        sys: {
          country: getCountryCode(city),
        },
      };

      setWeather(mockWeatherData);
    } catch (error) {
      setWeatherError(`Failed to fetch weather data for ${city}`);
      console.error("Weather fetch error:", error);
    } finally {
      setWeatherLoading(false);
    }
  };

  // Helper function to get country codes
  const getCountryCode = (city) => {
    const countryCodes = {
      London: "GB",
      "New York": "US",
      Tokyo: "JP",
      Paris: "FR",
      Sydney: "AU",
      Berlin: "DE",
      Toronto: "CA",
      Mumbai: "IN",
    };
    return countryCodes[city] || "XX";
  };

  // Fetch weather on component mount and when city changes
  useEffect(() => {
    // Only fetch weather data after component has mounted on client
    if (!isClient) return;

    const fetchCityWeather = async () => {
      // Mock weather conditions for variety
      const weatherConditions = [
        "Sunny",
        "Cloudy",
        "Rainy",
        "Partly Cloudy",
        "Snowy",
        "Windy",
      ];

      setWeatherLoading(true);
      setWeatherError(null);

      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Generate realistic mock data based on city
        const cityWeatherData = {
          London: { baseTemp: 12, humidity: 75, windSpeed: 8 },
          "New York": { baseTemp: 18, humidity: 65, windSpeed: 12 },
          Tokyo: { baseTemp: 22, humidity: 70, windSpeed: 6 },
          Paris: { baseTemp: 15, humidity: 68, windSpeed: 10 },
          Sydney: { baseTemp: 25, humidity: 60, windSpeed: 15 },
          Berlin: { baseTemp: 8, humidity: 80, windSpeed: 7 },
          Toronto: { baseTemp: 14, humidity: 72, windSpeed: 11 },
          Mumbai: { baseTemp: 32, humidity: 85, windSpeed: 5 },
        };

        const cityData = cityWeatherData[selectedCity] || {
          baseTemp: 20,
          humidity: 70,
          windSpeed: 8,
        };

        const mockWeatherData = {
          name: selectedCity,
          main: {
            temp: cityData.baseTemp + Math.floor(Math.random() * 8) - 4,
            feels_like: cityData.baseTemp + Math.floor(Math.random() * 6) - 3,
            humidity: cityData.humidity + Math.floor(Math.random() * 20) - 10,
          },
          weather: [
            {
              main: weatherConditions[
                Math.floor(Math.random() * weatherConditions.length)
              ],
              description: "simulated weather data",
            },
          ],
          wind: {
            speed: cityData.windSpeed + Math.floor(Math.random() * 6) - 3,
          },
          sys: {
            country: getCountryCode(selectedCity),
          },
        };

        setWeather(mockWeatherData);
      } catch (error) {
        setWeatherError(`Failed to fetch weather data for ${selectedCity}`);
        console.error("Weather fetch error:", error);
      } finally {
        setWeatherLoading(false);
      }
    };

    fetchCityWeather();
  }, [selectedCity, isClient]);

  // Handle city selection change
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 py-8 px-4">
      <div className="max-w-lg mx-auto">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-700 text-sm flex items-center gap-1"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            🌤️ Weather App
          </h1>

          {/* Learning Info */}
          <div className="mb-6 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-sm font-semibold text-blue-800 mb-1">
              🎓 Learning Concepts:
            </h3>
            <p className="text-xs text-blue-700">
              API requests, async/await, useEffect hook, dropdown handling,
              loading states
            </p>
          </div>

          {/* City Selection */}
          <div className="mb-6">
            <label
              htmlFor="city-select"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select City:
            </label>
            <select
              id="city-select"
              value={selectedCity}
              onChange={handleCityChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Weather Display */}
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-blue-800">
                Current Weather
              </h2>
              <button
                onClick={() => fetchWeather(selectedCity)}
                disabled={weatherLoading}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {weatherLoading ? "Loading..." : "Refresh"}
              </button>
            </div>

            {weatherLoading && (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                <p className="text-blue-600 text-sm mt-2">
                  Fetching weather data...
                </p>
              </div>
            )}

            {weatherError && (
              <div className="text-red-600 text-sm bg-red-50 p-3 rounded border border-red-200">
                {weatherError}
              </div>
            )}

            {!isClient && (
              <div className="text-center py-8">
                <p className="text-blue-600 text-sm">Loading weather app...</p>
              </div>
            )}

            {weather && !weatherLoading && isClient && (
              <div className="space-y-4">
                {/* Main Weather Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-blue-900">
                    {weather.name}, {weather.sys.country}
                  </h3>
                  <div className="text-3xl font-bold text-blue-800 my-2">
                    {Math.round(weather.main.temp)}°C
                  </div>
                  <p className="text-blue-700 font-medium">
                    {weather.weather[0].main}
                  </p>
                </div>

                {/* Weather Details */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-3 rounded border">
                    <p className="text-xs text-gray-500 uppercase">
                      Feels Like
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      {Math.round(weather.main.feels_like)}°C
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <p className="text-xs text-gray-500 uppercase">Humidity</p>
                    <p className="text-lg font-semibold text-gray-800">
                      {weather.main.humidity}%
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <p className="text-xs text-gray-500 uppercase">
                      Wind Speed
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      {weather.wind.speed} m/s
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <p className="text-xs text-gray-500 uppercase">Status</p>
                    <p className="text-sm font-semibold text-green-600">
                      Demo Data
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Code Explanation */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">
              💡 How this works:
            </h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>
                • <code className="bg-gray-200 px-1 rounded">useEffect</code>{" "}
                triggers API calls when city changes
              </li>
              <li>
                • <code className="bg-gray-200 px-1 rounded">async/await</code>{" "}
                handles asynchronous operations
              </li>
              <li>
                • <code className="bg-gray-200 px-1 rounded">fetch()</code>{" "}
                makes HTTP requests to APIs
              </li>
              <li>• Loading states provide user feedback during requests</li>
              <li>• Error handling manages failed API calls gracefully</li>
              <li>• Dropdown selection demonstrates controlled components</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
