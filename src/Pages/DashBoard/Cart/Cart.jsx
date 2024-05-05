import { FaTrashAlt } from "react-icons/fa";
import useCarts from "../../../hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Cart = () => {
    const [cart,refetch] = useCarts()
    const totalPrice = cart.reduce((total,item)=>total + item.price,0);
    const axiosSecure = useAxiosSecure()

    const handelDeleted = id =>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            
            axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success",
                    });
                }
            })
          }
        });
    }
    return (
      <div>
        <div className="flex justify-evenly bg-orange-700">
          <h2 className="text-3xl">Items:{cart.length}</h2>
          <h2 className="text-3xl">Total Price: ${totalPrice}</h2>
          <button className="btn btn-black">Pay</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>
                    {index +1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td>${item.price}</td>
                  <th>
                    <button 
                    onClick={()=>handelDeleted(item._id)}
                    className="btn btn-ghost btn-ls">
                        <FaTrashAlt className="text-red-700"></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Cart;