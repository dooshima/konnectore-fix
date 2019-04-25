import React, { Component } from 'react';
  //import the library
  import PaystackButton from 'react-paystack';
import KFormInput from '../../widgets/form/KFormInput';

  class KPaystackButton extends Component {

    state = {
      key: "", //PAYSTACK PUBLIC KEY
      email: "",
      amount: 0,

    }

    callback = (response) => {
      console.log(response); // card charged successfully, get reference here
    }

    close = () => {
      console.log("Payment closed");
    }

    getReference = () => {
      //you can put any unique reference implementation code here
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

      for( let i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }

    handleChange = name => event => {
      this.setState({[name]: event.target.value})
    }

    render() {
      console.log(this.state);
      return (
        <div>
          <p>
            <KFormInput placeholder="Enter amount" handleChange={this.handleChange} name="amount" />
            <PaystackButton
              text="Make Payment"
              class="payButton"
              callback={this.callback}
              close={this.close}
              disabled={true}
              embed={true}
              reference={this.getReference()}
              email={this.state.email}
              amount={this.state.amount}
              paystackkey={this.state.key}
              tag="button"
            />
          </p>
        </div>
      );
    }
  }

  export default KPaystackButton;