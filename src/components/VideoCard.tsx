import { Card, Typography } from "antd";
import React from "react";
import ReactPlayer from "react-player";

interface VideoCardProps {
  url: string;
  title: string;
}

export default function VideoCard(props: VideoCardProps) {
  const { url, title } = props;

  return (
    <Card>
      <ReactPlayer url={url} width="100%" height="100%" />
      <Typography.Text>{title}</Typography.Text>
    </Card>
  );
}
