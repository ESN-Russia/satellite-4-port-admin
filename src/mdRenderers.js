import React from "react";
import { Header, Image } from "semantic-ui-react";

export default {
  heading: props => <Header as={`h${props.level}`} {...props} />,
  image: props => <Image {...props} />,
};
