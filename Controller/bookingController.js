const Booking = require("../Model/bookingModel");

// addbooking

const addbooking = async (req, res) => {
  try {
    const { user, location, space, slotNo } = req.body;

    if (!user || !location || !space || !slotNo) {
      res.status(400).json({ error: "All Fields are required" });
    }
    const booking = await Booking.create({
      user,
      location,
      space,
      slotNo,
    });

    if (booking) {
      res.status(201).json({
        _id: booking._id,
        user: booking._id,
        location: booking.location,
        space: booking.space,
        slotNo: booking.slotNo,
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const singlebooking = async (req, res) => {
  try {
    const { user, location, space, slotNo } = req.query;

    const data = await Booking.findOne({ user, location, space, slotNo });

    if (data) {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(400).json({ error: "unable to fetch single data" });
  }
};

const fetchBooking = async (req, res) => {
  try {
    const data = await Booking.find({});

    if (data) {
      res.status(201).json(data);
    }
  } catch (error) {
    res.status(400).json({ error: "unable to fetch all data" });
  }
};

const removeBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;

    const remove = await Booking.deleteOne({ _id: bookingId });

    if (remove) {
      res.status(201).json(remove);
    }
  } catch (error) {
    res.status(400).json({ Error: "Unable to remove booking" });
  }
};

module.exports = { addbooking, singlebooking, fetchBooking, removeBooking };
