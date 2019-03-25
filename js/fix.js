jQuery.event.special.touchstart = {
  setup: function( _, ns, handle ){
    if ( ns.includes("noPreventDefault") ) {
      this.addEventListener("touchstart", handle, { passive: true });
    } else {
      this.addEventListener("touchstart", handle, { passive: false });
    }
  }
};

jQuery.event.special.touchmove = {
  setup: function( _, ns, handle ){
    if ( ns.includes("noPreventDefault") ) {
      this.addEventListener("touchmove", handle, { passive: true });
    } else {
      this.addEventListener("touchmove", handle, { passive: false });
    }
  }
};

jQuery.event.special.scroll = {
  setup: function( _, ns, handle ){
    if ( ns.includes("noPreventDefault") ) {
      this.addEventListener("scroll", handle, { passive: true });
    } else {
      this.addEventListener("scroll", handle, { passive: false });
    }
  }
};

jQuery.event.special.wheel = {
  setup: function( _, ns, handle ){
    if ( ns.includes("noPreventDefault") ) {
      this.addEventListener("wheel", handle, { passive: true });
    } else {
      this.addEventListener("wheel", handle, { passive: false });
    }
  }
};
