import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const listitems = [
  {
    name: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  
    constructor() {
      super();
      this.state = {
        listitems 
      };
    }
    componentDidMount() {
      const todoData = JSON.parse(localStorage.getItem("listitems"));
      if (todoData) {
        this.setState({
          listitems: todoData,
        });
      }
    }
    addItem = (e, item) => {
      e.preventDefault();
      const { listitems } = this.state;
      const newItem = {
        
        name: item,
        id: Date.now(),
        completed: false
      };
      this.setState({
        listitems: [...this.state.listitems, newItem]
      });
      localStorage.setItem("todos", JSON.stringify(listitems));
    };
  
    toggleItem = itemId => {
      console.log(itemId);
           this.setState({
            listitems: this.state.listitems.map(item => {
          if (itemId === item.id) {
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        })
      });
    };
  
    clearcompleted = e => {
      e.preventDefault();
           this.setState({
            listitems: this.state.listitems.filter(item => !item.completed)
      });
    };
 
  render() {
    return (
      <div>
                <TodoList
          listitems={this.state.listitems}
          toggleItem={this.toggleItem}

          
         clearcompleted={this.clearcompleted}
        />
        <TodoForm addItem={this.addItem}  />

      </div>
    );
  }
}

export default App;
