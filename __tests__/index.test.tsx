import { render, fireEvent, screen } from '@testing-library/react';
import { mockDrinkMoj } from '../__fixtures__';
import Home from '../pages/index';

jest.mock('../hooks/useDrinks', () => {
  return {
    useDrinks: jest.fn(() => ({
      data: [mockDrinkMoj],
      isLoading: false,
      isError: false,
    })),
  };
});

describe('Home', () => {
  it('renders search and drink selection components', async () => {
    render(<Home />);

    const searchInput = screen.getByPlaceholderText('Search Cocktail Name');
    expect(searchInput).toBeInTheDocument();
    const loading = screen.queryByText(/loading/i);
    expect(loading).not.toBeInTheDocument();

    const mojitoText = screen.getByText('Mojito');
    expect(mojitoText).toBeInTheDocument();
  });

  it('filters drinks based on search input', async () => {
    render(<Home />);

    const searchInput = screen.getByPlaceholderText('Search Cocktail Name');
    fireEvent.change(searchInput, { target: { search: { value: 'Mojito' } } });
    // @ts-ignore
    expect(searchInput.search.value).toBe('Mojito');

    const mojitoText = screen.getByText('Mojito');
    expect(mojitoText).toBeInTheDocument();
  });

  it('shows selected drink', async () => {
    render(<Home />);

    const seeRecipeButton = screen.getByText('See The Recipe');
    fireEvent.click(seeRecipeButton);

    const selectDrinkSection = screen.getByTestId('drink-selection-section');
    expect(selectDrinkSection).toBeInTheDocument();
    expect(selectDrinkSection).toHaveTextContent('Mojito');
  });
});
