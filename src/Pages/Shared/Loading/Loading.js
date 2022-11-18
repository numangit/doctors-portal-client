import React from 'react';

const Loading = () => {
    return (
        <div className="w-full flex justify-center items-center h-40 mx-auto">
            <div>
                <p className='text-center'>loading...</p>
                <progress className="progress w-56"></progress>
            </div>
        </div>
    );
};

export default Loading;