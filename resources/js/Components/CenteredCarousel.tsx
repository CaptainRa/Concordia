import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './CenteredCarousel.css';
import { Link } from '@inertiajs/react';

const CenteredCarousel = () => {
    const games = [
        { name: 'Minesweeper', image: '/images/Minesweeper.png', link: 'minesweeper' },
        { name: 'Chess', image: 'images/Chessboard.png', link: 'https://www.chess.com/' },
        { name: 'KATLA', image: '/images/Katla.png' },
        { name: '8 Queens Challenge', image: '/images/8_Queens.png' },
        { name: 'Sudoku', image: '/images/Sudoku.png' },
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
                    width: '100%', 
                    interval: 3000,
                    pauseOnHover: true,
                }}
                aria-label="Game Carousel"
            >
                {games.map((game, index) => (
                    <SplideSlide key={index}>
                        <a
                        href={`${game.link}`}
                        >
                            <div className="carousel-card flex-row flex bg-dark-accent rounded-2xl justify-start items-start transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                                <div
                                    className="carousel-card-image bg-cover bg-dark-fg  bg-center rounded-t-2xl"
                                    style={{
                                        backgroundImage: `url(${game.image})`,
                                        width: '100%',
                                        height: '175px'
                                    }}
                                    
                                />
                                <h2 className="carousel-card-title text-dark-bg text-xl font-semibold mt-4">{game.name}</h2>
                            </div>
                        </a>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default CenteredCarousel;