import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data:users=[], refetch} = useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    const handelMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is an Admin Now `,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
     const handelDeleted = user => {
       Swal.fire({
         title: "Are you sure?",
         text: "You won't be delete this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
       }).then((result) => {
         if (result.isConfirmed) {
           axiosSecure.delete(`/users/${user._id}`).then((res) => {
             if (res.data.deletedCount > 0) {
               refetch();
               Swal.fire({
                 title: "Deleted!",
                 text: "Your file has been deleted.",
                 icon: "success",
               });
             }
           });
         }
       });
     };
    return (
      <div>
        <div className="flex justify-evenly">
          <h1 className="text-3xl">All Users{users.length}</h1>
          <h1 className="text-3xl">Total Users</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                {/* <th>Image</th> */}
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  {/* <td>
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
                  </td> */}
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <th>
                    {user.role === "admin" ? (
                      "admin"
                    ) : (
                      <button
                        onClick={() => handelMakeAdmin(user)}
                        className="btn btn-ls bg-gray-700"
                      >
                        <FaUsers className="text-2xl text-black"></FaUsers>
                      </button>
                    )}
                  </th>
                  <th>
                    <button
                      onClick={() => handelDeleted(user)}
                      className="btn btn-ghost btn-ls"
                    >
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

export default AllUsers;