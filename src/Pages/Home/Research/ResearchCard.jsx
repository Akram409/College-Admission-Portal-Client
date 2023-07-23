const ResearchCard = ({ card }) => {
  const { collegeName, RP_title, RP_link } = card;
  return (
    <div className="card bg-base-100 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title text-4xl font-bold">{collegeName}</h2>
        <p className="font-bold text-xl">Research title: {RP_title}</p>
        <p className="font-bold text-xl ">Link: <a href={RP_link}><span className="link link-primary">here</span></a></p>
      </div>
    </div>
  );
};

export default ResearchCard;
