import { Component } from "react";

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entrepreneur", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  renderAllData = () => {
    return (
      <ul>
        {this.state.userData.map((user) => {
          return (
            <li key={user.id}>
              Id: {user.id} &ensp; Name: {user.name} &ensp; User Type:&nbsp;
              {user.user_type}
            </li>
          );
        })}
      </ul>
    );
  };

  renderFilteredData = () => {
    const filteredData = this.state.userData.filter(
      (user) => user.user_type === "Designer"
    );

    return (
      <ul>
        {filteredData.map((user) => (
          <li key={user.id}>
            Id: {user.id} &ensp; Name: {user.name} &ensp; User Type:&nbsp;
            {user.user_type}
          </li>
        ))}
      </ul>
    );
  };

  renderFilteredDataLetter = () => {
    const filteredData = this.state.userData.filter(
      (user) => user.name.charAt(0).toUpperCase() === "J"
    );

    return (
      <ul>
        {filteredData.map((user) => (
          <li key={user.id}>
            Id: {user.id} &ensp; Name: {user.name} &ensp; User Type:&nbsp;
            {user.user_type}
          </li>
        ))}
      </ul>
    );
  };

  renderFilteredDataAge = () => {
    const filteredData = this.state.userData.filter(
      (user) => user.age > 28 && user.age <= 50
    );

    return (
      <ul>
        {filteredData.map((user) => (
          <li key={user.id}>
            Id: {user.id} &ensp; Name: {user.name} &ensp; User Type:&nbsp;
            {user.user_type}
          </li>
        ))}
      </ul>
    );
  };

  renderTotalExperienceDesigners = () => {
    const filteredData = this.state.userData.filter(
      (user) => user.user_type === "Designer"
    );

    const totalExperience = filteredData.reduce(
      (acc, designer) => acc + designer.years,
      0
    );

    return <span>{totalExperience}</span>;
  };

  render() {
    return (
      <>
        <h1>Display all items</h1>
        {this.renderAllData()}

        <h1>Display based on user type</h1>
        {this.renderFilteredData()}

        <h1>Filter all data startin with J</h1>
        {this.renderFilteredDataLetter()}

        <h1>
          Filter all data based on age greater than 28 and age less than or
          equal to 50
        </h1>
        {this.renderFilteredDataAge()}

        <h1>Find the total years of the designers</h1>
        {this.renderTotalExperienceDesigners()}
      </>
    );
  }
}

export default HigherOrderComponent;
