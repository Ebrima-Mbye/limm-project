export default function getStyles(props, showText, deviceSizeContext) {
  const { isMiddleScreen, isWideScreen } = deviceSizeContext;
  return {
    container: {
      backgroundColor: props.bg,
      color: props.color,
      minHeight: isWideScreen ? "450px" : isMiddleScreen ? "350px" : "400px",
      maxHeight: isWideScreen ? "450px" : isMiddleScreen ? "350px" : "400px",
    },
    hoverOverlay: {
      zIndex: "10",
      backgroundColor: "inherit",
      height: showText && isWideScreen ? "25%" : showText ? "20%" : "90%",
      transition: "height 0.4s linear, padding 0.4s linear",
      padding: `${showText ? "0" : "5rem"} 0`,
      display: "flex",
      flexDirection: "column",
      top: "2rem",
      left: "1.5rem",
      right: "1.5rem",
      bottom: "2rem",
      justifyContent: showText ? "space-between" : "center",
    },
    arrow: {
      transition: "all 0.5s linear",
      width: showText ? "35px" : "100px",
    },
    title: {
      fontSize: showText ? "1.5rem" : "2.5rem",
      transition: "font-size 0.5s linear",
    },
    textSection: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "absolute",
      bottom: "1.5rem",
      right: "1.5rem",
      left: "1.5rem",
    },
    button: {
      backgroundColor: props.btnColor,
      color: props.btnTextColor,
    },
  };
}
