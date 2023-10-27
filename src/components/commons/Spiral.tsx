import React from "react";
import { Space, Spin } from "antd";

const Spiral: React.FC<{ size: "small" | "default" | "large" }> = ({
  size,
}) => (
  <Space
    direction="vertical"
    className="flex flex-col items-center justify-center px-5 py-5"
  >
    <Space>
      {size === "small" && (
        <Spin size="small">
          <div className="content" />
        </Spin>
      )}
      {size === "default" && (
        <Spin>
          <div className="content" />
        </Spin>
      )}
      {size === "large" && (
        <Spin size="large">
          <div className="content" />
        </Spin>
      )}
    </Space>
  </Space>
);

export default Spiral;
