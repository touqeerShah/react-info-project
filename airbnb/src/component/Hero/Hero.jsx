import './Hero.css'

function Hero() {

    return (
        <section>
            <div className="container">
                <div className="gallery">
                    <div className="gallery__item gallery__item--hor">
                        <img className='gallery__image' src="https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" alt="" />
                    </div>
                    <div className="gallery__item">
                        <img className='gallery__image' src="https://images.unsplash.com/photo-1422255198496-21531f12a6e8?dpr=2&auto=format&fit=crop&w=1500&h=996&q=80&cs=tinysrgb&crop=" alt="" />
                    </div>
                    <div className="gallery__item">
                        <img className='gallery__image' src="https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?dpr=2&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=" alt="" />
                    </div>
                    <div className="gallery__item gallery__item--vert">
                        <img className='gallery__image' src="https://images.unsplash.com/photo-1476097297040-79e9e1603142?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" alt="" />
                    </div>
                    <div className="gallery__item gallery__item--lg">
                        <img className='gallery__image' src="https://images.unsplash.com/photo-1464652149449-f3b8538144aa?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" alt="" />
                    </div>
                    <div className="gallery__item">
                        <img className='gallery__image' src="https://picsum.photos/190/190?2" alt="" />
                    </div>
                    <div className="gallery__item">
                        <img className='gallery__image' src="https://picsum.photos/190/190?9" alt="" />
                    </div>
                    <div className="gallery__item">
                        <img className='gallery__image' src="https://picsum.photos/190/190?6" alt="" />
                    </div>
                    <div className="gallery__item">
                        <img className='gallery__image' src="https://picsum.photos/190/190?4" alt="" />
                    </div>
                    <div className="gallery__item">
                        <img className='gallery__image' src="https://picsum.photos/190/190?8" alt="" />
                    </div>

                </div>
            </div>
            <div className="header__div">
                <h1 className="hero__header">Online Experiences</h1>
                <p className="hero__text">Join unique interactive activities led by
                    one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}

export default Hero
