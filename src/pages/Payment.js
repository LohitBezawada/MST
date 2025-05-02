import React from 'react';

const Payment = () => {
    return (
        <div className="container mt-5">
            <h2>Payment</h2>
            {/* Payment form */}
            <form>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" className="form-control" id="amount" />
                </div>
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" className="form-control" id="cardNumber" />
                </div>
                <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input type="text" className="form-control" id="expiryDate" />
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" className="form-control" id="cvv" />
                </div>
                <button type="submit" className="btn btn-primary">Pay Now</button>
            </form>
        </div>
    );
}

export default Payment;
