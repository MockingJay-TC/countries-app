export const currencies = (
  currencies: { [s: string]: unknown } | ArrayLike<unknown>
) => {
  const mappedArray = Object.values(currencies).map((currency) => {
    // You can access properties of each currency here
    const { name, symbol } = currency;

    // Do something with the data
    console.log(`${name} has symbol ${symbol}`);

    // If you want to modify the object or return something, you can do it here
    // return {
    //   ...currency, // If you want to keep the existing properties
    //   someNewProperty: "new value",
    // };
  });

  return mappedArray;
};
