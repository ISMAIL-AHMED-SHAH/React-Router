import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              <span style={{ backgroundColor: "#f0f0f0f0", padding: "0.5rem" }}>
                Come and Join!
              </span>
              <h2
                className="text-3xl font-bold sm:text-4xl"
                style={{ backgroundColor: "#c0c0c0", padding: "0.5rem" }}
              >
                Showcasing My Latest Work
                <span
                  className="hidden sm:block text-4xl"
                  style={{ backgroundColor: "#a0a0a0", padding: "0.2rem" }}
                >
                  Take a look at my recent project!
                </span>
              </h2>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Click Me
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-96"
            src="https://scontent.fkhi30-1.fna.fbcdn.net/v/t39.30808-6/452247396_3862865753944149_9056967830454517737_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH_ahSInefjISUmgDC3rESXtZiK2B-PCfq1mIrYH48J-j8MTIf9kYLg1tIJO_uSIG0YlqRyyVuncwxCY-lo4jXs&_nc_ohc=y0srBCPKGgQQ7kNvgGC3-49&_nc_ht=scontent.fkhi30-1.fna&oh=00_AYAGc6AK0YUHzW64wOGT-rT6b9nCV-8IIqMrT_iB6XTnAw&oe=66C855EC"
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="https://scontent.fkhi30-1.fna.fbcdn.net/v/t39.30808-6/452401956_3862864650610926_7863161942430919421_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=b04a48&_nc_eui2=AeEUlf3M76CDiPbc7m9cKTaT-LiKiHirAy34uIqIeKsDLQvmHmDNUPmnGw8g-pDA_JnHCQvuFNQzakU1-DCwKUta&_nc_ohc=7-NYHxvoQjwQ7kNvgGqeX-U&_nc_ht=scontent.fkhi30-1.fna&oh=00_AYDhEZqlm4RJAveS8E4FeWIrY35rxvpPOPhyVcWlhTjm3g&oe=66C86C56"
          alt="image2"
        />
      </div>

      <h1
        className="text-center text-2xl sm:text-5xl py-10 font-medium"
        style={{ backgroundColor: "#e0e0e0", padding: "1rem" }}
      >
        Empowering Team Efforts for Innovative Solutions
      </h1>
    </div>
  );
}
