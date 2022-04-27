import React from 'react';

const Home = () => {
    return (
        <div className='mb-10'>
            <h1 className='mt-10 text-4xl font-bold uppercase text-center'>I grow by helping people in need.</h1>
            <form className='text-center mt-6'>
                <input type="text" className='border border-2 border-gray-200 w-[500px] h-[40px] rounded-md' />
                <input type="submit" className='h-[40px] w-[118px] bg-[#3F90FC] rounded-md text-white   ' value='Search'/>
            </form>
        </div>
    );
};

export default Home;