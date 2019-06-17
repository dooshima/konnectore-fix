import React, { Component, StyleSheet } from 'react';
import PaystackButton from 'react-paystack';
import KFormInput from '../../widgets/form/KFormInput';
import Constants from './../../assets/Constants';
import './payButton.css';
import Server from '../../services/Server/Server';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SimpleTextAlert from '../../widgets/alerts/SimpleTextAlert';

const styles = {

};
  class KFundWalletButton extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        key: Constants.PAYSTACK_PUBLIC_KEY, //PAYSTACK PUBLIC KEY
        email: props.user.email,
        amount: "",
        reference: this.getReference(),
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

    handleChange1 = name => event => {
      this.setState({[name]: name === 'amount'? +event.target.value * 100: event.target.value});
    }

    handleChange = (name, value) => {
        this.setState({[name]: value});
    }

    callback = data => {
      console.log(data);
      Server.get('api/return/?trxref=' + data.reference + '&reference=' + data.reference)
        .then( response => response.data )
        .then( payment => {
          console.log(payment);
          this.setState({amount: ''});
        } )
    }

    setAmount = naira => {
        return +naira * 100;
    }

    render() {
      console.log(this.state)
      const { classes } = this.props;
      const metadata = {
        user_id: this.props.user.id,
        payment_for: 2,
        reference: this.state.reference,
        email: this.state.email,
        cart_id: this.state.reference,
        amount: this.setAmount(this.state.amount),
    }
      return (
        <div style={{width: '100%'}}>
          <Grid item container spacing={2}>
                <Grid item md={8} sm={12} xs={12} className={classes.grid}>
                    <KFormInput placeholder="Enter amount" 
                        handleChange={this.handleChange} 
                        name="amount"
                        value={this.state.amount}
                        style={{marginBottom: 30,}} 
                    />
                </Grid>
                <Grid item md={4} className={classes.grid}>
                    <div className={classes.next}>
                        {this.state.email && this.state.amount && <PaystackButton
                            text="FUND WALLET"
                            class="payButton"
                            callback={this.callback}
                            close={this.close}
                            disabled={false}
                            embed={false}
                            reference={this.state.reference}
                            metadata={metadata}
                            email={this.state.email}
                            amount={this.setAmount(this.state.amount)}
                            paystackkey={this.state.key}
                            tag="button"
                        />}
                        {!this.state.email || !this.state.amount && <SimpleTextAlert message="Amount" />}
                    </div>
                </Grid>
          </Grid>
        </div>
      );
    }
  }

  export default withStyles(styles)(KFundWalletButton);