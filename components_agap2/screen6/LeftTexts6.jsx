import * as React from "react";



export function Ttext36() {
  return (
    <div
      id="texte_bas_36"
      style={{
        // width: "300px",
      
        // textAlign: "right",
      }}
    >
      <div className="w-full h-full">
        <div className="flex flex-col">
          {/* <div className="flex flex-row"> */}
          <div
            className="w-50 text1 text-green 
        font-bold text-2xl md:text-2-5xl xl:text-3xl opacity-0 backface-hidden border-2 p-2
        "
          >
            <ul>
              <li className="effet_perso">
                <a href="https://amaurypichat.fr/siteWeb1/index.html">
                  Voir la réalisation
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}

export function Timeline3(scrollSunTl, q) {
  scrollSunTl.fromTo(
    q("#texte_bas_36 .text1"),
    {
      opacity: 0
    },
    {
      scrollTrigger: {
        trigger: "#screen6",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=90% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      opacity: 1,
      // y: 0,
    }
  );

  

  return scrollSunTl;
}