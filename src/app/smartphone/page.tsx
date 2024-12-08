import { ReusableCard } from "@/components/weatherCard";

const WeatherPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50">
      <div className="grid grid-cols-1 gap-12 p-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        <ReusableCard
          imgSrc="weather.png"
          title="Weather Updates"
          description="Stay ahead with real-time weather updates tailored to your location. This feature provides accurate forecasts, temperature insights, and weather predictions to help you plan your day effectively."
        />
        <ReusableCard
          imgSrc="marketplace.png"
          title="Marketplace for Farmers"
          description="Access a wide range of farm products and services. This platform allows farmers to buy and sell farm produce, equipment, and services with ease."
        />
        <ReusableCard
          imgSrc="list.png"
          title="MSP Price List"
          description="Stay updated with the latest MSP prices for crops. This feature ensures farmers are informed about the Minimum Support Price (MSP) for various produce."
        />
      </div>
    </div>
  );
};

export default WeatherPage;