import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

let name = '';

const Home = () => {
    document.title = "THE COCKTAIL FINDER";
    const [state, setState] = useState(name);
    let history = useHistory();

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, []);

    const PassValue = (e) => {
        e.preventDefault();
        history.push('/about');
        setState('');
    }

    const ChangedOnTyping = (e) => {
        setState(e.target.value);
    }

    name = state;

    return (
        <>
            <div className="container main">
                <h1 className="text-center" data-aos="fade-left">The Cocktail Finder</h1>
                <div className="mb-3 full-width">
                    <input type="text" data-aos="fade-up-right" className="form-control shadow-none" id="exampleFormControlInput1" placeholder="Enter The CockTail Name" onChange={ChangedOnTyping} value={state} />
                </div>
                <button className="btns mt-1" data-aos="flip-up" onClick={PassValue} name={state}>Find Cocktail</button>
                <h6 data-aos="zoom-in-up" className="copy">Created By @ Aryan Garg &copy; 2021</h6>
            </div>
        </>
    );
}

export default Home;
export { name };