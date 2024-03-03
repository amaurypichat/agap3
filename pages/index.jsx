import Head from "next/head";
// import { isMobile } from "react-device-detect";
import dynamic from "next/dynamic";
import React, { useEffect, Suspense } from "react";

import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);
// import { useMediaQuery } from "react-responsive";
// import Header from "@/components/header2";
const Screen4 = React.lazy(() => import("./../components/Screen4_bis"));
const Screen6 = React.lazy(() => import("./../components/Screen6"));
const Screen7 = React.lazy(() => import("./../components/Screen7"));
const Screen8 = React.lazy(() => import("./../components/Screen8"));
const Screen9 = React.lazy(() => import("./../components/Screen9"));
import Screen1 from "./../components/Screen1";
// import Screen4 from "./../components/Screen4_bis";
import Screen5 from "./../components/Screen5";
// import Screen6 from "./../components/Screen6";
// import Screen7 from "./../components/Screen7";
// import Screen8 from "./../components/Screen8";
const ScrollToTopFab = React.lazy(() => import("./../components/scrollToTop"));
// import ScrollToTopFab from "../components/scrollToTop";
const RightScrollMenu = React.lazy(() =>
  import("./../components/ScrollMenuSansimage")
);
// import RightScrollMenu from "../components/RightScrollmenu";
// import RightScrollMenu from "../components/ScrollMenuSansimage";
// import Formulaire from "../components/sendemail";
const Formulaire = React.lazy(() => import("./../components/sendemail"));

function Home() {
  let cursorWidth = "40";
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  useEffect(() => {
    // alert(window.innerHeight)
    // alert(window.innerHeight)//648
    // alert(window.innerWidth)//360
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#screen4",
          start: "top top+=50%", // which means "when the top of the trigger hits 40px above the bottom of the viewport
          end: "bottom bottom+=50%",
          // markers: true,
          toggleActions: "play none none reset",
        },
      });

      let tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: "#screen6",
          start: "top top+=50%", // which means "when the top of the trigger hits 40px above the bottom of the viewport
          end: "bottom bottom+=50%",
          // markers: true,
          toggleActions: "play none none reset",
        },
      });

      // let tl2 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: "#container_move5",
      //     start: "top top+=50%", // which means "when the top of the trigger hits 40px above the bottom of the viewport
      //     end: "bottom bottom",
      //     // markers: true,
      //     toggleActions: "play none none reset",
      //   },
      // });

      // tl.to(".pathnav", {
      //   stroke: "#ffcd00",
      //   ease: "none",
      //   // backgroundColor: "#ffcd00",
      // });

      // tl2.to(".pathnav", {
      //   stroke: "#fff",
      //   ease: "none",
      //   // backgroundColor: "#fff",
      // });
    });

    // let circleToHover = null || document.querySelector(".circleToHover");

    // let ctx = gsap.context((self) => {
    //   // use any arbitrary string as a name; it'll be added to the Context object, so in this case you can call ctx.onClick() later...
    //   self.add("onClick", (e) => {
    //     gsap.to(".circleToHover", { borderColor: "pink" }); // <-- gets added to the Context!
    //   });
    // }, root);

    // circleToHover.addEventListener("click", (e) => ctx.onClick(e));

    const setX = gsap.quickTo("#mousemove", "x", {
      duration: 0.5,
      ease: "power2",
    });

    const setY = gsap.quickTo("#mousemove", "y", {
      duration: 0.5,
      ease: "power2",
    });

    document.addEventListener("pointermove", (e) => {
      setX(e.clientX - cursorWidth / 2);
      setY(e.clientY - cursorWidth / 2);
    });

    return () => ctx.revert();
  }, [cursorWidth]);

  // const activeProject = useRef(0);
  // const [_isMobile, setMobile] = useState(false);

  // useEffect(() => {
  //   setMobile(isMobile);
  // }, [setMobile]);

  // useEffect(() => {
  // setMobile(isMobile);
  // }, [setMobile]);

  // console.log("mobile", _isMobile);

  return (
    <>
      <Head>
        <title>Portfolio A.PICHAT</title>
      </Head>

      <>
        <div
          id="mousemove"
          style={{
            backgroundColor: "transparent",
            width: cursorWidth + "px",
            height: cursorWidth + "px",
            position: "fixed",
            top: "0",
            left: "0",
            pointerEvents: "none",
            borderRadius: "999px",
            backgroundColor: "rgba(100,100,100,0.3)",
            zIndex: "1000",
          }}
        ></div>
        <Screen1 />
        <Suspense>
          <Screen4 />
          <Screen7 />
          <Screen8 />
          <Screen9 />
          <Screen6 />
        </Suspense>
        <RightScrollMenu />
        <Formulaire />
      </>
    </>
  );
}

