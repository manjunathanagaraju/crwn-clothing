import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.style.scss';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-signup/sign-in-and-signup.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {
constructor(){
     super();
     this.state={
          currentUser : null
     }
}
unsubscribeFromAuth = null;
componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async usr => {
         // this.setState({currentUser:usr});
         createUserProfileDocument(usr)
          console.log(usr);
     });
}

componentWillUnmount(){
     this.unsubscribeFromAuth();
}

render (){
 return (
  <div>
    <Header currentUser={this.state.currentUser}/>
    <Switch>
         <Route exact path="/" component={HomePage} />
         <Route path="/shop" component={ShopPage} />
         <Route path="/signin" component={SignInAndSignUpPage} />
    </Switch>
 </div>
 );
 // return  <div><HomePage/></div>;
}
}

export default App;
