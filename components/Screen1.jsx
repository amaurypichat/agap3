import React, { useRef, useEffect, useState, Suspense } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);
import Image from "next/image";
function VSCode() {
  useEffect(() => {
    let elements = Array.prototype.slice.call(
      document.getElementById("code_contain").children
    );

    elements.forEach((element, i) => {
      if (i > 6) {
        gsap.to(element, 0, {
          x: 100 * Math.cos(-Math.PI / 2) + "vh",
          y: 100 * Math.sin(Math.PI / 2) + "vw",
          ease: "none",
          // visibility:"none"
        });
      }
    });

    elements.forEach((element, i) => {
      if (i == 2 || i == 12) {
        var rect = element.getBoundingClientRect();
        var tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
        tl.to(element, 10 + 2 * Math.random(), {
          motionPath: {
            path: [
              // { x: "0vh", y: "0vh" },
              { x: "-40vw", y: "10vh" },
              { x: "-10vw", y: "70vh" },
              { x: "0vh", y: "0vw" },
            ], // you probably want more points here...or just use an SVG <path>!
          },
          ease: "none",
        });
      }

      if (i == 3 || i == 6 || i == 13) {
        var rect = element.getBoundingClientRect();
        var tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
        tl.to(element, 10 + 2 * Math.random(), {
          motionPath: {
            path: [
              // { x: "0vh", y: "0vh" },
              { x: "-10vw", y: "30vh" },
              { x: "-10vw", y: "70vh" },
              { x: "0vh", y: "0vw" },
            ], // you probably want more points here...or just use an SVG <path>!
          },
          ease: "none",
        });
      }

      if (i == 4 || i == 8 || i == 1 || i == 14) {
        var rect = element.getBoundingClientRect();
        var tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
        tl.to(element, 15 + 4 * Math.random(), {
          motionPath: {
            path: [
              // { x: "0vh", y: "0vh" },
              { x: "10vw", y: "30vh" },
              { x: "-10vw", y: "10vh" },
              { x: "-10vw", y: "-20vh" },
              { x: "0vh", y: "0vw" },
            ], // you probably want more points here...or just use an SVG <path>!
          },
          ease: "none",
          // clearProps: 'all'
        });
      }

      if (i == 9 || i == 7) {
        var rect = element.getBoundingClientRect();
        var tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
        tl.to(element, 30 + 4 * Math.random(), {
          motionPath: {
            path: [
              // { x: "0vh", y: "0vh" },
              { x: "10vw", y: "10vh" },
              { x: "0vw", y: "10vh" },
              { x: "-50vw", y: "20vh" },
              { x: "-50vw", y: "-10vh" },
              { x: "0vh", y: "0vw" },
            ], // you probably want more points here...or just use an SVG <path>!
          },
          ease: "none",
          // clearProps: 'all'
        });
      }

      if (i == 5 || i == 10 || i == 16) {
        var rect = element.getBoundingClientRect();
        var tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
        tl.to(element, 15 + 4 * Math.random(), {
          motionPath: {
            path: [
              // { x: "0vh", y: "0vh" },
              { x: "10vw", y: "10vh" },
              { x: "-10vw", y: "10vh" },
              { x: "-10vw", y: "-20vh" },
              { x: "0vh", y: "0vw" },
            ], // you probably want more points here...or just use an SVG <path>!
          },
          ease: "none",
          // clearProps: 'all'
        });
      }

      if (i == 11 || i == 15) {
        var rect = element.getBoundingClientRect();
        var tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
        tl.to(element, 20 + 4 * Math.random(), {
          motionPath: {
            path: [
              // { x: "0vh", y: "0vh" },
              { x: "-50vw", y: "10vh" },
              { x: "60vw", y: "-10vh" },
              { x: "-50vw", y: "-20vh" },
              { x: "0vh", y: "0vw" },
            ], // you probably want more points here...or just use an SVG <path>!
          },
          ease: "none",
          // clearProps: 'all'
        });
      }

      if (i == 0 || i == 6 || i == 17) {
        var rect = element.getBoundingClientRect();
        var tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
        tl.to(element, 10 + 4 * Math.random(), {
          motionPath: {
            path: [
              // { x: "0vh", y: "0vh" },
              { x: "10vw", y: "10vh" },
              { x: "-10vw", y: "70vh" },
              { x: "0vh", y: "0vw" },
            ], // you probably want more points here...or just use an SVG <path>!
          },
          ease: "none",
          // clearProps: 'all'
        });
        tl.play();
      }

      // }
    });
  }, []);
  return (
    <div
      id="code_contain"
      className="flex flex-col z-2 text-base relative h-3/5 pl-6  md:bottom-0 md:h-full md:right-0 md:w-1/2 md:pl-32 md:pt-12"
    >
      <div className="">
        <span className="vscode_rose">{"import "}</span>
        <span>React</span>{" "}
        {/* <span className="vscode_jaune">{"{"}</span>
        <span>useRef, useEffect, useState, useLayoutEffect</span>
  <span className="vscode_jaune">{"}"}</span>{" "}*/}
        <span className="vscode_rose">{"from"}</span>
        <span className="vscode_orange"> "react"</span>
      </div>
      <div className="">
        <span>
          interface <span className="vscode_jaune">IPost</span>{" "}
          <span className="vscode_yellow">{"{"}</span>
        </span>
      </div>
      <div className="">
        <span className="code_space">
          id<span className="vscode_blanc">:</span>{" "}
          <span className="vscode_vert">number</span>
        </span>
      </div>
      <div className="">
        <span className="code_space">
          userId?<span className="vscode_blanc">:</span>{" "}
          <span className="vscode_vert">number</span>
        </span>
      </div>
      <div className="">
        <span className="code_space">
          title<span className="vscode_blanc">:</span>{" "}
          <span className="vscode_vert">string</span>
        </span>
      </div>
      <div className="">
        <span className="code_space">
          body<span className="vscode_blanc">:</span>{" "}
          <span className="vscode_vert">string</span>
        </span>
      </div>
      <div>
        <span className="vscode_jaune">{"}"}</span>
      </div>
      {/* <div></div> */}
      {/* const App = () => { */}
      <div>
        const App
        <span className="vscode_blanc">=</span>
        <span className="vscode_yellow">{"()"}</span>
        {"=>"}
        <span className="vscode_jaune">{"{"}</span>
      </div>
      <div>
        {/* const defaultPosts: IPost[] = []; */}
        <span className="code_space">
          const defaultPosts<span className="vscode_blanc">:</span>{" "}
          <span className="vscode_vert">IPost</span>
          <span className="vscode_jaune">[]</span> ={" "}
          <span className="vscode_jaune">[]</span>;
        </span>
      </div>

      <div className="mini:overflow-x-hidden ">
        <span className="code_space">
          const <span className="vscode_rose">{"["}</span> posts,
          <span className="vscode_jaune">setPosts</span>{" "}
          <span className="vscode_rose">{"]"}</span>
          <span className="vscode_blanc">:</span>{" "}
          <span className="vscode_rose">{"["}</span>
          <span className="vscode_vert">IPost</span>
          []
          <span className="vscode_blanc">,</span> {"("}posts
          <span className="vscode_blanc">:</span>{" "}
          <span className="vscode_vert">IPost</span>
          <span className="vscode_jaune">[]</span>
          {") => "}
          <span className="vscode_vert">void</span>
          <span className="vscode_rose">{"]"}</span>
          {" = "}
          <span className="vscode_vert">React</span>
          <span className="vscode_blanc">.</span>
          <span className="vscode_yellow">useState</span>
          <span className="vscode_rose">{"("}</span>
        </span>
      </div>
      <div>
        <span className="code_space ">
          <span className="code_space">defaultPosts</span>
        </span>
      </div>
      <div>
        <span className="code_space vscode_rose">{")"}</span>;
      </div>
      <div className="hidden md:block">
        {/* const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true); */}
        <span className="code_space">
          const <span className="vscode_rose">{"["}</span> loading,{" "}
          <span className="vscode_jaune">setLoading</span>{" "}
          <span className="vscode_rose">{"]"}</span>
          <span className="vscode_blanc">:</span>{" "}
          <span className="vscode_rose">{"["}</span>
        </span>
      </div>
      <div className="code_space hidden md:block">
        <span className="vscode_vert code_space">boolean</span>,
      </div>
      <div className="code_space hidden md:block">
        <span className="code_space">
          {"(loading)"}
          <span className="vscode_blanc">{" : "}</span>
          <span className="vscode_vert">boolean</span>
          {" => "}
          <span className="vscode_vert">void</span>
        </span>
      </div>
      <div className="code_space hidden md:block">
        <span className="vscode_rose">{"]"}</span>
        <span className="vscode_blanc">{" = "}</span>
        <span className="vscode_vert">React</span>
        <span className="vscode_yellow">useState</span>
        <span className="vscode_blanc">.</span>
        <span className="vscode_blanc">{"<"}</span>
        <span className="vscode_vert">boolean</span>
        <span className="vscode_blanc">{">"}</span>
        <span className="vscode_rose">{"("}</span>
        true
        <span className="vscode_rose">{")"}</span>
      </div>

      {/* return (
    <div className="App">
      {loading && <button onClick={handleCancelClick}>Cancel</button>}
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul> */}
      <div className="code_space">
        <span className="vscode_rose">{"return ("}</span>
      </div>
      <div className="code_space">
        <span className="code_space">{"<div className="}</span>
        <span className="vscode_orange">{'"App"'}</span>
        {">"}
      </div>
      <div className="overflow-x-hidden code_space">
        <span className="code_space">
          <span className="code_space">
            <span>{"{loading"}</span>
            <span className="vscode_blanc">{" && "}</span>
            <span className="">{"<button onClick="}</span>
            <span className="vscode_jaune">{"{"}</span>
            <span className="vscode_jaune">{"handleCancelClick"}</span>
            <span className="vscode_jaune">{"}"}</span>
            {">"}
            <span className="vscode_blanc">{"Cancel"}</span>
            <span className="">{"</button>}"}</span>
          </span>
        </span>
      </div>
      <div className="code_space">
        <span className="code_space">
          <span className="code_space">{"<ul className"}</span>
          <span className="vscode_blanc">{"="}</span>
          <span className="vscode_orange">{'"posts"'}</span>
          {">"}
        </span>
      </div>
      <div className="code_space">
        <span className="code_space">
          <span className="code_space">
            <span className="code_space">
              {"{posts"}
              <span className="vscode_jaune_pal">.map</span>
              <span className="vscode_jaune">{"("}</span>
              <span className="vscode_rose">{"("}</span>
              post
              <span className="vscode_rose">{")"}</span>
              {"=>"}
              <span className="vscode_rose">{"("}</span>
            </span>
          </span>
        </span>
      </div>
      <div className="code_space">
        <span className="code_space">
          <span className="code_space">
            <span className="code_space">{"<li key={post.id}>"}</span>
          </span>
        </span>
      </div>
      <div className="code_space">
        <span className="code_space">
          <span className="code_space">
            <span className="code_space">
              <span className="code_space">{"<h3>{post.title}</h3>  "}</span>
            </span>
          </span>
        </span>
      </div>
      <div className="code_space">
        <span className="code_space">
          <span className="code_space">
            <span className="code_space">{"</li>"}</span>
          </span>
        </span>
      </div>
      <div className="code_space">
        <span className="code_space">
          <span className="code_space">
            <span className="code_space">
              <span className="vscode_rose">{")"}</span>
              <span className="vscode_jaune">{")"}</span>
              {"}"}
            </span>
          </span>
        </span>
      </div>
      <div className="code_space">
        <span className="code_space">
          <span className="code_space">{"</ul>"}</span>
        </span>
      </div>
      <div className="code_space">
        <span className="code_space">{"</div>"}</span>
      </div>
      <div className="code_space">
        <span className="vscode_rose">{")"}</span>
        {/* <span className="vscode_jaune">{"}"}</span> */}
      </div>
      <div className="">
        <span className="vscode_jaune">{"}"}</span>
      </div>

      {/* */}
      {/* <p>{post.body}</p> */}

      {/* */}

      {/* <ul className="posts"></ul> */}

      {/* <span > {loading && <button onClick={handleCancelClick}>Cancel</button>} </span>
        </span>
          </span>
          {"<div className="} </span>
        <span className="vscode_orange">{"App"} </span>
         && <button onClick={handleCancelClick}>Cancel</button>}
        {">"}
      </div> */}

      {/* function getUsers(): Promise<User[]> { */}
      {/* <div>
        function <span>getUsers</span>
        <span className="vscode_jaune">()</span>
        <span className="vscode_blanc">:</span>{" "}
        <span className="vscode_vert">Promise</span>
        {"<"}
        <span className="vscode_vert">User</span>
        <span className="vscode_jaune">[]</span>
        {">"}
      </div> 

      <div></div>
      <div>
        <span className="vscode_rose">{"const "}</span>
        <span>FirstComponent</span>
        <span className="vscode_rose">:</span>{" "}
        <span className="vscode_vert">{"React.FC"}</span>
        <span className="vscode_blanc">{"<"}</span>
        <span className="vscode_jaune">{"{"}</span>
        <span className="vscode_jaune">{"}"}</span>
        <span className="vscode_blanc">{">"}</span>{" "}
        <span className="vscode_blanc">{"="}</span>{" "}
        <span className="vscode_jaune">{"("}</span>
        <span className="vscode_jaune">{")"}</span> <span>{"=>"}</span>{" "}
        <span className="vscode_jaune">{"{"}</span>{" "}
      </div>
      <div>
        <span className="vscode_rose code_space">{"return ("}</span>
      </div>
      <div>
        <span className="vscode_rose code_space" />
        <span className="vscode_rose code_space">{"<div>"}</span>
      </div>

      <div>
        <span className="vscode_rose code_space" />
        <span className="vscode_rose code_space" />
        <span className="vscode_rose code_space">{"<h3>"}</span>
        <span className="">Liste des utilisateurs connectés</span>
        <span className="vscode_rose ">{"</h3>"}</span>
      </div>

      <div>
        <span className="vscode_rose code_space" />
        <span className="vscode_rose code_space">{"</div>"}</span>
      </div>
      <div>
        <span className="vscode_rose code_space">{");"}</span>
      </div>
      <div>
        <span className="vscode_rose">{"};"}</span>
      </div>
      <div></div>
      <div>
        <span className="vscode_rose code_space2">
          {"export default FirstComponent;"}
        </span>
      </div>*/}
    </div>
  );
}

