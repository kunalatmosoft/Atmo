"use client";
import React, { useEffect, useState } from "react";
import Spinner from '@/components/layout/Spinner';
import { UserAuth } from "@/app/context/AuthContext";
import { Client, Storage, ID } from 'appwrite';

const Page = () => {
  // Initialize Appwrite client and storage
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

  const storage = new Storage(client);

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const response = await storage.createFile(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID, ID.unique(), file);
      console.log(response); // Success - Handle your social media logic here
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error(error); // Failure
    }
  };

  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      // Assuming you are using Firebase Authentication for user authentication
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="p-4">
      {loading ? (
        <Spinner />
      ) : user ? (
        <div>
          <p className="text-2xl font-semibold py-6 text-primary">
            Welcome, {user.displayName} - you are logged in to the profile page - a protected route.
          </p>
          <div className="mb-4">
          
            {/* Display user's avatar */}
            <img
              src={user.photoURL || '/default-avatar.png'} // Use a default avatar image if no photoURL is available
              alt="User Avatar"
              className="rounded-full h-16 w-16 mx-auto"
            />
            <p className="text-2xl mx-auto font-semibold py-6 text-center text-secondary">
          {user.displayName} </p>
          </div>
        </div>
      ) : (
        <p>You must be logged in to view this page - protected route.</p>
      )}


      <div className="mt-8">
        <h1 className="text-3xl font-semibold mb-6">Social Media App</h1>
        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
            className="block text-sm text-xl mb-4 leading-6 text-gray-900"
          >
            Upload Media
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              {/* Add more UI elements for better user experience */}

              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleUpload}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

/*
import React, { useEffect, useState } from "react";
import Spinner from '@/components/layout/Spinner';
import { UserAuth } from "@/app/context/AuthContext";
import { Client, Storage,ID } from 'appwrite';
const page = () => {
const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const storage = new Storage(client);

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const response = await storage.createFile(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID, ID.unique(), file);
      console.log(response); // Success - Handle your social media logic here
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error(error); // Failure
    }
  };


  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="p-4">
      {loading ? (
        <Spinner />
      ) : user ? (
        <p className="text-2xl font-semibold py-16'><span className='text-primary px-3">
          Welcome, {user.displayName} - you are logged in to the profile page -
          a protected route.
        </p>
      ) : (
        <p>You must be logged in to view this page - protected route.</p>
      )}
      
    <div>
    <h1 className="text-3xl font-semibold mb-6">Social Media App</h1>
    <div className="col-span-full">
  <label
    htmlFor="cover-photo"
    className="block text-sm text-xl mb-4 leading-6 text-gray-900"
  >
    Upload Media
  </label>
  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
    <div className="text-center">
      <svg
        className="mx-auto h-12 w-12 text-gray-300"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
          clipRule="evenodd"
        />
      </svg>
      <div className="mt-4 flex text-sm leading-6 text-gray-600">
        <label
          htmlFor="file-upload"
          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
        >
          <span>Upload a file</span>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
            onChange={handleFileChange} 
          />
        </label>
        <p className="pl-1">or drag and drop</p>
      </div>
      <p className="text-xs leading-5 text-gray-600">
        PNG, JPG, GIF up to 10MB
      </p>
      <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleUpload}>Upload</button>
  </div>

    </div>
  </div>
</div>


    </div>
    </div>
    
  );
};

export default page;*/