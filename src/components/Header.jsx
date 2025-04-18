import { LOGO_IMG } from "../utils/constant";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">

      <div className="flex items-center">
        <img src={LOGO_IMG} alt="Logo" className="h-10 w-auto" />
      </div>


      <nav className="flex gap-6 text-gray-700 font-medium">
        <div className="cursor-pointer hover:text-blue-600 transition">Home</div>
        <div className="cursor-pointer hover:text-blue-600 transition">About Us</div>
        <div className="cursor-pointer hover:text-blue-600 transition">Contact Us</div>
        <div className="cursor-pointer hover:text-blue-600 transition">User</div>
      </nav>
    </header>
  );
}
