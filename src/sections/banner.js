/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import BannerImg from "assets/banner-thumb.png";
import ShapeLeft from "assets/shape-left.png";
import Himalaya from "assets/himalaya.jpg";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            First there's a mountain <br />
            Then there's no mountain <br />
            Then there is
          </Heading>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,

    content: '""',
    bottom: 6,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: -1,
    backgroundImage: `url(${Himalaya})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: "cover",

    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100vh",
    },
    contentBox: {
      marginTop: "15rem",
      width: ["100%", "100%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, null, 8],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};
