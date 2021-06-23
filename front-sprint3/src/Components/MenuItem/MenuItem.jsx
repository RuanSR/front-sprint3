
const MenuItem = ({itemLabel, itemLink}) => {
  return (
    <a className="menu__link" href={itemLink}>
      <span>{itemLabel}</span>
    </a>
  );
};

export default MenuItem;
