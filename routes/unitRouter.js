const router = require("express").Router();
const { UnitController } = require("../controllers");

const { authentication, authorization } = require("../middlewares");
const { uploadVendorUnitMiddleware } = require("../aws");

router.get("/", UnitController.getAllVendorUnit);
router.use(authentication);
router.post(
  "/add",
  uploadVendorUnitMiddleware,
  UnitController.postAddVendorUnit
);
router.get("/:unitId", UnitController.getVendorUnitById);

router.use("/:unitId", authorization);
router.put("/:unitId", UnitController.putEditVendorUnitById);
router.delete("/:unitId", UnitController.deleteVendorUnitById);

module.exports = router;
