/**
 * Created by liekkas on 16/2/19.
 */
import React, { PropTypes } from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar',
    }
  }

  render() {
    const { foo } = this.props
    return (
      <div>
        {foo}
      </div>
    )
  }
}

Home.propTypes = {
  foo: PropTypes.string.isRequired,
}
Home.defaultProps = {
  foo: 'Home',
}

export default Home
