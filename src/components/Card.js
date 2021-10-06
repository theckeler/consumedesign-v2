const Card = ({ portfolioItem }) => {
  return (
    <li>
      <h2>{portfolioItem.title}</h2>
      <span dangerouslySetInnerHTML={{ __html: portfolioItem.content }} />
    </li>
  );
};

export default Card;
