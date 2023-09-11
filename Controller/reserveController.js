const Reserve = require("../Model/reserveModel");

// create reserve slot

const addReserve = async (req, res) => {
  try {
    const {
      booking,
      user,
      location,
      space,
      slotNo,
      vehicalNo,
      entryDate,
      entryTime,
      hours,
      amount,
    } = req.body;

    if (
      !user ||
      !location ||
      !booking ||
      !space ||
      !slotNo ||
      !vehicalNo ||
      !entryDate ||
      !entryTime ||
      !hours ||
      !amount
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const slotreserve = await Reserve.findOne({ location, space, slotNo });

    if (!slotreserve) {
      const reserve = await Reserve.create({
        booking,
        user,
        location,
        space,
        slotNo,
        vehicalNo,
        entryDate,
        entryTime,
        hours,
        amount,
      });

      if (reserve) {
        return res.status(201).json({
          _id: reserve._id,
          booking: reserve.booking,
          user: reserve.user,
          location: reserve.location,
          space: reserve.space,
          slotNo: reserve.slotNo,
          vehicalNo: reserve.vehicalNo,
          entryDate: reserve.entryDate,
          entryTime: reserve.entryTime,
          hours: reserve.hours,
          amount: reserve.amount,
        });
      } else {
        return res.status(400).json({ error: "Unable to reserve slots" });
      }
    }
  } catch (error) {
    return res.status(400).json({ error: "Slot is already reserved" });
  }
};

// fetch all reserves
const allReserves = async (req, res) => {
  try {
    const reserves = await Reserve.find({})
      .populate("location")
      .populate("space")
      .populate("user", "-password");

    if (reserves) {
      res.status(201).json(reserves);
    }
  } catch (error) {
    return res.status(400).json({ error: "Unable to fetch data" });
  }
};

const singleReserves = async (req, res) => {
  try {
    const { booking } = req.query;

    const reserves = await Reserve.findOne({ booking: booking })
      .populate("location")
      .populate("space")
      .populate("user", "-password");

    if (reserves) {
      res.status(201).json(reserves);
    }
  } catch (error) {
    res.status(400).json({ error: "Unable to fetch data" });
  }
};

const groupReseve = async (req, res) => {
  try {
    const { location, space } = req.query;

    const reserve = await Reserve.find({
      location: [location],
      space: [space],
    });

    if (reserve) {
      res.status(201).json(reserve);
    }
  } catch (error) {
    res.status(400).json({ error: "error occured" });
  }
};

const removeReserve = async (req, res) => {
  try {
    const slotId = req.params.id;

    const remove = await Reserve.deleteOne({ _id: slotId });

    if (remove) {
      res.status(201).json(remove);
    }
  } catch (error) {
    res.status(400).json({ Error: "Unable to remove slots" });
  }
};

module.exports = {
  addReserve,
  allReserves,
  removeReserve,
  singleReserves,
  groupReseve,
};
