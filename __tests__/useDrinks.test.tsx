import { renderHook, waitFor } from '@testing-library/react';
import { useDrinks } from '../hooks/useDrinks';
import { createWrapper } from '../util/testQueryWrapper';
import { mockDrink } from '../__fixtures__';

describe('useDrinks hook', () => {
  it('should return the drinks data and loading status', async () => {
    const { result } = renderHook(() => useDrinks('marg'), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    await waitFor(() => expect(result.current.data).toContainEqual(mockDrink));
  });
});
