import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Table,
  Card,
  Row,
  Col,
  Collapse,
  Button,
  Modal,
} from "react-bootstrap";

// Use your Render backend URL here
const axiosInstance = axios.create({
  baseURL: "https://springboot-app-latest-dhn8.onrender.com/graphql",
  headers: { "Content-Type": "application/json" },
});

const DropdownHierarchy = () => {
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderLines, setOrderLines] = useState([]);
  const [products, setProducts] = useState([]);

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedOrderLine, setSelectedOrderLine] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [openCustomer, setOpenCustomer] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  const [openOrderLine, setOpenOrderLine] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);

  const [showQueryModal, setShowQueryModal] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");

  // Fetch customers on load
  useEffect(() => {
    const fetchCustomers = async () => {
      const query = `
        query {
          customers {
            id
            firstName
            lastName
            email
            phone
          }
        }
      `;
      setCurrentQuery(query);
      try {
        const res = await axiosInstance.post("", { query });
        setCustomers(res.data.data.customers);
      } catch (err) {
        console.error("Fetch customers error:", err);
      }
    };
    fetchCustomers();
  }, []);

  // Fetch orders when customer is selected
  useEffect(() => {
    if (!selectedCustomer) return;
    const query = `
      query {
        customerById(id: ${selectedCustomer.id}) {
          orders {
            orderId
            salesPerson { firstName lastName }
          }
        }
      }
    `;
    setCurrentQuery(query);

    const fetchOrders = async () => {
      try {
        const res = await axiosInstance.post("", { query });
        setOrders(res.data.data.customerById.orders);
        setOrderLines([]);
        setProducts([]);
        setSelectedOrder(null);
        setSelectedOrderLine(null);
        setSelectedProduct(null);
        setOpenCustomer(true);
        setOpenOrder(false);
        setOpenOrderLine(false);
        setOpenProduct(false);
      } catch (err) {
        console.error("Fetch orders error:", err);
      }
    };
    fetchOrders();
  }, [selectedCustomer]);

  // Fetch order lines when order is selected
  useEffect(() => {
    if (!selectedOrder || !selectedCustomer) return;
    const query = `
      query {
        customerById(id: ${selectedCustomer.id}) {
          orders {
            orderId
            orderLines {
              orderLineId
              quantity
              product {
                productId
                name
                price
                variety
                status
              }
            }
          }
        }
      }
    `;
    setCurrentQuery(query);

    const fetchOrderLines = async () => {
      try {
        const res = await axiosInstance.post("", { query });
        const orderData = res.data.data.customerById.orders.find(
          (o) => o.orderId === selectedOrder.orderId
        );
        setOrderLines(orderData?.orderLines || []);
        setProducts([]);
        setSelectedOrderLine(null);
        setSelectedProduct(null);
        setOpenOrder(true);
        setOpenOrderLine(false);
        setOpenProduct(false);
      } catch (err) {
        console.error("Fetch order lines error:", err);
      }
    };
    fetchOrderLines();
  }, [selectedOrder, selectedCustomer]);

  // Set product when order line is selected
  useEffect(() => {
    if (!selectedOrderLine) return;
    setProducts(selectedOrderLine.product ? [selectedOrderLine.product] : []);
    setSelectedProduct(selectedOrderLine.product || null);
    setOpenOrderLine(true);
    setOpenProduct(false);
  }, [selectedOrderLine]);

  useEffect(() => {
    if (selectedProduct) setOpenProduct(true);
  }, [selectedProduct]);

  return (
    <Container className="mt-4">
      {/* Customer Dropdown */}
      <Row>
        <Col md={6}>
          <Card bg="primary" text="light" className="mb-3 border-primary">
            <Card.Header>Select Customer</Card.Header>
            <Card.Body>
              <Form.Select
                onChange={(e) => {
                  const customer = customers.find(
                    (c) => String(c.id) === e.target.value
                  );
                  setSelectedCustomer(customer);
                }}
              >
                <option value="">-- Choose Customer --</option>
                {customers.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.firstName} {c.lastName}
                  </option>
                ))}
              </Form.Select>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Customer Info */}
      <Collapse in={openCustomer}>
        <div>
          {selectedCustomer && (
            <Card bg="success" text="light" className="mb-3 border-success">
              <Card.Header className="d-flex justify-content-between align-items-center">
                Customer Info
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => setOpenCustomer(!openCustomer)}
                >
                  {openCustomer ? "Hide" : "Show"}
                </Button>
              </Card.Header>
              <Card.Body>
                <Table striped bordered hover variant="light">
                  <tbody>
                    <tr>
                      <td>ID</td>
                      <td>{selectedCustomer.id}</td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>
                        {selectedCustomer.firstName} {selectedCustomer.lastName}
                      </td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{selectedCustomer.email}</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>{selectedCustomer.phone}</td>
                    </tr>
                  </tbody>
                </Table>

                <Form.Select
                  onChange={(e) => {
                    const order = orders.find((o) => o.orderId === e.target.value);
                    setSelectedOrder(order);
                  }}
                >
                  <option value="">-- Choose Order --</option>
                  {orders.map((o) => (
                    <option key={o.orderId} value={o.orderId}>
                      {o.orderId}
                    </option>
                  ))}
                </Form.Select>
              </Card.Body>
            </Card>
          )}
        </div>
      </Collapse>

      {/* Order Info */}
      <Collapse in={openOrder}>
        <div>
          {selectedOrder && (
            <Card bg="warning" text="light" className="mb-3 border-warning">
              <Card.Header className="d-flex justify-content-between align-items-center">
                Order Info
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => setOpenOrder(!openOrder)}
                >
                  {openOrder ? "Hide" : "Show"}
                </Button>
              </Card.Header>
              <Card.Body>
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Salesperson</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{selectedOrder.orderId}</td>
                      <td>
                        {selectedOrder.salesPerson.firstName}{" "}
                        {selectedOrder.salesPerson.lastName}
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <Form.Select
                  onChange={(e) => {
                    const ol = orderLines.find(
                      (ol) => String(ol.orderLineId) === e.target.value
                    );
                    setSelectedOrderLine(ol);
                  }}
                >
                  <option value="">-- Choose Order Line --</option>
                  {orderLines.map((ol) => (
                    <option key={ol.orderLineId} value={ol.orderLineId}>
                      {ol.orderLineId}
                    </option>
                  ))}
                </Form.Select>
              </Card.Body>
            </Card>
          )}
        </div>
      </Collapse>

      {/* Order Line Info */}
      <Collapse in={openOrderLine}>
        <div>
          {selectedOrderLine && (
            <Card bg="info" text="light" className="mb-3 border-info">
              <Card.Header className="d-flex justify-content-between align-items-center">
                Order Line Info
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => setOpenOrderLine(!openOrderLine)}
                >
                  {openOrderLine ? "Hide" : "Show"}
                </Button>
              </Card.Header>
              <Card.Body>
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>Order Line ID</th>
                      <th>Quantity</th>
                      <th>Product Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{selectedOrderLine.orderLineId}</td>
                      <td>{selectedOrderLine.quantity}</td>
                      <td>{selectedOrderLine.product?.name}</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          )}
        </div>
      </Collapse>

      {/* Product Info */}
      <Collapse in={openProduct}>
        <div>
          {selectedProduct && (
            <Card bg="danger" text="light" className="mb-3 border-danger">
              <Card.Header className="d-flex justify-content-between align-items-center">
                Product Info
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => setOpenProduct(!openProduct)}
                >
                  {openProduct ? "Hide" : "Show"}
                </Button>
              </Card.Header>
              <Card.Body>
                <Table striped bordered hover variant="light">
                  <tbody>
                    <tr>
                      <td>Product ID</td>
                      <td>{selectedProduct.productId}</td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>{selectedProduct.name}</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>${selectedProduct.price}</td>
                    </tr>
                    <tr>
                      <td>Variety</td>
                      <td>{selectedProduct.variety}</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>{selectedProduct.status}</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          )}
        </div>
      </Collapse>

      {/* Query Modal */}
      <Modal show={showQueryModal} onHide={() => setShowQueryModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Current GraphQL Query</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <pre>{currentQuery}</pre>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowQueryModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Button
        variant="outline-dark"
        onClick={() => setShowQueryModal(true)}
        className="mb-3"
      >
        Show Current Query
      </Button>
    </Container>
  );
};

export default DropdownHierarchy;
