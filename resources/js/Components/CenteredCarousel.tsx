import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

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
        <div className="w-full px-12 py-12 flex flex-col "> {/* Added padding to match the "Welcome to Concordia" text */}
            <Splide
                options={{
                    type: 'loop',
                    perPage: 3,
                    focus: 'center',
                    gap: '4px',
                    height: '300px',
                    
                
                    
                    interval: 3000,
                    pauseOnHover: true,
                    pauseOnFocus: true,
                    // breakpoints: {
                    //     768: {
                    //         perPage: 1,
                    //         height: '250px',
                    //     },
                    //     1024: {
                    //         perPage: 2,
                    //         height: '250px',
                    //     },
                    // },
                }}
                aria-label="Game Carousel"
            >
                {games.map((game, index) => (
                    <SplideSlide key={index}>
                        <div className="w-[195px] h-[250px] flex flex-col ml-14 self-center items-start justify-start  bg-dark-accent rounded-2xl">
                            <div
                                className="h-3/5 bg-center rounded-t-2xl bg-white w-full"
                            />
                            <h2 className="text-dark-bg text-xl font-semibold mt-4">{game.name}</h2>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default CenteredCarousel;