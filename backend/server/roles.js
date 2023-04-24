const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
  ac.grant("user").readOwn("profile").readAny("profile").updateOwn("profile");

  ac.grant("admin").extend("user").readAny("profile").deleteAny("profile");

  return ac;
})();
