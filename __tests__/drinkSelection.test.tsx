import { render, screen, fireEvent } from '@testing-library/react';
import { DrinkSelection } from '../components/drinkSelection';
import { mockDrink } from '../__fixtures__';

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
    props.selectedDrink = mockDrink;
    render(<DrinkSelection {...props} />);
    expect(screen.getByText(mockDrink.strDrink)).toBeInTheDocument();
    expect(screen.getByAltText(mockDrink.strDrink)).toBeInTheDocument;
    expect(screen.getByText(mockDrink.strIngredient1)).toBeInTheDocument();
    expect(screen.getByText(mockDrink.strIngredient2)).toBeInTheDocument();
    expect(screen.getByText(mockDrink.strIngredient3)).toBeInTheDocument();
    expect(screen.getByText(mockDrink.strInstructions)).toBeInTheDocument();
  });

  it('closes the selected drink details when the close button is clicked', () => {
    props.selectedDrink = mockDrink;
    render(<DrinkSelection {...props} />);
    // tell test to be mobile view so that the close button is visible
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 300,
    });
    fireEvent.click(screen.getByRole('button'));
    expect(props.setSelectedDrink).toHaveBeenCalledWith(null);
  });

  it('closes the selected drink details when the overlay is clicked', () => {
    render(<DrinkSelection {...props} />);
    fireEvent.click(screen.getByRole('presentation'));
    expect(props.setSelectedDrink).toHaveBeenCalledWith(null);
  });
});
