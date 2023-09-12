const Space = require("../Model/spaceModel");

// add space
const addSpace = async (req, res) => {
  try {
    const { location, spaceName, slots, price } = req.body;

    if (!location || !spaceName || !slots || !price) {
     return res.status(400).json({ error: "All Fields are required" });
    }

    const spaceExist = await Space.findOne({ spaceName, location });

    if (!spaceExist) {
      const space = await Space.create({
        location,
        spaceName,
        slots,
        price,
      });

      if (space) {
        return res.status(201).json({
          _id: space._id,
          location: space.location,
          spaceName: space.spaceName,
          slots: space.slots,
          price: space.price,
        });
      }
    }
  } catch (error) {
    return res.status(400).json({ error: "Space Name is already Exist" });
  }
};

// fetch all spaces

const allSpaces = async (req, res) => {
  try {
    const spaces = await Space.find({}).populate("location");

    if (spaces) {
     return res.status(201).json(spaces);
    }
  } catch (error) {
    return res.status(400).json({ error: "Unable to fetch all the data" });
  }
};

//fetch single spaces

const singleSpaces = async (req, res) => {
  try {
    const spaceId = req.params.id;

    const space = await Space.findOne({ _id: spaceId }).populate("location");

    if (space) {
     return res.status(201).json(space);
    }
  } catch (error) {
    return res.status(400).json({ error: "Unable to fetch single the data" });
  }
};

// fetch group spaces

const groupSpaces = async (req, res) => {
  try {
    const location = req.params.id;

    const groups = await Space.find({ location: location }).populate(
      "location"
    );

    if (groups) {
     return res.status(201).json(groups);
    }
  } catch (error) {
   return res.status(400).json({ error: "Unable to fetch group the data" });
  }
};

// update Spaces
const updateSpace = async (req, res) => {
  try {
    const { spaceId, slots, price } = req.body;

    const update = await Space.findByIdAndUpdate(
      spaceId,
      {
        slots,
        price,
      },
      {
        new: true,
      }
    ).populate("location");

    if (update) {
     return res.status(201).json(update);
    }
  } catch (error) {
    return res.status(400).json({ error: "Unable to update the data" });
  }
};

// remove Space
const removeSpace = async (req, res) => {
  try{
    const spaceId = req.params.id;

    const remove = await Space.deleteOne({ _id: spaceId });

    if (remove) {
    return  res.status(201).json(remove);
    }
  } catch(error) {
   return res.status(400).json({ error: "Unable to remove the data" });
  }
};

module.exports = {
  allSpaces,
  addSpace,
  removeSpace,
  singleSpaces,
  groupSpaces,
  updateSpace,
};
