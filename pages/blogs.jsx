// import React, { Fragment } from "react";
// import Head from "next/head";
// import Image from "next/image";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// import { Certifications } from "@/constants";
// import Theme from "@/utils/Theme";
// import BackTo from "@/components/buttons/BackTo";

// const CertificationsPage = () => {
//   return (
//     <Fragment>
//       <Head>
//         <title>Certifications</title>
//       </Head>

//       <Theme>
//         <BackTo backTo={""} />
//         <div className="p-[5%] pt-[2%] dark:bg-gray-700">
//           <p className="font-bold text-2xl p-2 dark:text-white">Certifications</p>

//           <div className="pb-5">
//             {/* Masonry for responsive grid layout */}
//             <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
//               <Masonry>
//                 {Certifications.map((certification) => (
//                   <div
//                     className="dark:bg-gray-900 rounded-md border border-gray-400 border-solid m-2"
//                     key={certification.name}
//                   >
//                     {/* Removed Link to prevent client-side navigation */}
//                     <div>
//                       <Image
//                         alt="img not found"
//                         className="rounded-t-md"
//                         height={250}
//                         src={certification.imageUrl}
//                         style={{ width: "100%" }}
//                         width={400}
//                       />
//                       <div className="px-1 py-2 border-t border-solid border-gray-600 dark:border-white">
//                         <div className="blogLink">{certification.name}</div>
//                         <p className="dark:text-white text-[0.5rem] md:text-xs py-1 text-gray-600 text-center">
//                           {certification.date}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </Masonry>
//             </ResponsiveMasonry>
//           </div>
//         </div>
//       </Theme>
//     </Fragment>
//   );
// };

// export default CertificationsPage;
