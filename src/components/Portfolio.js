import React, { Component } from 'react';
import { FaPlus } from "react-icons/lib/fa";

import Coffee from "../assets/images/portfolio/coffee.jpg";
import Console from "../assets/images/portfolio/console.jpg";
import Judah from "../assets/images/portfolio/judah.jpg";

import PortfolioItemModal from './PortfolioItemModal';

class Portfolio extends Component {
  state = { showModal: false }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <PortfolioItemModal
                showModal={showModal}
                handleCloseModal={this.handleCloseModal}
              />
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a onClick={this.handleOpenModal}>
                    <img alt="" src={Coffee} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Coffee</h5>
                        <p>Illustrration</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <FaPlus />
                    </div>
                  </a>
                </div>
              </div>

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a>
                    <img alt="" src={Console} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Console</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <FaPlus />
                    </div>
                  </a>
                </div>
              </div>

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a>
                    <img alt="" src={Judah} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Judah</h5>
                        <p>Webdesign</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <FaPlus />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio;
