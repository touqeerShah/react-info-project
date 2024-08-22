import './ReviewCard.css'
import PropTypes from 'prop-types';

function ReviewCard({ img, rating, country, price, comment, isSoldOut }) {
    let badgeText
    if (isSoldOut) {
        badgeText = "SOLD OUT"
    } else {
        badgeText = "ONLINE"
    }
    return (
        <section className="card_section">
            <div className="quote-container">
                {badgeText && <div className="sold-tag">{badgeText}</div>}

                <div className="star-rating">{rating}</div>

                <p className="quote" >{comment}</p>

                <div className="reviewer-photo">
                    <img src={img} width="140" height="140" alt="Photo of reviewer" />
                </div>

                <div className="reviewer-details">
                    <span className="country">{country}.</span>
                    <span className="price"><strong>From {price}</strong> / person</span>

                </div>

                <div className="bottom">
                    <svg width="100%" height="80">
                        <rect width="100%" height="80" className="shape-fill" />
                    </svg>
                    <svg className="curves" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 200" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".35" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>

            </div>
        </section>
    )
}

ReviewCard.propTypes = {
    country: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    isSoldOut: PropTypes.bool.isRequired,

};
export default ReviewCard
