import { render } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('should render correctly without props', () => {
    const router = {
      query: {},
    };

    const component = render(<HomePage router={router} />).container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
