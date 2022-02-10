import { render, screen } from '@testing-library/react';
import App from './App';
import { UserProvider } from './context/UserContext';
import userEvent from '@testing-library/user-event';

test('If entry card appears on screen', () => {
  render(
    <UserProvider>
      <App />
    </UserProvider>
  );
  //use userEvent to type into Name input
  //use userEvent to type in to entry Input
  // use UserEvent to click on submit button
  // expect text from input to appear on screen
  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });

  const entryInput = screen.getByRole('textbox', { name: /entry/i });

  const button = screen.getByRole('button', { name: /submit entry/i });

  userEvent.type(nameInput, 'mark');
  userEvent.type(entryInput, 'hello world');
  userEvent.click(button);

  const nameOutCome = screen.getByText(/mark/i);
  const entryOutCome = screen.getByText(/hello world/i);

  expect(entryOutCome).toBeInTheDocument();
  expect(nameOutCome).toBeInTheDocument();
});
