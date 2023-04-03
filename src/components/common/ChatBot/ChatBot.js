import React from 'react';
import styles from './ChatBot.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWindowClose,
  faSync,
  faRobot,
  faPaperPlane,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-bootstrap';
import { set } from 'react-hook-form';

const ChatBot = () => {
  const [activeChat, setActiveChat] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [chatBotAnswer, setChatBotAnswer] = useState('How can I help you?');

  const workHoursAnswer =
    'Firma pracuje od poniedziałku do piątku w godzinach od 8:00 do 16:00';
  const deliveryCostAnswer =
    'Koszt przesyłki jest zależny od gabarytów. Zwykle jest to 200zł za dostawę.';

  const handleClick = e => {
    e.preventDefault();
    setActiveChat(!activeChat);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    setChatBotAnswer('');
    if (userInput.includes('godziny pracy') || userInput.includes('czas pracy')) {
      setChatBotAnswer(workHoursAnswer);
    } else if (userInput.includes('koszt przesyłki')) {
      setChatBotAnswer(deliveryCostAnswer);
    }
    setUserInput('');
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.chatBot}>
          {activeChat && (
            <div className={styles.chatWindow}>
              <div className={styles.chatHeadline}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faSync}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faWindowClose}
                  onClick={handleClick}
                ></FontAwesomeIcon>
              </div>
              <div className={clsx(styles.chatBody)}>
                <div className='row p-3'>
                  <div className='col-2'>
                    <FontAwesomeIcon icon={faRobot}></FontAwesomeIcon>
                  </div>
                  <div className={clsx('col-10 p-2 my-2', styles.message)}>
                    <p className='m-0'>{chatBotAnswer}</p>
                  </div>
                  <div className={clsx('col-12 py-2 my-2', styles.topic)}>
                    <p className='m-0'>Choose topic</p>
                  </div>
                </div>
              </div>
              <div className={styles.chatMessageArea}>
                <Form className={clsx('row')}>
                  <Form.Group
                    controlId='exampleForm.ControlTextarea1'
                    className='col-10 py-1'
                  >
                    <Form.Control
                      as='textarea'
                      rows={1}
                      placeholder='Write your question'
                      onChange={e => setUserInput(e.target.value)}
                    />
                  </Form.Group>
                  <Button className='col-1 p-0' onClick={handleOnSubmit}>
                    <FontAwesomeIcon
                      className='p-2'
                      icon={faPaperPlane}
                    ></FontAwesomeIcon>
                  </Button>
                </Form>
              </div>
              <div className={styles.chatFooter}>
                <FontAwesomeIcon
                  className={styles.footerIcon}
                  icon={faComments}
                ></FontAwesomeIcon>
              </div>
            </div>
          )}
          <div className={styles.chatButton}>
            <Button
              variant='small'
              className={clsx(styles.button, activeChat && styles.active)}
              onClick={handleClick}
            >
              Need help? Contact us!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
