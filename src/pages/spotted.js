import React from 'react'
import Helmet from 'react-helmet'
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery'
import PropTypes from 'prop-types';
;

import Layout from '../components/layout'
import pic04 from '../assets/images/pic04.jpg'
import HeaderHackathon from '../components/HeaderHackathon'


class Spotted extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: this.props.images
    };
  }

  setCustomTags (i) {
    return (
      i.tags.map((t) => {
        return (<div
          key={t.value}
          style={customTagStyle}>
          {t.title}
        </div>);
      })
    );
  }

  render() {
    var images = this.state.images.map((i) => {
        i.customOverlay = (
          <div style={captionStyle}>
            <div>{i.title}</div>
          </div>);
        // i.lightBoxProps = (
        //   <div style={captionStyle}>
        //     <div>{i.caption}</div>
        //   </div>);
      {i.hasOwnProperty('tags') && this.setCustomTags(i)}
      return i;
      });


    return (
      <Layout>

        <Helmet title="Generic Page Title" />
        <HeaderHackathon />

        <div id="main">
            {/*<section className="gallery-container"></section>*/}
            <section id="content" className="main">
              <div style={{
                display: "block",
                minHeight: "1px",
                rowHeight: "500%",
                width: "100%",
                border: "1px solid #ddd",
                overflow: "auto"}}>
                <Gallery
                  // images={this.state.images}
                  images={images}
                  enableImageSelection={false}
                  showImageCount={false}
                  margin={1}
                  enableLightbox={true}
                  backdropClosesModal={true}
                  overflow={scroll}
                  // lightBoxProps={this.image.caption}
                  customControls={[
                    <div id="main" style={{height: "5000px", zIndex: "-1", background: "#ffffff"}} >
                      <section className="hackathonArticle">
                        {/*<h2>TITLE</h2>*/}
                        {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
                      </section>
                    </div>
                  ]}
                />
              </div>
              {/*<span className="image main"><img src={pic04} alt="" /></span>*/}

            </section>
        </div>
      </Layout>
    )
  }
}

function myClickFn() {
  if (this.props.item.isSelected)
    return {}
      // something stylish...

}

Spotted.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.string,
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

const captionStyle = {
  backgroundColor: "#FFC417",
  textAlign: "center",
  maxHeight: "240px",
  overflow: "hidden",
  align: "center",
  position: "absolute",
  bottom: "45px",
  left: "10px",
  right: "10px",
  width: "90%",
  color: "white",
  fontSize: "90%",
  borderRadius: "25px",
};


Spotted.defaultProps = {
  images: ([
    {
      src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
      thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
      thumbnailWidth: 271,
      thumbnailHeight: 320,
      caption: "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis fames ac ante ipsum primis in faucibus" +
        "Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Consequat leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit enim turpis lorem ipsum dolor sit amet feugiat. Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet est velit quis lorem.",
      title: "ARTICLE"
    },
    {
      src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
      thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 190,
      caption: "MALAYSIA",
      title: "ARTICLE"

    },
    {
      src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
      thumbnail: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 148,
      caption: "THAILAND",
      title: "ARTICLE"

    },
    {
      src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
      thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "MALAYSIA",
      title: "ARTICLE"

    },
    {
      src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
      thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
      thumbnailWidth: 248,
      thumbnailHeight: 320,
      caption: "CAMBODIA",
      title: "ARTICLE"

    },
    {
      src: "https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg",
      thumbnail: "https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 113,
      caption: "JAPAN",
      title: "ARTICLE"

    },
    {
      src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
      thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
      thumbnailWidth: 313,
      thumbnailHeight: 320,
      caption: "BALI",
      title: "ARTICLE"

    },
    {
      src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
      thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "WORKSHOP",
      title: "ARTICLE"
    }
  ])
};

export default Spotted
