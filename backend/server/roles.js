const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
  ac.grant("user").readAny("profile");

  ac.grant("admin").extend("user").readAny("profile").deleteAny("profile");

  return ac;
})();
