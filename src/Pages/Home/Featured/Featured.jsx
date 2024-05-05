import TextHeading from "../../../Components/TextHeading/TextHeading";
import featurdeIm from "../../../assets/home/featured.jpg";
import './Featured.css';
const Featured = () => {
  return (
    <div className="bg-featurde bg-fixed text-black pt-8 my-10">
      <TextHeading
        subHeding="Cheak It Out"
        heading="Featured Items"
      ></TextHeading>
      <div className="md:flex justify-center items-center px-36 pb-20 pt-12 ">
        <div className="mt-5">
          <img src={featurdeIm} alt="" />
        </div>
        <div className="md:ml-10">
          <h6>Jul, 01 2024</h6>
          <p className="uppercase">where can i get some?</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            necessitatibus mollitia inventore dolore quos provident itaque vitae
            quisquam dolores facilis cumque laudantium voluptatum libero
            possimus numquam accusantium, quas neque dolorem? Est sapiente
            numquam nam blanditiis sit tempora sunt illum similique, natus
            veniam porro at facilis quisquam pariatur soluta ullam rem.
          </p>
          <button className="btn btn-outline border-0 border-b-2">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
