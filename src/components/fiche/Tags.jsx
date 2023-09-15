function Tags(props) {
  console.log(props.tags);
  const TheTags = props.tags;
  console.log(TheTags);

  return (
    <div className="fiche-tags">
      {TheTags.map((element) => (
        <span key={element}>{element}</span>
      ))}
    </div>
  );
}

export default Tags;
