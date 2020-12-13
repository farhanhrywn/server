const { Unit } = require('../models')

module.exports = class UnitController {
  static async postAddVendorUnit(req, res, next) {
    try {
      const { name, brand, type, year, category } = req.body
      const newUnit = new Unit({
        name: name,
        brand: brand,
        type: type,
        year: year,
        category: category
      })

      const createdUnit = await newUnit.save()

      res.status(201).json(createdUnit)
    } catch (err) {
      next(err)
    }
  }
}