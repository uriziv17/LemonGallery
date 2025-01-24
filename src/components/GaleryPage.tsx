import React from "react";
import { Layout, Row, Col } from "antd";
import Header from "./Header.tsx";
import styled from "styled-components";
import VideoCard from "./VideoCard.tsx";
import { useGetVideos } from "../hooks/useGetVideos.ts";

const { Content, Footer } = Layout;

const GalleryPage: React.FC = () => {
	const { vids } = useGetVideos();
	const [currentVideo, setCurrentVideo] = React.useState<string | null>(null);

	const handleVideoCardClick = (url: string) => {
		setCurrentVideo(currentVideo === url ? null : url);
	};

	return (
		<Layout>
			<FixedHeader />
			<Content style={{ padding: "0 50px", margin: 32 }}>
				<Row gutter={16}>
					{vids.map((video, index) => (
						<Col span={8} key={index}>
							<VideoCard
								title={video.title}
								url={video.url}
								isPlaying={currentVideo === video.url}
								onClick={() => handleVideoCardClick(video.url)}
							/>
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
