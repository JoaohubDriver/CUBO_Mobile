import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import MapView from 'react-native-maps';
import { Text } from "react-native";

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

export default function UserLocation() {

  const [userIsMoving, setUserIsMoving] = useState(false);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [previousLocation, setPreviousLocation] = useState<Location.LocationObject | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      if (previousLocation) {
        const distance = calculateDistance(
          previousLocation.coords.latitude,
          previousLocation.coords.longitude,
          location.coords.latitude,
          location.coords.longitude
        );
        const timeDifference = (location.timestamp - previousLocation.timestamp) / 1000; // in seconds
        let speed = distance / timeDifference; // m/s

        setUserIsMoving(speed > 1.0);
      }

      setPreviousLocation(location);
      setLocation(location);
    })();
  }, []);

  if (!location) {
    return <Text>Carregando...</Text>;
  }

  return (
    <MapView
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={{
        width: '100%',
        height: '90%',
        padding: 0,
        margin: 0,
      }}
    />
  );
}
