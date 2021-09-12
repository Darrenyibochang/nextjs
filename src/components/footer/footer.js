/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from "theme-ui";
import { GrStar, GrGithub, GrLinkedin } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "components/link";
import data from "./footer.data";

const socialMediaIcon = [
  { icon: <GrGithub size={30} />, URL: "https://github.com/Darrenyibochang" },
  {
    icon: <GrLinkedin size={30} />,
    URL: "https://www.linkedin.com/in/yibo-chang-b2655a86/",
  },
  { icon: <FaFacebookF size={30} />, URL: "https://google.com" },
];

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Box sx={styles.footer.footerBottomArea}>
        <div sx={styles.footer.titleContainer}>
          <div sx={styles.footer.joke}>
            There are only 10 types of people in this world, those who
            understand binary and those who dont
          </div>
          <h1></h1>
          <ul>
            {socialMediaIcon.map((icon) => (
              <a href={icon.URL} sx={styles.footer.icons}>
                {icon.icon}
              </a>
            ))}
          </ul>
        </div>

        <h6 sx={styles.footer.copyright}>
          Copyright by Darren Yibo Chang 2021
        </h6>
      </Box>
    </footer>
  );
}

const styles = {
  footer: {
    h1: {
      display: "flex",
      alignItems: "center",
      fontSize: "36px",
      color: "white",
      marginLeft: "125px",
    },
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [7, null, 8],
      pb: ["40px", null, "100px"],
      textAlign: "center",
      flexDirection: "column",

      background: "#102F52",
    },
    star: { color: "#2F93DA" },
    icons: {
      color: "white",
      margin: "5px",
    },
    joke: {
      color: "pink",
    },
    titleContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid white",
      width: "85%",
      margin: "auto",
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
      color: "white",
    },
  },
};
