import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 20, text: "Open Source Projects" },
  { number: 1000, text: "Students" },
  { number: 1900, text: "Github Followers" },
  { number: 5000, text: "Github Stars" },
];

const Acomplishments = () => {
  const [data, setData] = useState([]);
  const [stars, setStars] = useState(0);
  const getData = async () => {
    const result = await (
      await axios.get("https://api.github.com/users/mfortunat0")
    ).data;
    setData(result);
    setStars(
      await (
        await axios.get(
          `https://api.github.com/users/mfortunat0/repos?per_page=${result.public_repos}`
        )
      ).data.reduce((acc, repo) => {
        if (repo.stargazers_count > 0) {
          return repo.stargazers_count + acc;
        }
        return acc;
      }, 0)
    );
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Section>
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
        <Box>
          <BoxNum>{data.public_repos}</BoxNum>
          <BoxText>Open Source Projects</BoxText>
        </Box>
        <Box>
          <BoxNum>{data.followers}</BoxNum>
          <BoxText>Github Followers</BoxText>
        </Box>
        <Box>
          <BoxNum>{stars}</BoxNum>
          <BoxText>Github Stars</BoxText>
        </Box>
      </Boxes>
      <SectionDivider />
    </Section>
  );
};

export default Acomplishments;
