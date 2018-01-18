var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Commodity = new Schema({
    comname    : String,
    num        : String,
    category   : String,
    brand      : String,
    ourprice   : String,
    bazaarprice: String,
    sales      : String,
    integral   : String,
    integral2  : String,
//  src        : String,
    create_date: { type: Date, default: Date.now }
});
var CommodityModel = mongoose.model('commodities',Commodity);
module.exports = CommodityModel;