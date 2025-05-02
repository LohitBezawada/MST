import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const Contact= () => {
  // const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 18,
        }}
        layout="horizontal"
        style={{
          maxWidth: 900,
        }}
      >
      
        
        <h1>for any queries contact us 
          <li>gmail: srkrfundraisers@gmail.com</li>
          <li>phno: 1234567890</li></h1>


        <Form.Item label="First name">
          <Input />
        </Form.Item>
        <Form.Item label="Last name">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="Amount Rs/-">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Issue">
          <Radio.Group>
            <Radio value="health"> health issue </Radio>
            <Radio value="money"> money issue</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Upload proofs" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload 
              </div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item >
        <button type="submit" className="btn btn-primary">submit</button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Contact