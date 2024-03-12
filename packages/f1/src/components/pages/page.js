import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import List from "../list";
import Particles from "react-tsparticles";

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

const Page = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const page = state.source[data.type][data.id];

  const isJobs = state.router.link === "/careers/";
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <ArticleContainer>
      <ConditionalWrapper
        condition={isJobs}
        wrapper={(children) => <JobsBackground>{children}</JobsBackground>}
      >
        <Particles
          id="particles-js"
          url="https://cdn.statically.io/gh/rishi255/cdn/1.7/particles_ts.json"
          init={console.log("Initialising particles in page.")}
          loaded={console.log("Particles loaded in page.")}
        />
        <div className="post-title">
          <Title dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
        </div>

        {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
        <Content>
          {/* <JobContent> */}
          <Html2React html={page.content.rendered} />
          {/* </JobContent> */}
        </Content>
      </ConditionalWrapper>
    </ArticleContainer>
  ) : null;
};

export default connect(Page);

const JobsBackground = styled.div`
  background: url("https://tarainstruments.com/wp-content/uploads/2021/07/careers_background.png");
  background-size: cover;
  @media only screen and (min-width: 781px) and (max-width: 991.98px) {
    background: none;
  }
`;

const ArticleContainer = styled.div`
  width: 100%;
  .post-title {
    text-align: center;
  }
`;

