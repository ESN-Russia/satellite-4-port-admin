import React from "react";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";

import { Container, Segment } from "semantic-ui-react";

import Page404 from "./Page404";
import mdRenderers from "../../mdRenderers";

const Page = ({ data }) => {
  const content = data ? (
    <ReactMarkdown source={data} escapeHtml={false} renderers={mdRenderers} />
  ) : (
    <Page404 />
  );

  return (
    <Segment vertical padded="very">
      <Container text>{content}</Container>
    </Segment>
  );
};

const mapStateToProps = ({ pages }, ownProps) => ({
  data: pages[ownProps.location.pathname],
});

export default connect(mapStateToProps)(Page);
