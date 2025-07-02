import './Reviews.css';

import { FaStar } from 'react-icons/fa';

const reviews = [
    {
        name: 'Ada Lovelace',
        comment: 'Interface elegante e fluidez impressionante. Parece feita com tecnologia do futuro!',
        stars: 5
    },
    {
        name: 'Carl Sagan',
        comment: 'Um verdadeiro cosmos de design e funcionalidade. 👏',
        stars: 4
    },
    {
        name: 'Katherine Johnson',
        comment: 'Precisão e beleza em cada detalhe. Excelente trabalho!',
        stars: 5
    }
];

const Reviews = () => {
    return (
        <section className="reviews">
            <h2 className="reviews-title">O que dizem os exploradores</h2>
            <div className="reviews-list">
                {reviews.map((review, index) => (
                    <div key={index} className="review-card">
                        <div className="review-stars">
                            {[...Array(review.stars)].map((_, i) => (
                                <FaStar key={i} color="#FFD700" />
                            ))}
                        </div>
                        <p className="review-comment">"{review.comment}"</p>
                        <p className="review-author">— {review.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
