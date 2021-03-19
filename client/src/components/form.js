import React, { Component } from "react";
import axios from "axios";
import "./form.css";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Submit",
    };
  }

  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ status: "Sending..." });
    axios({
      method: "POST",
      url: "http://localhost:3000/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        alert("Message Sent");
        this.setState({ name: "", email: "", message: "", status: "Submit" });
      } else if (response.data.status === "failed") {
        alert("Message Failed");
      }
    });
  }
  // render() {}

  render() {
    let buttonText = this.state.status;
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        method="POST"
        className="all"
      >
        <div className="form-container">
          <div>
            <div className="title-div">
              <hi className="title">CONTACT THE WEED MASTER</hi>
            </div>

            <hr />
            <label htmlFor="name" style={{color:"crimson"}}>Name:</label>
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this)}
              required
              style={{backgroundColor:"transparent",borderWidth:'5px', borderColor:'crimson',color:'crimson'}}
            />
          </div>
          <div>
            <label htmlFor="email" style={{color:"crimson"}}>Email:</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
              required
              style={{backgroundColor:"transparent",borderWidth:'5px', borderColor:'crimson',color:'crimson'}}
            />
          </div>
          <div>
            <label htmlFor="message" style={{color:"crimson", backgroundColor:"transparent",color:'crimson'}}>Message:</label>
            <textarea
              id="message"
              value={this.state.message}
              onChange={this.handleChange.bind(this)}
              required
              style={{backgroundColor:"transparent",borderWidth:'5px', borderColor:'crimson',color:'crimson'}}
            />
          </div>

          <button type="submit" className="button">
            {buttonText}
          </button>
        </div>{" "}
      </form>
    );
  }
}
export default ContactForm;
