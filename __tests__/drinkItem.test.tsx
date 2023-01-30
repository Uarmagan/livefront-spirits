import React from 'react';
import { render, screen } from '@testing-library/react';
import { DrinkItem } from '../components/drinkItem';
import { mockDrink } from '../__fixtures__';
describe('DrinkItem', () => {
  let props: { drink: any; setSelectedDrink: any };

  beforeEach(() => {
    props = {
      drink: mockDrink,
      setSelectedDrink: jest.fn(),
    };
  });

  it('should display the drink name and image', () => {
    render(<DrinkItem {...props} />);

    expect(screen.getByText(mockDrink.strDrink)).toBeInTheDocument();
    expect(screen.getByAltText(mockDrink.strDrink)).toBeInTheDocument();
  });

  it('should call setSelectedDrink when the see the recipe button is clicked', () => {
    render(<DrinkItem {...props} />);

    screen.getByText('See The Recipe').click();
    expect(props.setSelectedDrink).toHaveBeenCalledWith(mockDrink);
  });
});
