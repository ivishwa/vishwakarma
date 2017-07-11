import React, {Component} from 'react';
import '../../assets/stylesheets/base.scss';

class Container extends Component {
render(){
    return (
        <div className="main">
          <div className="layer">
            <div className="title">
              <img className="avatar" src="/images/bg.JPG" />
              <h2>
                "Hello! I am Indresh Vishwakarma"
                <br/>
                <strong>Let me just change this one line of code...</strong>
              </h2>
            </div>
          </div>
        </div>
    );
}
}

export default Container;
