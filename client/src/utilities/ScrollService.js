import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from "rxjs";

export default class ScrollService {
  static scrollHandler = new ScrollService();

  static currentScreenBroadcaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  }

  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("ContactMe");
    if (!contactMeScreen) return;

    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };
  scrollToHome = () => {
    let homeScreen = document.getElementById("Home");
    if (!homeScreen) return;

    homeScreen.scrollIntoView({ behavior: "smooth" });
  };

  /* CHECK IF ELEMENT IS IN VIEW .this simply means if the document appears fully on the screen or not */
  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    //this method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
    // the view port  refers to the part of the document you're viewing which is currently visible in its window
    let elementTop = rec.top;
    let elemBottom = rec.bottom;

    /* when the element is Partially Visible */
    let partiallyVisible = elementTop < window.innerHeight && elemBottom >= 0;

    /* Completely Visible */
    let completelyVisible = elementTop >= 0 && elemBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;

      case "complete":
        return completelyVisible;

      default:
        return false;
    }
  };

  /* CHECK THE SCREEN THATS CURRENTLY UNDER VIEWPORT */
  // which means the screen that is displayed fully
  checkCurrentScreenUnderViewport = (event) => {
    if (!event || Object.keys(event).length < 1) return;

    for (let screen of TOTAL_SCREENS) {
      let screenFromDOM = document.getElementById(screen.screen_name);
      if (!screenFromDOM) continue;

      let fullyVisible = this.isElementInView(screenFromDOM, "complete");
      let partiallyVisible = this.isElementInView(screenFromDOM, "partial");

      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
          //BROADCAST FADE IN EFFECT
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          screen["alreadyRendered"] = true;
          break;
        }

        if (fullyVisible) {
          // BROADCAST SCREEN NAME
          ScrollService.currentScreenBroadcaster.next({
            screenInView: screen.screen_name,
          });
          break;
        }
      }
    }
  };
}
