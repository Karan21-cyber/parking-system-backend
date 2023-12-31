const Location = require("../Model/locationModel");

// add locations
const addLocaiton = async (req, res) => {
  try {
    const { locationName, address, phone } = req.body;

    if (!locationName || !address || !phone) {
     return res.status(400).json({ error: "Fields should not be empty" });
    }

    const locationExist = await Location.findOne({ locationName });

    if (!locationExist) {
      const location = await Location.create({
        locationName,
        address,
        phone,
      });

      if (location) {
       return res.status(201).json({
          id: location._id,
          locationName: location.locationName,
          address: location.address,
          phone: location.phone,
        });
      } else {
        return res.status(400).json({
          error: "Unable to add new location",
        });
      }
    }
  } catch (error) {
  return  res.status(400).json({ error: "Location Name is already exists" });
  }
};

// fetch all locations
const allLoaction = async (req, res) => {
  try {
    const locations = await Location.find();
    return res.json(locations);
  } catch (error) {
    return res.status(400).json({ error: "unable to fetch locations" });
  }
};

// fetch single locations
const singleLocation = async (req, res) => {
  try {
    const locationId = req.params.id;

    const single = await Location.findOne({ _id: locationId });

    if (single) {
      return res.status(201).json(single);
    }
  } catch (error) {
    return res.status(400).json({ error: "Unable to fetch single data" });
  }
};

// update locations
const updateLocation = async (req, res) => {
  try {
    const { locationId, locationName, address, phone } = req.body;

    const update = await Location.findByIdAndUpdate(
      locationId,
      {
        locationName,
        address,
        phone,
      },
      {
        new: true,
      }
    );

    if (update) {
      return res.status(201).json({ update });
    } else {
      return res.status(400).json({ erro: "unable to find an Id" });
    }
  } catch (error) {
    return res.status(400).json({
      error: "Unable to update your locations",
    });
  }
};

// remove locations
const removeLocation = async (req, res) => {
  try {
    const locationId = req.params.id;

    const remove = await Location.deleteOne({ _id: locationId });

    if (remove) {
      return res.status(201).json(remove);
    } else {
      return res.status(401).json({ failure: "Unable to find location" });
    }
  } catch (error) {
    return res.status(400).json({ error: "Unable to remove your location" });
  }
};

module.exports = {
  addLocaiton,
  singleLocation,
  allLoaction,
  removeLocation,
  updateLocation,
};
