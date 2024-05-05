
import TextHeading from "../../../Components/TextHeading/TextHeading";
import PopularItem from "../../../Shard/PopularItem/PopularItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item=>item.category === 'popular')
    return (
      <>
        <section>
          <TextHeading
            heading="FROM OUR MENU"
            subHeding="Poupuler items"
          ></TextHeading>
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {popular.map((item) => (
              <PopularItem key={item._id} item={item}></PopularItem>
            ))}
          </div>
        </section>
      </>
    );
};

export default PopularMenu;