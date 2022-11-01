import videoHomepage from '../../assets/video-homepage.mp4';
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source
                    src={videoHomepage}
                    type="video/mp4"
                />
            </video>
            <div className='homepage-content'>
                <div className='title-big'>There's a better way to ask</div>
                <div className='title-small'>You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.</div>
                <div className='title-bt'><button>Get started-it's free</button></div>
            </div>

        </div>
    )
}

export default HomePage;