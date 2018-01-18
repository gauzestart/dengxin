var express = require('express');
var router = express.Router();
var UserModel = require("../model/User");
var CommodityModel = require("../model/commodity");
var md5 = require("md5");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', {  });
});

router.post('/loginajax', function(req, res, next) {
  var username=req.body.username;
  var psw=req.body.psw;
  var result={
  	code:1,
		message : "登陆成功"
  };
	if(username!="dengxin" || psw!="dx19971218") {
		result.code = -101;
		result.message = "您的账号或密码错误,请重新输入"
	}
	res.json(result);
});
router.post('/api/shop_pdd', function(req, res, next) {
	var comname=req.body.comname;
	var num=req.body.num;
	var category=req.body.category;
	var brand=req.body.brand;
	var ourprice=req.body.ourprice;
	var bazaarprice=req.body.bazaarprice;
	var sales=req.body.sales;
	var integral=req.body.integral;
	var integral2=req.body.integral2;
	var result = {
		code: 1,
		message: "添加成功"
	};
	if(comname==""){
		result.message = "商品名不能为空";
		result.code = -120;
//		console.log("商品名不能为空");
		return;
	}
	CommodityModel.find({comname: comname}, function (err, docs) {
		if(docs.length > 0) {
			result.code = -109;
			result.message = "此商品已经在列表中";
			res.json(result);
			return;
		}
		var um=new CommodityModel();
		um.comname=comname;
		um.num=num;
		um.category=category;
		um.brand=brand;
		um.ourprice=ourprice;
		um.bazaarprice=bazaarprice;
		um.sales=sales;
		um.integral=integral;
		um.integral2=integral2;
		um.save(function(err){
			if(err){
				result.code = -110;
				result.message = "添加失败";
				res.send("添加失败");
			}
		});
		res.json(result);
	})
})

router.get('/list', function(req, res, next) {
  res.render('list', { title: '列表' });
});
router.get('/iframe/management', function(req, res, next) {
  res.render('management', {  });
});
router.get('/iframe/shop_add', function(req, res, next) {
  res.render('shop_add', {  });
});
router.get('/iframe/shoplist', function(req, res, next) {
  res.render('shoplist', {  });
});
module.exports = router;


