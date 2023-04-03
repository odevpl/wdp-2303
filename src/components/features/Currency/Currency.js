import React, { useState } from 'react';
import styles from './Currency.module.scss';
import { Dropdown } from 'react-bootstrap';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrency, getCurrency } from '../../../redux/currencyRedux';

const Currency = () => {
  const dispatch = useDispatch();
  const [activeCurrency, setActiveCurrency] = useState(useSelector(getCurrency));

  const availableCurrency = ['USD', 'EUR', 'PLN'];

  fetch(`http://api.nbp.pl/api/exchangerates/tables/a/`)
    .then(res => res.json())
    .then(data => {
      const usdData = {
        waluta: data[0].rates[1].code,
        kurs: `${data[0].rates[1].mid} zł`,
      };
      const euroData = {
        waluta: data[0].rates[7].code,
        kurs: `${data[0].rates[7].mid} zł`,
      };
      console.log('Kurs USD', usdData);
      console.log('Kurs Euro', euroData);
    });

  const handleClick = (e, currency) => {
    e.preventDefault();
    setActiveCurrency(currencyConverter(currency));
    dispatch(addCurrency(currencyConverter(currency)));
  };

  const currencyConverter = currency => {
    let newCurrency = { name: 'USD', multiplier: 1, sign: '$' };
    if (currency === 'PLN') {
      newCurrency = { name: 'PLN', multiplier: 4.3, sign: 'PLN' };
    } else if (currency === 'EUR') {
      newCurrency = { name: 'EUR', multiplier: 0.92, sign: '€' };
    }
    return newCurrency;
  };

  return (
    <Dropdown className={styles.root}>
      <Dropdown.Toggle className={styles.currencyButton} id='dropdown-basic'>
        {activeCurrency.name}
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.menu}>
        {availableCurrency.map(currency => (
          <Dropdown.Item
            key={currency}
            className={clsx(styles.menuItem, 'dropdown-item')}
            href='#'
            onClick={e => handleClick(e, currency)}
          >
            {currency}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Currency;
