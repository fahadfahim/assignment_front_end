import React,{Component} from 'react'
import axios from 'axios'

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
      case 'DELETE_POST':
        return {
          ...state,
          posts: state.posts.filter(
            post => post.id !== action.payload
          )
        };
      case 'ADD_POST':
        return {
          ...state,
          posts: [action.payload, ...state.posts]
        };
      case 'UPDATE_POST':
        return {
          ...state,
          posts: state.posts.map(
            post =>
            post.id === action.payload.id
                ? (post = action.payload)
                : post
          )
        };
      default:
        return state;
    }
  };

export class Provider extends Component{
    state={
        posts:[],
        dispatch: action => this.setState(state => reducer(state,action))
    }

    async componentDidMount(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const comments = await axios.get(
          `https://jsonplaceholder.typicode.com/comments/`
      );
      // console.log(comments.data);
      //   console.log(res.data);
        this.setState({posts:res.data})
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;