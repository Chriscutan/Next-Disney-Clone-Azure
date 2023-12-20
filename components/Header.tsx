import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";

function Header() {
  return (
    <header className="flex items-center justify-between fixed w-full z-20 top-0 p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href={"/"} className="mr-10">
        <Image
          src={"https://links.papareact.com/a943ae"}
          alt="logo"
          width={120}
          height={100}
          className="cursor-pointer invert-0 dark:invert"
        />
      </Link>

      <div className="flex items-center space-x-2">
        {/* Genre dropdown */}
        <GenreDropdown />

        {/* Search input */}
        <SearchInput />

        {/* Theme toggler */}
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
