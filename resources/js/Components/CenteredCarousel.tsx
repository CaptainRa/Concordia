import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './CenteredCarousel.css';

const CenteredCarousel = () => {
    const games = [
        { name: 'Minesweeper', image: 'images/Image Vector.png' },
        { name: 'Chess', image: 'images/Image Vector.png' },
        { name: 'KATLA', image: 'images/Image Vector.png' },
        { name: '8 Queens Challenge', image: 'images/Image Vector.png' },
        { name: 'Sudoku', image: 'images/Image Vector.png' },
        { name: 'Memory Game', image: 'images/Image Vector.png' }
    ];

    return (
        <div className="w-5/6 px-12 py-8 flex flex-col"> 
            <Splide
                options={{
                    type: 'loop',
                    perPage: 3,
                    focus: 'center',
                    gap: '4px',
                    height: '340px', 
                    interval: 3000,
                    pauseOnHover: true,
                    
                }}
                aria-label="Game Carousel"
            >
                {games.map((game, index) => (
                    <SplideSlide key={index}>
                        <div className="carousel-card flex-row flex bg-dark-accent rounded-2xl justify-start items-start transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                            <div
                                className="carousel-card-image bg-cover bg-dark-fg  bg-center rounded-t-2xl"
                                
                            />
                            <h2 className="carousel-card-title text-dark-bg text-xl font-semibold mt-4">{game.name}</h2>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default CenteredCarousel;