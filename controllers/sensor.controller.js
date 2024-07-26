import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const getSensors = async (req, res) => {
  try {
    const Sensor = await prisma.sensor.findMany();
    res.status(200).json(Sensor);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get Sensor!" });
  }
};

export const createSensor = async (req, res) => {
    try {
      const newSensor = await prisma.sensor.create({
        data: req.body,
      });
  
      const initialLastReading = await prisma.lastReading.create({
        data: {
          smokeConsentration: 0,    
          sensorId: newSensor.id, 
        },
      });
  
      const updatedSensor = await prisma.sensor.update({
        where: { id: newSensor.id },
        data: {
          lastReadingId: initialLastReading.id, 
        },
      });
  
      res.status(200).json(updatedSensor);
    } catch (error) {
        console.log(err);
        res.status(500).json({ message: "Failed to add sensor!" });
    }
  };
  

export const getSensorbyId = async (req, res) => {
  const id = req.params.id;
  try {
    const sensor = await prisma.sensor.findUnique({
      where: { id },
    });
    res.status(200).json(sensor);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get sensor!" });
  }
};

// export const updateSensor = async (req, res) => {
//   const id = req.params.id;
//   const tokensensorId = req.sensorId;
//   const { password, avatar, ...inputs } = req.body;

//   if (id !== tokensensorId) {
//     return res.status(403).json({ message: "Not Authorized!" });
//   }

//   let updatedPassword = null;
//   try {
//     if (password) {
//       updatedPassword = await bcrypt.hash(password, 10);
//     }

//     const updatedsensor = await prisma.sensor.update({
//       where: { id },
//       data: {
//         ...inputs,
//         ...(updatedPassword && { password: updatedPassword }),
//         ...(avatar && { avatar }),
//       },
//     });

//     const { password: sensorPassword, ...rest } = updatedsensor;

//     res.status(200).json(rest);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Failed to update Sensor!" });
//   }
// };

// export const deletesensor = async (req, res) => {
//   const id = req.params.id;
//   const tokensensorId = req.sensorId;

//   if (id !== tokensensorId) {
//     return res.status(403).json({ message: "Not Authorized!" });
//   }

//   try {
//     await prisma.sensor.delete({
//       where: { id },
//     });
//     res.status(200).json({ message: "sensor deleted" });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Failed to delete Sensor!" });
//   }
// };

