import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { fakerLV } from '@faker-js/faker';
import Birthday from './Birthday.svelte';

const firstName = fakerLV.person.firstName(); 

describe('Birthday', () => {
  const defaultData = {
    name: "Zeus",
    dob: "1905-07-30"
  };

  it("has the name of a person", () => {
    render(Birthday, {...defaultData, name: firstName });
    expect(screen.queryByText(firstName)
    ).toBeVisible();
  });

  it("has the name of a another person", () => {
    render(Birthday, {...defaultData, name: firstName });
    expect(screen.queryByText(firstName)
    ).toBeVisible();
  });

  it("has the date of birth", () => {
    render(Birthday, {...defaultData, dob: "2005-10-05" });
    expect(screen.queryByText("2005-10-05")
    ).toBeVisible();
  });

  it("has the date of birth of another person", () => {
    render(Birthday, {...defaultData, dob: "2000-12-15" });
    expect(screen.queryByText("2000-12-15")
    ).toBeVisible();
  });
});
