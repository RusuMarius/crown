import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LightBox, { Modal, ModalGateway } from "react-images";
import {Link} from 'react-router-dom';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class SliderOffers extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      apiImgs: [],
      loading: false,
      lightboxIsOpen: false,
      // selectedIndex: 0,
      selectedImage: {}
    };
  }


  componentDidMount() {
    this._isMounted = true;
    this.setState({ loading: true });
    fetch("api/images-offers.json")
      .then(data => data.json())
      .then(data =>
        this.setState(
          {
            apiImgs: data.map(item => ({
              ...item,
              source: item.download_url
            })),
            loading: false
          }
        )
      );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  toggleLightbox = (post, selectedIndex) => {

    this.setState(state => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedImage: { author: post.author, index: selectedIndex }
    }));
  };

  render() {
    return (
      <div className='main-container'>
        {this.state.loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <React.Fragment>
            <Carousel
              additionalTransfrom={0}
              showDots={false}
              arrows={true}
              autoPlaySpeed={3000}
              autoPlay={false}
              centerMode={false}
              className="slider"
              containerClass="container-with-dots"
              dotListClass="dots"
              draggable
              focusOnSelect={false}
              infinite
              itemClass="carousel-top"
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside
              responsive={responsive}
            >
              {Object.values(this.state.apiImgs).map((post, indx) => {
                return (
                  <div className="mt-5" key={indx} id={post.id} onClick={() => this.toggleLightbox(post, indx)}>
                    <img
                      className="media-img card-img-top card-img-hero"
                      src={post.download_url}
                      alt="Alt text"
                      style={{ cursor: "pointer" }}
                    />
                    <div className="offers-text">
                      <p className='title'>{post.title}</p>
                      <p className='offer'>
                        {post.offer?<span>{post.offer}<br /></span>:null}
                        {post.procent?<span className='procent'>{post.procent}<br /></span>:null}
                        {post.person?<span className='person'>{post.person}</span>:null}
                      </p>
                      {post.button?<Link className='offer-cta' to='/contact'>{post.button}</Link>:null}

                    </div>
                  </div>
                );
              })}
            </Carousel>
            <ModalGateway>
              {this.state.lightboxIsOpen ? (
                <Modal onClose={this.toggleLightbox}>
                  <LightBox
                    components={{
                      FooterCaption: props => {
                        return (
                          <div>shot by - {props.currentView.author}</div>
                        );
                      }
                    }}
                    currentIndex={this.state.selectedImage.index}
                    frameProps={{ autoSize: "height" }}
                    views={this.state.apiImgs}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
        </React.Fragment>
        )}
      </div>
    );
  }
}

export default SliderOffers;
