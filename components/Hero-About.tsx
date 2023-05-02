import { TypeAnimation } from 'react-type-animation';

const HeroAbout = () => {
    return (
        <TypeAnimation
            sequence={[
                '>\tI\'m a Developer',
                2000,
                '>\tI\'m a Student',
                2000,
                '>\tI\'m a Tech Enthusiast',
                2000,
                '>\tI\'m Elle.',
            ]}
            cursor={true}
            repeat={(0)}
            speed={40}
            deletionSpeed={30}
            className={'typeOut'}
        />
    );
}

export default HeroAbout;