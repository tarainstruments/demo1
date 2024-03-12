import React from "react";
import { Global, css, connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import capitalise from "../helpers";
import { Carousel } from "react-responsive-carousel";
import carouselCss from "react-responsive-carousel/lib/styles/carousel.min.css";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const isPrincipal = data.type === "principals";
  const isNews = data.type === "news";
  let title = "Products";
  if (isPrincipal) {
    title = "Principals";
  }
  if (isNews) {
    title = "News";
  }

  return (
    <Container>
      {/* Render a title. */}
      <Header>{title}</Header>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.isCategory && "Principal"}:{" "}
          <b>{capitalise(decode(state.source[data.taxonomy][data.id].name))}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}

      {/* Removed the full AwsmJobs thing as we're not using it anymore */}
      {/* Is either Principals or Products page (NOT news)*/}
      {!isNews && (
        <CardGrid>
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            return (
              <Item key={item.id} item={item} isPrincipals={isPrincipal} />
            );
          })}
        </CardGrid>
      )}

      {isNews && (
        <NewsCarousel>
          <Global styles={css(carouselCss)} />
          <Carousel
            emulateTouch
            infiniteLoop
            useKeyboardArrows
            showThumbs={false}
          >
            {data.items.map(({ type, id }) => {
              const item = state.source[type][id];
              return (
                // <a href={item.link} style={{ color: "unset" }}>
                <Item key={item.id} item={item} isNews />
                // </a>
              );
            })}
          </Carousel>
        </NewsCarousel>
      )}

      <Pagination />
    </Container>
  );
};

export default connect(List);

const NewsCarousel = styled.div`
  .carousel.carousel-slider {
    margin-bottom: 2rem;
  }
  .carousel .control-dots .dot {
    background: var(--brand);
  }
  .carousel.carousel-slider .control-arrow:hover {
    background: transparent;
  }
  .carousel {
    .control-prev.control-arrow:before {
      border-right: 8px solid black;
    }
    .control-next.control-arrow:before {
      border-left: 8px solid black;
    }
  }
  img {
    max-height: 300px;
  }
`;

const Container = styled.section`
  width: 1200px;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  list-style: none;
`;

const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-columns: minmax(300px, 1fr);
  grid-row-gap: 0.5em;
  grid-column-gap: 1em;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;
