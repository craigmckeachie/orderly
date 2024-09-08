export function formatPhoneNumber(phoneNumber: string): string {
  if (phoneNumber.length !== 10) {
    return '';
  }

  const areaCode = phoneNumber.substring(0, 3);
  const firstThree = phoneNumber.substring(3, 6);
  const lastFour = phoneNumber.substring(6);

  return `(${areaCode}) ${firstThree}-${lastFour}`;
}
