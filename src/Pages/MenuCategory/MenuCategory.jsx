import { Link } from "react-router-dom";
import Cover from "../../Shard/Cover/Cover";
import PopularItem from "../../Shard/PopularItem/PopularItem";


const MenuCategory = ({item, title, coverImg}) => {
    console.log(item);
    return (
      <div className="pt-15">
        {title && (
          <Cover
            img={coverImg}
            title={title}
            subPara="Our Menu is very delicus and very interasting"
          ></Cover>
        )}
        <div className="grid md:grid-cols-2 gap-5 mb-5 mt-20">
          {item.map((item) => (
            <PopularItem key={item._id} item={item}></PopularItem>
          ))}
        </div>
        <div className="mb-10 text-center">
          <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-2">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    );
};

export default MenuCategory;