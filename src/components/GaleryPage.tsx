import React from "react";
import { Layout, Card, Row, Col } from "antd";
import Header from "./Header.tsx";

const { Content } = Layout;

const videos = [
  { title: "Video 1", description: "Description for video 1" },
  { title: "Video 2", description: "Description for video 2" },
  { title: "Video 3", description: "Description for video 3" },
];

const GalleryPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <Row gutter={16}>
          {videos.map((video, index) => (
            <Col span={8} key={index}>
              <Card title={video.title} bordered={false}>
                {video.description}
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default GalleryPage;
