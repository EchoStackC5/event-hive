import spotifyLogo from "../assets/images/spotifyLogo.svg"; 
import googleLogo from "../assets/images/googleLogo.svg";
import stripeLogo from "../assets/images/stripeLogo.svg";
import youtubeLogo from "../assets/images/youtubeLogo.svg";
import microsoftLogo from "../assets/images/microsoftLogo.svg";
import mediumLogo from "../assets/images/mediumLogo.svg";
import zoomLogo from "../assets/images/zoomLogo.svg";
import uberLogo from "../assets/images/uberLogo.svg";
import grabLogo from "../assets/images/grabLogo.svg";

export default function Brands() {
    return (
        <div className="flex flex-col gap-6 px-4 md:px-8 py-10">
            {/* Header */}
            <div className="flex flex-col justify-center items-center gap-4 text-center">
                <h1 className="text-lg md:text-3xl font-medium">
                    Join these <span className="text-primary">brands</span>
                </h1>
                <p className="text-sm md:text-lg">
                    We've had the pleasure of working with <br className="hidden md:block" />
                    industry-defining brands. These are just some of them.
                </p>
            </div>

            {/* Logos */}
            <div className="flex justify-center items-center flex-col gap-6">
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                    <img src={spotifyLogo} alt="spotify logo" className="max-w-[100px] sm:max-w-[120px]" />
                    <img src={googleLogo} alt="google logo" className="max-w-[100px] sm:max-w-[120px]" />
                    <img src={stripeLogo} alt="stripe logo" className="max-w-[100px] sm:max-w-[120px]" />
                    <img src={youtubeLogo} alt="youtube logo" className="max-w-[100px] sm:max-w-[120px]" />
                    <img src={microsoftLogo} alt="microsoft logo" className="max-w-[100px] sm:max-w-[120px]" />
                </div>

                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                    <img src={mediumLogo} alt="medium logo" className="max-w-[100px] sm:max-w-[120px]" />
                    <img src={zoomLogo} alt="zoom logo" className="max-w-[100px] sm:max-w-[120px]" />
                    <img src={uberLogo} alt="uber logo" className="max-w-[100px] sm:max-w-[120px]" />
                    <img src={grabLogo} alt="grab logo" className="max-w-[100px] sm:max-w-[120px]" />
                </div>
            </div>
        </div>
    );
}
