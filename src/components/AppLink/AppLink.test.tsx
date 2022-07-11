import React, { FunctionComponent, PropsWithChildren } from 'react';
import { render, screen } from '@testing-library/react';
import AppLink, { AppLinkProp } from './';
import { createRouter, NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';

/**
 * Mocked Router for testing
 * See https://github.com/vercel/next.js/discussions/23911#discussioncomment-650402
 */
const router: NextRouter = createRouter('', {}, '', {
  subscription: jest.fn().mockImplementation(Promise.resolve),
  initialProps: {},
  pageLoader: { getMiddlewareList: jest.fn() }, // jest.fn(),
  Component: jest.fn(),
  App: jest.fn(),
  wrapApp: jest.fn(),
  isFallback: false,
});
const MockRouter: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => (
  <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
);

/**
 * AppLink wrapped with Mocked Router
 */
const ComponentToTest: FunctionComponent<AppLinkProp> = (props) => (
  <MockRouter>
    <AppLink {...props} />
  </MockRouter>
);

/**
 * Tests for <AppLink/> component
 */
describe('AppLink component', () => {
  it('renders itself', () => {
    const text = 'sample text';
    const url = 'https://example.com/';
    render(<ComponentToTest href={url}>{text}</ComponentToTest>);
    const link = screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveTextContent(text);
  });

  it('supports external link', () => {
    const text = 'external link';
    const url = 'https://example.com/';
    render(<ComponentToTest href={url}>{text}</ComponentToTest>);
    const link = screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveTextContent(text);
    expect(link).toHaveAttribute('target', '_blank'); // Open external links in new Tab by default
    expect(link).toHaveAttribute('rel'); // For links opened in new Tab rel="noreferrer noopener" is required
    const rel = (link as any)?.rel;
    expect(rel.includes('noreferrer')).toBeTruthy(); // ref="noreferrer" check
    expect(rel.includes('noopener')).toBeTruthy(); // rel="noreferrer check
  });

  it('supports internal link', () => {
    const text = 'internal link';
    const url = '/internal-link';
    render(<ComponentToTest to={url}>{text}</ComponentToTest>);
    const link = screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveTextContent(text);
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('supports openInNewTab property', () => {
    // External link with openInNewTab={false}
    let text = 'external link in same tab';
    let url = 'https://example.com/';
    render(
      <ComponentToTest href={url} openInNewTab={false}>
        {text}
      </ComponentToTest>
    );
    let link = screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveTextContent(text);
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');

    // Internal link with openInNewTab={true}
    text = 'internal link in new tab';
    url = '/internal-link-in-new-tab';
    render(
      <ComponentToTest to={url} openInNewTab>
        {text}
      </ComponentToTest>
    );
    link = screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveTextContent(text);
    expect(link).toHaveAttribute('target', '_blank'); // Open links in new Tab
    expect(link).toHaveAttribute('rel'); // For links opened in new Tab rel="noreferrer noopener" is required
    const rel = (link as any)?.rel;
    expect(rel.includes('noreferrer')).toBeTruthy(); // ref="noreferrer" check
    expect(rel.includes('noopener')).toBeTruthy(); // rel="noreferrer check
  });

  it('supports className property', () => {
    let text = 'internal link with specific class';
    let url = '/internal-link-with-class';
    let className = 'someClassName';
    render(
      <ComponentToTest to={url} className={className}>
        {text}
      </ComponentToTest>
    );
    let link = screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveClass(className);
  });
});
