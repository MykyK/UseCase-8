import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UserTable from '../UserTable';

describe('UserTable', () => {
  const mockResetTable = jest.fn();

  const mockUsers = [
    { firstName: 'John', lastName: 'Do', email: 'john.doe@example.com', message: 'Hello world!' },
    { firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com', message: 'Hello again!' },
  ];

  it('renders correctly', () => {
    render(<UserTable users={mockUsers} resetTable={mockResetTable} />);

    expect(screen.getByText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Reset Table/i })).toBeInTheDocument();
  });

  it('displays user data correctly', () => {
    render(<UserTable users={mockUsers} resetTable={mockResetTable} />);

    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Do')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByText('Hello world!')).toBeInTheDocument();

    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();
    expect(screen.getByText('jane.doe@example.com')).toBeInTheDocument();
    expect(screen.getByText('Hello again!')).toBeInTheDocument();
  });

  it('calls resetTable when Reset Table button is clicked', () => {
    render(<UserTable users={mockUsers} resetTable={mockResetTable} />);

    fireEvent.click(screen.getByRole('button', { name: /Reset Table/i }));

    expect(mockResetTable).toHaveBeenCalled();
  });
});
