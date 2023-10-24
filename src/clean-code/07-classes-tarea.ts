(()=>{

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input'|'select'|'textarea'|'radio';

  class HtmlElement {
    constructor(
      public id: string,
      public type: HtmlType,
    ) {}
  }

  class InputAttributes {
    constructor(
      public value: string,
      public placeholder: string,
    ) {}
  }

  class InputEvents {
    constructor() {}

    setFocus() {};
    getValue() {
      console.log("VALUE")
    };
    isActive() {
      console.log("ACTIVE", true)
    };
    removeValue() {};
  }


  interface InputElementProps {
    id: string;
    value: string;
    placeholder: string;
  }

  class InputElement {

    public html: HtmlElement;
    public attributes: InputAttributes;
    public events: InputEvents;

    constructor({
      id, value, placeholder
    }: InputElementProps){
      this.html = new HtmlElement(id, 'input');
      this.attributes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
    }

  }

  // const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');
  const nameElement = new InputElement({
    id: 'Fernando', 
    value: 'Enter first name', 
    placeholder: 'txtName' 
  });

  // console.log({ nameField });
  console.log({ nameElement });
  console.log( nameElement.events.getValue() );
  console.log( nameElement.events.isActive() );

})()
