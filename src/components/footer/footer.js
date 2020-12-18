import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text"></h5>
              <p className="grey-text text-lighten-4"></p>
            </div>
            <div className="col l4 offset-l2 s12"></div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">© 2020 ITIS 5166 - UNC Charlotte</div>
        </div>
      </footer>
    )
  }
}

export default Footer
