// components/Navbar.js
import Link from 'next/link';

const navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default navbar;
