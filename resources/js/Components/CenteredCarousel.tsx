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
        <Splide
            options={{
                type: 'loop',
                perPage: 3,
                focus: 'center',
                gap: '1rem',
                autoplay: true,
                interval: 3000,
                breakpoints: {
                    640: {
                        perPage: 1,
                    },
                    1024: {
                        perPage: 3,
                    },
                },
            }}
            aria-label="Game Carousel"
        >
            {games.map((game, index) => (
                <SplideSlide key={index}>
                    <div className="flex flex-col items-center justify-center p-4 bg-dark-fg rounded-2xl">
                        <div
                            className="w-[165px] h-[220px] bg-cover bg-center rounded-t-2xl"
                            style={{ backgroundImage: `url(${game.image})` }}
                        />
                        <h2 className="text-dark-bg text-xl font-semibold mt-4">{game.name}</h2>
                    </div>
                </SplideSlide>
            ))}
        </Splide>
    );
};

export default CenteredCarousel;