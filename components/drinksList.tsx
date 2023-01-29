export const DrinksList = ({ drinks }: any): ReactElement => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      {drinks?.map((drink: any) => (
        <div key={drink.idDrink}>
          <h1>{drink.strDrink}</h1>
        </div>
      ))}
    </div>
  );
};
