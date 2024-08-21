import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://scontent.fkhi30-1.fna.fbcdn.net/v/t1.18169-9/10898036_1581066385457442_67175028422514896_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f798df&_nc_eui2=AeFSqGnqGNHXNY4T-suUZFO_AXiyuYbl1AQBeLK5huXUBI_HRk53q92xcPNxl1xd3KZxYr_ymdbG4tX8x5qJCV-u&_nc_ohc=pkz-HTYkcY4Q7kNvgGn2Rxg&_nc_ht=scontent.fkhi30-1.fna&oh=00_AYDflGIk7vrMpSrnTMkZg1yZwqVd-IARPNqpH-2WRuVY8g&oe=66E9EA2D"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              About Me
            </h2>
            <p className="mt-6 text-gray-600">
              I'm Ismail Ahmed Shah, a dedicated front-end developer
              with a strong drive to master full-stack development. With a
              career spanning multiple industries, I've gained diverse
              experiences. Armed with a BSc from Karachi University and driven
              by a passion for coding, I'm dedicated to pushing boundaries and
              exploring new possibilities in technology. Let's connect and
              innovate together!
            </p>
            <br/>
            <br/>
            <h4 className="text-2xl text-gray-500 font-bold md:text-xl">
              React development is carried out by passionate developers
            </h4>
            
            <p className="mt-4 text-gray-600">
              Crafting engaging user experiences is at the heart of our React
              development. We leverage React’s efficiency and flexibility to
              create dynamic, high-performance web applications that are both
              visually appealing and seamlessly functional across devices. Our
              focus on clean, maintainable code and the latest React features,
              including hooks and context, allows us to build scalable, reusable
              components. Whether it’s crafting custom solutions, optimizing
              performance, or integrating with other technologies, we push the
              boundaries of what’s possible with React to transform ideas into
              engaging digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
