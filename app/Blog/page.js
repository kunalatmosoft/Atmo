"use client";

import React, { useEffect, useState } from 'react';
import { Client, Storage } from 'appwrite';

const MediaGallery = () => {
  const [mediaList, setMediaList] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const client = new Client();
    const storage = new Storage(client);

    client
      .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
      ;

    const fetchMediaList = async () => {
      try {
        const response = await storage.listFiles(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID);
        setMediaList(response.files);
      } catch (error) {
        console.error('Error fetching media list:', error);
      }
    };

    fetchMediaList();
  }, []);

  const handleDeleteMedia = async (mediaId) => {
    try {
      const client = new Client();
      const storage = new Storage(client);

      client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
        ;

      await storage.deleteFile(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID, mediaId);

      // Update the media list after deleting the file
      const updatedMediaList = mediaList.filter((media) => media.$id !== mediaId);
      setMediaList(updatedMediaList);
    } catch (error) {
      console.error('Error deleting media:', error);
    }
  };

  const handleItemClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-200 p-4">
        <h1 className="text-2xl font-bold mb-4">AT-Med</h1>
        {mediaList.map((media, index) => (
          <div key={media.$id} className="flex items-center mb-2 cursor-pointer" onClick={() => handleItemClick(index)}>
            <img
              src={`https://cloud.appwrite.io/v1/storage/buckets/65ccef58113f7067a5f0/files/${media.$id}/view?project=65c22be56a90f262cca0&mode=admin`}
              alt={media.name}
              className="w-12 h-12 rounded-full mr-2"
            />
            <p className="truncate">{media.name}</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4 overflow-y-auto">
        <div className="max-w-md mx-auto">
          {mediaList.length > 0 && (
            <>
              <img
                src={`https://cloud.appwrite.io/v1/storage/buckets/65ccef58113f7067a5f0/files/${mediaList?.[currentSlide]?.$id}/view?project=65c22be56a90f262cca0&mode=admin`}
                alt={mediaList[currentSlide]?.name || ''}
                className="w-full rounded-lg"
              />
              <button
                className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-red-700 text-white px-2 py-1 rounded"
                onClick={() => handleDeleteMedia(mediaList[currentSlide].$id)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;

/*import React, { useEffect, useState } from 'react';
import { Client, Storage } from 'appwrite';

const MediaGallery = () => {
  const [mediaList, setMediaList] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const client = new Client();
    const storage = new Storage(client);

    client
      .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
      ;

    const fetchMediaList = async () => {
      try {
        const response = await storage.listFiles(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID);
        setMediaList(response.files);
      } catch (error) {
        console.error('Error fetching media list:', error);
      }
    };

    fetchMediaList();
  }, []);

  const handleDeleteMedia = async (mediaId) => {
    try {
      const client = new Client();
      const storage = new Storage(client);

      client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
        ;

      await storage.deleteFile(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID, mediaId);

      // Update the media list after deleting the file
      const updatedMediaList = mediaList.filter((media) => media.$id !== mediaId);
      setMediaList(updatedMediaList);
    } catch (error) {
      console.error('Error deleting media:', error);
    }
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? mediaList.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === mediaList.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="flex">
      /* Sidebar
      <div className="w-1/4 bg-gray-200 p-4">
        <h1 className="text-2xl font-bold mb-4">AT-Med</h1>
        {mediaList.map((media) => (
          <div key={media.$id} className="flex items-center mb-2">
            <img
              src={`https://cloud.appwrite.io/v1/storage/buckets/65ccef58113f7067a5f0/files/${media.$id}/view?project=65c22be56a90f262cca0&mode=admin`}
              alt={media.name}
              className="w-12 h-12 rounded-full mr-2"
            />
            <p className="truncate">{media.name}</p>
          </div>
        ))}
      </div>

      {/* Main Content 
      <div className="w-3/4 p-4">
        <div className="relative max-w-md mx-auto">
          {mediaList.length > 0 && (
            <>
              <img
                src={`https://cloud.appwrite.io/v1/storage/buckets/65ccef58113f7067a5f0/files/${mediaList?.[currentSlide]?.$id}/view?project=65c22be56a90f262cca0&mode=admin`}
                alt={mediaList[currentSlide]?.name || ''}
                className="w-full rounded-lg"
              />
              <button
                className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-red-700 text-white px-2 py-1 rounded"
                onClick={() => handleDeleteMedia(mediaList[currentSlide].$id)}
              >
                Delete
              </button>
            </>
          )}
          {mediaList.length > 1 && (
            <>
              <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-1 rounded"
                onClick={handlePrevSlide}
              >
                Prev
              </button>
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-1 rounded"
                onClick={handleNextSlide}
              >
                Next
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;*/



/*
import { useEffect, useState } from 'react';
import { Client, Storage } from 'appwrite';

const MediaGallery = () => {
  const [mediaList, setMediaList] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const client = new Client();
    const storage = new Storage(client);

    client
      .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
      ;

    const fetchMediaList = async () => {
      try {
        const response = await storage.listFiles(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID);
        setMediaList(response.files);
      } catch (error) {
        console.error('Error fetching media list:', error);
      }
    };

    fetchMediaList();
  }, []);

  const handleDeleteMedia = async (mediaId) => {
    try {
      const client = new Client();
      const storage = new Storage(client);

      client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
        ;

      await storage.deleteFile(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID, mediaId);

      // Update the media list after deleting the file
      const updatedMediaList = mediaList.filter((media) => media.$id !== mediaId);
      setMediaList(updatedMediaList);
    } catch (error) {
      console.error('Error deleting media:', error);
    }
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? mediaList.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === mediaList.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Media Gallery</h1>
        <div className="relative max-w-md mx-auto">
          {mediaList.length > 0 && (
            <>
              <img
                src={`https://cloud.appwrite.io/v1/storage/buckets/65ccef58113f7067a5f0/files/${mediaList?.[currentSlide]?.$id}/view?project=65c22be56a90f262cca0&mode=admin`}
                alt={mediaList[currentSlide]?.name || ''}
                className="w-full rounded-lg"
              />
              <button
                className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-red-700 text-white px-2 py-1 rounded"
                onClick={() => handleDeleteMedia(mediaList[currentSlide].$id)}
              >
                Delete
              </button>
            </>
          )}                  
          {mediaList.length > 1 && (
            <>
              <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-1 rounded"
                onClick={handlePrevSlide}
              >
                Prev
              </button>
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-1 rounded"
                onClick={handleNextSlide}
              >
                Next
              </button>
            </>
          )}
        </div>
      </div>

      <div className="container mx-auto p-8">
        <div className="grid grid-cols-4 gap-10">
          {mediaList.map((media) => (
            <div key={media.$id} className="max-w-full relative">
              <img
                src={`https://cloud.appwrite.io/v1/storage/buckets/65ccef58113f7067a5f0/files/${media.$id}/view?project=65c22be56a90f262cca0&mode=admin`}
                alt={media.name}
                className="w-full rounded-lg"
              />
              <button
                className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-red-700 text-white px-2 py-1 rounded"
                onClick={() => handleDeleteMedia(media.$id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;



*/




















/*
// MediaGallery.js





import { useEffect, useState } from 'react';
import { Client, Storage } from 'appwrite';

const MediaGallery = () => {
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    const client = new Client();
    const storage = new Storage(client);

    client
      .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
      ;

    const fetchMediaList = async () => {
      try {
        const response = await storage.listFiles(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID);
        setMediaList(response.files);
      } catch (error) {
        console.error('Error fetching media list:', error);
      }
    };

    fetchMediaList();
  }, []);

  const handleDeleteMedia = async (mediaId) => {
    try {
      const client = new Client();
      const storage = new Storage(client);

      client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
        ;

      await storage.deleteFile(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID, mediaId);

      // Update the media list after deleting the file
      const updatedMediaList = mediaList.filter((media) => media.$id !== mediaId);
      setMediaList(updatedMediaList);
    } catch (error) {
      console.error('Error deleting media:', error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Media Gallery</h1>
      <div className="grid grid-cols-4 gap-10">
        {mediaList.map((media) => (
          <div key={media.$id} className="max-w-full relative">
            <img
              src={`https://cloud.appwrite.io/v1/storage/buckets/65ccef58113f7067a5f0/files/${media.$id}/view?project=65c22be56a90f262cca0&mode=admin`}
              alt={media.name}
              className="w-full rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleDeleteMedia(media.$id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;


/*
import { useEffect, useState } from 'react';
import { Client, Storage } from 'appwrite';

const MediaGallery = () => {
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    const client = new Client();
    const storage = new Storage(client);

    client
      .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
      ;

    const fetchMediaList = async () => {
      try {
        const response = await storage.listFiles(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID);
        setMediaList(response.files);
      } catch (error) {
        console.error('Error fetching media list:', error);
      }
    };

    fetchMediaList();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Media Gallery</h1>
      <div className="grid grid-cols-4 gap-10">
        {mediaList.map((media) => (
          <div key={media.$id} className="max-w-full">
            <img src={`https://cloud.appwrite.io/v1/storage/buckets/65ccef58113f7067a5f0/files/${media.$id}/view?project=65c22be56a90f262cca0&mode=admin`}
              //  https://cloud.appwrite.io/v1/storage/buckets/65ccef58113f7067a5f0/files/65d406ce69b031849b2e/view?project=65c22be56a90f262cca0&mode=admin
              alt={media.name} className="w-full rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;


*/