function SuspenseHome() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </>
  );
}

// import "./Loading.css";
const Loading = () => {
  return (
    <div id="loader-container">
      <svg
        id="loader"
        width="285"
        height="59"
        viewBox="0 0 285 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="path-1-outside-1_1_6"
          maskUnits="userSpaceOnUse"
          x="0.636353"
          y="0.818176"
          width="284"
          height="58"
          fill="black"
        >
          <rect
            fill="white"
            x="0.636353"
            y="0.818176"
            width="284"
            height="58"
          />
          <path d="M5.63635 53V6.45454H11.2727V48H32.9091V53H5.63635Z" />
          <path d="M79.0966 29.7273C79.0966 34.6364 78.2102 38.8788 76.4375 42.4545C74.6648 46.0303 72.2329 48.7879 69.142 50.7273C66.0511 52.6667 62.5208 53.6364 58.5511 53.6364C54.5814 53.6364 51.0511 52.6667 47.9602 50.7273C44.8693 48.7879 42.4375 46.0303 40.6648 42.4545C38.892 38.8788 38.0057 34.6364 38.0057 29.7273C38.0057 24.8182 38.892 20.5758 40.6648 17C42.4375 13.4242 44.8693 10.6667 47.9602 8.72727C51.0511 6.78787 54.5814 5.81818 58.5511 5.81818C62.5208 5.81818 66.0511 6.78787 69.142 8.72727C72.2329 10.6667 74.6648 13.4242 76.4375 17C78.2102 20.5758 79.0966 24.8182 79.0966 29.7273ZM73.642 29.7273C73.642 25.697 72.9678 22.2955 71.6193 19.5227C70.286 16.75 68.4754 14.6515 66.1875 13.2273C63.9148 11.803 61.3693 11.0909 58.5511 11.0909C55.7329 11.0909 53.1799 11.803 50.892 13.2273C48.6193 14.6515 46.8087 16.75 45.4602 19.5227C44.1269 22.2955 43.4602 25.697 43.4602 29.7273C43.4602 33.7576 44.1269 37.1591 45.4602 39.9318C46.8087 42.7045 48.6193 44.803 50.892 46.2273C53.1799 47.6515 55.7329 48.3636 58.5511 48.3636C61.3693 48.3636 63.9148 47.6515 66.1875 46.2273C68.4754 44.803 70.286 42.7045 71.6193 39.9318C72.9678 37.1591 73.642 33.7576 73.642 29.7273Z" />
          <path d="M88.2954 53H82.3864L99.4773 6.45454H105.295L122.386 53H116.477L102.568 13.8182H102.205L88.2954 53ZM90.4773 34.8182H114.295V39.8182H90.4773V34.8182Z" />
          <path d="M144 53H129.636V6.45454H144.636C149.152 6.45454 153.015 7.38636 156.227 9.25C159.439 11.0985 161.901 13.7576 163.614 17.2273C165.326 20.6818 166.182 24.8182 166.182 29.6364C166.182 34.4848 165.318 38.6591 163.591 42.1591C161.864 45.6439 159.348 48.3258 156.045 50.2045C152.742 52.0682 148.727 53 144 53ZM135.273 48H143.636C147.485 48 150.674 47.2576 153.205 45.7727C155.735 44.2879 157.621 42.1742 158.864 39.4318C160.106 36.6894 160.727 33.4242 160.727 29.6364C160.727 25.8788 160.114 22.6439 158.886 19.9318C157.659 17.2045 155.826 15.1136 153.386 13.6591C150.947 12.1894 147.909 11.4545 144.273 11.4545H135.273V48Z" />
          <path d="M181.273 6.45454V53H175.636V6.45454H181.273Z" />
          <path d="M229.483 6.45454V53H224.028L198.665 16.4545H198.21V53H192.574V6.45454H198.028L223.483 43.0909H223.937V6.45454H229.483Z" />
          <path d="M272.58 21C272.08 19.4697 271.42 18.0985 270.602 16.8864C269.799 15.6591 268.837 14.6136 267.716 13.75C266.61 12.8864 265.352 12.2273 263.943 11.7727C262.534 11.3182 260.989 11.0909 259.307 11.0909C256.549 11.0909 254.042 11.803 251.784 13.2273C249.526 14.6515 247.731 16.75 246.398 19.5227C245.064 22.2955 244.398 25.697 244.398 29.7273C244.398 33.7576 245.072 37.1591 246.42 39.9318C247.769 42.7045 249.595 44.803 251.898 46.2273C254.201 47.6515 256.792 48.3636 259.67 48.3636C262.337 48.3636 264.686 47.7955 266.716 46.6591C268.761 45.5076 270.352 43.8864 271.489 41.7955C272.64 39.6894 273.216 37.2121 273.216 34.3636L274.943 34.7273H260.943V29.7273H278.67V34.7273C278.67 38.5606 277.852 41.8939 276.216 44.7273C274.595 47.5606 272.352 49.7576 269.489 51.3182C266.64 52.8636 263.367 53.6364 259.67 53.6364C255.549 53.6364 251.928 52.6667 248.807 50.7273C245.701 48.7879 243.276 46.0303 241.534 42.4545C239.807 38.8788 238.943 34.6364 238.943 29.7273C238.943 26.0454 239.436 22.7348 240.42 19.7954C241.42 16.8409 242.83 14.3258 244.648 12.25C246.466 10.1742 248.617 8.58333 251.102 7.47727C253.587 6.37121 256.322 5.81818 259.307 5.81818C261.761 5.81818 264.049 6.18939 266.17 6.93181C268.307 7.65908 270.208 8.69696 271.875 10.0454C273.557 11.3788 274.958 12.9773 276.08 14.8409C277.201 16.6894 277.973 18.7424 278.398 21H272.58Z" />
        </mask>
        <path
          d="M5.63635 53V6.45454H11.2727V48H32.9091V53H5.63635Z"
          stroke="rgb(78, 201, 176)"
          strokeWidth="10"
          mask="url(#path-1-outside-1_1_6)"
        />
        <path
          d="M79.0966 29.7273C79.0966 34.6364 78.2102 38.8788 76.4375 42.4545C74.6648 46.0303 72.2329 48.7879 69.142 50.7273C66.0511 52.6667 62.5208 53.6364 58.5511 53.6364C54.5814 53.6364 51.0511 52.6667 47.9602 50.7273C44.8693 48.7879 42.4375 46.0303 40.6648 42.4545C38.892 38.8788 38.0057 34.6364 38.0057 29.7273C38.0057 24.8182 38.892 20.5758 40.6648 17C42.4375 13.4242 44.8693 10.6667 47.9602 8.72727C51.0511 6.78787 54.5814 5.81818 58.5511 5.81818C62.5208 5.81818 66.0511 6.78787 69.142 8.72727C72.2329 10.6667 74.6648 13.4242 76.4375 17C78.2102 20.5758 79.0966 24.8182 79.0966 29.7273ZM73.642 29.7273C73.642 25.697 72.9678 22.2955 71.6193 19.5227C70.286 16.75 68.4754 14.6515 66.1875 13.2273C63.9148 11.803 61.3693 11.0909 58.5511 11.0909C55.7329 11.0909 53.1799 11.803 50.892 13.2273C48.6193 14.6515 46.8087 16.75 45.4602 19.5227C44.1269 22.2955 43.4602 25.697 43.4602 29.7273C43.4602 33.7576 44.1269 37.1591 45.4602 39.9318C46.8087 42.7045 48.6193 44.803 50.892 46.2273C53.1799 47.6515 55.7329 48.3636 58.5511 48.3636C61.3693 48.3636 63.9148 47.6515 66.1875 46.2273C68.4754 44.803 70.286 42.7045 71.6193 39.9318C72.9678 37.1591 73.642 33.7576 73.642 29.7273Z"
          stroke="rgb(78, 201, 176)"
          strokeWidth="10"
          mask="url(#path-1-outside-1_1_6)"
        />
        <path
          d="M88.2954 53H82.3864L99.4773 6.45454H105.295L122.386 53H116.477L102.568 13.8182H102.205L88.2954 53ZM90.4773 34.8182H114.295V39.8182H90.4773V34.8182Z"
          stroke="rgb(78, 201, 176)"
          strokeWidth="10"
          mask="url(#path-1-outside-1_1_6)"
        />
        <path
          d="M144 53H129.636V6.45454H144.636C149.152 6.45454 153.015 7.38636 156.227 9.25C159.439 11.0985 161.901 13.7576 163.614 17.2273C165.326 20.6818 166.182 24.8182 166.182 29.6364C166.182 34.4848 165.318 38.6591 163.591 42.1591C161.864 45.6439 159.348 48.3258 156.045 50.2045C152.742 52.0682 148.727 53 144 53ZM135.273 48H143.636C147.485 48 150.674 47.2576 153.205 45.7727C155.735 44.2879 157.621 42.1742 158.864 39.4318C160.106 36.6894 160.727 33.4242 160.727 29.6364C160.727 25.8788 160.114 22.6439 158.886 19.9318C157.659 17.2045 155.826 15.1136 153.386 13.6591C150.947 12.1894 147.909 11.4545 144.273 11.4545H135.273V48Z"
          stroke="rgb(78, 201, 176)"
          strokeWidth="10"
          mask="url(#path-1-outside-1_1_6)"
        />
        <path
          d="M181.273 6.45454V53H175.636V6.45454H181.273Z"
          stroke="rgb(78, 201, 176)"
          strokeWidth="10"
          mask="url(#path-1-outside-1_1_6)"
        />
        <path
          d="M229.483 6.45454V53H224.028L198.665 16.4545H198.21V53H192.574V6.45454H198.028L223.483 43.0909H223.937V6.45454H229.483Z"
          stroke="rgb(78, 201, 176)"
          strokeWidth="10"
          mask="url(#path-1-outside-1_1_6)"
        />
        <path
          d="M272.58 21C272.08 19.4697 271.42 18.0985 270.602 16.8864C269.799 15.6591 268.837 14.6136 267.716 13.75C266.61 12.8864 265.352 12.2273 263.943 11.7727C262.534 11.3182 260.989 11.0909 259.307 11.0909C256.549 11.0909 254.042 11.803 251.784 13.2273C249.526 14.6515 247.731 16.75 246.398 19.5227C245.064 22.2955 244.398 25.697 244.398 29.7273C244.398 33.7576 245.072 37.1591 246.42 39.9318C247.769 42.7045 249.595 44.803 251.898 46.2273C254.201 47.6515 256.792 48.3636 259.67 48.3636C262.337 48.3636 264.686 47.7955 266.716 46.6591C268.761 45.5076 270.352 43.8864 271.489 41.7955C272.64 39.6894 273.216 37.2121 273.216 34.3636L274.943 34.7273H260.943V29.7273H278.67V34.7273C278.67 38.5606 277.852 41.8939 276.216 44.7273C274.595 47.5606 272.352 49.7576 269.489 51.3182C266.64 52.8636 263.367 53.6364 259.67 53.6364C255.549 53.6364 251.928 52.6667 248.807 50.7273C245.701 48.7879 243.276 46.0303 241.534 42.4545C239.807 38.8788 238.943 34.6364 238.943 29.7273C238.943 26.0454 239.436 22.7348 240.42 19.7954C241.42 16.8409 242.83 14.3258 244.648 12.25C246.466 10.1742 248.617 8.58333 251.102 7.47727C253.587 6.37121 256.322 5.81818 259.307 5.81818C261.761 5.81818 264.049 6.18939 266.17 6.93181C268.307 7.65908 270.208 8.69696 271.875 10.0454C273.557 11.3788 274.958 12.9773 276.08 14.8409C277.201 16.6894 277.973 18.7424 278.398 21H272.58Z"
          stroke="rgb(78, 201, 176)"
          strokeWidth="10"
          mask="url(#path-1-outside-1_1_6)"
        />
      </svg>
    </div>
  );
};
// export default Loading;

export default dynamic(() => Promise.resolve(SuspenseHome), {
  ssr: true,
});
