/**
 * Created by liekkas on 16/2/19.
 */
import React, { PropTypes } from 'react'
import { ECharts, Panel } from '../../components'
import style from './style.scss'
import _ from 'lodash'
import {mockBarChartOption, mockMapOption} from '../../tools/dataMock'

class Home extends React.Component {
  onMapClick(e) {
    console.log('>>> Home:',e)
  }

  render() {
    return (
      <div className={style.root}>
        <ECharts option={mockMapOption()} config={{eventType: 'click', eventHandler: this.onMapClick}}/>
        <div className={style.bar}>
          <ECharts option={mockBarChartOption()}/>
        </div>
      </div>
    )
  }
}
export default Home
