import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Loading = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, []);
    return (
        <>
            <h1 className="text-center mt-5 mains">Loading ...</h1>
        </>
    );
}

export default Loading;
