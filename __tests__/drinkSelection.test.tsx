import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { DrinkSelection } from '../components/drinkSelection';
import { mockDrinkMarg } from '../__fixtures__';

describe('DrinkSelection', () => {
  let props: { selectedDrink: any; setSelectedDrink: any };

  beforeEach(() => {
    props = {
      selectedDrink: null,
      setSelectedDrink: jest.fn(),
    };
  });

  it('renders choose a drink text when there is no selected drink', () => {
    render(<DrinkSelection {...props} />);
    expect(screen.getByText('Choose a Drink')).toBeInTheDocument();
  });

  it('renders selected drink details when there is a selected drink', () => {
    props.selectedDrink = mockDrinkMarg;
    render(<DrinkSelection {...props} />);
    expect(screen.getByText(mockDrinkMarg.strDrink)).toBeInTheDocument();
    expect(screen.getByAltText(mockDrinkMarg.strDrink)).toBeInTheDocument;
    expect(screen.getByText(mockDrinkMarg.strIngredient1)).toBeInTheDocument();
    expect(screen.getByText(mockDrinkMarg.strIngredient2)).toBeInTheDocument();
    expect(screen.getByText(mockDrinkMarg.strIngredient3)).toBeInTheDocument();
    expect(screen.getByText(mockDrinkMarg.strInstructions)).toBeInTheDocument();
  });

  it('closes the selected drink details when the close button is clicked', () => {
    props.selectedDrink = mockDrinkMarg;
    render(<DrinkSelection {...props} />);
    // tell test to be mobile view so that the close button is visible
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 300,
    });
    fireEvent.click(screen.getByRole('button'));
    waitFor(() => {
      expect(
        screen.queryByTestId('drink-selection-section')
      ).not.toBeInTheDocument();
    });
    expect(props.setSelectedDrink).toHaveBeenCalledWith(null);
  });

  it('closes the selected drink details when the overlay is clicked', () => {
    render(<DrinkSelection {...props} />);
    fireEvent.click(screen.getByRole('presentation'));
    expect(props.setSelectedDrink).toHaveBeenCalledWith(null);
  });
});
