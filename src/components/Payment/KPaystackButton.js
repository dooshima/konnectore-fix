import React, { Component, StyleSheet } from 'react';
import PaystackButton from 'react-paystack';
import KFormInput from '../../widgets/form/KFormInput';
import Constants from './../../assets/Constants';
import './payButton.css';
import Server from '../../services/Server/Server';

  class KPaystackButton extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        key: Constants.PAYSTACK_PUBLIC_KEY, //PAYSTACK PUBLIC KEY
        email: props.user.email,
        amount: "",

      }
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
      this.setState({[name]: name === 'amount'? +event.target.value * 100: event.target.value});
    }

    callback = data => {
      console.log(data);
      Server.get('api/return/?trxref=' + data.reference + '&reference=' + data.reference)
        .then( response => response.data )
        .then( payment => {
          console.log(payment);
        } )
    }

    render() {
      //console.log(this.state)
      return (
        <div>
          <p style={{width: 350, margin: "3em auto", overflow: "hidden"}}>
            <KFormInput placeholder="Enter amount" 
              handleChange={this.handleChange} 
              name="amount"
              style={{marginBottom: 30,}} />
            {this.state.email && this.state.amount && <PaystackButton
              text="Make Payment"
              class="payButton"
              callback={this.callback}
              close={this.close}
              disabled={false}
              embed={false}
              reference={this.getReference()}
              email={this.state.email}
              amount={this.state.amount}
              paystackkey={this.state.key}
              tag="button"
            />}
          </p>
        </div>
      );
    }
  }

  export default KPaystackButton;