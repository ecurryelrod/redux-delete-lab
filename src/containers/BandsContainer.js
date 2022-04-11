import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands'
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    // debugger
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} delete={this.props.delete} />
      </div>
    )
  }
}

const mapStateToProps = state => ({bands: state.bands})

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({type: "ADD_BAND", name: band.name}),
  delete: band => dispatch({type: 'DELETE_BAND', id: band.id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer); 
