import './App.css';
import { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/searchbox.componet';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchText: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(respose => respose.json())
      .then(uarray => this.setState({ robots: uarray }));
  }
  handleClick = (e) => {
    this.setState({ searchText: e.target.value });
  }
  render() {
    const { robots, searchText } = this.state;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchText.toLowerCase()));
    return (
      <div className="App">
        <h1>Robots Rolodex</h1>
        <SearchBox handleClick={this.handleClick} />
        <CardList robots={filteredRobots}>
        </CardList>
      </div>
    );
  }

};

export default App;
