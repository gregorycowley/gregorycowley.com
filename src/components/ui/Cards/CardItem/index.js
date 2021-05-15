

const CardItem = (props) => {
  const { hero_image, title, subtitle, description } = props;
  const link = `/${props.category}`;
  const style = "home";

  return (
    <Card
      style={style}
      hero_image={hero_image}
      link={link}
      title={title}
      subtitle={subtitle}
      description=""
    />
  );
};

export default CardItem;
