import { render } from "@testing-library/react-native";
import TextInputComponent from "../TextInput";

describe("TextInput", () => {

  test("component rendered", () => {
    render(
      <TextInputComponent
        label="Label"
        value="Value"
        placeholder="Placeholder"
        invalid={false}
        invalidMessage="Invalid Message"
        onChange={() => {}}
      />
    );
  });

  test("component rendered with custom values", () => {
    const { getByText, getByPlaceholderText } = render(
      <TextInputComponent
        label="Custom Label"
        value="Custom Value"
        placeholder="Custom Placeholder"
        onChange={() => {}}
      />
    );
  
    getByText("Custom Label"); // Verifica se o rótulo personalizado está presente
    getByPlaceholderText("Custom Placeholder"); // Verifica se o espaço reservado personalizado está presente
  });
  
  test("onChange is called when text is changed", () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <TextInputComponent 
        value="" 
        onChange={onChangeMock} 
        placeholder="Placeholder"
      />
    );
  
    const input = getByPlaceholderText("Placeholder");
    input.props.onChangeText("New Text");
    expect(onChangeMock).toHaveBeenCalledWith("New Text");
  });
  
});