const Title = styled.h1`
  margin-bottom: 3.2rem;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  word-break: break-word;

  * {
    max-width: 1035px;
    width: 100%;
    margin: 0 auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1.8rem;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    // width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: 0 auto;
  }

  blockquote {
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }
  .wp-block-button,
  .wp-block-code,
  .wp-block-preformatted {
    width: auto;
    margin-bottom: 2rem;
  }
  .wp-block-button__link {
    color: var(--white);
  }
  .wp-block-embed {
    max-width: 100%;
    position: relative;
    width: 100%;
    margin: 1.5rem auto;
    .wp-block-embed__wrapper {
      &::before {
        content: "";
        display: block;
        padding-top: 56.25%;
      }
    }
    iframe {
      max-width: 100%;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: 0;
    }
  }
  @media (max-width: 992px) {
  }
  .wp-block-columns {
    padding-left: 15px;
    padding-right: 15px;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    width: 100%;
    height: 3rem;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: var(--white);
    background-color: var(--brand);
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
  /**Contact Block**/
  .contact-block {
    background: #f8f8fa;
    padding-top: 34px;
    padding-bottom: 34px;
    max-width: 100%;
    @media (min-width: 992px) {
      padding-top: 75px;
      padding-bottom: 75px;
    }
    .wp-block-group__inner-container {
      max-width: 1035px;
      margin: 0 auto;
      .wp-block-columns {
        .wp-block-column.contact-details {
          margin-bottom: 2rem;
          .contact-maps {
            position: relative;
            display: block;
            width: 100%;
            height: 257px;
            padding: 0;
            overflow: hidden;
            margin-bottom: 2rem;
            iframe {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 257px;
              border: 0;
            }
          }
          h4 {
            margin-bottom: 1.2rem;
          }
        }
        .wp-block-column.contact-form {
          @media (min-width: 992px) {
            padding-left: 2rem;
          }
          .wpcf7 {
            padding-top: 15px;
            padding-bottom: 15px;
            .wpcf7-form {
              label {
                display: block;
              }
            }
          }
        }
      }
    }
  }
  /**Custom style for pages**/
  /**About Block**/
  .about-highlight {
    // padding-bottom: 2rem;
    .wp-block-group__inner-container {
      max-width: 900px;
      p {
        margin-bottom: 1.5rem;
        text-align: justify;
        padding-right: 15px;
        padding-left: 15px;
      }
      li {
        text-align: justify;
        margin-bottom: 1rem;
        font-size: 110%;
      }

      .wp-block-columns.our-journey {
        img {
          transform: scale(0.72);
        }
      }
      .wp-block-columns.our-team {
        img {
          transform: scale(0.7);
        }
      }
    }
  }
  .about-services {
    background: #f8f8fa;
    // padding-top: 34px;
    // padding-bottom: 34px;
    padding: 1.5rem;
    max-width: 100%;
    @media (min-width: 992px) {
      padding-top: 75px;
      padding-bottom: 75px;
    }
    .wp-block-group__inner-container {
      .about-services-grid {
        .wp-block-image {
          width: 62px !important;
          height: 62px;
          margin: 0 auto;
        }

        .social-media-icon {
          width: 80px !important;
          height: 80px;
        }
        .wp-block-column {
          padding-top: 15px;
          padding-bottom: 15px;
        }
        h5 {
          margin-bottom: 1rem;
          margin-top: 1rem;
        }
        p {
          position: relative;
          text-align: center;
        }
      }
    }
  }
  .about-team {
    padding-top: 34px;
    padding-bottom: 34px;
    @media (min-width: 992px) {
      padding-top: 75px;
      padding-bottom: 75px;
    }
    .home-team-heading {
      .wp-block-group__inner-container {
        max-width: 539px;
        margin: 0 auto;
        margin-bottom: 3rem;
      }
    }
    .wp-block-group__inner-container {
      .wp-block-columns {
        .wp-block-column {
          margin-bottom: 1.5rem;
          p {
            margin-bottom: 0rem;
          }
        }
      }
    }
  }
  .about-vision {
    padding-top: 34px;
    padding-bottom: 34px;
    background: #f8f8fa;
    max-width: 100%;
    @media (min-width: 992px) {
      padding-top: 75px;
      padding-bottom: 75px;
    }
    .about-vision-heading {
      .wp-block-group__inner-container {
        max-width: 539px;
        margin: 0 auto;
        margin-bottom: 3rem;
      }
    }
    .about-vision-grid {
      .wp-block-column {
        margin-bottom: 1.5rem;
        h5 {
          margin-bottom: 1.2rem;
        }
      }
    }
  }
  .about-services-two {
    padding-top: 34px;
    padding-bottom: 34px;
    @media (min-width: 992px) {
      padding-top: 75px;
      padding-bottom: 75px;
    }
    .wp-block-group__inner-container {
      .wp-block-columns {
        .wp-block-column {
          ul {
            padding-left: 0;
            margin-top: 2rem;
            li {
              list-style-type: none;
              position: relative;
              padding-left: 3rem;
              margin-bottom: 1rem;
              &:before {
                content: "➤";
                position: absolute;
                background-color: var(--brand);
                border-radius: 50%;
                left: 0;
                top: 5px;
                width: 30px;
                height: 30px;
                text-align: center;
                color: var(--white);
                padding-top: 2.5px;
              }
            }
          }
        }
      }
    }
  }
  /**Services Page **/
  .services-highlight {
    padding-bottom: 2rem;
    .wp-block-group__inner-container {
      max-width: 571px;
    }
  }
  .hero-services {
    max-width: 100%;
    padding-top: 34px;
    padding-bottom: 34px;
    @media (min-width: 992px) {
      padding-top: 75px;
      padding-bottom: 75px;
    }
    .wp-block-columns {
      max-width: 100%;
      .wp-block-column {
        margin-bottom: 2rem;
        max-width: 100%;
      }
      align-items: center;
      .wp-block-button {
        width: auto;
        .wp-block-button__link {
          background: var(--brand);
          border: 1px solid transparent;
          border-color: var(--brand);
          box-shadow: 0px 2px 5px 0px rgb(0 0 0 / 0.4);
          transition: all 0.3s ease;
          margin-right: 0.5rem;
          text-decoration: non;
          &:hover {
            color: var(--black);
            background: transparent;
          }
        }
      }
      .wp-block-button.is-style-outline {
        .wp-block-button__link {
          background: transparent;
          border-color: var(--brand);
          color: var(--brand);
          &:hover {
            color: var(--black);
          }
        }
      }
    }
  }
  .home-services-img-left {
    background: #f8f8fa;
  }

  /* Added by me for use in the jobs page. */
  .hero-homepage {
    padding-bottom: 34px;
    @media (min-width: 992px) {
      padding-bottom: 50px;
    }
    .wp-block-columns {
      .wp-block-column {
        margin-bottom: 2rem;

        .wp-block-image {
          margin: auto auto;
          max-width: 465px;
        }
      }
      align-items: center;
      .wp-block-button {
        .wp-block-button__link {
          background: var(--brand);
          border: 1px solid transparent;
          border-color: var(--brand);
          box-shadow: 0px 2px 5px 0px rgb(0 0 0 / 0.4);
          transition: all 0.3s ease;
          margin-right: 0.5rem;
          &:hover {
            color: var(--black);
            background: transparent;
          }
        }
      }
      .wp-block-button.is-style-outline {
        .wp-block-button__link {
          background: transparent;
          border-color: var(--brand);
          color: var(--brand);
          &:hover {
            color: var(--black);
          }
        }
      }
    }
  }
`;
