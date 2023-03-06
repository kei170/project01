import Carousel from 'react-bootstrap/Carousel';

import "./Manto.css"

function Manto() {
  return (
    <Carousel className='boxCart'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lp2.hm.com/hmgoepprod?set=source[/e8/3b/e83bce86a6d04d0d62d212ecdcb4805d7bd0a167.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lp2.hm.com/hmgoepprod?set=source[/ca/ea/caea705cd836b2d720496eda1d0e9ac79149eb1b.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lp2.hm.com/hmgoepprod?set=source[/6a/9b/6a9bb5a82f1bfc6f09fedf86f0dbafac49bf69e7.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Manto;