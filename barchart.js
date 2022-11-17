class Chart extends exports.Component {
  render() {
    return /* @__PURE__ */ jsx(Plot, {
      data: [{
        x: ["Jul", "Aug", "Sep", "Oct", "Nov"],
        y: [250, 200, 300, 450, 500],
        type: "bar"
      }],
      layout: {
        width: 800,
        height: 600,
        title: "Monthly revenue"
      }
    });
  }
}
