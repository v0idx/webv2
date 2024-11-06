import HeroAbout from './Hero-About';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-text">
                <h1>Hey,</h1>
                <HeroAbout />
                <p>
                    A Software Developer and Computer Science student based in the UK, I specialise in backend development, using languages such as Rust and C#.
                    I am driven by my desire to learn more about the software industry, and though I&apos;ve still got a lot to learn, that&apos;s what makes it fun!
                </p>                
            </div>
        </div>
    )
}

export default Hero;