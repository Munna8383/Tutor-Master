

const WebsiteWork = () => {
    return (
     <div className="w-11/12 mx-auto mt-16 dark:text-black">
             <div className="text-center">

<h1 className="text-3xl font-bold">How our Website Works</h1>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-7 mt-10">
        {/* Step 1 */}
        <div className="flex flex-1 flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg animate-slow-bounce">
          <div className="bg-blue-200 p-3 rounded-full">
            {/* Icon for "Create Profile" */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A7.5 7.5 0 1017.803 5.12m-3.454 11.036v3.375a.375.375 0 00.615.286l4.242-4.243a.375.375 0 00-.286-.615h-3.375a.375.375 0 00-.375.375z"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-semibold">Register Profile</h3>
          <p className="mt-2 text-gray-600 dark:text-black">
            Create your profile in minutes with sign up information.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-1 flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg animate-slow-bounce2">
          <div className="bg-blue-200 p-3 rounded-full">
            {/* Icon for "Complete Profile" */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-semibold">Become Teacher</h3>
          <p className="mt-2 text-gray-600 dark:text-black">
            Provide necessary Information and To become Teacher
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-1 flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg animate-slow-bounce">
          <div className="bg-blue-200 p-3 rounded-full">
            {/* Icon for "Apply for Tuition Job" */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0  0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0 1.105.895 2 2 2h7M12 11V7m0 4v4m0 4h7m-7 0v-4m0-4H5m7 0H5m7 4H5m7 0v4"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-semibold">Apply for Tuition Job</h3>
          <p className="mt-2 text-gray-600 dark:text-black">
            After Providing necessary information and data submit it.
          </p>
        </div>
      </div>
     </div>
    );
};

export default WebsiteWork;