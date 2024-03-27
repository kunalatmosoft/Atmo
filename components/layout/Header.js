"use client";
import React from 'react';

import { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from '@/app/context/AuthContext';


const Header = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (

    <div className="bg-gradient-to-b from-orange-100 to-orange-200 h-20 w-full border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="text font-semibold text-2xl p-2 cursor-pointer">
          <Link href={'./'}>Home</Link>
        </li>


        {!user ? null : (
          <><li className="text font-lightbold text-2xl p-2 cursor-pointer">
            <Link href={'./profile'}>Profile</Link>
          </li><li className="text font-lightbold text-2xl p-2 cursor-pointer">

              <Link href={'./About'}>About</Link>   </li>
              <li className="text font-lightbold text-2xl p-2 cursor-pointer">

              <Link href={'./Blog'}>Blog</Link></li>
              <li className="text font-lightbold text-2xl p-2 cursor-pointer">

              <Link href={'./Detail'}>Details</Link></li></>
        )}
      </ul>

      {loading ? null : !user ? (
        <ul className="flex">
          <li onClick={handleSignIn} className=" cursor-pointer bg-primary rounded-full text-white px-8 py-2">
            Login
          </li>
          <li onClick={handleSignIn} className="cursor-pointer bg-primary rounded-full text-white px-8 py-2">
            Sign up
          </li>
        </ul>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <p className="cursor-pointer bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full text-white px-8 py-2" onClick={handleSignOut}>
            Sign out
          </p>
        </div>
      )}
    </div>
  );
};

/*    
<header className='flex items-center justify-between'>
  <Link className="text font-semibold text-2xl" href="">
    Atmosoft
  </Link>
<nav className="flex items-center gap-4 ">
  <Link href={'./'}>Home</Link>
  <Link href={'./Materials'}>About</Link>
  <Link href={'./route'}>Blog</Link>
  <Link href={''} className="bg-primary rounded-full text-white px-8 py-2">Start</Link>

</nav>
</header>
  )
}
*/
export default Header