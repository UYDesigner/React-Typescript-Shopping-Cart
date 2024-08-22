import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../src/components/StoreItem";
export default function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} sm={1} lg={3} className="g-5 d-flex mt-4 align-items-center justify-content-center">
        {storeItems.map((item, index) => (
          <Col key={index}><StoreItem {...item} /></Col>
        ))}
      </Row>
    </>
  );
}
