import React, { FC } from "react";

interface Props {
  name: string;
}

const FileComponent: FC<Props> = ({ name }) => <p>• {name}</p>;

export default FileComponent;
