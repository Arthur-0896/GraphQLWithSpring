import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

const OrderLineDetails = ({ orderLines }) => {
  const [selectedOrderLine, setSelectedOrderLine] = useState(null);

  if (!orderLines || orderLines.length === 0) return <p>No order lines found.</p>;

  return (
    <div>
      <h5>Order Lines</h5>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Order Line ID</th>
            <th>Quantity</th>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          {orderLines.map((line) => (
            <tr 
              key={line.orderLineId}
              onClick={() => setSelectedOrderLine(selectedOrderLine === line.orderLineId ? null : line.orderLineId)}
              style={{ cursor: 'pointer', backgroundColor: selectedOrderLine === line.orderLineId ? '#e6e6e6' : 'inherit' }}
            >
              <td>{line.orderLineId}</td>
              <td>{line.quantity}</td>
              <td>{line.product.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {selectedOrderLine && (
        <div className="mt-3">
          <h6>Product Details</h6>
          {orderLines.find(l => l.orderLineId === selectedOrderLine)?.product && (
            <Table striped bordered hover size="sm">
              <tbody>
                <tr><td>Name</td><td>{orderLines.find(l => l.orderLineId === selectedOrderLine).product.name}</td></tr>
                <tr><td>Price</td><td>${orderLines.find(l => l.orderLineId === selectedOrderLine).product.price}</td></tr>
                <tr><td>Variety</td><td>{orderLines.find(l => l.orderLineId === selectedOrderLine).product.variety}</td></tr>
                <tr><td>Status</td><td>{orderLines.find(l => l.orderLineId === selectedOrderLine).product.status}</td></tr>
              </tbody>
            </Table>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderLineDetails;
