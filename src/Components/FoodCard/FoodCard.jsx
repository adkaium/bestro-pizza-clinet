import {useContext} from "react";
import {AuthContext} from "../../provider/AuthProvider";
import {useLocation, useNavigate} from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";

const FoodCard = ({item}) => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [,refetch] = useCarts();
  const {name, image, recipe, _id, price} = item;

  const handleAddToCart = (food) => {
    console.log(food);
    if (user && user.email) {
      //send to data to database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          alert("Cart Added Successfully");
        }
        refetch()
      });
    } else {
      confirm("Please Logged In");
      navigate("/login", {state: {from: location}});
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={ handleAddToCart}
            className="btn btn-primary"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
