import {Helmet} from "react-helmet-async";
import Cover from "../../Shard/Cover/Cover";
import useMenu from "../../hooks/useMenu";
import TextHeading from "../../Components/TextHeading/TextHeading";
import MenuCategory from "../MenuCategory/MenuCategory";

// cover image
import bgImg from "../../assets/menu/banner3.jpg";
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'

const Menu = () => {
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");

  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bestro Boss/Menu</title>
      </Helmet>
      <Cover
        img={bgImg}
        title="Our Menu"
        subPara="Our Menu is very delicus and very interasting"
      ></Cover>
      <section>
        <TextHeading
          subHeding="don't miss"
          heading="Today's Offer"
        ></TextHeading>
        <MenuCategory item={offered}></MenuCategory>

        {/* dessets  */}
        <MenuCategory item={dessert} coverImg={dessertImg} title={'desserts'}></MenuCategory>

        {/* pizza  */}
        <MenuCategory item={pizza} coverImg={pizzaImg} title={'pizza'}></MenuCategory>

        {/* soup */}
        <MenuCategory item={soup} coverImg={soupImg} title={'soup'}></MenuCategory>

        {/* salad */}
        <MenuCategory item={salad} coverImg={saladImg} title={'salad'}></MenuCategory>
      </section>
    </div>
  );
};

export default Menu;
