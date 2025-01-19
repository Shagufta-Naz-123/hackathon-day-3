

import Categories from "./Components/Categories";
import CompanyLogo from "./Components/companyLogo";

import Hero from "./Components/Hero";
import HotProduct from "./Components/hotProducts";
import OurProduct from "./Components/OurProduct";






export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />
      

      <Categories />
      <HotProduct />
      <OurProduct />
    </>
  );
}