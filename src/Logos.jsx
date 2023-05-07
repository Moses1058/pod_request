import spotify from './assets/desktop/spotify.svg';
import apple from './assets/desktop/apple-podcast.svg';
import google from './assets/desktop/google-podcasts.svg';
import pocket from './assets/desktop/pocket-casts.svg';
import './logos.css';
export default function Logos() {
    return (
        <div className="logos">
            <img src={spotify} alt="spotify logo" />
            <img className="apple" src={apple} alt="apple logo" />
            <img src={google} alt="google logo" />
            <img src={pocket} alt="pocket logo" />
        </div>
    )
}