import Navbar from "../components/Navbar";

export default function Main({ children }) {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
}
