import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
   constructor() {
      super();
      this.state = {
         phone: "",
         disabled: true,
         buttontext: "Send OTP",
         buttonstyle: {
            backgroundColor: "#9EBAFA",
            color: "#CDDCFE",
            width: "400px",
            height: "48px",
            fontSize: 16
         },
         inputborder: "#E1E7EC",
         inputborderwidth: "0px"
      };
      this.onChange = this.onChange.bind(this);
   }
   onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
      if (e.target.value.length == 10) {
         var x = e.target.value.charAt(0);
         var y = parseInt(x, 10);
         if (y >= 6) {
            this.setState({ disabled: false });
            this.setState({
               buttonstyle: {
                  width: "400px",
                  height: "48px",
                  fontSize: 16,
                  backgroundColor: "#4D7CEA",
                  color: "#FFFFFF",
                  boxShadow: "0 4 5 rgba(0,0,0,0.25)"
               }
            });
            this.setState({ buttontext: "Send OTP" });
         } else {
            this.setState({ disabled: true });
            this.setState({
               buttonstyle: {
                  width: "400px",
                  height: "48px",
                  fontSize: 16,
                  backgroundColor: "#DC3330",
                  color: "#FFFFFF"
               }
            });
            this.setState({ inputborder: "#DC3330" });
            this.setState({ buttontext: "Enter Valid Mobile Number" });
            this.setState({ inputborderwidth: "1px" });
         }
      } else {
         this.setState({ disabled: true });
         this.setState({
            buttonstyle: {
               backgroundColor: "#9EBAFA",
               color: "#CDDCFE",
               width: "400px",
               height: "48px",
               fontSize: 16
            }
         });
         this.setState({ buttontext: "Send OTP" });
         this.setState({ inputborder: "#E1E7EC" });
      }
   }

   render() {
      return (
         <div align="center">
            <br />
            <input
               value="+91"
               style={{
                  backgroundColor: "#E1E7EC",
                  width: "30px",
                  height: "48px",
                  borderRight: "none",
                  color: "#8895A7",
                  fontSize: 16,
                  boxShadow: "inset 0 2 5 rgba(0,0,0,0.2)",
                  borderColor: this.state.inputborder,
                  borderWidth: this.state.inputborderwidth
               }}
               readOnly
            />
            <input
               style={{
                  backgroundColor: "#E1E7EC",
                  width: "370px",
                  height: "48px",
                  borderLeft: "none",
                  color: "#8895A7",
                  fontSize: 16,
                  boxShadow: "inset 0 2 5 rgba(0,0,0,0.2)",
                  borderColor: this.state.inputborder,
                  borderWidth: this.state.inputborderwidth
               }}
               name="phone"
               id="phone"
               value={this.state.phone}
               onChange={this.onChange}
               placeholder="Enter 10 digit mobile number"
               maxLength="10"
            />
            <br />
            <br />
            <button
               type="button"
               disabled={this.state.disabled}
               style={this.state.buttonstyle}
            >
               {this.state.buttontext}
            </button>
         </div>
      );
   }
}

export default Input;
