"use client"
import { useEffect, useState } from 'react';
import { Client, Databases, ID } from 'appwrite';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newImageURL, setNewImageURL] = useState('');
  const [newcontent, setNewComment] = useState('');

  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const appwriteConfig = {
        endpoint: 'https://cloud.appwrite.io/v1',
        project: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
        databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        collectionId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID
      };

      const client = new Client()
        .setEndpoint(appwriteConfig.endpoint)
        .setProject(appwriteConfig.project);

      const databases = new Databases(client);

      const response = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.collectionId
      );

      setBooks(response.documents);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddTitle = async () => {
    try {
      const appwriteConfig = {
        endpoint: 'https://cloud.appwrite.io/v1',
        project: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
        databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        collectionId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID
      };

      const client = new Client()
        .setEndpoint(appwriteConfig.endpoint)
        .setProject(appwriteConfig.project);

      const databases = new Databases(client);
      const timestamp = new Date().toISOString(); // Current timestamp

      const promise = databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.collectionId,
        ID.unique(),
        {
          title: newTitle,
          imageId: newImageURL,
          timestamp: timestamp,
          content: newcontent // Add timestamp to the document
        }
      );

      await promise;

      setAlertMessage('Title and Image URL successfully added!');
      fetchBooks();

      setNewTitle('');
      setNewImageURL('');
      setNewComment('');


      setTimeout(() => {
        setAlertMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error adding title:', error);
      setAlertMessage('Error adding title. Please try again.');
    }
  };

  const handleDeleteTitle = async (titleId) => {
    try {
      const appwriteConfig = {
        endpoint: 'https://cloud.appwrite.io/v1',
        project: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
        databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        collectionId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID
      };

      const client = new Client()
        .setEndpoint(appwriteConfig.endpoint)
        .setProject(appwriteConfig.project);

      const databases = new Databases(client);

      await databases.deleteDocument(
        appwriteConfig.databaseId,
        appwriteConfig.collectionId,
        titleId
      );

      fetchBooks();

      setAlertMessage('Title successfully deleted!');
      setTimeout(() => {
        setAlertMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error deleting title:', error);
      setAlertMessage('Error deleting title. Please try again.');
    }
  };
  const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' }
  ]
  return (

    <div className=" bg-black py-24 sm:py-12">


<h2 className="text-5xl font-bold text-center mb-8 text-transparent bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text">AT-Tweet</h2>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <div className="flex items-center space-x-4">
          <img
            src="/Atmosoft.png"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder="Author name"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full bg-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>
        <div className="flex items-center justify-between mt-4">
          <input
            type="text"
            placeholder="What's on your mind?"
            value={newcontent}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-1/3 bg-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
<select
  value={newImageURL}
  onChange={(e) => setNewImageURL(e.target.value)}
  className="w-1/3 bg-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <option value="">Select an #Avatar</option>
  <option value="https://th.bing.com/th/id/OIP.rzpOF9FbaxlXeR8S89ozGQHaHE?rs=1&pid=ImgDetMain">#1</option>
  <option value="https://th.bing.com/th/id/OIP.awyiJGoo5CQSV6SLiW25cAHaFP?rs=1&pid=ImgDetMain">#2</option>
  <option value="https://th.bing.com/th/id/OIP.SwrhabU8x1ahvQU7Q3xkswHaNK?rs=1&pid=ImgDetMain">#3</option>
  </select>
  {/* Add more options as needed 



          <input
            type="text"
            placeholder="Image URL"
            value={newImageURL}
            onChange={(e) => setNewImageURL(e.target.value)}
            className="w-1/3 bg-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
*/}

          <button
            onClick={handleAddTitle}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition duration-300"
          >
            Tweet
          </button>
        </div>
      </div>
      {alertMessage && (
        <div className="bg-green-500 text-white p-2 mb-4 rounded">
          {alertMessage}
        </div>
      )}

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-gradient-to-r from-purple-400 to-indigo-900 bg-clip-text">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">{book.title}</h3>
                <div className="flex items-center mb-4">
                  {book.imageId && (
                    <img
                      src={book.imageId}
                      alt={`Image for ${book.title}`}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  )}
                  <span className="text-gray-600">{book.title}</span>
                </div>



                <p className="text-gray-600 mb-4">{book.content}</p>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-blue-500 hover:underline">Read more</a>
                  <span className="text-gray-500 text-sm">{book.timestamp}</span>
                </div>

                <button
                  className="bg-gradient-to-r from-red-500 to-red-700 text-white px-2 py-2 rounded hover:from-red-700 hover:to-red-900"
                  onClick={() => handleDeleteTitle(book.$id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>


  );
};

export default BooksPage;

/*
 
 /* const handleUploadImage = async (titleId) => {
 try {
   const appwriteConfig = {
     endpoint: 'https://cloud.appwrite.io/v1',
     project: '65c22be56a90f262cca0',
     databaseId: "65c22ca7339cb03c4d46",
     collectionId: "65cb699b1fae5885ccf4"
   };

   const client = new Client()
     .setEndpoint(appwriteConfig.endpoint)
     .setProject(appwriteConfig.project);

   const databases = new Databases(client);

   // Update the document to include the image URL
   await databases.updateDocument(
     appwriteConfig.databaseId,
     appwriteConfig.collectionId,
     titleId,
     { "imageId": newImageURL }
   );

   // Refresh the list of books after updating the image URL
   fetchBooks();

   // Show alert on successful image upload
   setAlertMessage('Image URL successfully added!');
   
   // Clear the image URL input field
   setNewImageURL('');
 } catch (error) {
   console.error('Error uploading image URL:', error);
   setAlertMessage('Error uploading image URL. Please try again.');
 }
};*/


/*
<div className="container mx-auto my-8">
 <h1 className="text-4xl font-bold mb-4">At-tweets👋</h1>
 <div className="mb-4">
   <input
     type="text"
     className="p-2 border rounded"
     placeholder="Enter new Tags#"
     value={newTitle}
     onChange={(e) => setNewTitle(e.target.value)}
   />
   <input
     type="text"
     className="p-2 border rounded ml-2"
     placeholder="Enter image URL"
     value={newImageURL}
     onChange={(e) => setNewImageURL(e.target.value)}
   />

   
   <button
     className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
     onClick={handleAddTitle}
   >
     Upload Tags
   </button>
 </div>
 {alertMessage && (
   <div className="bg-green-500 text-white p-2 mb-4 rounded">
     {alertMessage}
   </div>
 )}
 <div>
   {books.map((book, index) => (
     <div
       key={index}
       className="bg-gray-200 p-4 mb-4 rounded-md flex items-center justify-between"
     >
       <span>{book.title}</span>
       <div>
         {book.imageId && (
           <img
             src={book.imageId}
             alt={`Image for ${book.title}`}
             className="w-12 h-12 rounded-full object-cover"
             />
         )}
       </div>
       <button
         className="bg-red-500 text-white px-2 py-1 rounded"
         onClick={() => handleDeleteTitle(book.$id)}
       >
         Delete
       </button>
     </div>
   ))}
 </div>
</div>
);
};*/





/*
  return (
    <div className="container mx-auto my-8">
    <h1 className="text-4xl font-bold mb-4">At-tweets👋</h1>
    <div className="mb-4 flex items-center">
      <input
        type="text"
        className="p-2 border rounded focus:outline-none focus:border-blue-500 transition"
        placeholder="Enter new Tags#"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        className="p-2 border rounded ml-2 focus:outline-none focus:border-blue-500 transition"
        placeholder="Enter image URL"
        value={newImageURL}
        onChange={(e) => setNewImageURL(e.target.value)}
      />
      <button
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        onClick={handleAddTitle}
      >
        Upload Tags
      </button>
    </div>
    {alertMessage && (
      <div className="bg-green-500 text-white p-2 mb-4 rounded">
        {alertMessage}
      </div>
    )}
    <div>
      {books.map((book, index) => (
        <div
          key={index}
          className="bg-gray-200 p-4 mb-4 rounded-md flex items-center justify-between transition hover:shadow-md"
        >
          <span>{book.title}</span>
          <div>
            {book.imageId && (
              <img
                src={book.imageId}
                alt={`Image for ${book.title}`}
                className="w-12 h-12 rounded-full object-cover"
              />
            )}
          </div>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
            onClick={() => handleDeleteTitle(book.$id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  </div>
);
};*/