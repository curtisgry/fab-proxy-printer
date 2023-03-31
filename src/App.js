import React, { useState } from 'react';
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';
import Nav from './components/nav';
import Cards from './components/card-search';
import Selected from './components/selected';

import './App.css';
import logo from './fab-logo.png';

// Modal styles
const customStyles = {
  content: {
    marginTop: '50px',
  },
};

// Bind modal to app element
Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cardList, setCardList] = useState([]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const addToList = (card) => {
    const list = cardList.concat();
    const copy = structuredClone(card);
    copy.id = uuidv4();
    list.push(copy);
    setCardList(list);
  };

  const removeFromList = (card) => {
    const newList = cardList.filter((prev) => prev.id !== card.id);
    setCardList(newList);
  };

  const generateCardImage = (card) => card.defaultImage?.split('.')[0];

  const print = () => {
    window.print();
  };

  return (
    <div className="container">
      <header className="container do-not-print">
        <Nav openModal={openModal} print={print} logo={logo} />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Search by name and add cards."
        >
          <button
            type="button"
            className="button mb-2 is-pulled-right"
            aria-label="close"
            onClick={closeModal}
          >
            Close
          </button>
          <Cards addToList={addToList} generateCardImage={generateCardImage} />
        </Modal>
      </header>
      <div className="container is-fluid">
        <div className="content mt-5 do-not-print">
          <h1 className="do-not-print">Cards selected</h1>
        </div>
        <Selected
          cardList={cardList}
          removeFromList={removeFromList}
          generateCardImage={generateCardImage}
        />
      </div>
    </div>
  );
}

export default App;
