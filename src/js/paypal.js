// fetch('https://api.sandbox.paypal.com/v1/payment-experience/web-profiles/XP-8YTH-NNP3-WSVN-3C76 \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer A21AAH1gYcbnxaWTohzK4J-Zb_WRxIMM1EPBNrk2OdKLEvMoSNtqZJCN4ZZtLhRRODHA0ptGnRqQQKimGHlG1DUVGzSVtRHlw"').then(function (response) {
//   if (response.status !== 200) {
//     console.log('Looks like there was a problem. Status Code: ' +
//       response.status);
//     return;
//   }
//   response.json().then(function (data) {
//     console.log(data);
//   }).catch(function (err) {
//     console.log('Fetch Error :-S', err);
//   })
// })

paypal.Buttons({

  // Set up the transaction
  createOrder: function (data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '0.01'
        }
      }]
    });
  },

  // Finalize the transaction
  onApprove: function (data, actions) {
    return actions.order.capture().then(function (details) {
      // Show a success message to the buyer
      alert('Transaction completed by ' + details.payer.name.given_name + '!');
    });
  }


}).render('#paypal-button-container');