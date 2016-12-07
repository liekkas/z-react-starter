/**
 * Created by liekkas on 16/5/20.
 */
import React, { PropTypes } from 'react'
import { Row,Col,Menu } from 'antd'
import style from './index.less'

class Antd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={4}>
            <Menu></Menu>
          </Col>
          <Col span={20}>
            <div className={style.box}>
              col-12
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

Antd.propTypes = {
  foo: PropTypes.string.isRequired,
}
Antd.defaultProps = {
  foo: 'bar',
}

export default Antd
