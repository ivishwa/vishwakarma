import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import '../../assets/stylesheets/base.scss';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';


class Header extends Component {
render(){
    return (
      <div className="header">

        <h1 style={{margin:2}}>
          <IconButton><NavigationMenu/></IconButton>
          Indresh Vishwakarma
        </h1>
        <Divider
          style={{
            height:3,
            backgroundColor: "#1A237E"
          }}/>
      </div>
    );
}
}

export default Header;
