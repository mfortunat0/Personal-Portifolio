import React from "react";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
