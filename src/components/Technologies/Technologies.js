import React from "react";
import { DiReact } from "react-icons/di";
import { GrNode } from "react-icons/gr";
import { SiKubernetes } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have been working with <b style={{ color: "#fff" }}>Javascript</b> and{" "}
      <b style={{ color: "#fff" }}>Typescript</b> in web development. from
      Backend to Deploy
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GrNode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Nodejs, Express.js, Nestjs, Sql and NoSql
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiKubernetes size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            Experience with <br />
            Docker, Kubernetes, CI/CD
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
