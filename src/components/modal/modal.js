import React, { Component } from 'react'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log('Open Start')
      },
      onOpenEnd: () => {
        console.log('Open End')
      },
      onCloseStart: () => {
        console.log('Close Start')
        var expiration = Date.now()
        var oneMinuteInMilliseconds = 60000
        // console.log(expiration + oneMinuteInMilliseconds);
        // console.log(expiration);
        expiration = expiration + oneMinuteInMilliseconds
        localStorage.setItem('expire', expiration)
      },
      onCloseEnd: () => {
        console.log('Close End')
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: '4%',
      endingTop: '10%',
    }
    M.Modal.init(this.Modal, options)

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <div>
        <a
          className="waves-effect waves-light btn modal-trigger hide"
          data-target="modal1"
        >
          Modal
        </a>

        <div
          ref={(Modal) => {
            this.Modal = Modal
          }}
          id="modal1"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
            <h4>Logout Warning, ARE YOU THERE?</h4>
            <p>You are about to be logged out of your session</p>
          </div>
          <div className="modal-footer">
            <a className="modal-close light-blue darken-4 white-text btn-flat">
              Stay Logged In
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
