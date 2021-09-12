import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import SkillSet from "../sections/skillSet";

import About from "../sections/about";
import TimeLine from "../sections/timeLine";

import Projects from "../sections/projects";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Darren's Portfolio" />
        <Banner />

        <About />
        <SkillSet />
        <TimeLine />

        <Projects />
      </Layout>
    </ThemeProvider>
  );
}
