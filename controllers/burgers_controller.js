var db = require("../models");


module.exports = function (app) {

// // Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   burger.all(function(data) {
//     var hbsObject = {
//         burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });


app.get("/", function (req, res) {

  db.Burgers.findAll({
 
}).then(function (dbPost) {
    var hbsObject = {
        burgers: dbPost
    };

    res.render("index", hbsObject);

  });

});


// //post new burgers
// router.post("/api/burgers", function(req, res) {
//   console.log(req.body.newburger)

//     burger.create([
//     "burger_name"
//   ], [
//     req.body.newburger
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });


app.post("/api/burgers", function (req, res) {


      db.Burgers.create({
        burger_name:  req.body.newburger

      }).then(function (dbPost) {
        console.log("dbPost")
        res.redirect("/");

  })


 
});

// router.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.update({
//     devoured: req.body.devoured
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


app.put("/api/burgers/:id", function (req, res) {


  db.Burgers.update({
    devoured: req.body.devoured
  }, {
      where: {
          id: req.params.id
      }
  }).then(function (results) {
    console.log("results")
    res.status(200).end()
  })

});
















}








// router.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.update({
//     devoured: req.body.devoured
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });



// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// // Export routes for server.js to use.
// module.exports = router;
