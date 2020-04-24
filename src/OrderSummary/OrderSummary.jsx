import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { menuMessage, successMessage, discountMessage, orderSummaryTitle } from '../shared';
import './OrderSummary.css';

export const OrderSummary = (props) => {
    const { summaryData } = props;
    const [show, setShow] = React.useState(false);
    let total = 0.00;
    let summaryJsx = summaryData && summaryData.map((item, index) => {
        const finalPrice = (item.price * (1 - item.discount/100)).toFixed(2);
        total = total + (item.price * (1 - item.discount/100));
        return (
            <tr key={index}>
                <td>
                    {item.burgerName} - {'₹' + item.price}
                </td>
                <td>{' = '}</td>
                <td>
                    <b>
                        {`₹ ${finalPrice} (${discountMessage})`}
                    </b>
                </td>
            </tr>
        );
    });

    const handleClose = () => {
        setShow(false);
        window.location.reload();
    }
    const handleShow = () => setShow(true);

    return (
        <div className="order-summary">
            <div className="card-title">
                {orderSummaryTitle}
            </div>
            <br />
            <div className="summary-table">
                <table className="table table-striped">
                    <tbody>
                        {summaryJsx.length ? summaryJsx : <div>{menuMessage}</div>}
                    </tbody>
                </table>
            </div>
            <div className="cart-total">
                {'Total: ₹' + total.toFixed(2)}
            </div>
            <Button variant="primary" size="lg" block onClick={handleShow} disabled={total === 0}>
                Confirm Order
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>CONGRATULATIONS</Modal.Title>
                </Modal.Header>
                <Modal.Body>{successMessage}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
