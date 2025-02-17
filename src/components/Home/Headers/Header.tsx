import HeaderProfile from "./HeaderProfile";
import LogoAndInput from "./LogoAndInput";

const Header = () => {
    return (
        <div className="flex justify-between items-center py-5 px-4 w-full max-w-6xl mx-auto
         bg-white  shadow-md">
            <LogoAndInput />

            <div>
                <HeaderProfile />
            </div>
        </div>
    );
};

export default Header;
