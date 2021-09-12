/** @jsx jsx */
import { Flex } from "@theme-ui/components";
import { jsx, Image, Box, Heading, Text } from "theme-ui";

export default function FeatureCardColumn({
  icon,
  altText = "default alt text",
  title,
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.icon}>{icon}</Box>

      <Heading sx={styles.wrapper.title}>{title}</Heading>
    </Box>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: "1.9",
    },
  },
};
