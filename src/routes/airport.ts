import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { Airport } from '../entity/Airport';

const router = Router();

router.get('/:iata_code', async (req, res) => {
  const { iata_code } = req.params;
  try {
    const airportRepository = AppDataSource.getRepository(Airport);
    const airport = await airportRepository.findOne({
      where: { iataCode: iata_code },
      relations: ['city', 'city.country'],
    });

    if (!airport) {
      return res.status(404).json({ error: 'Airport not found' });
    }

    res.json({
      airport: {
        id: airport.id,
        icao_code: airport.icaoCode,
        iata_code: airport.iataCode,
        name: airport.name,
        type: airport.type,
        latitude_deg: airport.latitudeDeg,
        longitude_deg: airport.longitudeDeg,
        elevation_ft: airport.elevationFt,
        address: {
          city: {
            id: airport.city.id,
            name: airport.city.name,
            country_id: airport.city.countryId,
            is_active: airport.city.isActive,
            lat: airport.city.lat,
            long: airport.city.long,
          },
          country: airport.city.country || null,
        },
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
