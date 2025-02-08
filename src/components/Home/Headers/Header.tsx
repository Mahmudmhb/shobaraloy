import HeaderProfile from "./HeaderProfile";
import LogoAndInput from "./LogoAndInput";

const Header = () => (
    <div className="flex justify-between items-center py-5 px-4 w-full max-w-6xl mx-auto bg-white sticky top-0 z-50 shadow-md">
       <LogoAndInput />

        <div>
            <HeaderProfile />
        </div>
    </div>
);

export default Header;