export default function Screen1() {
  const ref = useRef(null);
  const [hoverr, setHover] = useState("");
  const clicked = useRef(false);

  const x = useRef(0);
  const y = useRef(0);

  // useEffect(() => {
  //   // var leaveAnimation;
  //   document.querySelector(".home-cover").addEventListener("mousemove", (e) => {
  //     if (!clicked.current && ref.current) {
  //       ref.current.style.setProperty(
  //         "clip-path",
  //         "circle(200px at " + e.pageX + "px " + e.pageY + "px)"
  //       );

  //       gsap.killTweensOf("#div_clip_path");
  //     }
  //   });

  //   document.querySelector(".home-cover").addEventListener("mouseleave", () => {
  //     if (!clicked.current) {
  //       gsap.to("#div_clip_path", {
  //         duration: 1,
  //         ease: "power2",
  //         clipPath: "circle(200px at 72vw 50%)",
  //       });
  //     }
  //   });

  //   function redresseCode2(event) {
  //     let myElement = document.getElementById("code_contain");

  //     let i = 0;
  //     for (const child of myElement.children) {
  //       i = i + 1;
  //       gsap.killTweensOf(child);
  //       gsap.to(child, 0.3, {
  //         ease: "none",
  //         x: "0px",
  //         y: "0px",
  //         delay: i * "0.02",
  //       });
  //     }
  //   }

  //   document.querySelector(".home-cover").addEventListener("click", (event) => {
  //     // console.log("ee",event)
  //     if (!clicked.current) {
  //       var clipPath = ref.current.style.getPropertyValue("clip-path");

  //       if (clipPath) {
  //         let height = window.innerHeight,
  //           width = window.innerWidth;
  //         let dim = "vw";
  //         if (height > width) {
  //           dim = "vh";
  //         }
  //         redresseCode2(event);
  //         let clipPath1 = clipPath.split("at");
  //         clipPath1 = "circle(100" + dim + " at " + clipPath1[1];
  //         let clipPath2 = clipPath.split("at");
  //         clipPath2 = "circle(15" + dim + " at " + clipPath2[1];

  //         clicked.current = true;

  //         var tl = gsap.timeline();

  //         tl.to(
  //           "#div_clip_path",
  //           {
  //             duration: 0.2,
  //             ease: "power1.out",
  //             clipPath: clipPath2,
  //           },
  //           0.2
  //         );
  //         tl.to(
  //           "#div_clip_path",
  //           {
  //             duration: 0.2,
  //             ease: "power1.out",
  //             clipPath: clipPath2.replace("circle(15", "circle(10"),
  //           },
  //           ">"
  //         );
  //         tl.to(
  //           "#div_clip_path",
  //           {
  //             duration: 5,
  //             ease: "power2",
  //             clipPath: clipPath1,
  //           },
  //           ">"
  //         );

  //         // tl.play()
  //       }
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     // let q = document.querySelector(".line:nth-child(1) .word:nth-child(1)");

  //     function q(x) {
  //       return document.querySelectorAll(x);
  //     }

  //     gsap.from(
  //       q(
  //         "#div_clip_path .home-cover__content .line:nth-child(1) .word:nth-child(1)"
  //       ),
  //       {
  //         // backgroundColor: "red",
  //         y: "-30px",
  //         duration: "1",
  //         ease: "linear",
  //       },
  //       0
  //     );

  //     let div = document.getElementById("screen1");
  //     let wwidth = window.screen.width;

  //     // alert(wwidth)

  //     for (let step = 0; step < 10; step++) {
  //       let paragraph = document.createElement("p");
  //       paragraph.classList.add("ccode");
  //       paragraph.classList.add("my-1");

  //       paragraph.textContent = "Hello, world!";
  //       paragraph.style.top = (50 + step * 50).toString() + "px";
  //       paragraph.style.left = (wwidth / 5).toString() + "px";
  //       paragraph.style.rotate = (15 * Math.random()).toString() + "deg";
  //       // div.appendChild(paragraph);
  //     }

  //     for (let step = 0; step < 10; step++) {
  //       let paragraph = document.createElement("p");
  //       paragraph.classList.add("ccode");
  //       paragraph.classList.add("my-1");

  //       paragraph.textContent = "Hello, world!";
  //       paragraph.style.top = (50 + step * 50).toString() + "px";
  //       paragraph.style.left = 2 * (wwidth / 5).toString() + "px";
  //       paragraph.style.rotate = (15 * Math.random()).toString() + "deg";
  //       // div.appendChild(paragraph);
  //     }

  //     for (let step = 0; step < 10; step++) {
  //       let paragraph = document.createElement("p");
  //       paragraph.classList.add("ccode");
  //       paragraph.classList.add("my-1");

  //       paragraph.textContent = "Hello, world!";
  //       paragraph.style.top = (50 + step * 50).toString() + "px";
  //       paragraph.style.left = 3 * (wwidth / 5).toString() + "px";
  //       paragraph.style.rotate = (15 * Math.random()).toString() + "deg";
  //       // div.appendChild(paragraph);
  //     }

  //     for (let step = 0; step < 10; step++) {
  //       let paragraph = document.createElement("p");
  //       paragraph.classList.add("ccode");
  //       paragraph.classList.add("my-1");

  //       paragraph.textContent = "Hello, world!";
  //       paragraph.style.top = (50 + step * 50).toString() + "px";
  //       paragraph.style.left = 4 * (wwidth / 5).toString() + "px";
  //       paragraph.style.rotate = (15 * Math.random()).toString() + "deg";
  //       // div.appendChild(paragraph);
  //     }
  //   });

  //   return () => ctx.revert();
  // });

  // <Image
  //     src="/profile.png"
  //     width={500}
  //     height={500}
  //     alt="Picture of the author"
  //   />

  return (
    <>
      <div
        id="screen1"
        style={{
          backgroundColor: "rgb(0,0,0)",
        }}
        className={hoverr + " home-cover relative w-full h-screen z-100 "}
      >
        <div className="bg_grey home-cover__wrapper relative w-full cursor-pointer overflow-hidden js-cover">
          <div
            id="div_clip_path"
            className="w-full h-full home-cover__hover absolute top-0 left-0 z-30 backface-hidden "
            ref={ref}
          >
            <header
              id="header_1"
              className="header fixed flex items-center w-full opacity-0 invisible rg:opacity-100 rg:visible z-20"
              style={{
                backgroundColor: "var(--color-transparent)",
                color: "var(--color-white)",
              }}
              data-text-color="white"
            >
              <div className=" header__container flex items-center justify-between w-full">
                <div className="flex items-center h-full">
                  <a
                    id="AP_Hidden"
                    // href="https://www.agap2.fr"
                    className="font-weight600 text-2xl header__logo flex items-center justify-center h-full container-main-l rg:px-8 bg-white mr-2 sm:mr-5"
                  >
                    Amaury PICHAT
                  </a>

                  <div className="flex items-stretch categories__wrap pointer-events-none transition-opacity duration-1000 ease-out-quad opacity-0 js-departments">
                    <div
                      className="px-3 sm:px-4 py-2 flex items-center cursor-pointer border-t border-b active border-l rounded-l-full"
                      data-slug="industrie"
                    >
                      <div className="hidden md:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 23.9 23.9"
                        >
                          <path
                            fill="#2a2a2a"
                            d="M6.26,14.81a2.83,2.83,0,1,0,5.66,0,.62.62,0,0,1,.62-.62.61.61,0,0,1,.61.62,4.07,4.07,0,1,1-4.06-4.06h0a.61.61,0,0,1,.62.61.62.62,0,0,1-.62.62h0A2.83,2.83,0,0,0,6.26,14.81ZM1.33,16.92l.89.16a7.6,7.6,0,0,0,.42,1l-.53.74a1.59,1.59,0,0,0,.18,2l.76.76a1.59,1.59,0,0,0,2,.18l.74-.52a7.24,7.24,0,0,0,1,.41l.16.89A1.58,1.58,0,0,0,8.55,23.9H9.63a1.59,1.59,0,0,0,1.57-1.32l.16-.89a6.57,6.57,0,0,0,1-.42l.74.53a1.6,1.6,0,0,0,2-.18l.78-.76a1.59,1.59,0,0,0,.17-2l-.52-.74a8.65,8.65,0,0,0,.42-1l.89-.16a.61.61,0,0,0,.52-.69.63.63,0,0,0-.67-.53h-.06l-1.27.22a.61.61,0,0,0-.49.45,6.19,6.19,0,0,1-.6,1.43.63.63,0,0,0,0,.66l.74,1.06A.35.35,0,0,1,15,20l-.76.76a.35.35,0,0,1-.46,0l-1.05-.74a.63.63,0,0,0-.67,0,6.19,6.19,0,0,1-1.43.6.61.61,0,0,0-.45.49L10,22.37a.36.36,0,0,1-.35.3H8.55a.37.37,0,0,1-.36-.3L8,21.1a.6.6,0,0,0-.44-.49A6.26,6.26,0,0,1,6.09,20a.61.61,0,0,0-.66,0l-1,.74a.36.36,0,0,1-.47,0L3.15,20a.36.36,0,0,1,0-.46l.74-1.05a.63.63,0,0,0,0-.67,5.94,5.94,0,0,1-.6-1.42.6.6,0,0,0-.49-.44l-1.27-.22a.37.37,0,0,1-.29-.37V14.27a.36.36,0,0,1,.3-.35L2.8,13.7a.6.6,0,0,0,.49-.45,6.19,6.19,0,0,1,.6-1.43.61.61,0,0,0,0-.66L3.12,10.1a.35.35,0,0,1,0-.46l.76-.76a.35.35,0,0,1,.46,0l1,.74a.63.63,0,0,0,.67,0A5.94,5.94,0,0,1,7.52,9,.63.63,0,0,0,8,8.52l.22-1.27a.61.61,0,0,0-.51-.71A.62.62,0,0,0,7,7,.07.07,0,0,1,7,7l-.14.9a8.09,8.09,0,0,0-1,.42l-.74-.52a1.59,1.59,0,0,0-2,.17l-.76.76a1.6,1.6,0,0,0-.19,2.05l.52.74a8.09,8.09,0,0,0-.42,1l-.89.15A1.6,1.6,0,0,0,0,14.27v1.08a1.59,1.59,0,0,0,1.32,1.57Zm22.57-10v.85a1.37,1.37,0,0,1-1.15,1.36l-.62.11a4.84,4.84,0,0,1-.28.66l.37.53a1.38,1.38,0,0,1-.15,1.77l-.6.6a1.38,1.38,0,0,1-1.78.15l-.52-.36-.66.27-.11.62A1.39,1.39,0,0,1,17,14.57h-.84a1.39,1.39,0,0,1-1.37-1.14l-.11-.63a6.5,6.5,0,0,1-.66-.27l-.52.36a1.39,1.39,0,0,1-1.78-.15l-.6-.6A1.39,1.39,0,0,1,11,10.36l.37-.52a4.84,4.84,0,0,1-.28-.66l-.61-.1A1.37,1.37,0,0,1,9.33,7.72V6.87A1.39,1.39,0,0,1,10.47,5.5l.63-.11a6.5,6.5,0,0,1,.27-.66L11,4.21a1.38,1.38,0,0,1,.15-1.78l.59-.58a1.37,1.37,0,0,1,1.77-.16l.53.37a4.88,4.88,0,0,1,.66-.29l.11-.63A1.38,1.38,0,0,1,16.18,0H17A1.39,1.39,0,0,1,18.4,1.15l.11.62a6.21,6.21,0,0,1,.66.28l.52-.37a1.37,1.37,0,0,1,1.77.16l.59.6a1.38,1.38,0,0,1,.16,1.77l-.37.52q.15.33.27.66l.63.11A1.39,1.39,0,0,1,23.9,6.87Zm-1.23,0a.16.16,0,0,0-.13-.15l-1-.18a.6.6,0,0,1-.49-.44A4.27,4.27,0,0,0,20.59,5a.61.61,0,0,1,0-.66l.59-.84a.17.17,0,0,0,0-.2l-.6-.6a.17.17,0,0,0-.2,0l-.83.59a.61.61,0,0,1-.66,0,5,5,0,0,0-1.1-.46.61.61,0,0,1-.45-.49l-.17-1A.16.16,0,0,0,17,1.22h-.85a.16.16,0,0,0-.15.13l-.17,1a.64.64,0,0,1-.45.5,4.24,4.24,0,0,0-1.1.45.61.61,0,0,1-.66,0l-.84-.58a.15.15,0,0,0-.2,0l-.6.6a.15.15,0,0,0,0,.2l.58.83a.63.63,0,0,1,0,.67,4.65,4.65,0,0,0-.46,1.1.6.6,0,0,1-.49.44l-1,.18a.14.14,0,0,0-.12.15v.85a.16.16,0,0,0,.12.15l1,.17a.62.62,0,0,1,.5.45,4.55,4.55,0,0,0,.45,1.1.61.61,0,0,1,0,.66l-.58.83a.14.14,0,0,0,0,.2l.6.6a.15.15,0,0,0,.2,0l.83-.58a.61.61,0,0,1,.66,0,5.21,5.21,0,0,0,1.09.45.6.6,0,0,1,.44.49l.18,1a.15.15,0,0,0,.15.13H17a.15.15,0,0,0,.15-.13l.18-1a.6.6,0,0,1,.45-.49,5,5,0,0,0,1.1-.46.61.61,0,0,1,.66,0l.83.59a.17.17,0,0,0,.2,0l.6-.6a.15.15,0,0,0,0-.2l-.58-.83a.65.65,0,0,1,0-.66,4.35,4.35,0,0,0,.46-1.09.63.63,0,0,1,.49-.45l1-.18a.15.15,0,0,0,.13-.15Zm-3.16.42a2.91,2.91,0,1,1-2.9-2.9h0a2.9,2.9,0,0,1,2.9,2.9Zm-1.23,0A1.68,1.68,0,1,0,16.61,9h0A1.68,1.68,0,0,0,18.28,7.29Z"
                          ></path>
                        </svg>
                      </div>

                      <p className="text-sm md:text-base">industrie</p>
                    </div>
                    <div
                      className="px-3 sm:px-4 py-2 flex items-center cursor-pointer border-t border-b border-r rounded-r-full"
                      data-slug="it"
                    >
                      <div className="hidden md:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24.73 21.64"
                        >
                          <path
                            fill="#2a2a2a"
                            d="M23.7,0H1A1,1,0,0,0,0,1V16.49a1,1,0,0,0,1,1H9L8,20.61H5.67v1H19.58v-1H17l-1-3.09H23.7a1,1,0,0,0,1-1V1A1,1,0,0,0,23.7,0ZM16,20.61H9.12l1-3.09H15Zm7.73-4.12H1V1H23.7Z"
                          ></path>
                          <path
                            fill="#2a2a2a"
                            d="M3.09,15.46H21.64a1,1,0,0,0,1-1V3.09a1,1,0,0,0-1-1H3.09a1,1,0,0,0-1,1V14.43A1,1,0,0,0,3.09,15.46Zm0-12.37H21.64V14.43H3.09Z"
                          ></path>
                          <line
                            x1="14.08"
                            y1="5.64"
                            x2="11.08"
                            y2="11.64"
                            // style="fill:none;stroke:#2a2a2a"
                            className="is-stroke"
                          ></line>
                          <path
                            d="M15.38,7l3,1.81-3,1.72"
                            // style="fill:none;stroke:#2a2a2a"
                            className="is-stroke"
                          ></path>
                          <path
                            d="M9.34,7l-3,1.81,3,1.72"
                            // style="fill:none;stroke:#2a2a2a"
                            className="is-stroke"
                          ></path>
                        </svg>
                      </div>

                      <p className="text-sm md:text-base">IT</p>
                    </div>
                  </div>
                </div>

                <div className="container-main-r rg:hidden">
                  <div className="hamburger ml-auto w-6">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <nav className="header__menu px-4 rg:px-3 lg:px-4 xl:px-8 flex items-center hidden rg:flex">
                  <ul className="flex rg:mr-6 lg:mr-10 xl:mr-32">
                    <li
                      role="menu"
                      className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1"
                    >
                      <a
                        href="https://www.linkedin.com/in/amaurypichat/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        {/* <span className="span_image h-full"><img src="./../cv_blanc.png"/></span> */}
                        {/* </img> */}
                        Linkedin
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://github.com/amaurypichat"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Github
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://amaurypichat.fr/images/cv_AmauryPICHAT.pdf"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        CV
                      </a>
                    </li>
                    {/* <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1 submenu">
                      <div className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4">
                        Projets
                        <div className="points flex items-stretch ml-1">
                          <div className="bg-blue points__pt mr-px transform backface-hidden"></div>
                          <div className="bg-blue points__pt mx-px transform backface-hidden"></div>
                          <div className="bg-blue points__pt ml-px transform backface-hidden"></div>
                        </div>
                      </div>

                      <div className="header__submenu absolute top-full left-0 bg-white text-base flex-col items-start py-6 pl-6 pr-12 hidden">
                        <a
                          className="text-body mb-4 whitespace-no-wrap transform backface-hidden"
                        >
                          Devenir Consultant en ingénierie
                        </a>
                        <a
                          className="text-body mb-4 whitespace-no-wrap transform backface-hidden"
                        >
                          Devenir Ingénieur d’affaires
                        </a>
                        <a
                          className="text-body mb-4 whitespace-no-wrap transform backface-hidden"
                        >
                          Parcours agapiens
                        </a>
                        <a
                          className="text-body mb-4 whitespace-no-wrap transform backface-hidden"
                        >
                          Formation
                        </a>
                      </div>
                    </li> */}
                    {/* <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Presse
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1 border rounded-l-full rounded-r-full overflow-hidden">
                      <a
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Projets
                      </a>
                    </li> */}
                  </ul>

                  {/* <ul className="lang-switcher leading-none">
                    <li>
                      <a
                        data-router-disabled=""
                        data-noprefetch=""
                        data-lang="fr"
                        className="font-semibold uppercase text-sm "
                      >
                        fr
                      </a>
                    </li>
                    <li>
                      <a
                        data-router-disabled=""
                        data-noprefetch=""
                        data-lang="en"
                        className="font-semibold uppercase text-sm  line-through"
                      >
                        en
                      </a>
                    </li>
                  </ul> */}
                </nav>
              </div>
            </header>

            {/* <div> */}
            {/* <div id="rrrj" className="h-full w-full flex flex-col md:flex-row"> */}
            {/* <VSCode /> */}
            {/* <div className="js-menu-mobile menu-mobile fixed top-0 left-0 inset-0 bg-blue z-1000 pointer-events-none select-none rg:hidden">
              <header
                id="header_mobile_1"
                className="header fixed flex flex-wrap w-full"
                // style={{ backgroundColor: "rgba(0, 0, 255, 0.5)" }}
              >
                <div className="header__container flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <a
                      href="https://www.agap2.fr"
                      className="header__logo flex items-center justify-center h-full container-main-l rg:px-8 mr-2 sm:mr-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="129"
                        height="40.001"
                        viewBox="0 0 129 40.001"
                      >
                        <g id="logo" transform="translate(-55.971 -44.738)">
                          <g id="Groupe_1" data-name="Groupe 1">
                            <path
                              id="Tracé_1"
                              data-name="Tracé 1"
                              d="M163.048,75.5V70.629l9.921-9.206c2.791-2.522,4.207-4.027,4.207-5.974,0-2.834-1.991-4.073-4.916-4.073a26.381,26.381,0,0,0-8.059,1.64l-1.553-6.153a32.981,32.981,0,0,1,10.807-2.124c7.707,0,11.117,4.468,11.117,9.649,0,4.47-3.011,7.833-7,11.418l-3.94,3.273h11.338V75.5Z"
                              fill="#ffcd00"
                            ></path>
                            <path
                              id="Tracé_2"
                              data-name="Tracé 2"
                              d="M79.578,52.251V73.318h-7.22V71.858a9.458,9.458,0,0,1-6.2,2.125c-5.184,0-10.188-4.029-10.188-11.505.179-6.773,4.118-11.289,10.762-11.289,4.074,0,6.334.312,12.845,1.063M62.925,62.608c0,3.232,1.993,5.445,4.826,5.445a7.042,7.042,0,0,0,4.607-1.859V57.21c-1.462-.135-2.791-.223-4.339-.223-3.5,0-5.094,2.347-5.094,5.62"
                              fill="#fff"
                            ></path>
                            <path
                              id="Tracé_3"
                              data-name="Tracé 3"
                              d="M131.937,52.251V73.318h-7.218V71.858a9.467,9.467,0,0,1-6.2,2.125c-5.182,0-10.187-4.029-10.187-11.505.177-6.773,4.12-11.289,10.76-11.289,4.074,0,6.334.312,12.845,1.063M115.284,62.608c0,3.232,1.993,5.445,4.827,5.445a7.047,7.047,0,0,0,4.608-1.859V57.21c-1.462-.135-2.792-.223-4.341-.223-3.5,0-5.094,2.347-5.094,5.62"
                              fill="#fff"
                            ></path>
                            <path
                              id="Tracé_4"
                              data-name="Tracé 4"
                              d="M92.966,51.19c-6.689,0-10.629,4.516-10.763,11.288,0,6.542,4.171,10.458,9.076,11.093.324.036.828.079,1.438.1.562,0,1.093,0,1.618-.006,1.643-.076,3.434-.413,4.305-1.422a11.879,11.879,0,0,1-.161,2.246c-.018.115-.039.228-.062.341a6.9,6.9,0,0,1-.249.891l-.023.062a2.713,2.713,0,0,1-.358.7c-.9,1.516-2.56,2.32-5.042,2.32a40.332,40.332,0,0,1-6.512-.885l-1.017,5.487a27.944,27.944,0,0,0,7.794,1.329c8.458,0,12.8-4.6,12.8-11.728V52.252c-4.738-.487-7.263-1.063-12.842-1.063m5.625,16.288a29.08,29.08,0,0,1-4.608.309,4.871,4.871,0,0,1-4.826-5.18c0-3.273,1.549-5.619,5.093-5.619,1.549,0,2.88.088,4.341.222Z"
                              fill="#fff"
                            ></path>
                            <path
                              id="Tracé_5"
                              data-name="Tracé 5"
                              d="M148.081,51.188a93.75,93.75,0,0,0-12.8,1.064V83.277h7.176V71.958s1.362,1.659,6.286,1.7c5.351-.17,10.1-4.167,10.1-11.181-.223-6.772-4.073-11.289-10.763-11.289m-.973,16.6a29.551,29.551,0,0,1-4.651-.309V57.21c1.507-.134,2.789-.222,4.384-.222,3.545,0,5.094,2.346,5.094,5.619a4.872,4.872,0,0,1-4.827,5.18"
                              fill="#fff"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>

                  <div className="container-main-r">
                    <div className="js-menu-mobile-hamburger hamburger hamburger--white active ml-auto w-6 rg:hidden">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>

                <nav className="menu-mobile__nav w-full overflow-y-auto">
                  <ul className="flex flex-col overflow-x-hidden">
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500">
                        agap2
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500">
                        Métiers
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500">
                        Esprit
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group submenu">
                      <div className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500 break-all">
                        Carrière
                        <div className="points flex items-stretch ml-1">
                          <div className="bg-blue points__pt mr-px transform backface-hidden"></div>
                          <div className="bg-blue points__pt mx-px transform backface-hidden"></div>
                          <div className="bg-blue points__pt ml-px transform backface-hidden"></div>
                        </div>
                      </div>

                      <div className="menu-mobile__submenu absolute flex flex-col text-white transition-all duration-500 overflow-hidden py-8">
                        <a className="text-lg mb-4 last:mb-0">
                          Devenir Consultant en ingénierie
                        </a>
                        <a className="text-lg mb-4 last:mb-0">
                          Devenir Ingénieur d’affaires
                        </a>
                        <a className="text-lg mb-4 last:mb-0">
                          Parcours agapiens
                        </a>
                        <a className="text-lg mb-4 last:mb-0">Formation</a>
                      </div>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500">
                        Blog
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500">
                        Presse
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500">
                        Contact
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500">
                        Offres d’emploi
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <ul className="lang-switcher leading-none">
                        <li>
                          <a
                            data-router-disabled=""
                            data-noprefetch=""
                            data-lang="fr"
                            className="font-semibold uppercase text-sm "
                          >
                            fr
                          </a>
                        </li>
                        <li>
                          <a
                            data-router-disabled=""
                            data-noprefetch=""
                            data-lang="en"
                            className="font-semibold uppercase text-sm  line-through"
                          >
                            en
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </header>
            </div> */}

            {/* <video
              muted=""
              autoPlay=""
              loop=""
              playsInline=""
              className="absolute inset-0 object-cover w-full h-full z-0 hidden md:block"
            >
              <source
                type="video/mp4"
              />
              Votre navigateur ne supporte pas cette vidéo.
            </video> */}

            {/* <video
              muted=""
              autoPlay=""
              loop=""
              playsInline=""
              className="absolute inset-0 object-cover w-full h-full z-0 md:hidden"
            >
              <source
                type="video/mp4"
              />
              Votre navigateur ne supporte pas cette vidéo.
            </video> */}

            <div
              id="main_content_zone1_hidden"
              className="bg-black home-cover__content relative flex flex-col md:justify-center w-full h-full mx-auto px-5 pt-24 md:pt-0"
              style={{
                zIndex: 8,
              }}
            >

               {/* <picture>
                <source
                  srcset="https://dummyimage.com/1200x300/2a9c2a/ffffff"
                  media="(min-width: 1200px)"
                />
                <source
                  srcset="https://dummyimage.com/992x300/2a9c2a/ffffff"
                  media="(min-width: 992px)"
                />
                <source
                  srcset="https://dummyimage.com/768x300/2a9c2a/ffffff"
                  media="(min-width: 768px)"
                />
                <source
                  srcset="https://dummyimage.com/576x300/2a9c2a/ffffff"
                  media="(min-width: 576px)"
                />
                <img src="https://dummyimage.com/576x300/2a9c2a/ffffff" />
              </picture> */}
             
               {/* //<Image
                // id="dfdh"
                // src="/background.avif"
                // fill={true}
                // alt={"Background Image"}
                // priority={true}
                // style={{
                  // zIndex:9
                // }}
               ///> */}
              <h1
                className="font-black flex flex-wrap items-start w-full"
                style={{
                  zIndex: 10,
                }}
              >
                <div
                  className="w-max-content md:w-1/2 text-2xl md:text-3xl  text-green tracking-normal md:text-right pr-6 md:pr-12 js-tosplit"
                  style={
                    {
                      // fontFamily:"chalkboy"
                    }
                  }
                >
                  <div
                    className="line"
                    // style="display: block; text-align: right; position: relative;"
                  >
                    <div
                      // style="position:relative;display:inline-block;"
                      className="word "
                    >
                      {/* The */}
                    </div>
                    <div
                      // style="position:relative;display:inline-block;"
                      className="word"
                    >
                      Développeur React.js
                    </div>
                  </div>
                  <div
                    className="line"
                    // style="display: block; text-align: right; position: relative;"
                  >
                    <div
                      // style="position:relative;display:inline-block;"
                      className="word text-white"
                    >
                      En Recherche d'emploi
                    </div>
                  </div>
                  <div
                    className="line"
                    // style="display: block; text-align: right; position: relative;"
                  >
                    <div
                      // style="position:relative;display:inline-block;"
                      className="word text-xl md:text-2xl xl:text-3-5xl"
                    >
                      06 88 91 80 19
                    </div>
                  </div>
                  <div
                    className="line text-xl md:text-2xl xl:text-3-5xl"
                    // style="display: block; text-align: right; position: relative;"
                  >
                    <div
                      // style="position:relative;display:inline-block;"
                      className="word pb-2 text-white"
                    >
                      amaury.pichat@gmail.com
                    </div>
                  </div>
                </div>
                <div
                  className="home-cover__you absolute md:relative md:right-0 md:top-0 md:-mt-4 lg:-mt-8 md:ml-auto pl-12 md:pr-10 lg:pr-24 xl:pr-40 md:pl-12 w-auto text-5xl md:text-6xl xl:text-9xl text-yellow js-tosplit"
                  data-cartapus="visible"
                  // style=""
                >
                  <div
                    className="line"
                    // style="display: block; text-align: start; position: relative;"
                  >
                    <div
                      // style="position:relative;display:inline-block;"
                      className="word"
                    >
                      {/* you */}
                    </div>
                  </div>
                </div>
              </h1>

              {/* <VSCode /> */}

              {/* <div className="home-cover__btn w-1/2 hidden md:flex justify-end pr-12 mt-12">
                <a
                  className="button relative flex items-center button--white button--big"
                >
                  <div className="button__text flex-1 backface-hidden transition-transform duration-500 ease-out-quad transform mr-12">
                    join us
                  </div>

                  <div className="button__plus backface-hidden border border-solid flex items-center justify-center h-16 w-16 absolute right-0">
                    <svg
                      width="300"
                      height="300"
                      viewBox="0 0 300 300"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M132 36V132H36V168H132V264H168V168H264V132H168V36H132Z"
                        fill="black"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div> */}
            </div>
            {/* </div> */}
            {/* <div className="home-cover__label bottom-0 bg-white text-blue z-1 font-bold text-xl px-6 py-2">
              CONTACT
            </div> */}
          </div>

          <div className="w-full h-full " id="part2">
            {/* vscode_grey */}
            <header
              id="header_part2"
              className="header fixed flex items-center w-full opacity-0 invisible rg:opacity-100 rg:visible z-20"
              // style="--header-bg-color: var(--color-transparent); --header-text-color: var(--color-brown);"
              data-text-color="brown"
              style={{
                backgroundColor: "var(--color-transparent)",
                color: "var(--color-brown)",
              }}
            >
              <div className="header__container flex items-center justify-between w-full">
                <div className="flex items-center h-full">
                  <a className="font-weight600 text-2xl header__logo flex items-center justify-center h-full container-main-l rg:px-8 bg-white mr-2 sm:mr-5">
                    Amaury PICHAT
                  </a>

                  <div className="flex items-stretch categories__wrap pointer-events-none transition-opacity duration-1000 ease-out-quad opacity-0 js-departments">
                    <div
                      className="px-3 sm:px-4 py-2 flex items-center cursor-pointer border-t border-b active border-l rounded-l-full"
                      data-slug="industrie"
                    >
                      <div className="hidden md:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 23.9 23.9"
                        >
                          <path
                            fill="#2a2a2a"
                            d="M6.26,14.81a2.83,2.83,0,1,0,5.66,0,.62.62,0,0,1,.62-.62.61.61,0,0,1,.61.62,4.07,4.07,0,1,1-4.06-4.06h0a.61.61,0,0,1,.62.61.62.62,0,0,1-.62.62h0A2.83,2.83,0,0,0,6.26,14.81ZM1.33,16.92l.89.16a7.6,7.6,0,0,0,.42,1l-.53.74a1.59,1.59,0,0,0,.18,2l.76.76a1.59,1.59,0,0,0,2,.18l.74-.52a7.24,7.24,0,0,0,1,.41l.16.89A1.58,1.58,0,0,0,8.55,23.9H9.63a1.59,1.59,0,0,0,1.57-1.32l.16-.89a6.57,6.57,0,0,0,1-.42l.74.53a1.6,1.6,0,0,0,2-.18l.78-.76a1.59,1.59,0,0,0,.17-2l-.52-.74a8.65,8.65,0,0,0,.42-1l.89-.16a.61.61,0,0,0,.52-.69.63.63,0,0,0-.67-.53h-.06l-1.27.22a.61.61,0,0,0-.49.45,6.19,6.19,0,0,1-.6,1.43.63.63,0,0,0,0,.66l.74,1.06A.35.35,0,0,1,15,20l-.76.76a.35.35,0,0,1-.46,0l-1.05-.74a.63.63,0,0,0-.67,0,6.19,6.19,0,0,1-1.43.6.61.61,0,0,0-.45.49L10,22.37a.36.36,0,0,1-.35.3H8.55a.37.37,0,0,1-.36-.3L8,21.1a.6.6,0,0,0-.44-.49A6.26,6.26,0,0,1,6.09,20a.61.61,0,0,0-.66,0l-1,.74a.36.36,0,0,1-.47,0L3.15,20a.36.36,0,0,1,0-.46l.74-1.05a.63.63,0,0,0,0-.67,5.94,5.94,0,0,1-.6-1.42.6.6,0,0,0-.49-.44l-1.27-.22a.37.37,0,0,1-.29-.37V14.27a.36.36,0,0,1,.3-.35L2.8,13.7a.6.6,0,0,0,.49-.45,6.19,6.19,0,0,1,.6-1.43.61.61,0,0,0,0-.66L3.12,10.1a.35.35,0,0,1,0-.46l.76-.76a.35.35,0,0,1,.46,0l1,.74a.63.63,0,0,0,.67,0A5.94,5.94,0,0,1,7.52,9,.63.63,0,0,0,8,8.52l.22-1.27a.61.61,0,0,0-.51-.71A.62.62,0,0,0,7,7,.07.07,0,0,1,7,7l-.14.9a8.09,8.09,0,0,0-1,.42l-.74-.52a1.59,1.59,0,0,0-2,.17l-.76.76a1.6,1.6,0,0,0-.19,2.05l.52.74a8.09,8.09,0,0,0-.42,1l-.89.15A1.6,1.6,0,0,0,0,14.27v1.08a1.59,1.59,0,0,0,1.32,1.57Zm22.57-10v.85a1.37,1.37,0,0,1-1.15,1.36l-.62.11a4.84,4.84,0,0,1-.28.66l.37.53a1.38,1.38,0,0,1-.15,1.77l-.6.6a1.38,1.38,0,0,1-1.78.15l-.52-.36-.66.27-.11.62A1.39,1.39,0,0,1,17,14.57h-.84a1.39,1.39,0,0,1-1.37-1.14l-.11-.63a6.5,6.5,0,0,1-.66-.27l-.52.36a1.39,1.39,0,0,1-1.78-.15l-.6-.6A1.39,1.39,0,0,1,11,10.36l.37-.52a4.84,4.84,0,0,1-.28-.66l-.61-.1A1.37,1.37,0,0,1,9.33,7.72V6.87A1.39,1.39,0,0,1,10.47,5.5l.63-.11a6.5,6.5,0,0,1,.27-.66L11,4.21a1.38,1.38,0,0,1,.15-1.78l.59-.58a1.37,1.37,0,0,1,1.77-.16l.53.37a4.88,4.88,0,0,1,.66-.29l.11-.63A1.38,1.38,0,0,1,16.18,0H17A1.39,1.39,0,0,1,18.4,1.15l.11.62a6.21,6.21,0,0,1,.66.28l.52-.37a1.37,1.37,0,0,1,1.77.16l.59.6a1.38,1.38,0,0,1,.16,1.77l-.37.52q.15.33.27.66l.63.11A1.39,1.39,0,0,1,23.9,6.87Zm-1.23,0a.16.16,0,0,0-.13-.15l-1-.18a.6.6,0,0,1-.49-.44A4.27,4.27,0,0,0,20.59,5a.61.61,0,0,1,0-.66l.59-.84a.17.17,0,0,0,0-.2l-.6-.6a.17.17,0,0,0-.2,0l-.83.59a.61.61,0,0,1-.66,0,5,5,0,0,0-1.1-.46.61.61,0,0,1-.45-.49l-.17-1A.16.16,0,0,0,17,1.22h-.85a.16.16,0,0,0-.15.13l-.17,1a.64.64,0,0,1-.45.5,4.24,4.24,0,0,0-1.1.45.61.61,0,0,1-.66,0l-.84-.58a.15.15,0,0,0-.2,0l-.6.6a.15.15,0,0,0,0,.2l.58.83a.63.63,0,0,1,0,.67,4.65,4.65,0,0,0-.46,1.1.6.6,0,0,1-.49.44l-1,.18a.14.14,0,0,0-.12.15v.85a.16.16,0,0,0,.12.15l1,.17a.62.62,0,0,1,.5.45,4.55,4.55,0,0,0,.45,1.1.61.61,0,0,1,0,.66l-.58.83a.14.14,0,0,0,0,.2l.6.6a.15.15,0,0,0,.2,0l.83-.58a.61.61,0,0,1,.66,0,5.21,5.21,0,0,0,1.09.45.6.6,0,0,1,.44.49l.18,1a.15.15,0,0,0,.15.13H17a.15.15,0,0,0,.15-.13l.18-1a.6.6,0,0,1,.45-.49,5,5,0,0,0,1.1-.46.61.61,0,0,1,.66,0l.83.59a.17.17,0,0,0,.2,0l.6-.6a.15.15,0,0,0,0-.2l-.58-.83a.65.65,0,0,1,0-.66,4.35,4.35,0,0,0,.46-1.09.63.63,0,0,1,.49-.45l1-.18a.15.15,0,0,0,.13-.15Zm-3.16.42a2.91,2.91,0,1,1-2.9-2.9h0a2.9,2.9,0,0,1,2.9,2.9Zm-1.23,0A1.68,1.68,0,1,0,16.61,9h0A1.68,1.68,0,0,0,18.28,7.29Z"
                          ></path>
                        </svg>
                      </div>

                      <p className="text-sm md:text-base">industrie</p>
                    </div>
                    <div
                      className="px-3 sm:px-4 py-2 flex items-center cursor-pointer border-t border-b border-r rounded-r-full"
                      data-slug="it"
                    >
                      <div className="hidden md:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24.73 21.64"
                        >
                          <path
                            fill="#2a2a2a"
                            d="M23.7,0H1A1,1,0,0,0,0,1V16.49a1,1,0,0,0,1,1H9L8,20.61H5.67v1H19.58v-1H17l-1-3.09H23.7a1,1,0,0,0,1-1V1A1,1,0,0,0,23.7,0ZM16,20.61H9.12l1-3.09H15Zm7.73-4.12H1V1H23.7Z"
                          ></path>
                          <path
                            fill="#2a2a2a"
                            d="M3.09,15.46H21.64a1,1,0,0,0,1-1V3.09a1,1,0,0,0-1-1H3.09a1,1,0,0,0-1,1V14.43A1,1,0,0,0,3.09,15.46Zm0-12.37H21.64V14.43H3.09Z"
                          ></path>
                          <line
                            x1="14.08"
                            y1="5.64"
                            x2="11.08"
                            y2="11.64"
                            // style="fill:none;stroke:#2a2a2a"
                            className="is-stroke"
                          ></line>
                          <path
                            d="M15.38,7l3,1.81-3,1.72"
                            // style="fill:none;stroke:#2a2a2a"
                            className="is-stroke"
                          ></path>
                          <path
                            d="M9.34,7l-3,1.81,3,1.72"
                            // style="fill:none;stroke:#2a2a2a"
                            className="is-stroke"
                          ></path>
                        </svg>
                      </div>

                      <p className="text-sm md:text-base">IT</p>
                    </div>
                  </div>
                </div>

                <div className="container-main-r rg:hidden">
                  <div className="hamburger ml-auto w-6">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <nav className="header__menu px-4 rg:px-3 lg:px-4 xl:px-8 flex items-center hidden rg:flex">
                  <ul className="flex rg:mr-6 lg:mr-10 xl:mr-32">
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://www.linkedin.com/in/amaurypichat/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Linkedin
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://github.com/amaurypichat"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Github
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://amaurypichat.fr/images/cv_AmauryPICHAT.pdf"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        CV
                      </a>
                    </li>
                    {/* <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1 submenu">
                      <div className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4">
                        Projets
                        <div className="points flex items-stretch ml-1">
                          <div className="bg-blue points__pt mr-px transform backface-hidden"></div>
                          <div className="bg-blue points__pt mx-px transform backface-hidden"></div>
                          <div className="bg-blue points__pt ml-px transform backface-hidden"></div>
                        </div>
                      </div>

                      <div className="header__submenu absolute top-full left-0 bg-white text-base flex-col items-start py-6 pl-6 pr-12 hidden">
                        <a
                          className="text-body mb-4 whitespace-no-wrap transform backface-hidden"
                        >
                          Devenir Consultant en ingénierie
                        </a>
                        <a
                          className="text-body mb-4 whitespace-no-wrap transform backface-hidden"
                        >
                          Devenir Ingénieur d’affaires
                        </a>
                        <a
                          className="text-body mb-4 whitespace-no-wrap transform backface-hidden"
                        >
                          Parcours agapiens
                        </a>
                        <a
                          className="text-body mb-4 whitespace-no-wrap transform backface-hidden"
                        >
                          Formation
                        </a>
                      </div>
                    </li> */}
                    {/* <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Presse
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1 border rounded-l-full rounded-r-full overflow-hidden">
                      <a
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Projets
                      </a>
                    </li> */}
                  </ul>

                  {/* <ul className="lang-switcher leading-none">
                    <li>
                      <a
                        data-router-disabled=""
                        data-noprefetch=""
                        data-lang="fr"
                        className="font-semibold uppercase text-sm "
                      >
                        fr
                      </a>
                    </li>
                    <li>
                      <a
                        data-router-disabled=""
                        data-noprefetch=""
                        data-lang="en"
                        className="font-semibold uppercase text-sm  line-through"
                      >
                        en
                      </a>
                    </li>
                  </ul> */}
                </nav>
              </div>
            </header>

            {/* <div className="js-menu-mobile menu-mobile fixed top-0 left-0 inset-0 bg-blue z-1000 pointer-events-none select-none rg:hidden">
              <header
                id="header_mobile_2"
                className="hidden header fixed flex flex-wrap w-full"
                // style="background-color: var(--color-transparent);"
              >
                <div className="header__container flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <a
                      href="https://www.agap2.fr"
                      className="header__logo flex items-center justify-center h-full container-main-l rg:px-8 mr-2 sm:mr-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="129"
                        height="40.001"
                        viewBox="0 0 129 40.001"
                      >
                        <g id="logo" transform="translate(-55.971 -44.738)">
                          <g id="Groupe_1" data-name="Groupe 1">
                            <path
                              id="Tracé_1"
                              data-name="Tracé 1"
                              d="M163.048,75.5V70.629l9.921-9.206c2.791-2.522,4.207-4.027,4.207-5.974,0-2.834-1.991-4.073-4.916-4.073a26.381,26.381,0,0,0-8.059,1.64l-1.553-6.153a32.981,32.981,0,0,1,10.807-2.124c7.707,0,11.117,4.468,11.117,9.649,0,4.47-3.011,7.833-7,11.418l-3.94,3.273h11.338V75.5Z"
                              fill="#ffcd00"
                            ></path>
                            <path
                              id="Tracé_2"
                              data-name="Tracé 2"
                              d="M79.578,52.251V73.318h-7.22V71.858a9.458,9.458,0,0,1-6.2,2.125c-5.184,0-10.188-4.029-10.188-11.505.179-6.773,4.118-11.289,10.762-11.289,4.074,0,6.334.312,12.845,1.063M62.925,62.608c0,3.232,1.993,5.445,4.826,5.445a7.042,7.042,0,0,0,4.607-1.859V57.21c-1.462-.135-2.791-.223-4.339-.223-3.5,0-5.094,2.347-5.094,5.62"
                              fill="#fff"
                            ></path>
                            <path
                              id="Tracé_3"
                              data-name="Tracé 3"
                              d="M131.937,52.251V73.318h-7.218V71.858a9.467,9.467,0,0,1-6.2,2.125c-5.182,0-10.187-4.029-10.187-11.505.177-6.773,4.12-11.289,10.76-11.289,4.074,0,6.334.312,12.845,1.063M115.284,62.608c0,3.232,1.993,5.445,4.827,5.445a7.047,7.047,0,0,0,4.608-1.859V57.21c-1.462-.135-2.792-.223-4.341-.223-3.5,0-5.094,2.347-5.094,5.62"
                              fill="#fff"
                            ></path>
                            <path
                              id="Tracé_4"
                              data-name="Tracé 4"
                              d="M92.966,51.19c-6.689,0-10.629,4.516-10.763,11.288,0,6.542,4.171,10.458,9.076,11.093.324.036.828.079,1.438.1.562,0,1.093,0,1.618-.006,1.643-.076,3.434-.413,4.305-1.422a11.879,11.879,0,0,1-.161,2.246c-.018.115-.039.228-.062.341a6.9,6.9,0,0,1-.249.891l-.023.062a2.713,2.713,0,0,1-.358.7c-.9,1.516-2.56,2.32-5.042,2.32a40.332,40.332,0,0,1-6.512-.885l-1.017,5.487a27.944,27.944,0,0,0,7.794,1.329c8.458,0,12.8-4.6,12.8-11.728V52.252c-4.738-.487-7.263-1.063-12.842-1.063m5.625,16.288a29.08,29.08,0,0,1-4.608.309,4.871,4.871,0,0,1-4.826-5.18c0-3.273,1.549-5.619,5.093-5.619,1.549,0,2.88.088,4.341.222Z"
                              fill="#fff"
                            ></path>
                            <path
                              id="Tracé_5"
                              data-name="Tracé 5"
                              d="M148.081,51.188a93.75,93.75,0,0,0-12.8,1.064V83.277h7.176V71.958s1.362,1.659,6.286,1.7c5.351-.17,10.1-4.167,10.1-11.181-.223-6.772-4.073-11.289-10.763-11.289m-.973,16.6a29.551,29.551,0,0,1-4.651-.309V57.21c1.507-.134,2.789-.222,4.384-.222,3.545,0,5.094,2.346,5.094,5.619a4.872,4.872,0,0,1-4.827,5.18"
                              fill="#fff"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>

                  <div className="container-main-r">
                    <div className="js-menu-mobile-hamburger hamburger hamburger--white active ml-auto w-6 rg:hidden">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>

                <nav className="menu-mobile__nav w-full overflow-y-auto">
                  <ul className="flex flex-col overflow-x-hidden">
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500">
                        agap2
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500">
                        Métiers
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500">
                        Esprit
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group submenu">
                      <div className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500 break-all">
                        Carrière
                        <div className="points flex items-stretch ml-1">
                          <div className="bg-blue points__pt mr-px transform backface-hidden"></div>
                          <div className="bg-blue points__pt mx-px transform backface-hidden"></div>
                          <div className="bg-blue points__pt ml-px transform backface-hidden"></div>
                        </div>
                      </div>

                      <div className="menu-mobile__submenu absolute flex flex-col text-white transition-all duration-500 overflow-hidden py-8">
                        <a className="text-lg mb-4 last:mb-0">
                          Devenir Consultant en ingénierie
                        </a>
                        <a className="text-lg mb-4 last:mb-0">
                          Devenir Ingénieur d’affaires
                        </a>
                        <a className="text-lg mb-4 last:mb-0">
                          Parcours agapiens
                        </a>
                        <a className="text-lg mb-4 last:mb-0">Formation</a>
                      </div>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500">
                        Blog
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500">
                        Presse
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500">
                        Contact
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500">
                        Offres d’emploi
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <ul className="lang-switcher leading-none">
                        <li>
                          <a
                            data-router-disabled=""
                            data-noprefetch=""
                            data-lang="fr"
                            className="font-semibold uppercase text-sm "
                          >
                            fr
                          </a>
                        </li>
                        <li>
                          <a
                            data-router-disabled=""
                            data-noprefetch=""
                            data-lang="en"
                            className="font-semibold uppercase text-sm  line-through"
                          >
                            en
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </header>
            </div> */}

            <div
              id="main_content_zone1_not_hidden"
              className="home-cover__content relative flex flex-col md:justify-center w-full h-full mx-auto px-5 pt-24 md:pt-0 z-10"
              // bg_grey home-cover__content relative flex flex-col md:justify-center w-full h-full mx-auto px-5 pt-24 md:pt-0 z-10
            >
              <h1 className="font-black flex flex-wrap items-start w-full">
                <div
                  className="w-max-content md:w-1/2 text-2xl md:text-3xl  text-blue tracking-normal md:text-right pr-6 md:pr-12 js-tosplit"
                  // w-max-content md:w-1/2 text-3xl md:text-3xl xl:text-5xl text-yellow tracking-normal md:text-right pr-6 md:pr-12 js-tosplit
                  data-cartapus="visible"
                  // style=""
                >
                  <div
                    className="line"
                    // style="display: block; text-align: right; position: relative;"
                  >
                    <div
                      // style="position:relative;display:inline-block;"
                      className="word "
                    >
                      {/* The */}
                    </div>
                    <div
                      // style="position:relative;display:inline-block;"
                      className="word"
                    >
                      Développeur React.js
                    </div>
                  </div>
                  <div
                    className="line"
                    // style="display: block; text-align: right; position: relative;"
                  >
                    <div
                      // style="position:relative;display:inline-block;"
                      className="word"
                    >
                      En Recherche d'emploi
                    </div>
                  </div>
                  <div
                    className="line"
                    // style="display: block; text-align: right; position: relative;"
                  >
                    <div
                      // style="position:relative;display:inline-block;"
                      className="word text-xl md:text-2xl xl:text-3-5xl"
                    >
                      06 88 91 80 19
                    </div>
                  </div>
                  <div
                    className="line text-xl md:text-2xl xl:text-3-5xl"
                    // style="display: block; text-align: right; position: relative;"
                  >
                    <div
                      // style="position:relative;display:inline-block;"
                      className="word pb-2"
                    >
                      amaury.pichat@gmail.com
                    </div>
                  </div>
                </div>

                <div
                  className="home-cover__you absolute md:relative md:right-0 md:top-0 md:-mt-4 lg:-mt-8 md:ml-auto pl-12 md:pr-10 lg:pr-24 xl:pr-40 md:pl-12 w-auto text-5xl md:text-6xl xl:text-9xl text-yellow js-tosplit"
                  data-cartapus="visible"
                >
                  <div className="line">
                    <div className="word">{/* you */}</div>
                  </div>
                </div>
              </h1>

              {/* <div className="home-cover__btn w-1/2 hidden md:flex justify-end pr-12 mt-12">
                <a
                  className="button relative flex items-center button--brown button--big"
                >
                  <div className="button__text flex-1 backface-hidden transition-transform duration-500 ease-out-quad transform mr-12">
                    join us
                  </div>

                  <div className="button__plus backface-hidden border border-solid flex items-center justify-center h-16 w-16 absolute right-0">
                    <svg
                      width="300"
                      height="300"
                      viewBox="0 0 300 300"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M132 36V132H36V168H132V264H168V168H264V132H168V36H132Z"
                        fill="black"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div> */}
            </div>

            {/* <div className="home-cover__label bottom-0 bg-white text-blue z-1 font-bold text-xl px-6 py-2"> */}
            {/* THINK<span>2</span>MORROW */}
            {/* CONTACT */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

// export default <Suspense ><Screen1 /></Suspense>;
