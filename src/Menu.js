import React, { Component } from 'react';

class Menu extends Component {

  state = {
    menu: [],
    loader: 'block'
  };

  componentDidMount() {

    //fetch data from airtable.com
    fetch('https://api.airtable.com/v0/app2Zw1geSotIrPGq/Menu?api_key=keyzNbhuvWFg1XFah')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    let refreshedMenu = myJson.records;
    this.setState({
      menu: refreshedMenu,
      loader: 'none'
    });
  });
  }

  render() {
    return (
      <div className="row" style={{marginTop: '25px', marginBottom: '25px'}}>


    <div className="col-md-4">
    {
      <p style={{display: this.state.loader}}>Loading ...</p>
    }
        <ul className="menu_widget">
        { this.state.menu.length > 0 && this.state.menu.map( (el) =>
            <li key={el.id}>{el.fields.Name}<span>{el.fields.Price} $</span></li>
        )}

        </ul>
      </div>
      <div className="col-md-8 grid_layout">
      <div className="row">
      <div className="zerogrid fail" id="MixItUp6B361D">
          <div className="wrap-container">
            <div className="wrap-content clearfix">
              <div className="col-1-2">
              <div className="wrap-col first">
                  <div className="item-container">
                   <img src="images/grid-layout2.jpg" alt="cook"/>
                   <div className="overlay">
                       <a className="overlay-inner fancybox" href="images/grid-layout2.jpg" data-fancybox-group="gallery">
                           Barbique Delite
                       </a>
                   </div>
                  </div>
                </div>
              </div>
              <div className="col-1-2">
              <div className="wrap-col first">
                  <div className="item-container">
                   <img src="images/grid-layout3.jpg" alt="cook"/>
                   <div className="overlay">
                      <a className="overlay-inner fancybox" href="images/grid-layout3.jpg" data-fancybox-group="gallery">
                         Barbique Delite
                      </a>
                   </div>
                   </div>
                </div>
              </div>
              <div className="col-1-2">
              <div className="wrap-col">
                  <div className="item-container">
                   <img src="images/grid-layout4.jpg" alt="cook"/>
                   <div className="overlay">
                       <a className="overlay-inner fancybox" href="images/grid-layout4.jpg" data-fancybox-group="gallery">
                          Barbique Delite
                       </a>
                   </div>
                    </div>
                </div>
              </div>
              <div className="col-1-2">
              <div className="wrap-col">
                  <div className="item-container">
                   <img src="images/grid-layout5.jpg" alt="cook"/>
                   <div className="overlay">
                       <a className="fancybox overlay-inner" href="images/grid-layout5.jpg" data-fancybox-group="gallery">
                         Barbique Delite
                       </a>
                    </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Menu;
