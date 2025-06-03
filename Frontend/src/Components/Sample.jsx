import React from 'react'

const Sample = () => {
  return (
    <>
      {/* Projects Section */}
        <div className="bg-gray-900 text-white px-5 sm:px-10 py-12 w-full">
          <h2 className="text-orange-500 text-3xl font-semibold mb-10 text-center">
            Projects
          </h2>

          {/* 2x2 Grid for Projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 my-10">
            {/* Project 1 */}
            <div className="bg-gray-800 p-6 h-[200px] w-[120px] rounded-xl shadow-lg hover:shadow-orange-500 transition duration-300">
             
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 p-6 h-[200px] w-[120px] rounded-xl shadow-lg hover:shadow-orange-500 transition duration-300">
             
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800 p-6  rounded-xl shadow-lg hover:shadow-orange-500 transition duration-300">
             
            </div>

            {/* Project 4 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-orange-500 transition duration-300">
             
            </div>
          </div>
        </div>

    </>
  )
}

export default Sample
