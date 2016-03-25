/**
 * Created by liekkas on 16/2/19.
 */
import React, { PropTypes } from 'react'
import echarts from 'echarts'
import { Loader } from 'react-loaders'
import { LOADING_STYLE } from '../../config'

import china from './china.json'

echarts.registerMap('china', china)

class ECharts extends React.Component {

  _renderChart() {
    const chartDom = this.refs.chart
    const chart = echarts.getInstanceByDom(chartDom) || echarts.init(chartDom)
    const { option, config } = this.props
    chart.on(config.eventType, config.eventHandler);
    chart.setOption(option)
    return chart
  }

  componentDidMount() {
//    window.addEventListener('resize', this.handleResize);
    const chart = this._renderChart()
  }

  componentDidUpdate() {
    this._renderChart()
  }

  componentWillUnmount() {
    echarts.dispose(this.refs.chart)
//    window.removeEventListener('resize', this.handleResize);
  }

  handleResize(e) {

  }

  render() {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}>
        <div ref='chart' style={this.props.style} />
        {
          this.props.showLoading
            ? <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              bottom: '100%',
              backgroundColor: 'rgba(33,33,33,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Loader type={LOADING_STYLE} active={true} />
            </div>
            : null
        }

      </div>
    )
  }
}

ECharts.propTypes = {
  config: PropTypes.object.isRequired,
  option: PropTypes.object,
  style: PropTypes.object,
  showLoading: PropTypes.bool,
}

ECharts.defaultProps = {
  style: {
    width: '100%',
    height: '100%',
  },
  config: {},
  option: {},
  showLoading: false,
}

export default ECharts

