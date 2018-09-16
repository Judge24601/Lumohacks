import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FormFillOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      situation: '',
      thoughts: '',
      emotions: '',
      physicalscenario: '',
      othernotes: ''
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let change = { [e.target.name] = e.target.value };
    this.setState(change);
  }

  handleSubmit(event) {
    for (var property in this.state) {
          props.updateField(0,property,this.state[property]);
    }

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
      Situation:
      <input type="text" value={this.state.situation} onChange ={this.handleChange}/>
      </label>
      <label>
      Thoughts:
      <input type="text" value={this.state.thoughts} onChange ={this.handleChange}/>
      </label>
      <label>
      Emotions:
      <input type="text" value={this.state.emotions} onChange ={this.handleChange}/>
      </label>
      <label>
      Physical Scenario:
      <input type="text" value={this.state.physicalscenario}
      onChange ={this.handleChange}/>
      </label>
      <label>
      Other Notes:
      <input type="text" value={this.state.othernotes} onChange ={this.handleChange}/>
      </label>
      <input type="submit" value="Submit" />
      </form>

    )
  }


}