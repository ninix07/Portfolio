import { useState, useEffect } from 'react';

interface Availability {
  status: string;
  isAvailable: boolean;
}

const getAvailability = (): Availability => {
  const now = new Date();

  // Convert to NPT (UTC+5:45)
  const utcOffset = now.getTimezoneOffset() * 60000;
  const utcTime = now.getTime() + utcOffset;
  const nptTime = new Date(utcTime + (345 * 60000)); // 5 hours 45 minutes

  const nptHour = nptTime.getHours();

  if (nptHour >= 7 && nptHour < 9) {
    return {
      status: 'Currently Busy @ Westminster College',
      isAvailable: false,
    };
  }

  if (nptHour >= 9 && nptHour < 18) {
    return {
      status: 'Currently Busy @ SecurityPal AI',
      isAvailable: false,
    };
  }

  return {
    status: 'Available for a quick chat on opportunities',
    isAvailable: true,
  };
};

export const useAvailability = (): Availability => {
  const [availability, setAvailability] = useState<Availability>(getAvailability());

  useEffect(() => {
    const interval = setInterval(() => {
      setAvailability(getAvailability());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return availability;
};
