import { useId } from "react";
import { useEffect } from "react";

const CustomId = () => {
  const Id = useId();
  const Id2 = useId();

// useEffect expects a defining function !!!
    useEffect(() => {
        console.log(Id)
        console.log(Id2)
    }, [])

  return (
    <>
      {/* The `htmlFor` attribute of the label must match the `id` of the input. */}
      <label htmlFor={`${Id}-email`}>Email Address: </label>
      <input type="email" id={`${Id}-email`} placeholder="example@email.com" />
    <br/><br/>
      <label htmlFor={Id2}>Password: </label>
      <input type="password" id={Id2} placeholder="password1234" />
      
    </>
  );
};

export default CustomId;

// The primary purpose of the useId hook is to generate unique and stable IDs
// to link form inputs with their corresponding labels. This is crucial for
// accessibility (a11y), as it allows screen readers to correctly associate
// a label with its input field.


// For htmlFor:
// With the same id, you can click email, and the form will focus. Because they have the same id
// useful for improving user interface

// Opt for '${some const you've said for the useId()}'
// Always produces a string (even undefined → "undefined"). 
// You’ll always get an id attribute, even if it’s the literal text "undefined" or "null".

// Custom Id's 
// need to use `${constid}`
// id will still print it to be something, not email, but if you go to inspect the element, you can see: 
// the id will be like: = for="«custom_id_here»-email"