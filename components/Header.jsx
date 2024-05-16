import Navigation from "./Navigation";

export default function Header() {
    return (

        <div className="sticky inset-x-0 top-0 z-10 bg-opacity shadow-sm bg-white">
            <div className="container flex items-center justify-between h-25 ">
                <Navigation />
            </div>
        </div>
    );
}