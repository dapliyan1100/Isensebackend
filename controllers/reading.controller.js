import prisma from "../lib/prisma.js";

export const updateLastReading = async (req, res) => {
    const id = req.params.id;
    try {
        const lastReading = await prisma.lastReading.update({
            where: {
              sensorId: id,
            },
            data: {
              smokeLevel: req.body.gasConcentration, 
            },
          });
          res.status(200).json(lastReading);
    } catch (error) {
        
    res.status(500).json({ message: error });
    }
};
