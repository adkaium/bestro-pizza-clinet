import { useForm } from "react-hook-form";
import TextHeading from "../../../Components/TextHeading/TextHeading";



const AddItems = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {


        console.log(data);
    };
    return (
      <div>
        <TextHeading heading="Add Items" subHeding="what'a new?"></TextHeading>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Recipe Name</span>
              </div>
              <input
                {...register("name",{ required: true,}) }
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>

            <div className="flex">
              {/* category */}
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Category</span>
                </div>
                <select
                    {...register("category",{ required: true})}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </label>

              {/* price */}
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">price</span>
                </div>
                <input
                  {...register("price",{ required: true,})}
                  type="number"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            {/* recipe details */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details</span>
              </div>
              <textarea
                 {...register('recipe',{ required: true,})}
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </label>
            <div className="form-control w-full ">
              <input {...register('image',{ required: true,})} type="file" className="file-input w-full max-w-xs" />
            </div>
            <input
              className="btn"
              type="submit"
              value='Add Item'
            />
          </form>
        </div>
      </div>
    );
};

export default AddItems;