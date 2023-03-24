import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Test from "../components/Test";

describe('simple test', ()=> {
  it('testing', ()=>{
    render(Test)
    console.log(screen.getByText('text'));
    expect(screen).to.exist
  })
})