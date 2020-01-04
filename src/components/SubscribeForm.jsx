import React from "react";


function validatePhoneNumber(inputtxt) {
  let sample = /^\+375(17|29|33|44)[0-9]{7}$/;

  if(inputtxt.match(sample)) {
    return true;
  }
  
  else {
    return false;
  }
}

export class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhoneInput = this.handlePhoneInput.bind(this);

    this.state = {
      value: "введите ваш номер телефона",
      isError: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    let isCorrectPhone = validatePhoneNumber(this.state.value);

    if (isCorrectPhone){
      this.setState({
        isError: false, 
        value: ''
      });
      console.log('submited');
    } else {
      this.setState({
        isError: true, 
      });
      console.log('not submited'); 
    }
  }

  handlePhoneInput(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const className = this.state.isError ? "form-control error" : "form-control";

    return (
      <form
        onSubmit={this.handleSubmit}
        className="subscribe-form"
      >
        <p>Enter your phone number at such format +375 then 17|29|33|44 then 7 numbers</p>
        <div className="form-group d-flex">
          <input
            type="text"
            className={className}
            value={this.state.value}
            placeholder={this.state.value}
            onChange={this.handlePhoneInput}
          />
          <input 
            type="submit"
            defaultValue="Send"
            className="submit px-3"
          />
        </div>
      </form>
    )
  }
}