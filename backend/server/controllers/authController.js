const { roles } = require("../roles");

// To grant the user there permissions to view or delete

exports.grantAccess = function (action, resource) {
  return async (req, res, next) => {
    try {
      const permission = roles.can(req.user.role)[action](resource);
      if (!permission.granted) {
        return res.status(401).json({
          error: "You don't have enough permission to perform this action",
        });
      }
      next();
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  };
};

// If the user is logged in or not

exports.allowIfLoggedin = async (req, res, next) => {
  try {
    const user = res.locals.loggedInUser;
    if (!user)
      return res.status(401).json({
        error: "You need to be logged in to access this route",
      });
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
