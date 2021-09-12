/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";

import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

const data = [
  {
    id: 1,
    icon: <FaHtml5 size={50} />,
    altText: "Fast Performance",
    title: "HTML5",
  },
  {
    id: 2,
    icon: <FaCss3 size={50} />,
    altText: "Partnership deal",
    title: "CSS3",
  },
  {
    id: 3,
    icon: <FaReact size={50} />,
    altText: "Pro Subscription",
    title: "ReactJS",
  },
  {
    id: 4,
    icon: <SiRedux size={50} />,
    altText: "Customer Support",
    title: "React Redux",
  },
];

export default function Skillset() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="skillSet">
      <Container>
        <SectionHeader
          slogan="Skills Set"
          title="See the capability of Darren"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              icon={item.icon}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
