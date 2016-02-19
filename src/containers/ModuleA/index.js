/**
 * Created by liekkas on 16/2/19.
 */
import React, { PropTypes } from 'react'

class ModuleA extends React.Component {
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

ModuleA.propTypes = {
  foo: PropTypes.string.isRequired,
}
ModuleA.defaultProps = {
  foo: 'ModuleA',
}

export default ModuleA
