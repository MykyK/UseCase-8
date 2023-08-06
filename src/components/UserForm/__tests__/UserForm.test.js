/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UserForm from '../UserForm';


describe('UserForm', () => {
  const mockAddUser = jest.fn();

  it('renders correctly', () => {
    render(<UserForm addUser={mockAddUser} />);

    expect(screen.getByLabelText(/First Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message:/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('shows error when email is not valid', () => {
    render(<UserForm addUser={mockAddUser} />);
    
    const emailInput = screen.getByLabelText(/Email/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(emailInput, { target: { value: 'notanemail' } });
    fireEvent.click(submitButton);

    const error = screen.getByText('Please enter a valid email!');
    expect(error).toBeInTheDocument();
  });

  it('shows error when message is too short', () => {
    render(<UserForm addUser={mockAddUser} />);

    const messageInput = screen.getByLabelText(/Message/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(messageInput, { target: { value: 'Short' } });
    fireEvent.click(submitButton);

    const error = screen.getByText('Message should not be empty. message should be minimum 10 characters');
    expect(error).toBeInTheDocument();
  });

  it('shows error messages for invalid inputs', () => {
    render(<UserForm addUser={mockAddUser} />);
    
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getAllByText(/Cannot be blank!/i)).toHaveLength(4);
  });

  it('calls addUser with form data on submit', () => {
    render(<UserForm addUser={mockAddUser} />);
    
    fireEvent.change(screen.getByLabelText(/First Name:/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name:/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message:/i), { target: { value: 'Hello world!' } });

    fireEvent.click(screen.getByRole('button'));

    expect(mockAddUser).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      message: 'Hello world!',
    });
  });
});