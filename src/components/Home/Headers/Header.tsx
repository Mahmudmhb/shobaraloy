import HeaderProfile from "./HeaderProfile";
import LogoAndInput from "./LogoAndInput";

const Header = () => (
    <div className="flex justify-between py-5 w-5/6 mx-auto">
       <LogoAndInput/>

        <div>

            <HeaderProfile />
        </div>


    </div>
);

export default Header;