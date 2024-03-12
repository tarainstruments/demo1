import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header/header";
import Footer from "./footer/footer";
import List from "./list";
import Post from "./post";
import Page from "./pages/page";
import HomePage from "./pages/homepage";
import Jobs from "./pages/jobs";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import BootstrapCss from "./styles/bootstrap.css";
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <html lang="en" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/wp-content/uploads/fbrfg/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/wp-content/uploads/fbrfg/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/wp-content/uploads/fbrfg/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/wp-content/uploads/fbrfg/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="/wp-content/uploads/fbrfg/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link
          rel="shortcut icon"
          href="/wp-content/uploads/fbrfg/favicon.ico"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/wp-content/uploads/fbrfg/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(BootstrapCss)} />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Global styles={globalStyles} />

      {/* <h1 align="center">Some header example</h1> */}
      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <HomePage when={data.isHome} />
          {/* <Jobs when={data.link === "/careers/"} /> */}
          <Page when={data.isPage} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  :root {
    --brand: #5b3be8;
    --black: #000000;
    --white: #ffffff;
    --bodycolor: #343434;
  }
  body {
    margin: 0;
    color: var(--bodycolor);
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-feature-settings: "kern";
    -webkit-font-smoothing: antialiased;
    min-height: -webkit-fill-available;
  }
  html {
    height: -webkit-fill-available;
  }
  ,
  a,
  a:visited {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--black);
  }
  p {
    line-height: 24px;
    font-size: 18px;
  }
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
  }
  .section {
    padding: 34px 0;
    @media (min-width: 992px) {
      padding: 50px 0;
    }
  }

  // make sure all these classes/elements are on top of the particle background
  input,
  textarea,
  iframe,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .wp-block-image,
  .wp-block-button,
  .about-services,
  .home-services {
    z-index: 1;
    position: relative;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 2.75rem;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 6.25rem;
`;
const FooterContainer = styled.div`
  width: 100%;
  background: var(--brand);

  // make sure the footer is always on top of the particle background
  z-index: 1;
  position: relative;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;

  #particles-js {
    width: 100%;
    position: fixed;
    display: block;
    background-size: cover;
    top: 10rem;
    left: 10rem;
    z-index: 0;
  }
`;
