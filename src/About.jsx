import React, { useEffect, useState } from 'react';
import { name } from './Home';
import Loading from './Loading';
import axios from "axios";
import { FaWineGlassAlt } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    const [instructions, setInstructions] = useState('');
    const [type, setType] = useState('');
    const [titles, setTitle] = useState('');
    const [glass, setGlass] = useState('');
    const [ingredient1, setIngredient1] = useState('');
    const [ingredient2, setIngredient2] = useState('');
    const [ingredient3, setIngredient3] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
            // console.log(res.data.drinks[0].strInstructions);
            setLoading(false);
            setInstructions(res.data.drinks[0].strInstructions);
            setImage(res.data.drinks[0].strDrinkThumb);
            setType(res.data.drinks[0].strAlcoholic);
            setTitle(res.data.drinks[0].strDrink);
            setGlass(res.data.drinks[0].strGlass);
            setIngredient1(res.data.drinks[0].strIngredient1);
            setIngredient2(res.data.drinks[0].strIngredient2);
            setIngredient3(res.data.drinks[0].strIngredient3);

            document.title = `${titles === '' ? 'Cocktail' : titles.toUpperCase()}`;
        }
        AOS.init({
            delay: 100,
            duration: 1500
        });
        getData();
    }, [titles]);

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <div className="container old" data-aos="flip-left">
                <div className="row">
                    <div className="col-md-5">
                        <img src={image} data-aos="flip-left" alt="Cocktail" />
                    </div>
                    <div className="col-md-7">
                        <h2 className="title text-center" data-aos="fade-down">
                            {titles}
                        </h2>
                        <div className="info">
                            <div className="type" data-aos="zoom-in-up">
                                <FaWineGlassAlt size="30px" className="icon" />
                                <p>Type Of Drink : </p>
                                <p className="spaced">{type}</p>
                            </div>
                            <div className="glass" data-aos="zoom-in-up">
                                <BiDrink size="30px" className="icon" />
                                <p>Glass Type Used : </p>
                                <p className="spaced">{glass}</p>
                            </div>
                        </div>
                        <div className="instructions">
                            <p data-aos="fade-left">Instructions Used In Recipe : </p>
                            <h5 data-aos="flip-up">
                                {instructions}
                            </h5>
                        </div>
                        <div className="ingredients mt-4">
                            <p data-aos="zoom-in-up">Ingredients Required To Make This Cocktail : </p>
                            <div className="valuesOfIngredients">
                                <p>{ingredient1}</p>
                                <p>{ingredient2}</p>
                                <p>{ingredient3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
