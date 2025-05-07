import { useState } from 'react';
import { toast } from 'react-toastify';
import confetti from 'canvas-confetti';
import styled from 'styled-components';

type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
  };
  
  interface BillDetailsProps {
    cartItems: CartItem[];
  }
  

const Card = styled.div`
  background: #fdfdfd;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  margin-top: 24px;

  @media (max-width: 600px) {
    padding: 16px;
    margin: 16px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  font-size: 16px;
  margin-top: 0.75rem;
`;

const Label = styled.span`
  font-weight: 500;
`;

const OldPrice = styled.span`
  color: #000;
  margin-right: 4px;
`; 

/* const Discounted = styled.span`
  color: #009e60;
  font-weight: 600;
`; */

const FeeFree = styled.span`
  color: #00a676;
  font-weight: 600;
`;

/* const TipLink = styled.span`
  color: #ff5722;
  font-weight: 500;
  cursor: pointer;
`; */

const Total = styled(Row)`
  border-top: 1px solid #e0e0e0;
  padding-top: 12px;
  font-weight: bold;
  font-size: 18px;
`;

const RedNote = styled.p`
  font-size: 14px;
  color: #d32f2f;
  font-weight: 500;
  margin-top: 0.85rem;
`;

const PayBtn = styled.button`
  width: 25%;
  margin-top: 16px;
  background-color: #00c853;
  color: white;
  font-size: 16px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: semi-bold;
`;

const BillDetails = ({ cartItems }: BillDetailsProps) => {

  const [orderPlaced, setOrderPlaced] = useState(false);


  const itemTotal = cartItems.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;
    return sum + price * quantity;
  }, 0);

  const discount = Math.min(10, itemTotal);
  const subtotal = itemTotal - discount;

  const handlingFee = 9.0;
  const deliveryPartnerFee = 0;

  const GST_PERCENTAGE = 5; // GST in %
  const gst = (subtotal + handlingFee + deliveryPartnerFee) * (GST_PERCENTAGE / 100);

  const finalAmount = Math.max(0, subtotal + handlingFee + deliveryPartnerFee + gst);

  const handlePlaceOrder = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6}
    });
    toast.success('Order placed successfully');
  }

  return (
    <>
      <Card>
        <h3>Bill Summary</h3>

        <Row>
          <Label>Total</Label>
          <OldPrice>Rs {itemTotal.toFixed(2)}</OldPrice>
        </Row>

        <Row>
          <Label>Discount</Label>
          <span style={{ color: "#009e60" }}>- Rs {discount.toFixed(2)}</span>
        </Row>

        <Row>
          <Label>Handling Fee</Label>
          <span>Rs {handlingFee.toFixed(2)}</span>
        </Row>

        <Row>
          <Label><strong>Delivery Partner Fee</strong></Label>
          <FeeFree>FREE</FeeFree>
        </Row>

        <Row>
          <Label>GST ({GST_PERCENTAGE}%)</Label>
          <span>Rs {gst.toFixed(2)}</span>
        </Row>

        <Total>
          <span>To Pay</span>
          <span>Rs {finalAmount.toFixed(2)}</span>
        </Total>
      </Card>

      <Card>
        <RedNote>
          NOTE: Orders cannot be cancelled and are non-refundable once packed.
        </RedNote>
        <PayBtn onClick={handlePlaceOrder}>Place Order</PayBtn>
      </Card>
    </>
  );
};


export default BillDetails;