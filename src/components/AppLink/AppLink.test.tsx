import React from 'react';
import { render, screen } from '@testing-library/react';
import AppLink from './';
// for React Router
// import { AppRouter as MockRouter } from '../../routes/';

// for NextJS Router
import { createRouter, NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';
const router: NextRouter = createRouter('', {}, '', {
  subscription: jest.fn().mockImplementation(Promise.resolve),
  initialProps: {},
  pageLoader: jest.fn(),
  Component: jest.fn(),
  App: jest.fn(),
  wrapApp: jest.fn(),
  isFallback: false,
});
const MockRouter: React.FC = ({ children }) => (
  <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
);

/**
 * Tests for <AppLink/> component
 */
describe('AppLink component', () => {
  it('renders itself', async () => {
    const text = 'sample text';
    const url = 'https://example.com/';
    await render(
      <MockRouter>
        <AppLink href={url}>{text}</AppLink>
      </MockRouter>
    );
    const link = await screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveTextContent(text);
  });

  it('supports external link', async () => {
    const text = 'external link';
    const url = 'https://example.com/';
    await render(
      <MockRouter>
        <AppLink href={url}>{text}</AppLink>
      </MockRouter>
    );
    const link = await screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveTextContent(text);
    expect(link).toHaveAttribute('target', '_blank'); // Open external links in new Tab by default
    expect(link).toHaveAttribute('rel'); // For links opened in new Tab rel="noreferrer noopener" is required
    const rel = (link as any)?.rel;
    expect(rel.includes('noreferrer')).toBeTruthy(); // ref="noreferrer" check
    expect(rel.includes('noopener')).toBeTruthy(); // rel="noreferrer check
  });

  it('supports internal link', async () => {
    const text = 'internal link';
    const url = '/internal-link';
    await render(
      <MockRouter>
        <AppLink to={url}>{text}</AppLink>
      </MockRouter>
    );
    const link = await screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveTextContent(text);
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('supports openInNewTab property', async () => {
    // External link with openInNewTab={false}
    let text = 'external link in same tab';
    let url = 'https://example.com/';
    await render(
      <MockRouter>
        <AppLink href={url} openInNewTab={false}>
          {text}
        </AppLink>
      </MockRouter>
    );
    let link = await screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveTextContent(text);
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');

    // Internal link with openInNewTab={true}
    text = 'internal link in new tab';
    url = '/internal-link-in-new-tab';
    await render(
      <MockRouter>
        <AppLink to={url} openInNewTab>
          {text}
        </AppLink>
      </MockRouter>
    );
    link = await screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveTextContent(text);
    expect(link).toHaveAttribute('target', '_blank'); // Open links in new Tab
    expect(link).toHaveAttribute('rel'); // For links opened in new Tab rel="noreferrer noopener" is required
    const rel = (link as any)?.rel;
    expect(rel.includes('noreferrer')).toBeTruthy(); // ref="noreferrer" check
    expect(rel.includes('noopener')).toBeTruthy(); // rel="noreferrer check
  });

  it('supports className property', async () => {
    let text = 'internal link with specific class';
    let url = '/internal-link-with-class';
    let className = 'someClassName';
    await render(
      <MockRouter>
        <AppLink to={url} className={className}>
          {text}
        </AppLink>
      </MockRouter>
    );
    let link = await screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveClass(className);
  });
});
