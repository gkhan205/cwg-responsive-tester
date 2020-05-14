import React, { Component, createRef } from "react";
import ReactGA from "react-ga";

import { viewports } from "./viewports";
import "./responsiveTest.css";

export default class ResponsiveTest extends Component {
  state = {
    url: "",
    setUrlToIframe: null,
    selectedViewport: "1280x800",
  };

  iframeRef = createRef(null);

  handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ url: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ setUrlToIframe: this.state.url });
    ReactGA.event({
      category: "click",
      action: "Inspect Clicked",
    });
  };

  handleViewportChange = (event) => {
    const { value } = event.target;
    this.setState({ selectedViewport: value });
  };

  render() {
    const { setUrlToIframe, selectedViewport } = this.state;
    const viewportValue = viewports.find(
      (item) => item.selector === selectedViewport
    );

    return (
      <div className="responsive-test-container">
        <div className="row">
          <form className="col-sm-8">
            <label htmlFor="url">Enter URL</label>
            <div className="input-group shadow-sm">
              <input
                id="url"
                type="text"
                placeholder="https://..."
                className="form-control rounded-0"
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary rounded-0"
                  type="button"
                  id="button-addon2"
                  onClick={this.handleSubmit}
                >
                  Inspect
                </button>
              </div>
            </div>
            <span className="font-weight-light font-italic font-smaller">
              Please enter full URL e.g: https://google.com
            </span>
          </form>

          <div className="col-sm-4">
            <label htmlFor="url">Select Viewport</label>
            <select
              className="form-control rounded-0 shadow-sm"
              value={selectedViewport}
              onChange={this.handleViewportChange}
            >
              {viewports.map((item, index) => (
                <option key={index} value={item.selector}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={`frame ${setUrlToIframe ? "loader" : ""}`}>
          <iframe
            title="frame"
            ref={this.iframeRef}
            id="web-frame"
            src={setUrlToIframe}
            frameBorder="0"
            width={viewportValue && viewportValue.width}
            height={viewportValue && viewportValue.height}
          ></iframe>
        </div>
      </div>
    );
  }
}
