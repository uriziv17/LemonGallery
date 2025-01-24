import React from "react";
import { Layout, Row, Col } from "antd";
import Header from "./Header.tsx";
import styled from "styled-components";
import VideoCard from "./VideoCard.tsx";

const { Content, Footer } = Layout;

const vids = [
  {
    title: "Beyonce in Momi",
    url: "https://www.facebook.com/uriziv/videos/691561982766293?idorvanity=1295658943976869",
  },
  {
    title: "and his sister tooooooo",
    url: "https://www.facebook.com/uriziv/videos/1089759409039155?idorvanity=1295658943976869",
  },
  {
    title: "kushiot.mp4",
    url: "https://www.facebook.com/uriziv/videos/1380447526127553?idorvanity=1295658943976869",
  },
];

const GalleryPage: React.FC = () => {
  return (
    <Layout>
      <FixedHeader />
      <Content style={{ padding: "0 50px", margin: 32 }}>
        <Row gutter={16}>
          {vids.map((video, index) => (
            <Col span={8} key={index}>
              <VideoCard title={video.title} url={video.url} />
            </Col>
          ))}
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        🍋 Lemons Gallery © {new Date().getFullYear()} made by Uri Ziv (יימח
        שמו)
      </Footer>
    </Layout>
  );
};

export default GalleryPage;

const FixedHeader = styled(Header)`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
`;
