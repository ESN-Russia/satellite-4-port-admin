import React from "react";
import styled from "styled-components";

const EsnFooter = () => (
  <FooterWrapper>
    <UpperFooter>
      <span
        style={{
          display: "inline-block",
          fontSize: 14,
          paddingTop: 15,
          paddingBottom: 10,
          color: "white",
          fontWeight: "bold",
        }}
      >
        ABOUT US
      </span>
      <p style={{ width: 320, textAlign: "left" }}>
        Erasmus Student Network (ESN) is a non-profit international student organisation. Our
        mission is to represent international students, thus provide opportunities for cultural
        understanding and self-development under the principle of Students Helping Students.
      </p>
    </UpperFooter>
    <LowerFooter>
      <img
        style={{ height: 30, marginRight: 15 }}
        src="https://satellite.esn.org/profiles/iss/themes/esnbase/img/itcom_logo.png"
        alt=""
      />
      <span style={{ flex: 1, padding: 5 }}>
        This site is made by the IT committee of ESN International
      </span>
      <div>
        Gracefully ported by{" "}
        <a style={{ color: "#999" }} href="//fb.me/4ndr35oko1/">
          andresokol
        </a>{" "}
        to React
      </div>
    </LowerFooter>
  </FooterWrapper>
);

const FooterWrapper = styled.div`
  width: 100%;
  background-color: #333;
  color: #666;
`;

const UpperFooter = styled.div`
  margin: 0 auto;
  width: 960px;
  max-width: 100vw;

  color: #bbb;
  padding: 10px;

  font-size: 13px;
  line-height: 18px;
`;

const LowerFooter = styled.div`
  margin: 0 auto;
  width: 960px;
  max-width: 100vw;
  padding: 10px;

  font-size: 12px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default EsnFooter;
