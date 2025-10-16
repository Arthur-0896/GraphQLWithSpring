import React from 'react';
import Table from 'react-bootstrap/Table';
import OrderLineDetails from './OrderLineDetails';

const OrderDetails = ({ orders, onOrderSelect, selectedOrderId }) => {
  if (!orders || orders.length === 0) return <p>No orders found.</p>;

  return (
    <div>
      <h4>Customer Orders</h4>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Sales Person</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr 
              key={order.orderId}
              onClick={() => onOrderSelect(order.orderId)}
              style={{ cursor: 'pointer', backgroundColor: selectedOrderId === order.orderId ? '#e6e6e6' : 'inherit' }}
            >
              <td>{order.orderId}</td>
              <td>{`${order.salesPerson.firstName} ${order.salesPerson.lastName}`}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {selectedOrderId && <OrderLineDetails orderLines={orders.find(o => o.orderId === selectedOrderId)?.orderLines || []} />}
    </div>
  );
};

export default OrderDetails;
