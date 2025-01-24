import { Card, Typography } from "antd";
import ReactPlayer from "react-player";

interface VideoCardProps {
	url: string;
	title: string;
	isPlaying: boolean;
	onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = (props: VideoCardProps) => {
	const { url, title, isPlaying, onClick } = props;

	return (
		<Card>
			<ReactPlayer url={url} playing={isPlaying} width="100%" height="100%" />
			<Typography.Text>{title}</Typography.Text>
		</Card>
	);
};

export default VideoCard;
