import { useState } from 'react';

// import HelloWorld from './HelloWorld';
import Post from './Post';
import BandTour from './BandTour';
import TheJS from './TheJS';
import TravelGallery from './TravelGallery';
import Header from './Header';
import Reviews from './Reviews';
import Footer from './Footer';
import Dev from './Dev';
import Notification from './Notification';
import Stopwatc from './Stopwatc';
import Quiz from './Quiz';
import TrendingList from './TrendingList';
import ShoppingItem from './ShoppingItem';
import Tooltp from './Tooltp';
import ZoomableImage from './ZoomableImage';
import VolumeControl from './VolumeControl';
import EventInvitation from './EventInvitation';
import ButtonClickColor from './ButtonClickColor';

type ViewOption =
    // | 'helloWorld'
    | 'post'
    | 'bandTour'
    | 'theJS'
    | 'travelGallery'
    | 'home'
    | 'reviews'
    | 'dev'
    | 'notification'
    | 'stopWatch'
    | 'quiz'
    | 'trending'
    | 'shopItem'
    | 'tooltp'
    | 'zoomImag'
    | 'volum'
    | 'eventInvit'
    | 'btnClickColor';

export default function ViewSwitcher() {
    const [optioName, setOptioName] = useState<ViewOption>();

    const movieArray = [
        {
            title: 'Os Vingadores: Guerra Infinita',
            releaseYear: 2018,
            imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-01744-7ee7fa554b354294de17181315528687-480-0.jpg'
        },
        {
            title: 'Superman',
            releaseYear: 2025,
            imageUrl: 'https://ingresso-a.akamaihd.net/b2b/production/uploads/articles-content/28b754cf-01f9-438b-a446-f3ccb5617d47.png'
        },
        {
            title: 'Minecrafty - O Filme',
            releaseYear: 2025,
            imageUrl: 'https://a-static.mlcdn.com.br/800x560/poster-cartaz-um-filme-minecraft-a-posterflix/poparteskins2/pos-03816-30x45cm/1201ade4dbbdafbfd0987bb63d77d37b.jpeg'
        },
        {
            title: 'Pixels - O Filme',
            releaseYear: 2015,
            imageUrl: 'https://im.ziffdavisinternational.com/ign_br/screenshot/default/pixels-teaser1sheet-brazil_8pqq.jpg'
        }
    ];
    const [movieData] = useState(movieArray);

    function renderView() {
        switch (optioName) {
            // case 'helloWorld':
            //     <HelloWorld />;
            case 'post':
                return <Post />;
            case 'bandTour':
                return <BandTour />;
            case 'theJS':
                return <TheJS />;
            case 'travelGallery':
                return <TravelGallery />;
            case 'home':
                return (
                    <>
                        <Header />
                        <Footer />
                    </>
                );
            case 'reviews':
                return <Reviews />;
            case 'dev':
                return <Dev />;
            case 'notification':
                return <Notification message={'Chamada de vídeo perdida'} isRead={true} />;
            case 'stopWatch':
                return <Stopwatc />;
            case 'quiz':
                return <Quiz />;
            case 'trending':
                return <TrendingList movies={movieData} />;
            case 'shopItem':
                return <ShoppingItem />;
            case 'tooltp':
                return <Tooltp />;
            case 'zoomImag':
                return <ZoomableImage />;
            case 'volum':
                return <VolumeControl />;
            case 'eventInvit':
                return <EventInvitation />;
            case 'btnClickColor':
                return <ButtonClickColor />;
            default:
                return <p>Selecione uma opção acima</p>;
        }
    }

    return (
        <>
            <label htmlFor="view">Selecione uma opção:</label>

            <select name="view" id="view" onChange={(e) => setOptioName(e.target.value as ViewOption)}>
                <option value={''} selected disabled>
                    Selecione uma opção
                </option>
                <option value="helloWorld">HelloWorld</option>
                <option value="post">Post</option>
                <option value="bandTour">BandTour</option>
                <option value="theJS">TheJS</option>
                <option value="travelGallery">TravelGallery</option>
                <option value="home">Home</option>
                <option value="reviews">Reviews</option>
                <option value="dev">Dev</option>
                <option value="notification">Notification</option>
                <option value="stopWatch">Stopwatc</option>
                <option value="quiz">Quiz</option>
                <option value="trending">TrendingList</option>
                <option value="shopItem">ShoppingItem</option>
                <option value="tooltp">Tooltp</option>
                <option value="zoomImag">ZoomableImage</option>
                <option value="volum">VolumeControl</option>
                <option value="eventInvit">EventInvitation</option>
                <option value="btnClickColor">ButtonClickColor</option>
            </select>

            <div>
                <div style={{ marginTop: 16 }}>{renderView()}</div>
            </div>
        </>
    );
}
