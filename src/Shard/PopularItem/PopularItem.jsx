

const PopularItem = ({item}) => {
  const {name,price,image,recipe} = item;
  return (
    <div className="flex space-x-5">
      <img
        src={image}
        alt=""
        className="h-13 rounded-s-full"
        style={{borderRadius: " 0px 200px 200px 200px"}}
      />
      <div>
        <h3>Name:{name}----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-red-400">${price}</p>
    </div>
  );
};

export default PopularItem;