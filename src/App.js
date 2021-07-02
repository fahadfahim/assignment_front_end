
import './App.css';
import Header from './Header';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Home from './Home';
import Posts from './Posts';
import AddPost from './AddPost';
import EditPost from './EditPost';
import PostDetails from './PostDetails';
import Users from './Users';

function App() {
  return (
    <>
      <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Posts} />
        <Route path='/post/add' component={AddPost} />
        <Route exact path='/post/edit/:id' component={EditPost} />
        <Route exact path='/post/details/:id' component={PostDetails} />
        <Route exact path='/users' component={Users} />
      </Switch>
     
      </Router>
      
    </>
  );
}

export default App;
