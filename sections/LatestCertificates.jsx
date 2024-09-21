import React, { Fragment } from "react";
import Image from "next/image";
import { BsPenFill } from "react-icons/bs";

import { Certifications } from "@/constants";

const LatestCertificates = () => {
  return (
    <Fragment>
      <section id="certifications">
        <div className="py-8 pt-4 shadow-zinc-300 dark:shadow-zinc-700 shadow-sm">
          <h3 className="text-3xl font-bold pb-8 flex justify-center items-center gap-3">
            <span className="mr-3">
              <BsPenFill />
            </span>
            Certifications
          </h3>
          {/* Displaying all certifications */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-md mx-6">
            {Certifications.map((certification) => (
              <div key={certification.name}>
                <div className="h-fit dark:bg-gray-900 rounded-md border border-gray-400 border-solid">
                  <Image
                    alt="img not found"
                    className="rounded-t-md"
                    height={250}
                    src={certification.imageUrl}
                    style={{ width: "100%" }}
                    width={400}
                  />
                  <div className="px-1 py-2 border-t border-solid border-gray-600 dark:border-white">
                    <div className="blogLink">{certification.name}</div>
                    <p className="dark:text-white text-xs py-1 text-gray-600 text-center">
                      {certification.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LatestCertificates;
