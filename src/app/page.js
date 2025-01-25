"use client"
import * as React from 'react';
import { useRouter } from 'next/navigation';



function page() {
  const router = useRouter()
  const wedding = {
    catagory1: "valima",
    catagory2: "Furniture",
    catagory3: "valima",
    loan: "PKR 5 lakh"
  }
  const construction = {
    catagory1: "structure",
    catagory2: "finishing",
    catagory3: "Loans",
    loan: "PKR 10 lakh"
  }
  const bussiness = {
    catagory1: "buy  stall",
    catagory2: "Shop assets",
    catagory3: "machineries",
    loan: "PKR 10 lakh"
  }
  const education = {
    catagory1: "University",
    catagory2: "child fees",
    catagory3: "machineries",
    loan: "unlimited"
  }
  return (
    <>
      <div className='w-full flex justify-between pt-10'>
        <div className='w-1/2 p-6 flex flex-col gap-4 h-[50vh] justify-center '>
          <h1 className='font-extrabold text-4xl'>Microfinance (Apna Karoobar)</h1>
          <p>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='w-1/2 flex justify-center'>
          <img src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646142159/website-images/static/18.jpg" alt="" className='w-1/2' />
        </div>
      </div>
      <div className=' flex justify-center w-full gap-4 pt-20 pb-20'>
        <article
          style={{ backgroundImage: 'linear-gradient(to right top, #00A3B1, #00A3B1, #49bdc7, #00A3B1, #00A3B1)', }}
          class="w-72 h-[26vh]   shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300"
          onClick={() => {
            localStorage.setItem("purpose", JSON.stringify(wedding))
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="w-10 h-10 text-gray-300 bg-gray-600 rounded-full p-1"
          >
            <path
              d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke="currentColor"
            ></path>
          </svg>
          <p class="text-sm w-full text-white font-bold">
            Loan for Wedding
          </p>
          <p class="text-sm w-full text-white">
            Get Loan
          </p>
        </article>
        <article
          style={{ backgroundImage: 'linear-gradient(to right top, #00A3B1, #00A3B1, #49bdc7, #00A3B1, #00A3B1)', }}
          class="w-72 h-[26vh] shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300"
          onClick={() => {
            router.push('/static')
            localStorage.setItem("purpose", JSON.stringify(construction))
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="w-10 h-10 text-gray-300 bg-gray-600 rounded-full p-1"
          >
            <path
              d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke="currentColor"
            ></path>
          </svg>
          <p class="text-sm w-full text-white font-bold">
            Home construction
          </p>
          <p class="text-sm w-full text-white">
            Get Loan
          </p>
        </article>
        <article
          class="w-72 h-[26vh] shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300"
          style={{ backgroundImage: 'linear-gradient(to right top, #00A3B1, #00A3B1, #49bdc7, #00A3B1, #00A3B1)', }}
          onClick={() => {
            router.push('/static')
            localStorage.setItem("purpose", JSON.stringify(bussiness))
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="w-10 h-10 text-gray-300 bg-gray-600 rounded-full p-1"
          >
            <path
              d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke="currentColor"
            ></path>
          </svg>
          <p class="text-sm w-full text-white font-bold">
            Bussiness startup
          </p>
          <p class="text-sm w-full text-white">
            Get Loan
          </p>
        </article>
        <article
          class="w-72 h-[26vh] shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300"
          style={{ backgroundImage: 'linear-gradient(to right top, #00A3B1, #00A3B1, #49bdc7, #00A3B1, #00A3B1)', }}
          onClick={() => {
            router.push('/static')
            localStorage.setItem("purpose", JSON.stringify(education))
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="w-10 h-10 text-gray-300 bg-gray-600 rounded-full p-1"
          >
            <path
              d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke="currentColor"
            ></path>
          </svg>
          <p class="text-sm w-full text-white">
            Education Loans
          </p>
          <p class="text-sm w-full text-white">
            Get Loan
          </p>
        </article>


      </div>


    </>
  )
}

export default page
















// 'use client';

// import { useState } from 'react';
// import { uploadToCloudinary } from '@/app/utils/uploadimages';

// export default function SingleImageUploader() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [uploadedUrl, setUploadedUrl] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(file);
//     }
//   };

//   const handleUpload = async () => {
//     if (!selectedImage) {
//       alert('Please select an image to upload');
//       return;
//     }
//     setLoading(true);
//     try {
//       const url = await uploadToCloudinary(selectedImage);
//       setUploadedUrl(url);
//       console.log('Uploaded URL:', url);
//     } catch (error) {
//       console.error('Error uploading image:', error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Upload a Single Image to Cloudinary</h1>

//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageChange}
//         className="block mb-4"
//       />

//       <button
//         onClick={handleUpload}
//         disabled={loading || !selectedImage}
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         {loading ? 'Uploading...' : 'Upload Image'}
//       </button>

//       {uploadedUrl && (
//         <div className="mt-4">
//           <h2 className="text-lg font-semibold">Uploaded Image:</h2>
//           <img
//             src={uploadedUrl}
//             alt="Uploaded"
//             className="mt-2 w-64 h-auto rounded"
//           />
//         </div>
//       )}
//     </div>
//   );
// }
