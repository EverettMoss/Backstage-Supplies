import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import comedy from '../static/Comedy.png';
import glass from '../static/Glass.png';
import shakespeare from '../static/shakespeare.jpeg';
import theatre from '../static/theatre.png';
import wolves from '../static/Wolves.png';

function Home(){
    return(
        <div>
            <h1>Welcome to BackStage Supplies!</h1>

            <Carousel>
                <Carousel.Item>
                    <img width={900} height={500} src={comedy} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} src={glass} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} src={shakespeare} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} src={theatre} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} src={wolves} />
                </Carousel.Item>
            </Carousel>;

        </div>
    )
}

export default Home;