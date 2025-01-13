import { Link } from "react-scroll";

export default function Services() {
    return (
        <>
        
            <h1 className="text-xl font-semibold"> Our Services</h1>
            <Link to='game-section' smooth={true} delay={100} className="cursor-pointer hover:text-blue-300"> 
                <h1>
                    
                    Games
                </h1>
            </Link> 
            <Link to='schedule-section' smooth={true} delay={100} className="cursor-pointer hover:text-blue-300">
                <h1>
                    
                    Schedule
                </h1>
            </Link>
            <Link to='food-section' smooth={true} delay={100} className="cursor-pointer hover:text-blue-300">
                <h1>
                    
                    Food
                </h1>
            </Link>
            <Link to='book-section' smooth={true} delay={100} className="cursor-pointer hover:text-blue-300">
                <h1>
                    
                    Book
                </h1>
            </Link>
            <Link to='music-section' smooth={true} delay={100} className="cursor-pointer hover:text-blue-300">
                <h1>
                    
                    Music
                </h1>
            </Link>
        </>
    );
}