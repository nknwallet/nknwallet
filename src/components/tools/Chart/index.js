import React, { Component } from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';
import ReactChartkick, { LineChart } from 'react-chartkick';

import styles from './styles.less';

ReactChartkick.addAdapter(Chart);

class ChartComponent extends Component {
  state = {
    data: {},
  }

  componentDidMount() {
    const data = {};
    const prices = this.props.priceUsd;

    prices.forEach(([time, price]) => {
      data[new Date(time)] = price;
    });

    this.setState({
      data,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <LineChart
          data={this.state.data}
        />
      </div>
    );
  }
}

export default connect(state => ({
  priceUsd: state.wallet.priceUsd,
}))(ChartComponent);
