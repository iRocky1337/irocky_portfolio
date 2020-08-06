import React from 'react';

import Card from '../components/Card';

import devgrub from '../assets/images/devgrub.png';
import youtube from '../assets/images/youtube.png';
import evverest from '../assets/images/evverest.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'GitHub',
                    subTitle: 'My GitHub Profile',
                    imgSrc: devgrub,
                    link: 'https://github.com/iRocky1337',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Neon Abyss',
                    subTitle: 'Arcade Game',
                    imgSrc: youtube,
                    link: 'https://www.veewo.com/neonabyss',
                    selected: false
                },
                {
                    id: 2,
                    title: 'The Last Guardian',
                    subTitle: 'Nobody\'s death is impending',
                    imgSrc: evverest,
                    link: 'https://www.game.co.uk/webapp/wcs/stores/servlet/HubArticleView?hubId=1482752&articleId=1482754&catalogId=10201&langId=&storeId=10151',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items =[...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItem = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))}  key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItem(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
