export default (handler, delay = 250) => {
    const dblclickconf = {
      clicks: 0,
      timer: null,
      delay,
    };

    return (event) => {
      dblclickconf["clicks"] += 1;
      if (dblclickconf["clicks"] <= 1) {
        dblclickconf["timer"] = setTimeout(() => {
          dblclickconf["clicks"] = 0;
        }, dblclickconf["delay"]);
      } else {
        clearTimeout(dblclickconf["timer"]);
        dblclickconf["clicks"] = 0;
        handler(event);
      }
    };
  };