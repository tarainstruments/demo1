import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

// simplest form (only email)

const Footer = ({ state }) => {
  // const options = state.source.get("acf-options-page");
  return (
    <Container>
      <div className="row">
        <div className="col-12 col-lg-6 footer-widget widget-one">
          <h4 className="widget-title">Office Address</h4>
          <p>
            No. 312, Notus IT Park, Bhailal Amin Marg.
            <br />
            Near Genda Circle,
            <br />
            Vadodara – 390007,
            <br />
            Gujarat, India.
            <br />
            <br />
            <b>Contact:</b> ‎+91 74860 47646
            <br />
            <br />
            <b>Email:</b> info@tarainstruments.com
          </p>
        </div>
        <div className="col-12 col-md-4 col-lg-2 footer-widget widget-two">
          <h4 className="widget-title">Quick Links</h4>
          <ul className="widget-list">
            {state.theme.menu.map(([name, link]) => {
              return (
                <li key={link}>
                  <Link className="widget-list-link" link={link}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-12 col-md-4 col-lg-2 footer-widget widget-four">
          <h4 className="widget-title">Connect</h4>
          <ul className="widget-list">
            {state.theme.socialLinks.map(([name, link]) => {
              return (
                <li key={link}>
                  <Link
                    className="widget-list-link"
                    target="_blank"
                    rel="nofollow noopener"
                    link={link}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Container = styled.footer`   
  max-width:1200px;
  margin: 0 auto;
  padding-top:4rem;
  padding-bottom:4rem;
  padding-right: 15px;
  padding-left: 15px;
  color:var(--white);
  .footer-widget {
    margin-bottom:1rem;
    .widget-title {
      color:var(--white);
      margin-bottom:1.2rem;
    }
    p {
      font-size:1rem;
    }
    .widget-list {
      list-style:none;
      padding-left:0;
      li {
        margin-bottom:0.5rem;
        .widget-list-link {
          text-decoration:none;
          transition: all 0.3s ease;
          color:var(--white);
          &:hover {
            color:var(--black);
          }
        }
      }
    }
  }
  .widget-one {
    p {
      @media (min-width: 992px) {
        padding-right:8rem;
      }
    }
  }
}
`;
