import React, { Component, StyleSheet } from 'react';
import PaystackButton from 'react-paystack';
import KFormInput from '../../widgets/form/KFormInput';
import Constants from './../../assets/Constants';
import './../../components/Payment/payButton.css';
import Server from '../../services/Server/Server';

  class PaystackVoteButton extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        key: Constants.PAYSTACK_PUBLIC_KEY, //PAYSTACK PUBLIC KEY
        email: props.email,
        amount: 0,
        reference: this.getReference(),

      }
    }

    callback1 = (response) => {
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
      this.props.toggleDialog(false);
      Server.get('api/return?trxref=' + data.reference + '&reference=' + data.reference)
        .then( response => response.data )
        .then( payment => {
          console.log(payment);
        } )
        .catch (error => console.log(error))
    }

    render() {
      //console.log(this.state)
      const { email, amount, metadata} = this.props;
      const mdata = {...metadata, cart_id: this.state.reference}
      return (
        <PaystackButton
              text="Confirm Vote"
              class="payButton"
              callback={this.callback}
              close={this.close}
              disabled={false}
              embed={false}
              reference={this.state.reference}
              email={email}
              amount={amount}
              metadata={mdata}
              paystackkey={this.state.key}
              tag="button"
            />
      );
    }
  }

  export default PaystackVoteButton;