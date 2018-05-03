import React, { Component } from 'react';
import { FaPlus } from "react-icons/lib/fa";
import Waypoint from "react-waypoint";
import { connect } from "react-redux";
import PortfolioItemModal from './PortfolioItemModal';
import { setCurrentNav } from '../state/actions';

class Portfolio extends Component {
  state = {
    showModal: false,
    currentPortfolioItem: {
      name: '',
      tags: '',
      repository: '',
      modalPicUrl: ''
    }
  }

  handleOpenModal = (item) => {
    this.setState({
      showModal: true,
      currentPortfolioItem: item
    });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal, currentPortfolioItem } = this.state;

    return (
      <Waypoint
        onEnter={() => this.props.dispatch(setCurrentNav('portfolio')) }
        onLeave={() => this.props.dispatch(setCurrentNav('')) }
      >
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out My Personal Projects.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <PortfolioItemModal
                  showModal={showModal}
                  handleCloseModal={this.handleCloseModal}
                  {...currentPortfolioItem}
                />
                {this.props.works.map(({node}) => (
                  <div className="columns portfolio-item" key={node.name}>
                    <div className="item-wrap">
                      <a onClick={() => this.handleOpenModal(node)} >
                        <img
                          alt={node.name}
                          src={node.thumbnails[0].file.url}
                        />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{node.name}</h5>
                            <p>{node.category}</p>
                          </div>
                        </div>
                        <div className="link-icon">
                          <FaPlus />
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Waypoint>
    )
  }
}

const mapStateToProps = (state) => ({ works: state.works });

export default connect(mapStateToProps)(Portfolio);

export const query = graphql`
  fragment PortfolioFragment on ContentfulPortfolio {
    name
    category
    description {
      childMarkdownRemark {
        html
      }
    }
    tags
    repository
    thumbnails {
      file {
        url
      }
    }
  }
`;
