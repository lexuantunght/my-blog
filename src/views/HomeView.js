import { useEffect } from 'react';
import '../css/Home.css';
import head from '../resources/head.jpg';

export function HomeView() {
    useEffect(() => {
        document.title = "Welcome to my blog";
    }, []);
    return(
        <div className="Home">
            <img src={head} alt="head-photos" className="head-back"/>
            <div className="recent">
                <h2 className="title">My recent stories</h2>
                <ul className="list-image">
                    <li className="story">
                        <img className="story-photo" src="https://cdn.tinybuddha.com/wp-content/uploads/2015/01/Change-Your-Story.jpg" alt="story"/>
                        <h4>Life is your best</h4>
                    </li>
                    <li className="story">
                        <img className="story-photo" src="https://www.ppt-backgrounds.net/thumbs/story-books-slides-image-backgrounds.jpg" alt="story"/>
                        <h4>Life is your best</h4>
                    </li>
                    <li className="story">
                        <img className="story-photo" src="https://cdn.winsightmedia.com/platform/files/public/800x420/books-stack_0.jpg" alt="story"/>
                        <h4>Life is your best</h4>
                    </li>
                </ul>
            </div>
            <div className="recent">
                <h2 className="title">Lastest posts of maths</h2>
                <ul className="list-image">
                    <li className="story">
                        <img className="story-photo" src="https://cdn.tinybuddha.com/wp-content/uploads/2015/01/Change-Your-Story.jpg" alt="story"/>
                        <h4>Life is your best</h4>
                    </li>
                    <li className="story">
                        <img className="story-photo" src="https://www.ppt-backgrounds.net/thumbs/story-books-slides-image-backgrounds.jpg" alt="story"/>
                        <h4>Life is your best</h4>
                    </li>
                    <li className="story">
                        <img className="story-photo" src="https://cdn.winsightmedia.com/platform/files/public/800x420/books-stack_0.jpg" alt="story"/>
                        <h4>Life is your best</h4>
                    </li>
                </ul>
            </div>
            <div className="recent">
                <h2 className="title">New programmings</h2>
                <ul className="list-image">
                    <li className="story">
                        <img className="story-photo" src="https://cdn.tinybuddha.com/wp-content/uploads/2015/01/Change-Your-Story.jpg" alt="story"/>
                        <h4>Life is your best</h4>
                    </li>
                    <li className="story">
                        <img className="story-photo" src="https://www.ppt-backgrounds.net/thumbs/story-books-slides-image-backgrounds.jpg" alt="story"/>
                        <h4>Life is your best</h4>
                    </li>
                    <li className="story">
                        <img className="story-photo" src="https://cdn.winsightmedia.com/platform/files/public/800x420/books-stack_0.jpg" alt="story"/>
                        <h4>Life is your best</h4>
                    </li>
                </ul>
            </div>
        </div>
    );
}