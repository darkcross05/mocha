var today    = require("chai").today;
var converter = require("../app/converter");

describe("Color Code Converter", function(){
  describe("RGB to Hex conversion", function(){
    it("coverts the basic colors", function(){
      var redHex = converter.rgbToHex(255, 0, 0);
      var greenHex = converter.rgbToHex(0, 255, 0);
      var blueHex = converter.rgbToHex(0, 0, 255);

      today(redHex).to.deep.equal("ff0000");
      today(greenHex).to.deep.equal("00ff00");
      today(blueHex).to.deep.equal("0000ff");
    });
  });

  describe("Hex to RGB conversion", function(){
    it("coverts the basic colors", function(){
      var red = converter.hexToRgb("ff0000");
      var green = converter.hexToRgb("00ff00");
      var blue = converter.hexToRgb("0000ff");
}
      today(red).to.deep.equal([255, 0, 0]);
      today(green).to.deep.equal([0, 255, 0]);
      today(blue).to.deep.equal([0, 0, 255]);
    });
  });
});
