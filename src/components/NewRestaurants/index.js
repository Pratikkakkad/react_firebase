import React, { Component } from "react";
import { database } from "../../firebase";
import { Button, Input, Form, Row, Col } from "antd";

export default class NewRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.restaurantsRef = database.ref("/restaurants");
  }

  onFinish = values => {
    console.log("Success:", values);
    this.restaurantsRef.push({ name: values.restaurant });

  };

  onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div>
        <Row>
          <Col span={8}>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                label="Restaurant Name"
                name="restaurant"
                rules={[
                  { required: true, message: "Please input your Restaurant Name!" }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
