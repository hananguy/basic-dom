const reservations = {
  bob: { claimed: false },
  ted: { claimed: true }
}
export function doesHaveAReservation(name)
    {
        let hasReservation = false;
        const lowerCaseName = name.toLowerCase();
        if(reservations.hasOwnProperty(lowerCaseName))
        {
            hasReservation = true;
        }
        return hasReservation;
    }
export function addReservation(reservations, name)
    {
        reservations[name] = {claimed: true};
    }