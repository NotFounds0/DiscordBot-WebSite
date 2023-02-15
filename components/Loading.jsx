import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-32 h-32 rounded-full bg-blue-600/10 flex items-center justify-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#fff"
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(2 2)" strokeWidth="4">
              <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      </div>

      <h2 className="mt-4 text-xl font-medium text-white animate-bounce">
        Yükleniyor...
      </h2>
    </div>
  );
};

export default Loading;