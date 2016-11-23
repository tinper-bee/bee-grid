import classNames from 'classnames';
import React, { PropTypes, Component } from 'react';


const propTypes = {

};

const defaultProps = {

};



class Grid extends React.Component {
  render() {

    return (
      <div>
      { this.props.children }
      </div>
    );
  }
}

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
