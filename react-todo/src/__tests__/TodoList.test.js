import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import { describe, it, expect } from '@jest/globals';

describe('TodoList component', () => {
  it('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText('Add todo'), {
      target: { value: 'Test Todo' },
    });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  it('toggles todo completion', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    expect(todo).not.toHaveStyle('text-decoration: line-through');
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  it('deletes a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    const deleteBtn = screen.getByTestId('delete-1');
    fireEvent.click(deleteBtn);
    expect(todo).not.toBeInTheDocument();
  });
});