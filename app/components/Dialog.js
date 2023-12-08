import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.dialog = React.createRef()
  }

  componentDidMount() {
    const dialogPolyfill = require('dialog-polyfill')
    dialogPolyfill.registerDialog(this.dialog.current)
    this.dialog.current.open = this.props.open
    this.dialog.current.showModal()
  }

  componentDidUpdate() {
    this.dialog.current.open = this.props.open
    this.dialog.current.showModal()
  }

  render () {
    return (
      <dialog className='syos-dialog' ref={this.dialog} onClose={() => history.back()}>
        {this.props.children}
      </dialog>
    )
  }
}
