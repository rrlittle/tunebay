var jsonServer = require("json-server");
const cookieParser = require("cookie-parser");
var server = jsonServer.create();
var router = jsonServer.router("api/db.json");

const middlewares = jsonServer.defaults({
  static: "node_modules/json-server/lib/server/public"
});

server.use(middlewares);
server.use(cookieParser());
server.use(router);

// If you want to target /posts specifically
router.render = function(req, res) {
  if (req.url.match(/\/queue/g)) {
    res.jsonp({
      count: res.getHeader("x-total-count"),
      results: res.locals.data
    });
  } else {
    res.jsonp(res.locals.data);
  }
};

// Or /resources in general
// router.render = function(req, res) {
//   if (req.method === "GET" && !req.params.id) {
//     var obj = {};
//     obj[req.params.resource] = res.locals.data;
//     res.jsonp(obj);
//   } else {
//     res.jsonp(res.locals.data);
//   }
// };

const port = 5000;

server.listen(port, () => {
  console.log("api listening on port", port);
});
