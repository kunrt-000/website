const Release = ({ title, genre, year, type, id }) => {
  let coverSizes = require(`../public/music/images/${id}.jpg?resize&sizes[]=500&sizes[]=1000&sizes[]=2000&sizes[]=3000`);

  return (
    <div className="release">
      <div className="cover">
        <img
          srcSet={coverSizes}
          src={coverSizes.src}
          alt={`${title} Cover Art`}
        />
      </div>
      <div className="details">
        <div className="title">{title}</div>
        <div className="info">
          <span className="year">{year}</span>
          <span className="separator">·</span>
          <span className="type">{type}</span>
        </div>
        <div className="genre">{genre}</div>
      </div>
    </div>
  );
};

export default Release;
