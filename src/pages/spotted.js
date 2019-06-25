import React from 'react'
import Helmet from 'react-helmet'
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery'
import PropTypes from 'prop-types';
;

import Layout from '../components/layout'
import pic04 from '../assets/images/pic04.jpg'
import HeaderHackathon from '../components/HeaderHackathon'


// const IMAGES =
//   [{
//     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//     thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//     // thumbnailWidth: 320,
//     // thumbnailHeight: 174,
//     // isSelected: true,
//     caption: "After Rain (Jeshu John - designerspics.com)"
//   },
//     {
//       src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//       thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//       // thumbnailWidth: 320,
//       // thumbnailHeight: 212,
//       tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//       caption: "Boats (Jeshu John - designerspics.com)"
//     },
//
//     {
//       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//       thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//       // thumbnailWidth: 320,
//       // thumbnailHeight: 212
//     }]

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
            <div>{i.caption}</div>
            {i.hasOwnProperty('tags') &&
            this.setCustomTags(i)}
          </div>);
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
                  images={images}
                  enableImageSelection={false}/>
              </div>
              <span className="image main"><img src={pic04} alt="" /></span>
              <h2>Magna feugiat lorem</h2>
              <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis fames ac ante ipsum primis in faucibus.</p>
              <p>Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Consequat leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit enim turpis lorem ipsum dolor sit amet feugiat. Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet est velit quis lorem.</p>
              <h2>Tempus veroeros</h2>
              <p>Cep risus aliquam gravida cep ut lacus amet. Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae ante vestibulum ante. Blandit. Ante accumsan nisi eu placerat gravida placerat adipiscing in risus fusce vitae ac mi accumsan nunc in accumsan tempor blandit aliquet aliquet lobortis. Ultricies blandit lobortis praesent turpis. Adipiscing accumsan adipiscing adipiscing ac lacinia cep. Orci blandit a iaculis adipiscing ac. Vivamus ornare laoreet odio vis praesent nunc lorem mi. Erat. Tempus sem faucibus ac id. Vis in blandit. Nascetur ultricies blandit ac. Arcu aliquam. Accumsan mi eget adipiscing nulla. Non vestibulum ac interdum condimentum semper commodo massa arcu.</p>
            </section>
        </div>
      </Layout>
    )
  }
}

Spotted.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.string,
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired
    })
  ).isRequired
};

const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  maxHeight: "240px",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  color: "white",
  padding: "2px",
  fontSize: "90%"
};

const customTagStyle = {
  wordWrap: "break-word",
  display: "inline-block",
  backgroundColor: "white",
  height: "auto",
  fontSize: "75%",
  fontWeight: "600",
  lineHeight: "1",
  padding: ".2em .6em .3em",
  borderRadius: ".25em",
  color: "black",
  verticalAlign: "baseline",
  margin: "2px"
};

Spotted.defaultProps = {
  images: ([
    {
      src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
      thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
      thumbnailWidth: 271,
      thumbnailHeight: 320,
      tags: [{value: "Nature", title: "Nature | Flowers"}],
      caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
      thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 190,
      tags: [{value: "Architecture", title: "Architecture | Outdoors"},
        {value: "Industrial", title: "Industrial"}],
      caption: "286H (gratisography.com)"
    },
    {
      src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
      thumbnail: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 148,
      tags: [{value: "People", title: "People"},
        {value: "Architecture", title: "Architecture | Outdoors"},
        {value: "Industrial", title: "Industrial"}],
      caption: "315H (gratisography.com)"
    },
    {
      src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
      thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "201H (gratisography.com)"
    },
    {
      src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
      thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
      thumbnailWidth: 248,
      thumbnailHeight: 320,
      caption: "Big Ben (Tom Eversley - isorepublic.com)"
    },
    {
      src: "https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg",
      thumbnail: "https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 113,
      tags: [{value: "People", title: "People"},
        {value: "Industrial", title: "Industrial"}],
      caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    {
      src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
      thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
      thumbnailWidth: 313,
      thumbnailHeight: 320,
      caption: "Wood Glass (Tom Eversley - isorepublic.com)"
    },
    {
      src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
      thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      tags: [{value: "Nature", title: "Nature | Flowers"}],
      caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    }
  ])
};

export default Spotted
