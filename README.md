# React Modal-14

This project a simple React Modal component. Style with Styled-Components and uses FontAwesome Icons.

## Install

Run `npm i cd-modal-14` or `yarn add cd-modal-14`

## Basic code

```
 export default function Modal({ text, closeModal }) {
  return (
    <ModalBackground className="modal_background" onClick={closeModal}>
      <ModalContainer className="modal">
        <p className="modal_text">{text}</p>
        <IconContainer className="modal_icon">
          <FontAwesomeIcon
            icon={faCircleXmark}
            style={{
              position: "absolute",
              top: "-60px",
              right: "-35px",
              fontSize: "22px",
              backgroundColor: "#fff",
              borderRadius: "50%",
            }}
            onClick={closeModal}
          />
        </IconContainer>
      </ModalContainer>
    </ModalBackground>
  );
}

```

## How to use it

```
import React from 'react';
import Modal from 'modal-14';


<Modal
              text={"Employee successfully created!"}
              closeModal={closeModal}
            />
```

## Keywords

react modal styled-components
