import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Business from "./../../Assets/photoes/Business.png";
import lovehome from "../../Assets/photoes/home.png";
import beauty from "../../Assets/photoes/Outline.png";
import dress from "../../Assets/photoes/faprics.png";
import packiging from "../../Assets/photoes/packaging.png";
import car from "../../Assets/photoes/car.png";
import eloctronic from "../../Assets/photoes/electronic.png";
import backphone from "../../Assets/photoes/unsplash_v8XaVfyo41Q.png";
import frontphone from "../../Assets/photoes/image 1.png";
import Productsection from "../../Components/productsection/productsection";
import lampa from "../../Assets/photoes/lampa.png";
import unsplash from "../../Assets/photoes/unsplash.png";
import poard from "../../Assets/photoes/poard.png";
import squer from "../../Assets/photoes/squer.png";
import protect from "../../Assets/photoes/protected.png";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../apis/products/product";

export default function HomePage() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState([])

  useEffect(() => {
    getAllProducts().then(data => {
      setProducts(data.data.products)
    })
    .catch(err=> setError(err))
  }, [])
  
  return (
    <>
      <div className={styles.firstpart}>
        <div className="container">
          <div className={styles.text}>
            <div className={styles.textttt}>
              <h1 className="bold text-white ">
                Best Way to Dropship <br /> your products
              </h1>
              <p className={styles.paragragh}>
                The leading e-commerce platform <br /> specialized in drop
                shipping for global trade
              </p>

              <Link to={"/Explore"}>
                <span> Explore Now </span>
              </Link>
            </div>
            <div className={styles.cover}>
              <div className={styles.imgcontainer}></div>

              <img src={unsplash} className={styles.unsplashimg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.secondtpart}>
        <div className={`container`}>
          <h2 className="bold">
            Explore millions of offers tailored to your company's needs
          </h2>
          <div className={styles.categoreis}>
            <div className={styles.item}>
              <div className={styles.inneritem}>
                <img src={Business} alt="" className=" mt-4" />
                <span>Business Services</span>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.inneritem}>
                <img src={lovehome} alt="" className=" mt-4" />
                <span>Business Services</span>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.inneritem}>
                <img src={beauty} alt="" className=" mt-4" />
                <span>Business Services</span>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.inneritem}>
                <img src={dress} alt="" className=" mt-4" />
                <span>Business Services</span>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.inneritem}>
                <img src={packiging} alt="" className=" mt-4" />
                <span>Business Services</span>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.inneritem}>
                <img src={car} alt="" className=" mt-4" />
                <span>Business Services</span>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.inneritem}>
                <img src={eloctronic} alt="" className=" mt-4" />
                <span>Business Services</span>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.inneritem}>
                <img src={eloctronic} alt="" className=" mt-4" />
                <span>Business Services</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////end/////////////////////////////////// */}

      {/* /////////////////////////////////start//////////////////////////////////////// */}

      <div className={styles.thirdpart}>
        <div className="container">
          <div className={styles.text2}>
            <div className={styles.innertext2}>
              <h2>Enhanse Your Game Experience</h2>
              <p>Best Experience With Most famous games you can find now !</p>
              <span> Explore Now </span>
            </div>

            <div className={styles.imgs}>
              <div className={styles.imageContainer}>
                <img className={styles.innerimgephone} src={backphone} alt="" />
                <img
                  className={styles.innerimgephone2}
                  src={frontphone}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ////////////////////////////////////end//////////////////////////////////////////// */}

      <Productsection products={products} title={"Best Seller"}></Productsection>
      <Productsection products={products} title={"On Sale"} small></Productsection>

      <Productsection products={products} title={"NEW Arrived"} small></Productsection>

      <div className={styles.infosection}>
        <div className={styles.carts}>
          <div className={styles.cart}>
            <img src={lampa} alt="" />
            <h2>Millions of business offers</h2>
            <p>
              Explore products and suppliers for your company from millions of
              offers around the world
            </p>
          </div>

          <div className={styles.cart}>
            <img src={protect} alt="" />
            <h2>Quality protected by guarantee</h2>
            <p>
              Explore products and suppliers for your company from millions of
              offers around the world
            </p>
          </div>

          <div className={styles.cart}>
            <img src={squer} alt="" />
            <h2>One-stop trading solutions</h2>
            <p>
              Explore products and suppliers for your company from millions of
              offers around the world
            </p>
          </div>
          <div className={styles.cart}>
            <img src={poard} alt="" />
            <h2>A trading experience designed just for you</h2>
            <p>
              Explore products and suppliers for your company from millions of
              offers around the world
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
