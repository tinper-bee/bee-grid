import classNames from 'classnames';
import React, { PropTypes, Component } from 'react';


const propTypes = {
  componentClass: PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.string
  ])
};

const defaultProps = {
  componentClass: 'div',
};

const clsPrefix = 'u-row';

class Row extends Component {
  render() {
    const { componentClass: Component, classes, ...others } = this.props;

    const bsclass = `${clsPrefix}`;

    return (
      <Component
        {...others}
        className={classNames(bsclass, classes)}
      >
      { this.props.children }
      </Component>
    );
  }
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
