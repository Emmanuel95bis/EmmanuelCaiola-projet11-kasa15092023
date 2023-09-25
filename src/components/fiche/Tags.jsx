function Tags(props) {
  const TheTags = props.tags;

  return (
    <div className="fiche-tags">
      {TheTags.map((element) => (
        <span key={element}>{element}</span>
      ))}
    </div>
  );
}

export default Tags;
