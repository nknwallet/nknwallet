import React, { Component } from 'react';

import eyeOn from 'Root/images/eye-on.svg';
import eyeOff from 'Root/images/eye-off.svg';

import styles from './styles.less';

class TextField extends Component {
  state = {
    eyeImg: eyeOn,
    type: this.props.type,
    eye: this.props.type === 'password',
  };

  handleClick = () => {
    this.setState(state => ({
      eye: !state.eye,
      eyeImg: state.eye ? eyeOff : eyeOn,
      type: state.type === 'password' ? 'text' : 'password',
    }));
  }

  render() {
    return (
      <div className={styles.container}>
        <input
          type={this.state.type}
          className={styles.input}
          placeholder={this.props.placeholder}
        />

        {this.props.type === 'password'
          && (
            <span className={styles.invisible}>
              <img
                alt="Eye"
                role="presentation"
                src={this.state.eyeImg}
                onKeyDown={this.handleClick}
              />
            </span>
          )
      }
      </div>
    );
  }
}

export default TextField;