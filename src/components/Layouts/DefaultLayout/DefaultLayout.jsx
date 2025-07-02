import Header from "./Header";
import Sidebars from "./Sidebars";
const DefaultLayout = ({ children }) => {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="w-header-height flex">
                <Sidebars />
                <div className="flex-1">{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout;