import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const sections = [
  { title: 'Who we are', url: '#' },
  { title: 'What we offer', url: '#' },
  { title: 'How we invest', url: '#' },
  { title: 'How we advocate', url: '#' },
  { title: 'What we think', url: '#' },
  { title: 'Conact Us', url: '#' },
];

const mainFeaturedPost = {
  title: 'The Vanguard investment story: A long-term focus. Discipline. Strong results.',
  description:
    "Vanguard is mission-driven to ensure that every product and service we offer can contribute to our clients’ investment success.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Vanguard us different from other asset management firms',
    date: 'April 22',
    description:
      'Vanguard is not owned by shareholders. It is owned by the people who invest in our funds.As an owner you have access to personalized financial advice, high-quality investments, retirement tools, and relevant market insights that help you build a future for those you love. ',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Vanguard joins Global Parity Alliance',
    date: 'March 02',
    description:
      'Vanguard was recently announced as a founding member, and the sole asset management company presence, of the Global Parity Alliance, a group dedicated to advancing DEI across multiple industries.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Vanguard is a respected investment management companies, offering a broad selection of investments, advice, retirement services, and insights to individual investors, institutions, and financial professionals. We operate under a unique, investor-owned structure* and adhere to a simple purpose: To take a stand for all investors, to treat them fairly, and to give them the best chance for investment success. Shareholders in Vanguard funds benefit from our client focus, experience, stability, and long-term, disciplined investment approach.',
  archives: [
    { title: 'March 2022', url: '#' },
    { title: 'February 2022', url: '#' },
    { title: 'January 2022', url: '#' },
    { title: 'November 2021', url: '#' },
    { title: 'October 2021', url: '#' },
    { title: 'September 2021', url: '#' },
    { title: 'August 2021', url: '#' },
    { title: 'July 2021', url: '#' },
    { title: 'June 2021', url: '#' },
    { title: 'May 2021', url: '#' },
    { title: 'April 2021', url: '#' },
  ],
  social: [
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="ABOUT US" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Vanguard at a glance: Facts and figures" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Vanguard"
        description="Vanguard is the trusted name in investing. Since our founding in 1975, we’ve put investors first."
      />
    </ThemeProvider>
  );
}