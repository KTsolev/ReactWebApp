import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component }  from 'react';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick (props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked (props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

render() {
    return (
      <div className="map-holder">
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          initialCenter={{
            lat: 42.811816,
            lng: 23.203506,
          }}
          zoom={15}
         >
          <Marker
            name='Dental kabinet'
            position={{ lat: 42.811816, lng: 23.203506 }} />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onInfoWindowClose}>
                <div>
                  <h1>"kabinet"</h1>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyB9agb_eLgsFFE1DHEJqBOTUs0rZo4kMsE")
})(MapContainer);
