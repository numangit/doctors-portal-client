import React from 'react';

const Loading = () => {
    return (
        <div className="w-full justify-center mx-auto">
            <button type="button" className="bg-indigo-500 text-lime-50 mx-auto" disabled>
                <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24">
                </svg>
                Processing...
            </button>
        </div>
    );
};

export default Loading;