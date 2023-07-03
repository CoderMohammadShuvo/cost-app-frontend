import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import './Home.css'
import { Link } from 'react-router-dom'
import SettingIcon from '../../images/setting.png';
import Door from '../../images/door.png';
import Logo from '../../images/logo.png';
import User from '../../images/user.png';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import AddButtonIcon from '../../images/plus.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Home = () => {
  const [age, setAge] = useState();
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState('0');


  // const [propertyName, setPropertyName] = useState('');
  // const [moneyDown2, setMoneyDown2] = useState('');
  // const [moneyDown3, setMoneyDown3] = useState('');
  // const [moneyDown4, setMoneyDown4] = useState('');
  // const [moneyDown5, setMoneyDown5] = useState('');
  // const [moneyDown6, setMoneyDown6] = useState('');
  // const [moneyDown7, setMoneyDown7] = useState('');
  // const [moneyDown8, setMoneyDown8] = useState('');
  // const [moneyDown9, setMoneyDown9] = useState('');
  // const [moneyDown10, setMoneyDown10] = useState('');
  // const [moneyDown11, setMoneyDown11] = useState('');
  // const [moneyDown12, setMoneyDown12] = useState('');








  const handleNumber1Change = (e) => {
    const value = e.target.value;
    setNumber1(value);
    calculateSum(value, number2);
  };

  const handleNumber2Change = (e) => {
    const value = e.target.value;
    setNumber2(value);
    calculateSum(number1, value);
  };

  const calculateSum = (num1, num2) => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum || '');
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [number02, setNumber02] = useState('0');
  const [number3, setNumber3] = useState('0');
  const [number4, setNumber4] = useState('0');
  const [number5, setNumber5] = useState('0');
  const [number6, setNumber6] = useState('0');
  const [number7, setNumber7] = useState('0');
  const [number8, setNumber8] = useState('0');
  const [number9, setNumber9] = useState('0');
  const [number10, setNumber10] = useState('0');
  const [number11, setNumber11] = useState('0');
  const [number12, setNumber12] = useState('0');
  const [number13, setNumber13] = useState('0');
  const [number14, setNumber14] = useState('0');
  const [number15, setNumber15] = useState('0');
  const [number16, setNumber16] = useState('0');
  const [number17, setNumber17] = useState('0');
  const [number18, setNumber18] = useState('0');
  const [number19, setNumber19] = useState('0');
  const [number20, setNumber20] = useState('0');
  const [number21, setNumber21] = useState('0');
  const [number22, setNumber22] = useState('0');
  const [number23, setNumber23] = useState('0');
  const [number24, setNumber24] = useState('0');
  const [number25, setNumber25] = useState('0');
  const [number26, setNumber26] = useState('0');
  const [number27, setNumber27] = useState('0');
  const [number28, setNumber28] = useState('0');
  const [number29, setNumber29] = useState('0');
  const [number30, setNumber30] = useState('0');
  const [number31, setNumber31] = useState('0');
  const [number32, setNumber32] = useState('0');
  const [number33, setNumber33] = useState('0');
  const [number34, setNumber34] = useState('0');
  const [number35, setNumber35] = useState('0');
  const [number36, setNumber36] = useState('0');
  const [result, setResult] = useState('');
  const [totalBedPrice, setTotalBedPRice] = useState('');
  const [oneBed, setOneBed] = useState('0')
  const [twoBed, setTowBed] = useState('0')
  const [threeBed, setThreeBed] = useState('0')
  const [fourBed, setFourBed] = useState('0')
  const [fiveBed, setFiveBed] = useState('0')
  const [sixBed, setSixBed] = useState('0')
  const [oneBed2, setOneBed2] = useState('0')
  const [twoBed2, setTowBed2] = useState('0')
  const [threeBed2, setThreeBed2] = useState('0')
  const [fourBed2, setFourBed2] = useState('0')
  const [fiveBed2, setFiveBed2] = useState('0')
  const [sixBed2, setSixBed2] = useState('0')
  const [oneBed3, setOneBed3] = useState('0')
  const [twoBed3, setTowBed3] = useState('0')
  const [threeBed3, setThreeBed3] = useState('0')
  const [fourBed3, setFourBed3] = useState('0')
  const [fiveBed3, setFiveBed3] = useState('0')
  const [sixBed3, setSixBed3] = useState('0')
  const [oneBed4, setOneBed4] = useState('0')
  const [twoBed4, setTowBed4] = useState('0')
  const [threeBed4, setThreeBed4] = useState('0')
  const [fourBed4, setFourBed4] = useState('0')
  const [fiveBed4, setFiveBed4] = useState('0')
  const [sixBed4, setSixBed4] = useState('0')
  const [oneBed5, setOneBed5] = useState('0')
  const [twoBed5, setTowBed5] = useState('0')
  const [threeBed5, setThreeBed5] = useState('0')
  const [fourBed5, setFourBed5] = useState('0')
  const [fiveBed5, setFiveBed5] = useState('0')
  const [sixBed5, setSixBed5] = useState('0')
  const [oneBed6, setOneBed6] = useState('0')
  const [twoBed6, setTowBed6] = useState('0')
  const [threeBed6, setThreeBed6] = useState('0')
  const [fourBed6, setFourBed6] = useState('0')
  const [fiveBed6, setFiveBed6] = useState('0')
  const [sixBed6, setSixBed6] = useState('0')
  const [oneBed7, setOneBed7] = useState('0')
  const [twoBed7, setTowBed7] = useState('0')
  const [threeBed7, setThreeBed7] = useState('0')
  const [fourBed7, setFourBed7] = useState('0')
  const [fiveBed7, setFiveBed7] = useState('0')
  const [sixBed7, setSixBed7] = useState('0')
  const [oneBed8, setOneBed8] = useState('0')
  const [twoBed8, setTowBed8] = useState('0')
  const [threeBed8, setThreeBed8] = useState('0')
  const [fourBed8, setFourBed8] = useState('0')
  const [fiveBed8, setFiveBed8] = useState('0')
  const [sixBed8, setSixBed8] = useState('0')
  const [oneBed9, setOneBed9] = useState('0')
  const [twoBed9, setTowBed9] = useState('0')
  const [threeBed9, setThreeBed9] = useState('0')
  const [fourBed9, setFourBed9] = useState('0')
  const [fiveBed9, setFiveBed9] = useState('0')
  const [sixBed9, setSixBed9] = useState('0')
  const [oneBed10, setOneBed10] = useState('0')
  const [twoBed10, setTowBed10] = useState('0')
  const [threeBed10, setThreeBed10] = useState('0')
  const [fourBed10, setFourBed10] = useState('0')
  const [fiveBed10, setFiveBed10] = useState('0')
  const [sixBed10, setSixBed10] = useState('0')
  const [oneBed11, setOneBed11] = useState('0')
  const [twoBed11, setTowBed11] = useState('0')
  const [threeBed11, setThreeBed11] = useState('0')
  const [fourBed11, setFourBed11] = useState('0')
  const [fiveBed11, setFiveBed11] = useState('0')
  const [sixBed11, setSixBed11] = useState('0')
  const [oneBed12, setOneBed12] = useState('0')
  const [twoBed12, setTowBed12] = useState('0')
  const [threeBed12, setThreeBed12] = useState('0')
  const [fourBed12, setFourBed12] = useState('0')
  const [fiveBed12, setFiveBed12] = useState('0')
  const [sixBed12, setSixBed12] = useState('0')
  const [oneBed13, setOneBed13] = useState('0')
  const [twoBed13, setTowBed13] = useState('0')
  const [threeBed13, setThreeBed13] = useState('0')
  const [fourBed13, setFourBed13] = useState('0')
  const [fiveBed13, setFiveBed13] = useState('0')
  const [sixBed13, setSixBed13] = useState('0')
  const [oneBed14, setOneBed14] = useState('0')
  const [twoBed14, setTowBed14] = useState('0')
  const [threeBed14, setThreeBed14] = useState('0')
  const [fourBed14, setFourBed14] = useState('0')
  const [fiveBed14, setFiveBed14] = useState('0')
  const [sixBed14, setSixBed14] = useState('0')
  const [oneBed15, setOneBed15] = useState('0')
  const [twoBed15, setTowBed15] = useState('0')
  const [threeBed15, setThreeBed15] = useState('0')
  const [fourBed15, setFourBed15] = useState('0')
  const [fiveBed15, setFiveBed15] = useState('0')
  const [sixBed15, setSixBed15] = useState('0')
  const [oneBed16, setOneBed16] = useState('0')
  const [twoBed16, setTowBed16] = useState('0')
  const [threeBed16, setThreeBed16] = useState('0')
  const [fourBed16, setFourBed16] = useState('0')
  const [fiveBed16, setFiveBed16] = useState('0')
  const [sixBed16, setSixBed16] = useState('0')
  const [oneBed17, setOneBed17] = useState('0')
  const [twoBed17, setTowBed17] = useState('0')
  const [threeBed17, setThreeBed17] = useState('0')
  const [fourBed17, setFourBed17] = useState('0')
  const [fiveBed17, setFiveBed17] = useState('0')
  const [sixBed17, setSixBed17] = useState('0')
  const [oneBed18, setOneBed18] = useState('0')
  const [twoBed18, setTowBed18] = useState('0')
  const [threeBed18, setThreeBed18] = useState('0')
  const [fourBed18, setFourBed18] = useState('0')
  const [fiveBed18, setFiveBed18] = useState('0')
  const [sixBed18, setSixBed18] = useState('0')
  const [oneBed19, setOneBed19] = useState('0')
  const [twoBed19, setTowBed19] = useState('0')
  const [threeBed19, setThreeBed19] = useState('0')
  const [fourBed19, setFourBed19] = useState('0')
  const [fiveBed19, setFiveBed19] = useState('0')
  const [sixBed19, setSixBed19] = useState('0')
  const [oneBed20, setOneBed20] = useState('0')
  const [twoBed20, setTowBed20] = useState('0')
  const [threeBed20, setThreeBed20] = useState('0')
  const [fourBed20, setFourBed20] = useState('0')
  const [fiveBed20, setFiveBed20] = useState('0')
  const [sixBed20, setSixBed20] = useState('0')
  const [oneBed21, setOneBed21] = useState('0')
  const [twoBed21, setTowBed21] = useState('0')
  const [threeBed21, setThreeBed21] = useState('0')
  const [fourBed21, setFourBed21] = useState('0')
  const [fiveBed21, setFiveBed21] = useState('0')
  const [sixBed21, setSixBed21] = useState('0')
  const [oneBed22, setOneBed22] = useState('0')
  const [twoBed22, setTowBed22] = useState('0')
  const [threeBed22, setThreeBed22] = useState('0')
  const [fourBed22, setFourBed22] = useState('0')
  const [fiveBed22, setFiveBed22] = useState('0')
  const [sixBed22, setSixBed22] = useState('0')
  const [oneBed23, setOneBed23] = useState('0')
  const [twoBed23, setTowBed23] = useState('0')
  const [threeBed23, setThreeBed23] = useState('0')
  const [fourBed23, setFourBed23] = useState('0')
  const [fiveBed23, setFiveBed23] = useState('0')
  const [sixBed23, setSixBed23] = useState('0')
  const [oneBed24, setOneBed24] = useState('0')
  const [twoBed24, setTowBed24] = useState('0')
  const [threeBed24, setThreeBed24] = useState('0')
  const [fourBed24, setFourBed24] = useState('0')
  const [fiveBed24, setFiveBed24] = useState('0')
  const [sixBed24, setSixBed24] = useState('0')
  const [oneBed25, setOneBed25] = useState('0')
  const [twoBed25, setTowBed25] = useState('0')
  const [threeBed25, setThreeBed25] = useState('0')
  const [fourBed25, setFourBed25] = useState('0')
  const [fiveBed25, setFiveBed25] = useState('0')
  const [sixBed25, setSixBed25] = useState('0')
  const [oneBed26, setOneBed26] = useState('0')
  const [twoBed26, setTowBed26] = useState('0')
  const [threeBed26, setThreeBed26] = useState('0')
  const [fourBed26, setFourBed26] = useState('0')
  const [fiveBed26, setFiveBed26] = useState('0')
  const [sixBed26, setSixBed26] = useState('0')
  const [oneBed27, setOneBed27] = useState('0')
  const [twoBed27, setTowBed27] = useState('0')
  const [threeBed27, setThreeBed27] = useState('0')
  const [fourBed27, setFourBed27] = useState('0')
  const [fiveBed27, setFiveBed27] = useState('0')
  const [sixBed27, setSixBed27] = useState('0')
  const [oneBed28, setOneBed28] = useState('0')
  const [twoBed28, setTowBed28] = useState('0')
  const [threeBed28, setThreeBed28] = useState('0')
  const [fourBed28, setFourBed28] = useState('0')
  const [fiveBed28, setFiveBed28] = useState('0')
  const [sixBed28, setSixBed28] = useState('0')
  const [oneBed29, setOneBed29] = useState('0')
  const [twoBed29, setTowBed29] = useState('0')
  const [threeBed29, setThreeBed29] = useState('0')
  const [fourBed29, setFourBed29] = useState('0')
  const [fiveBed29, setFiveBed29] = useState('0')
  const [sixBed29, setSixBed29] = useState('0')
  const [oneBed30, setOneBed30] = useState('0')
  const [twoBed30, setTowBed30] = useState('0')
  const [threeBed30, setThreeBed30] = useState('0')
  const [fourBed30, setFourBed30] = useState('0')
  const [fiveBed30, setFiveBed30] = useState('0')
  const [sixBed30, setSixBed30] = useState('0')
  const [oneBed31, setOneBed31] = useState('0')
  const [twoBed31, setTowBed31] = useState('0')
  const [threeBed31, setThreeBed31] = useState('0')
  const [fourBed31, setFourBed31] = useState('0')
  const [fiveBed31, setFiveBed31] = useState('0')
  const [sixBed31, setSixBed31] = useState('0')
  const [oneBed32, setOneBed32] = useState('0')
  const [twoBed32, setTowBed32] = useState('0')
  const [threeBed32, setThreeBed32] = useState('0')
  const [fourBed32, setFourBed32] = useState('0')
  const [fiveBed32, setFiveBed32] = useState('0')
  const [sixBed32, setSixBed32] = useState('0')
  const [oneBed33, setOneBed33] = useState('0')
  const [twoBed33, setTowBed33] = useState('0')
  const [threeBed33, setThreeBed33] = useState('0')
  const [fourBed33, setFourBed33] = useState('0')
  const [fiveBed33, setFiveBed33] = useState('0')
  const [sixBed33, setSixBed33] = useState('0')
  const [oneBed34, setOneBed34] = useState('0')
  const [twoBed34, setTowBed34] = useState('0')
  const [threeBed34, setThreeBed34] = useState('0')
  const [fourBed34, setFourBed34] = useState('0')
  const [fiveBed34, setFiveBed34] = useState('0')
  const [sixBed34, setSixBed34] = useState('0')
  const [oneBed35, setOneBed35] = useState('0')
  const [twoBed35, setTowBed35] = useState('0')
  const [threeBed35, setThreeBed35] = useState('0')
  const [fourBed35, setFourBed35] = useState('0')
  const [fiveBed35, setFiveBed35] = useState('0')
  const [sixBed35, setSixBed35] = useState('0')
  const [oneBed36, setOneBed36] = useState('0')
  const [twoBed36, setTowBed36] = useState('0')
  const [threeBed36, setThreeBed36] = useState('0')
  const [fourBed36, setFourBed36] = useState('0')
  const [fiveBed36, setFiveBed36] = useState('0')
  const [sixBed36, setSixBed36] = useState('0')

  const handlefix0 = (e) => {
    const value = e.target.value;
    setNumber3(value);
  }
  const handlefix = (e) => {
    const value = e.target.value;
    setNumber3(value);
  }
  const handlefix2 = (e) => {
    const value = e.target.value;
    setNumber4(value);
  }
  const handlefix3 = (e) => {
    const value = e.target.value;
    setNumber5(value);
  }
  const handlefix4 = (e) => {
    const value = e.target.value;
    setNumber6(value);
  }
  const handlefix5 = (e) => {
    const value = e.target.value;
    setNumber7(value);
  }
  const handlefix6 = (e) => {
    const value = e.target.value;
    setNumber8(value);
  }
  const handlefix7 = (e) => {
    const value = e.target.value;
    setNumber9(value);
  }
  const handlefix8 = (e) => {
    const value = e.target.value;
    setNumber10(value);
  }
  const handlefix9 = (e) => {
    const value = e.target.value;
    setNumber11(value);
  }
  const handlefix10 = (e) => {
    const value = e.target.value;
    setNumber12(value);
  }
  const handlefix11 = (e) => {
    const value = e.target.value;
    setNumber13(value);
  }
  const handlefix12 = (e) => {
    const value = e.target.value;
    setNumber14(value);
  }
  const handlefix13 = (e) => {
    const value = e.target.value;
    setNumber15(value);
  }
  const handlefix14 = (e) => {
    const value = e.target.value;
    setNumber16(value);
  }
  const handlefix15 = (e) => {
    const value = e.target.value;
    setNumber17(value);
  }
  const handlefix16 = (e) => {
    const value = e.target.value;
    setNumber18(value);
  }
  const handlefix17 = (e) => {
    const value = e.target.value;
    setNumber19(value);
  }
  const handlefix18 = (e) => {
    const value = e.target.value;
    setNumber20(value);
  }
  const handlefix19 = (e) => {
    const value = e.target.value;
    setNumber21(value);
  }
  const handlefix20 = (e) => {
    const value = e.target.value;
    setNumber22(value);
  }
  const handlefix21 = (e) => {
    const value = e.target.value;
    setNumber23(value);
  }
  const handlefix22 = (e) => {
    const value = e.target.value;
    setNumber24(value);
  }
  const handlefix23 = (e) => {
    const value = e.target.value;
    setNumber25(value);
  }
  const handlefix24 = (e) => {
    const value = e.target.value;
    setNumber26(value);
  }
  const handlefix25 = (e) => {
    const value = e.target.value;
    setNumber27(value);
  }
  const handlefix26 = (e) => {
    const value = e.target.value;
    setNumber28(value);
  }
  const handlefix27 = (e) => {
    const value = e.target.value;
    setNumber29(value);
  }
  const handlefix28 = (e) => {
    const value = e.target.value;
    setNumber30(value);
  }
  const handlefix29 = (e) => {
    const value = e.target.value;
    setNumber31(value);
  }
  const handlefix30 = (e) => {
    const value = e.target.value;
    setNumber32(value);
  }
  const handlefix31 = (e) => {
    const value = e.target.value;
    setNumber33(value);
  }
  const handlefix32 = (e) => {
    const value = e.target.value;
    setNumber34(value);
  }
  const handlefix33 = (e) => {
    const value = e.target.value;
    setNumber35(value);
  }
  const handlefix34 = (e) => {
    const value = e.target.value;
    setNumber36(value);
  }


  const handle1bedromPrice = (e) => {
    const value = e.target.value;
    setOneBed(value);
    setOneBed2(value);
    setOneBed3(value)
    setOneBed4(value)
    setOneBed5(value)
    setOneBed6(value)
    setOneBed7(value)
    setOneBed8(value)
    setOneBed9(value)
    setOneBed10(value)
    setOneBed11(value)
    setOneBed12(value)
    setOneBed13(value)
    setOneBed14(value)
    setOneBed15(value)
    setOneBed16(value)
    setOneBed17(value)
    setOneBed18(value)
    setOneBed19(value)
    setOneBed20(value)
    setOneBed21(value)
    setOneBed22(value)
    setOneBed23(value)
    setOneBed24(value)
    setOneBed25(value)
    setOneBed26(value)
    setOneBed27(value)
    setOneBed28(value)
    setOneBed29(value)
    setOneBed30(value)
    setOneBed31(value)
    setOneBed32(value)
    setOneBed33(value)
    setOneBed34(value)
    setOneBed35(value)
    setOneBed36(value)


    // setOneBed6(value)
    // setOneBed7(value)
    // setOneBed8(value)
    // setOneBed9(value)
    // setOneBed10(value)
    calculateSumBed(value, twoBed, threeBed, fourBed, fiveBed, sixBed);
  };

  const handle2bedromPrice = (e) => {
    const value = e.target.value;
    setTowBed(value);
    setTowBed2(value);
    setTowBed3(value);
    setTowBed4(value);
    setTowBed5(value);
    setTowBed6(value);
    setTowBed7(value);
    setTowBed8(value);
    setTowBed9(value);
    setTowBed10(value);
    setTowBed11(value);
    setTowBed12(value);
    setTowBed13(value);
    setTowBed14(value);
    setTowBed15(value);
    setTowBed16(value);
    setTowBed17(value);
    setTowBed18(value);
    setTowBed19(value);
    setTowBed20(value);
    setTowBed21(value);
    setTowBed22(value);
    setTowBed23(value);
    setTowBed24(value);
    setTowBed25(value);
    setTowBed26(value);
    setTowBed27(value);
    setTowBed28(value);
    setTowBed29(value);
    setTowBed30(value);
    setTowBed31(value);
    setTowBed32(value);
    setTowBed33(value);
    setTowBed34(value);
    setTowBed35(value);
    setTowBed36(value);
    calculateSumBed(value, oneBed, threeBed, fourBed, fiveBed, sixBed);
  };


  const handle3bedromPrice = (e) => {
    const value = e.target.value;
    setThreeBed(value);
    setThreeBed2(value);
    setThreeBed3(value);
    setThreeBed4(value);
    setThreeBed5(value);
    setThreeBed6(value)
    setThreeBed7(value)
    setThreeBed8(value)
    setThreeBed9(value)
    setThreeBed10(value)
    setThreeBed11(value)
    setThreeBed12(value)
    setThreeBed13(value)
    setThreeBed14(value)
    setThreeBed15(value)
    setThreeBed16(value)
    setThreeBed17(value)
    setThreeBed18(value)
    setThreeBed19(value)
    setThreeBed20(value)
    setThreeBed21(value)
    setThreeBed22(value)
    setThreeBed23(value)
    setThreeBed24(value)
    setThreeBed25(value)
    setThreeBed26(value)
    setThreeBed27(value)
    setThreeBed28(value)
    setThreeBed29(value)
    setThreeBed30(value)
    setThreeBed31(value)
    setThreeBed32(value)
    setThreeBed33(value)
    setThreeBed34(value)
    setThreeBed35(value)
    setThreeBed36(value)
    calculateSumBed(value, twoBed, oneBed, fourBed, fiveBed, sixBed);
  };


  const handle4bedromPrice = (e) => {
    const value = e.target.value;
    setFourBed(value);
    setFourBed2(value);
    setFourBed3(value);
    setFourBed4(value);
    setFourBed5(value);
    setFourBed6(value);
    setFourBed7(value);
    setFourBed8(value);
    setFourBed9(value);
    setFourBed10(value);
    setFourBed11(value);
    setFourBed12(value);
    setFourBed13(value);
    setFourBed14(value);
    setFourBed15(value);
    setFourBed16(value);
    setFourBed17(value);
    setFourBed18(value);
    setFourBed19(value);
    setFourBed20(value);
    setFourBed21(value);
    setFourBed22(value);
    setFourBed23(value);
    setFourBed24(value);
    setFourBed25(value);
    setFourBed26(value);
    setFourBed27(value);
    setFourBed28(value);
    setFourBed29(value);
    setFourBed30(value);
    setFourBed31(value);
    setFourBed32(value);
    setFourBed33(value);
    setFourBed34(value);
    setFourBed35(value);
    setFourBed36(value);
    calculateSumBed(value, twoBed, threeBed, oneBed, fiveBed, sixBed);
  };
  const handle5bedromPrice = (e) => {
    const value = e.target.value;
    setFiveBed(value);
    setFiveBed2(value)
    setFiveBed3(value);
    setFiveBed4(value);
    setFiveBed5(value);
    setFiveBed6(value);
    setFiveBed7(value);
    setFiveBed8(value);
    setFiveBed9(value);
    setFiveBed10(value);
    setFiveBed11(value);
    setFiveBed12(value);
    setFiveBed13(value);
    setFiveBed14(value);
    setFiveBed15(value);
    setFiveBed16(value);
    setFiveBed17(value);
    setFiveBed18(value);
    setFiveBed19(value);
    setFiveBed20(value);
    setFiveBed21(value);
    setFiveBed22(value);
    setFiveBed23(value);
    setFiveBed24(value);
    setFiveBed25(value);
    setFiveBed26(value);
    setFiveBed27(value);
    setFiveBed28(value);
    setFiveBed29(value);
    setFiveBed30(value);
    setFiveBed31(value);
    setFiveBed32(value);
    setFiveBed33(value);
    setFiveBed34(value);
    setFiveBed35(value);
    setFiveBed36(value);

    calculateSumBed(value, twoBed, threeBed, oneBed, fourBed, sixBed);
  };
  const handle6bedromPrice = (e) => {
    const value = e.target.value;
    setSixBed(value);
    setSixBed2(value);
    setSixBed3(value);
    setSixBed4(value);
    setSixBed5(value);
    setSixBed6(value);
    setSixBed7(value);
    setSixBed8(value);
    setSixBed9(value);
    setSixBed10(value);
    setSixBed11(value);
    setSixBed12(value);
    setSixBed13(value);
    setSixBed14(value);
    setSixBed15(value);
    setSixBed16(value);
    setSixBed17(value);
    setSixBed18(value);
    setSixBed19(value);
    setSixBed20(value);
    setSixBed21(value);
    setSixBed22(value);
    setSixBed23(value);
    setSixBed24(value);
    setSixBed25(value);
    setSixBed26(value);
    setSixBed27(value);
    setSixBed28(value);
    setSixBed29(value);
    setSixBed30(value);
    setSixBed31(value);
    setSixBed32(value);
    setSixBed33(value);
    setSixBed34(value);
    setSixBed35(value);
    setSixBed36(value);
    calculateSumBed(value, twoBed, threeBed, oneBed, fourBed, fiveBed);
  };
  const handle1bedromPrice2 = (e) => {
    const value = e.target.value;
    setOneBed2(value)
    calculateSumBed(value, twoBed2, threeBed2, fourBed2, fiveBed2, sixBed2);
  };

  const handle2bedromPrice2 = (e) => {
    const value = e.target.value;
    setTowBed2(value);
    calculateSumBed(value, oneBed2, threeBed2, fourBed2, fiveBed2, sixBed2);
  };
  const handle3bedromPrice2 = (e) => {
    const value = e.target.value;
    setThreeBed2(value);
    calculateSumBed(value, twoBed2, oneBed2, fourBed2, fiveBed2, sixBed2);

  };
  const handle4bedromPrice2 = (e) => {
    const value = e.target.value;
    setFourBed2(value)
    calculateSumBed(value, twoBed2, threeBed2, oneBed2, fiveBed2, sixBed2);
  };

  const handle5bedromPrice2 = (e) => {
    const value = e.target.value;
    setFiveBed2(value);
    calculateSumBed(value, twoBed2, threeBed2, oneBed2, fourBed2, sixBed2);
  };
  const handle6bedromPrice2 = (e) => {
    const value = e.target.value;
    setSixBed2(value);
    calculateSumBed(value, twoBed2, threeBed2, oneBed2, fourBed2, fiveBed2);

  };
  const handle1bedromPrice3 = (e) => {
    const value = e.target.value;
    setOneBed3(value)
    calculateSumBed(value, twoBed3, threeBed3, fourBed3, fiveBed3, sixBed3);
  };

  const handle2bedromPrice3 = (e) => {
    const value = e.target.value;
    setTowBed3(value);
    calculateSumBed(value, oneBed3, threeBed3, fourBed3, fiveBed3, sixBed3);
  };
  const handle3bedromPrice3 = (e) => {
    const value = e.target.value;
    setThreeBed3(value);
    calculateSumBed(value, twoBed3, oneBed3, fourBed3, fiveBed3, sixBed3);

  };
  const handle4bedromPrice3 = (e) => {
    const value = e.target.value;
    setFourBed3(value)
    calculateSumBed(value, twoBed3, threeBed3, oneBed3, fiveBed3, sixBed3);
  };

  const handle5bedromPrice3 = (e) => {
    const value = e.target.value;
    setFiveBed3(value);
    calculateSumBed(value, twoBed3, threeBed3, oneBed3, fourBed3, sixBed3);
  };
  const handle6bedromPrice3 = (e) => {
    const value = e.target.value;
    setSixBed3(value);
    calculateSumBed(value, twoBed3, threeBed3, oneBed3, fourBed3, fiveBed3);

  };
  const handle1bedromPrice4 = (e) => {
    const value = e.target.value;
    setOneBed4(value)
    calculateSumBed(value, twoBed4, threeBed4, fourBed4, fiveBed4, sixBed4);
  };

  const handle2bedromPrice4 = (e) => {
    const value = e.target.value;
    setTowBed4(value);
    calculateSumBed(value, oneBed4, threeBed4, fourBed4, fiveBed4, sixBed4);
  };
  const handle3bedromPrice4 = (e) => {
    const value = e.target.value;
    setThreeBed4(value);
    calculateSumBed(value, twoBed4, oneBed4, fourBed4, fiveBed4, sixBed4);

  };
  const handle4bedromPrice4 = (e) => {
    const value = e.target.value;
    setFourBed4(value)
    calculateSumBed(value, twoBed4, threeBed4, oneBed4, fiveBed4, sixBed4);
  };

  const handle5bedromPrice4 = (e) => {
    const value = e.target.value;
    setFiveBed4(value);
    calculateSumBed(value, twoBed4, threeBed4, oneBed4, fourBed4, sixBed4);
  };
  const handle6bedromPrice4 = (e) => {
    const value = e.target.value;
    setSixBed4(value);
    calculateSumBed(value, twoBed4, threeBed4, oneBed4, fourBed4, fiveBed4);

  };
  const handle1bedromPrice5 = (e) => {
    const value = e.target.value;
    setOneBed5(value)
    calculateSumBed(value, twoBed5, threeBed5, fourBed5, fiveBed5, sixBed5);
  };

  const handle2bedromPrice5 = (e) => {
    const value = e.target.value;
    setTowBed5(value);
    calculateSumBed(value, oneBed5, threeBed5, fourBed5, fiveBed5, sixBed5);
  };
  const handle3bedromPrice5 = (e) => {
    const value = e.target.value;
    setThreeBed5(value);
    calculateSumBed(value, twoBed5, oneBed5, fourBed5, fiveBed5, sixBed5);

  };
  const handle4bedromPrice5 = (e) => {
    const value = e.target.value;
    setFourBed5(value)
    calculateSumBed(value, twoBed5, threeBed5, oneBed5, fiveBed5, sixBed5);
  };

  const handle5bedromPrice5 = (e) => {
    const value = e.target.value;
    setFiveBed5(value);
    calculateSumBed(value, twoBed5, threeBed5, oneBed5, fourBed5, sixBed5);
  };
  const handle6bedromPrice5 = (e) => {
    const value = e.target.value;
    setSixBed5(value);
    calculateSumBed(value, twoBed5, threeBed5, oneBed5, fourBed5, fiveBed5);

  };
  const handle1bedromPrice6 = (e) => {
    const value = e.target.value;
    setOneBed6(value)
    calculateSumBed(value, twoBed6, threeBed6, fourBed6, fiveBed6, sixBed6);
  };

  const handle2bedromPrice6 = (e) => {
    const value = e.target.value;
    setTowBed6(value);
    calculateSumBed(value, oneBed6, threeBed6, fourBed6, fiveBed6, sixBed6);
  };
  const handle3bedromPrice6 = (e) => {
    const value = e.target.value;
    setThreeBed6(value);
    calculateSumBed(value, twoBed6, oneBed6, fourBed6, fiveBed6, sixBed6);

  };
  const handle4bedromPrice6 = (e) => {
    const value = e.target.value;
    setFourBed6(value)
    calculateSumBed(value, twoBed6, threeBed6, oneBed6, fiveBed6, sixBed6);
  };

  const handle5bedromPrice6 = (e) => {
    const value = e.target.value;
    setFiveBed6(value);
    calculateSumBed(value, twoBed6, threeBed6, oneBed6, fourBed6, sixBed6);
  };
  const handle6bedromPrice6 = (e) => {
    const value = e.target.value;
    setSixBed6(value);
    calculateSumBed(value, twoBed6, threeBed6, oneBed6, fourBed6, fiveBed6);

  };
  const handle1bedromPrice7 = (e) => {
    const value = e.target.value;
    setOneBed7(value)
    calculateSumBed(value, twoBed7, threeBed7, fourBed7, fiveBed7, sixBed7);
  };

  const handle2bedromPrice7 = (e) => {
    const value = e.target.value;
    setTowBed7(value);
    calculateSumBed(value, oneBed7, threeBed7, fourBed7, fiveBed7, sixBed7);
  };
  const handle3bedromPrice7 = (e) => {
    const value = e.target.value;
    setThreeBed7(value);
    calculateSumBed(value, twoBed7, oneBed7, fourBed7, fiveBed7, sixBed7);

  };
  const handle4bedromPrice7 = (e) => {
    const value = e.target.value;
    setFourBed7(value)
    calculateSumBed(value, twoBed7, threeBed7, oneBed7, fiveBed7, sixBed7);
  };

  const handle5bedromPrice7 = (e) => {
    const value = e.target.value;
    setFiveBed7(value);
    calculateSumBed(value, twoBed7, threeBed7, oneBed7, fourBed7, sixBed7);
  };
  const handle6bedromPrice7 = (e) => {
    const value = e.target.value;
    setSixBed7(value);
    calculateSumBed(value, twoBed7, threeBed7, oneBed7, fourBed7, fiveBed7);

  };
  const handle1bedromPrice8 = (e) => {
    const value = e.target.value;
    setOneBed8(value)
    calculateSumBed(value, twoBed8, threeBed8, fourBed8, fiveBed8, sixBed8);
  };

  const handle2bedromPrice8 = (e) => {
    const value = e.target.value;
    setTowBed8(value);
    calculateSumBed(value, oneBed8, threeBed8, fourBed8, fiveBed8, sixBed8);
  };
  const handle3bedromPrice8 = (e) => {
    const value = e.target.value;
    setThreeBed8(value);
    calculateSumBed(value, twoBed8, oneBed8, fourBed8, fiveBed8, sixBed8);

  };
  const handle4bedromPrice8 = (e) => {
    const value = e.target.value;
    setFourBed8(value)
    calculateSumBed(value, twoBed8, threeBed8, oneBed8, fiveBed8, sixBed8);
  };

  const handle5bedromPrice8 = (e) => {
    const value = e.target.value;
    setFiveBed8(value);
    calculateSumBed(value, twoBed8, threeBed8, oneBed8, fourBed8, sixBed8);
  };
  const handle6bedromPrice8 = (e) => {
    const value = e.target.value;
    setSixBed8(value);
    calculateSumBed(value, twoBed8, threeBed8, oneBed8, fourBed8, fiveBed8);

  };
  const handle1bedromPrice9 = (e) => {
    const value = e.target.value;
    setOneBed9(value)
    calculateSumBed(value, twoBed9, threeBed9, fourBed9, fiveBed9, sixBed9);
  };

  const handle2bedromPrice9 = (e) => {
    const value = e.target.value;
    setTowBed9(value);
    calculateSumBed(value, oneBed9, threeBed9, fourBed9, fiveBed9, sixBed9);
  };
  const handle3bedromPrice9 = (e) => {
    const value = e.target.value;
    setThreeBed9(value);
    calculateSumBed(value, twoBed9, oneBed9, fourBed9, fiveBed9, sixBed9);

  };
  const handle4bedromPrice9 = (e) => {
    const value = e.target.value;
    setFourBed9(value)
    calculateSumBed(value, twoBed9, threeBed9, oneBed9, fiveBed9, sixBed9);
  };

  const handle5bedromPrice9 = (e) => {
    const value = e.target.value;
    setFiveBed9(value);
    calculateSumBed(value, twoBed9, threeBed9, oneBed9, fourBed9, sixBed9);
  };
  const handle6bedromPrice9 = (e) => {
    const value = e.target.value;
    setSixBed9(value);
    calculateSumBed(value, twoBed9, threeBed9, oneBed9, fourBed9, fiveBed9);

  };
  const handle1bedromPrice10 = (e) => {
    const value = e.target.value;
    setOneBed10(value)
    calculateSumBed(value, twoBed10, threeBed10, fourBed10, fiveBed10, sixBed10);
  };

  const handle2bedromPrice10 = (e) => {
    const value = e.target.value;
    setTowBed10(value);
    calculateSumBed(value, oneBed10, threeBed10, fourBed10, fiveBed10, sixBed10);
  };
  const handle3bedromPrice10 = (e) => {
    const value = e.target.value;
    setThreeBed10(value);
    calculateSumBed(value, twoBed10, oneBed10, fourBed10, fiveBed10, sixBed10);

  };
  const handle4bedromPrice10 = (e) => {
    const value = e.target.value;
    setFourBed10(value)
    calculateSumBed(value, twoBed10, threeBed10, oneBed10, fiveBed10, sixBed10);
  };

  const handle5bedromPrice10 = (e) => {
    const value = e.target.value;
    setFiveBed10(value);
    calculateSumBed(value, twoBed10, threeBed10, oneBed10, fourBed10, sixBed10);
  };
  const handle6bedromPrice10 = (e) => {
    const value = e.target.value;
    setSixBed10(value);
    calculateSumBed(value, twoBed10, threeBed10, oneBed10, fourBed10, fiveBed10);

  };
  const handle1bedromPrice11 = (e) => {
    const value = e.target.value;
    setOneBed11(value)
    calculateSumBed(value, twoBed11, threeBed11, fourBed11, fiveBed11, sixBed11);
  };

  const handle2bedromPrice11 = (e) => {
    const value = e.target.value;
    setTowBed11(value);
    calculateSumBed(value, oneBed11, threeBed11, fourBed11, fiveBed11, sixBed11);
  };
  const handle3bedromPrice11 = (e) => {
    const value = e.target.value;
    setThreeBed11(value);
    calculateSumBed(value, twoBed11, oneBed11, fourBed11, fiveBed11, sixBed11);

  };
  const handle4bedromPrice11 = (e) => {
    const value = e.target.value;
    setFourBed11(value)
    calculateSumBed(value, twoBed11, threeBed11, oneBed11, fiveBed11, sixBed11);
  };

  const handle5bedromPrice11 = (e) => {
    const value = e.target.value;
    setFiveBed11(value);
    calculateSumBed(value, twoBed11, threeBed11, oneBed11, fourBed11, sixBed11);
  };
  const handle6bedromPrice11 = (e) => {
    const value = e.target.value;
    setSixBed11(value);
    calculateSumBed(value, twoBed11, threeBed11, oneBed11, fourBed11, fiveBed11);

  };
  const handle1bedromPrice12 = (e) => {
    const value = e.target.value;
    setOneBed12(value)
    calculateSumBed(value, twoBed12, threeBed12, fourBed12, fiveBed12, sixBed12);
  };

  const handle2bedromPrice12 = (e) => {
    const value = e.target.value;
    setTowBed12(value);
    calculateSumBed(value, oneBed12, threeBed12, fourBed12, fiveBed12, sixBed12);
  };
  const handle3bedromPrice12 = (e) => {
    const value = e.target.value;
    setThreeBed12(value);
    calculateSumBed(value, twoBed12, oneBed12, fourBed12, fiveBed12, sixBed12);

  };
  const handle4bedromPrice12 = (e) => {
    const value = e.target.value;
    setFourBed12(value)
    calculateSumBed(value, twoBed12, threeBed12, oneBed12, fiveBed12, sixBed12);
  };

  const handle5bedromPrice12 = (e) => {
    const value = e.target.value;
    setFiveBed12(value);
    calculateSumBed(value, twoBed12, threeBed12, oneBed12, fourBed12, sixBed12);
  };
  const handle6bedromPrice12 = (e) => {
    const value = e.target.value;
    setSixBed12(value);
    calculateSumBed(value, twoBed12, threeBed12, oneBed12, fourBed12, fiveBed12);

  };
  const handle1bedromPrice13 = (e) => {
    const value = e.target.value;
    setOneBed13(value)
    calculateSumBed(value, twoBed13, threeBed13, fourBed13, fiveBed13, sixBed13);
  };

  const handle2bedromPrice13 = (e) => {
    const value = e.target.value;
    setTowBed13(value);
    calculateSumBed(value, oneBed13, threeBed13, fourBed13, fiveBed13, sixBed13);
  };
  const handle3bedromPrice13 = (e) => {
    const value = e.target.value;
    setThreeBed13(value);
    calculateSumBed(value, twoBed13, oneBed13, fourBed13, fiveBed13, sixBed13);

  };
  const handle4bedromPrice13 = (e) => {
    const value = e.target.value;
    setFourBed13(value)
    calculateSumBed(value, twoBed13, threeBed13, oneBed13, fiveBed13, sixBed13);
  };

  const handle5bedromPrice13 = (e) => {
    const value = e.target.value;
    setFiveBed13(value);
    calculateSumBed(value, twoBed13, threeBed13, oneBed13, fourBed13, sixBed13);
  };
  const handle6bedromPrice13 = (e) => {
    const value = e.target.value;
    setSixBed13(value);
    calculateSumBed(value, twoBed13, threeBed13, oneBed13, fourBed13, fiveBed13);

  };
  const handle1bedromPrice14 = (e) => {
    const value = e.target.value;
    setOneBed14(value)
    calculateSumBed(value, twoBed14, threeBed14, fourBed14, fiveBed14, sixBed14);
  };

  const handle2bedromPrice14 = (e) => {
    const value = e.target.value;
    setTowBed14(value);
    calculateSumBed(value, oneBed14, threeBed14, fourBed14, fiveBed14, sixBed14);
  };
  const handle3bedromPrice14 = (e) => {
    const value = e.target.value;
    setThreeBed14(value);
    calculateSumBed(value, twoBed14, oneBed14, fourBed14, fiveBed14, sixBed14);

  };
  const handle4bedromPrice14 = (e) => {
    const value = e.target.value;
    setFourBed14(value)
    calculateSumBed(value, twoBed14, threeBed14, oneBed14, fiveBed14, sixBed14);
  };

  const handle5bedromPrice14 = (e) => {
    const value = e.target.value;
    setFiveBed14(value);
    calculateSumBed(value, twoBed14, threeBed14, oneBed14, fourBed14, sixBed14);
  };
  const handle6bedromPrice14 = (e) => {
    const value = e.target.value;
    setSixBed14(value);
    calculateSumBed(value, twoBed14, threeBed14, oneBed14, fourBed14, fiveBed14);

  };
  const handle1bedromPrice15 = (e) => {
    const value = e.target.value;
    setOneBed15(value)
    calculateSumBed(value, twoBed15, threeBed15, fourBed15, fiveBed15, sixBed15);
  };

  const handle2bedromPrice15 = (e) => {
    const value = e.target.value;
    setTowBed15(value);
    calculateSumBed(value, oneBed15, threeBed15, fourBed15, fiveBed15, sixBed15);
  };
  const handle3bedromPrice15 = (e) => {
    const value = e.target.value;
    setThreeBed15(value);
    calculateSumBed(value, twoBed15, oneBed15, fourBed15, fiveBed15, sixBed15);

  };
  const handle4bedromPrice15 = (e) => {
    const value = e.target.value;
    setFourBed15(value)
    calculateSumBed(value, twoBed15, threeBed15, oneBed15, fiveBed15, sixBed15);
  };

  const handle5bedromPrice15 = (e) => {
    const value = e.target.value;
    setFiveBed15(value);
    calculateSumBed(value, twoBed15, threeBed15, oneBed15, fourBed15, sixBed15);
  };
  const handle6bedromPrice15 = (e) => {
    const value = e.target.value;
    setSixBed15(value);
    calculateSumBed(value, twoBed15, threeBed15, oneBed15, fourBed15, fiveBed15);

  };
  const handle1bedromPrice16 = (e) => {
    const value = e.target.value;
    setOneBed16(value)
    calculateSumBed(value, twoBed16, threeBed16, fourBed16, fiveBed16, sixBed16);
  };

  const handle2bedromPrice16 = (e) => {
    const value = e.target.value;
    setTowBed16(value);
    calculateSumBed(value, oneBed16, threeBed16, fourBed16, fiveBed16, sixBed16);
  };
  const handle3bedromPrice16 = (e) => {
    const value = e.target.value;
    setThreeBed16(value);
    calculateSumBed(value, twoBed16, oneBed16, fourBed16, fiveBed16, sixBed16);

  };
  const handle4bedromPrice16 = (e) => {
    const value = e.target.value;
    setFourBed16(value)
    calculateSumBed(value, twoBed16, threeBed16, oneBed16, fiveBed16, sixBed16);
  };

  const handle5bedromPrice16 = (e) => {
    const value = e.target.value;
    setFiveBed16(value);
    calculateSumBed(value, twoBed16, threeBed16, oneBed16, fourBed16, sixBed16);
  };
  const handle6bedromPrice16 = (e) => {
    const value = e.target.value;
    setSixBed16(value);
    calculateSumBed(value, twoBed16, threeBed16, oneBed16, fourBed16, fiveBed16);

  };
  const handle1bedromPrice17 = (e) => {
    const value = e.target.value;
    setOneBed17(value)
    calculateSumBed(value, twoBed17, threeBed17, fourBed17, fiveBed17, sixBed17);
  };

  const handle2bedromPrice17 = (e) => {
    const value = e.target.value;
    setTowBed17(value);
    calculateSumBed(value, oneBed17, threeBed17, fourBed17, fiveBed17, sixBed17);
  };
  const handle3bedromPrice17 = (e) => {
    const value = e.target.value;
    setThreeBed17(value);
    calculateSumBed(value, twoBed17, oneBed17, fourBed17, fiveBed17, sixBed17);

  };
  const handle4bedromPrice17 = (e) => {
    const value = e.target.value;
    setFourBed17(value)
    calculateSumBed(value, twoBed17, threeBed17, oneBed17, fiveBed17, sixBed17);
  };

  const handle5bedromPrice17 = (e) => {
    const value = e.target.value;
    setFiveBed17(value);
    calculateSumBed(value, twoBed17, threeBed17, oneBed17, fourBed17, sixBed17);
  };
  const handle6bedromPrice17 = (e) => {
    const value = e.target.value;
    setSixBed17(value);
    calculateSumBed(value, twoBed17, threeBed17, oneBed17, fourBed17, fiveBed17);

  };
  const handle1bedromPrice18 = (e) => {
    const value = e.target.value;
    setOneBed18(value)
    calculateSumBed(value, twoBed18, threeBed18, fourBed18, fiveBed18, sixBed18);
  };

  const handle2bedromPrice18 = (e) => {
    const value = e.target.value;
    setTowBed18(value);
    calculateSumBed(value, oneBed18, threeBed18, fourBed18, fiveBed18, sixBed18);
  };
  const handle3bedromPrice18 = (e) => {
    const value = e.target.value;
    setThreeBed18(value);
    calculateSumBed(value, twoBed18, oneBed18, fourBed18, fiveBed18, sixBed18);

  };
  const handle4bedromPrice18 = (e) => {
    const value = e.target.value;
    setFourBed18(value)
    calculateSumBed(value, twoBed18, threeBed18, oneBed18, fiveBed18, sixBed18);
  };

  const handle5bedromPrice18 = (e) => {
    const value = e.target.value;
    setFiveBed18(value);
    calculateSumBed(value, twoBed18, threeBed18, oneBed18, fourBed18, sixBed18);
  };
  const handle6bedromPrice18 = (e) => {
    const value = e.target.value;
    setSixBed18(value);
    calculateSumBed(value, twoBed18, threeBed18, oneBed18, fourBed18, fiveBed18);

  };
  const handle1bedromPrice19 = (e) => {
    const value = e.target.value;
    setOneBed19(value)
    calculateSumBed(value, twoBed19, threeBed19, fourBed19, fiveBed19, sixBed19);
  };

  const handle2bedromPrice19 = (e) => {
    const value = e.target.value;
    setTowBed19(value);
    calculateSumBed(value, oneBed19, threeBed19, fourBed19, fiveBed19, sixBed19);
  };
  const handle3bedromPrice19 = (e) => {
    const value = e.target.value;
    setThreeBed19(value);
    calculateSumBed(value, twoBed19, oneBed19, fourBed19, fiveBed19, sixBed19);

  };
  const handle4bedromPrice19 = (e) => {
    const value = e.target.value;
    setFourBed19(value)
    calculateSumBed(value, twoBed19, threeBed19, oneBed19, fiveBed19, sixBed19);
  };

  const handle5bedromPrice19 = (e) => {
    const value = e.target.value;
    setFiveBed19(value);
    calculateSumBed(value, twoBed19, threeBed19, oneBed19, fourBed19, sixBed19);
  };
  const handle6bedromPrice19 = (e) => {
    const value = e.target.value;
    setSixBed19(value);
    calculateSumBed(value, twoBed19, threeBed19, oneBed19, fourBed19, fiveBed19);

  };
  const handle1bedromPrice20 = (e) => {
    const value = e.target.value;
    setOneBed20(value)
    calculateSumBed(value, twoBed20, threeBed20, fourBed20, fiveBed20, sixBed20);
  };

  const handle2bedromPrice20 = (e) => {
    const value = e.target.value;
    setTowBed20(value);
    calculateSumBed(value, oneBed20, threeBed20, fourBed20, fiveBed20, sixBed20);
  };
  const handle3bedromPrice20 = (e) => {
    const value = e.target.value;
    setThreeBed20(value);
    calculateSumBed(value, twoBed20, oneBed20, fourBed20, fiveBed20, sixBed20);

  };
  const handle4bedromPrice20 = (e) => {
    const value = e.target.value;
    setFourBed20(value)
    calculateSumBed(value, twoBed20, threeBed20, oneBed20, fiveBed20, sixBed20);
  };

  const handle5bedromPrice20 = (e) => {
    const value = e.target.value;
    setFiveBed20(value);
    calculateSumBed(value, twoBed20, threeBed20, oneBed20, fourBed20, sixBed20);
  };
  const handle6bedromPrice20 = (e) => {
    const value = e.target.value;
    setSixBed20(value);
    calculateSumBed(value, twoBed20, threeBed20, oneBed20, fourBed20, fiveBed20);

  };
  const handle1bedromPrice21 = (e) => {
    const value = e.target.value;
    setOneBed21(value)
    calculateSumBed(value, twoBed21, threeBed21, fourBed21, fiveBed21, sixBed21);
  };

  const handle2bedromPrice21 = (e) => {
    const value = e.target.value;
    setTowBed21(value);
    calculateSumBed(value, oneBed21, threeBed21, fourBed21, fiveBed21, sixBed21);
  };
  const handle3bedromPrice21 = (e) => {
    const value = e.target.value;
    setThreeBed21(value);
    calculateSumBed(value, twoBed21, oneBed21, fourBed21, fiveBed21, sixBed21);

  };
  const handle4bedromPrice21 = (e) => {
    const value = e.target.value;
    setFourBed21(value)
    calculateSumBed(value, twoBed21, threeBed21, oneBed21, fiveBed21, sixBed21);
  };

  const handle5bedromPrice21 = (e) => {
    const value = e.target.value;
    setFiveBed21(value);
    calculateSumBed(value, twoBed21, threeBed21, oneBed21, fourBed21, sixBed21);
  };
  const handle6bedromPrice21 = (e) => {
    const value = e.target.value;
    setSixBed21(value);
    calculateSumBed(value, twoBed21, threeBed21, oneBed21, fourBed21, fiveBed21);

  };
  const handle1bedromPrice22 = (e) => {
    const value = e.target.value;
    setOneBed22(value)
    calculateSumBed(value, twoBed22, threeBed22, fourBed22, fiveBed22, sixBed22);
  };

  const handle2bedromPrice22 = (e) => {
    const value = e.target.value;
    setTowBed22(value);
    calculateSumBed(value, oneBed22, threeBed22, fourBed22, fiveBed22, sixBed22);
  };
  const handle3bedromPrice22 = (e) => {
    const value = e.target.value;
    setThreeBed22(value);
    calculateSumBed(value, twoBed22, oneBed22, fourBed22, fiveBed22, sixBed22);

  };
  const handle4bedromPrice22 = (e) => {
    const value = e.target.value;
    setFourBed22(value)
    calculateSumBed(value, twoBed22, threeBed22, oneBed22, fiveBed22, sixBed22);
  };

  const handle5bedromPrice22 = (e) => {
    const value = e.target.value;
    setFiveBed22(value);
    calculateSumBed(value, twoBed22, threeBed22, oneBed22, fourBed22, sixBed22);
  };
  const handle6bedromPrice22 = (e) => {
    const value = e.target.value;
    setSixBed22(value);
    calculateSumBed(value, twoBed22, threeBed22, oneBed22, fourBed22, fiveBed22);

  };
  const handle1bedromPrice23 = (e) => {
    const value = e.target.value;
    setOneBed23(value)
    calculateSumBed(value, twoBed23, threeBed23, fourBed23, fiveBed23, sixBed23);
  };

  const handle2bedromPrice23 = (e) => {
    const value = e.target.value;
    setTowBed23(value);
    calculateSumBed(value, oneBed23, threeBed23, fourBed23, fiveBed23, sixBed23);
  };
  const handle3bedromPrice23 = (e) => {
    const value = e.target.value;
    setThreeBed23(value);
    calculateSumBed(value, twoBed23, oneBed23, fourBed23, fiveBed23, sixBed23);

  };
  const handle4bedromPrice23 = (e) => {
    const value = e.target.value;
    setFourBed23(value)
    calculateSumBed(value, twoBed23, threeBed23, oneBed23, fiveBed23, sixBed23);
  };

  const handle5bedromPrice23 = (e) => {
    const value = e.target.value;
    setFiveBed23(value);
    calculateSumBed(value, twoBed23, threeBed23, oneBed23, fourBed23, sixBed23);
  };
  const handle6bedromPrice23 = (e) => {
    const value = e.target.value;
    setSixBed23(value);
    calculateSumBed(value, twoBed23, threeBed23, oneBed23, fourBed23, fiveBed23);

  };
  const handle1bedromPrice24 = (e) => {
    const value = e.target.value;
    setOneBed24(value)
    calculateSumBed(value, twoBed24, threeBed24, fourBed24, fiveBed24, sixBed24);
  };

  const handle2bedromPrice24 = (e) => {
    const value = e.target.value;
    setTowBed24(value);
    calculateSumBed(value, oneBed24, threeBed24, fourBed24, fiveBed24, sixBed24);
  };
  const handle3bedromPrice24 = (e) => {
    const value = e.target.value;
    setThreeBed24(value);
    calculateSumBed(value, twoBed24, oneBed24, fourBed24, fiveBed24, sixBed24);

  };
  const handle4bedromPrice24 = (e) => {
    const value = e.target.value;
    setFourBed24(value)
    calculateSumBed(value, twoBed24, threeBed24, oneBed24, fiveBed24, sixBed24);
  };

  const handle5bedromPrice24 = (e) => {
    const value = e.target.value;
    setFiveBed24(value);
    calculateSumBed(value, twoBed24, threeBed24, oneBed24, fourBed24, sixBed24);
  };
  const handle6bedromPrice24 = (e) => {
    const value = e.target.value;
    setSixBed24(value);
    calculateSumBed(value, twoBed24, threeBed24, oneBed24, fourBed24, fiveBed24);

  };
  const handle1bedromPrice25 = (e) => {
    const value = e.target.value;
    setOneBed25(value)
    calculateSumBed(value, twoBed25, threeBed25, fourBed25, fiveBed25, sixBed25);
  };

  const handle2bedromPrice25 = (e) => {
    const value = e.target.value;
    setTowBed25(value);
    calculateSumBed(value, oneBed25, threeBed25, fourBed25, fiveBed25, sixBed25);
  };
  const handle3bedromPrice25 = (e) => {
    const value = e.target.value;
    setThreeBed25(value);
    calculateSumBed(value, twoBed25, oneBed25, fourBed25, fiveBed25, sixBed25);

  };
  const handle4bedromPrice25 = (e) => {
    const value = e.target.value;
    setFourBed25(value)
    calculateSumBed(value, twoBed25, threeBed25, oneBed25, fiveBed25, sixBed25);
  };

  const handle5bedromPrice25 = (e) => {
    const value = e.target.value;
    setFiveBed25(value);
    calculateSumBed(value, twoBed25, threeBed25, oneBed25, fourBed25, sixBed25);
  };
  const handle6bedromPrice25 = (e) => {
    const value = e.target.value;
    setSixBed25(value);
    calculateSumBed(value, twoBed25, threeBed25, oneBed25, fourBed25, fiveBed25);

  };
  const handle1bedromPrice26 = (e) => {
    const value = e.target.value;
    setOneBed26(value)
    calculateSumBed(value, twoBed26, threeBed26, fourBed26, fiveBed26, sixBed26);
  };

  const handle2bedromPrice26 = (e) => {
    const value = e.target.value;
    setTowBed26(value);
    calculateSumBed(value, oneBed26, threeBed26, fourBed26, fiveBed26, sixBed26);
  };
  const handle3bedromPrice26 = (e) => {
    const value = e.target.value;
    setThreeBed26(value);
    calculateSumBed(value, twoBed26, oneBed26, fourBed26, fiveBed26, sixBed26);

  };
  const handle4bedromPrice26 = (e) => {
    const value = e.target.value;
    setFourBed26(value)
    calculateSumBed(value, twoBed26, threeBed26, oneBed26, fiveBed26, sixBed26);
  };

  const handle5bedromPrice26 = (e) => {
    const value = e.target.value;
    setFiveBed26(value);
    calculateSumBed(value, twoBed26, threeBed26, oneBed26, fourBed26, sixBed26);
  };
  const handle6bedromPrice26 = (e) => {
    const value = e.target.value;
    setSixBed26(value);
    calculateSumBed(value, twoBed26, threeBed26, oneBed26, fourBed26, fiveBed26);

  };
  const handle1bedromPrice27 = (e) => {
    const value = e.target.value;
    setOneBed27(value)
    calculateSumBed(value, twoBed27, threeBed27, fourBed27, fiveBed27, sixBed27);
  };

  const handle2bedromPrice27 = (e) => {
    const value = e.target.value;
    setTowBed27(value);
    calculateSumBed(value, oneBed27, threeBed27, fourBed27, fiveBed27, sixBed27);
  };
  const handle3bedromPrice27 = (e) => {
    const value = e.target.value;
    setThreeBed27(value);
    calculateSumBed(value, twoBed27, oneBed27, fourBed27, fiveBed27, sixBed27);

  };
  const handle4bedromPrice27 = (e) => {
    const value = e.target.value;
    setFourBed27(value)
    calculateSumBed(value, twoBed27, threeBed27, oneBed27, fiveBed27, sixBed27);
  };

  const handle5bedromPrice27 = (e) => {
    const value = e.target.value;
    setFiveBed27(value);
    calculateSumBed(value, twoBed27, threeBed27, oneBed27, fourBed27, sixBed27);
  };
  const handle6bedromPrice27 = (e) => {
    const value = e.target.value;
    setSixBed27(value);
    calculateSumBed(value, twoBed27, threeBed27, oneBed27, fourBed27, fiveBed27);

  };
  const handle1bedromPrice28 = (e) => {
    const value = e.target.value;
    setOneBed28(value)
    calculateSumBed(value, twoBed28, threeBed28, fourBed28, fiveBed28, sixBed28);
  };

  const handle2bedromPrice28 = (e) => {
    const value = e.target.value;
    setTowBed28(value);
    calculateSumBed(value, oneBed28, threeBed28, fourBed28, fiveBed28, sixBed28);
  };
  const handle3bedromPrice28 = (e) => {
    const value = e.target.value;
    setThreeBed28(value);
    calculateSumBed(value, twoBed28, oneBed28, fourBed28, fiveBed28, sixBed28);

  };
  const handle4bedromPrice28 = (e) => {
    const value = e.target.value;
    setFourBed28(value)
    calculateSumBed(value, twoBed28, threeBed28, oneBed28, fiveBed28, sixBed28);
  };

  const handle5bedromPrice28 = (e) => {
    const value = e.target.value;
    setFiveBed28(value);
    calculateSumBed(value, twoBed28, threeBed28, oneBed28, fourBed28, sixBed28);
  };
  const handle6bedromPrice28 = (e) => {
    const value = e.target.value;
    setSixBed28(value);
    calculateSumBed(value, twoBed28, threeBed28, oneBed28, fourBed28, fiveBed28);

  };
  const handle1bedromPrice29 = (e) => {
    const value = e.target.value;
    setOneBed29(value)
    calculateSumBed(value, twoBed29, threeBed29, fourBed29, fiveBed29, sixBed29);
  };

  const handle2bedromPrice29 = (e) => {
    const value = e.target.value;
    setTowBed29(value);
    calculateSumBed(value, oneBed29, threeBed29, fourBed29, fiveBed29, sixBed29);
  };
  const handle3bedromPrice29 = (e) => {
    const value = e.target.value;
    setThreeBed29(value);
    calculateSumBed(value, twoBed29, oneBed29, fourBed29, fiveBed29, sixBed29);

  };
  const handle4bedromPrice29 = (e) => {
    const value = e.target.value;
    setFourBed29(value)
    calculateSumBed(value, twoBed29, threeBed29, oneBed29, fiveBed29, sixBed29);
  };

  const handle5bedromPrice29 = (e) => {
    const value = e.target.value;
    setFiveBed29(value);
    calculateSumBed(value, twoBed29, threeBed29, oneBed29, fourBed29, sixBed29);
  };
  const handle6bedromPrice29 = (e) => {
    const value = e.target.value;
    setSixBed29(value);
    calculateSumBed(value, twoBed29, threeBed29, oneBed29, fourBed29, fiveBed29);

  };
  const handle1bedromPrice30 = (e) => {
    const value = e.target.value;
    setOneBed30(value)
    calculateSumBed(value, twoBed30, threeBed30, fourBed30, fiveBed30, sixBed30);
  };

  const handle2bedromPrice30 = (e) => {
    const value = e.target.value;
    setTowBed30(value);
    calculateSumBed(value, oneBed30, threeBed30, fourBed30, fiveBed30, sixBed30);
  };
  const handle3bedromPrice30 = (e) => {
    const value = e.target.value;
    setThreeBed30(value);
    calculateSumBed(value, twoBed30, oneBed30, fourBed30, fiveBed30, sixBed30);

  };
  const handle4bedromPrice30 = (e) => {
    const value = e.target.value;
    setFourBed30(value)
    calculateSumBed(value, twoBed30, threeBed30, oneBed30, fiveBed30, sixBed30);
  };

  const handle5bedromPrice30 = (e) => {
    const value = e.target.value;
    setFiveBed30(value);
    calculateSumBed(value, twoBed30, threeBed30, oneBed30, fourBed30, sixBed30);
  };
  const handle6bedromPrice30 = (e) => {
    const value = e.target.value;
    setSixBed30(value);
    calculateSumBed(value, twoBed30, threeBed30, oneBed30, fourBed30, fiveBed30);

  };
  const handle1bedromPrice31 = (e) => {
    const value = e.target.value;
    setOneBed31(value)
    calculateSumBed(value, twoBed31, threeBed31, fourBed31, fiveBed31, sixBed31);
  };

  const handle2bedromPrice31 = (e) => {
    const value = e.target.value;
    setTowBed31(value);
    calculateSumBed(value, oneBed31, threeBed31, fourBed31, fiveBed31, sixBed31);
  };
  const handle3bedromPrice31 = (e) => {
    const value = e.target.value;
    setThreeBed31(value);
    calculateSumBed(value, twoBed31, oneBed31, fourBed31, fiveBed31, sixBed31);

  };
  const handle4bedromPrice31 = (e) => {
    const value = e.target.value;
    setFourBed31(value)
    calculateSumBed(value, twoBed31, threeBed31, oneBed31, fiveBed31, sixBed31);
  };

  const handle5bedromPrice31 = (e) => {
    const value = e.target.value;
    setFiveBed31(value);
    calculateSumBed(value, twoBed31, threeBed31, oneBed31, fourBed31, sixBed31);
  };
  const handle6bedromPrice31 = (e) => {
    const value = e.target.value;
    setSixBed31(value);
    calculateSumBed(value, twoBed31, threeBed31, oneBed31, fourBed31, fiveBed31);

  };
  const handle1bedromPrice32 = (e) => {
    const value = e.target.value;
    setOneBed32(value)
    calculateSumBed(value, twoBed32, threeBed32, fourBed32, fiveBed32, sixBed32);
  };

  const handle2bedromPrice32 = (e) => {
    const value = e.target.value;
    setTowBed32(value);
    calculateSumBed(value, oneBed32, threeBed32, fourBed32, fiveBed32, sixBed32);
  };
  const handle3bedromPrice32 = (e) => {
    const value = e.target.value;
    setThreeBed32(value);
    calculateSumBed(value, twoBed32, oneBed32, fourBed32, fiveBed32, sixBed32);

  };
  const handle4bedromPrice32 = (e) => {
    const value = e.target.value;
    setFourBed32(value)
    calculateSumBed(value, twoBed32, threeBed32, oneBed32, fiveBed32, sixBed32);
  };

  const handle5bedromPrice32 = (e) => {
    const value = e.target.value;
    setFiveBed32(value);
    calculateSumBed(value, twoBed32, threeBed32, oneBed32, fourBed32, sixBed32);
  };
  const handle6bedromPrice32 = (e) => {
    const value = e.target.value;
    setSixBed32(value);
    calculateSumBed(value, twoBed32, threeBed32, oneBed32, fourBed32, fiveBed32);

  };
  const handle1bedromPrice33 = (e) => {
    const value = e.target.value;
    setOneBed33(value)
    calculateSumBed(value, twoBed33, threeBed33, fourBed33, fiveBed33, sixBed33);
  };

  const handle2bedromPrice33 = (e) => {
    const value = e.target.value;
    setTowBed33(value);
    calculateSumBed(value, oneBed33, threeBed33, fourBed33, fiveBed33, sixBed33);
  };
  const handle3bedromPrice33 = (e) => {
    const value = e.target.value;
    setThreeBed33(value);
    calculateSumBed(value, twoBed33, oneBed33, fourBed33, fiveBed33, sixBed33);

  };
  const handle4bedromPrice33 = (e) => {
    const value = e.target.value;
    setFourBed33(value)
    calculateSumBed(value, twoBed33, threeBed33, oneBed33, fiveBed33, sixBed33);
  };

  const handle5bedromPrice33 = (e) => {
    const value = e.target.value;
    setFiveBed33(value);
    calculateSumBed(value, twoBed33, threeBed33, oneBed33, fourBed33, sixBed33);
  };
  const handle6bedromPrice33 = (e) => {
    const value = e.target.value;
    setSixBed33(value);
    calculateSumBed(value, twoBed33, threeBed33, oneBed33, fourBed33, fiveBed33);

  };
  const handle1bedromPrice34 = (e) => {
    const value = e.target.value;
    setOneBed34(value)
    calculateSumBed(value, twoBed34, threeBed34, fourBed34, fiveBed34, sixBed34);
  };

  const handle2bedromPrice34 = (e) => {
    const value = e.target.value;
    setTowBed34(value);
    calculateSumBed(value, oneBed34, threeBed34, fourBed34, fiveBed34, sixBed34);
  };
  const handle3bedromPrice34 = (e) => {
    const value = e.target.value;
    setThreeBed34(value);
    calculateSumBed(value, twoBed34, oneBed34, fourBed34, fiveBed34, sixBed34);

  };
  const handle4bedromPrice34 = (e) => {
    const value = e.target.value;
    setFourBed34(value)
    calculateSumBed(value, twoBed34, threeBed34, oneBed34, fiveBed34, sixBed34);
  };

  const handle5bedromPrice34 = (e) => {
    const value = e.target.value;
    setFiveBed34(value);
    calculateSumBed(value, twoBed34, threeBed34, oneBed34, fourBed34, sixBed34);
  };
  const handle6bedromPrice34 = (e) => {
    const value = e.target.value;
    setSixBed34(value);
    calculateSumBed(value, twoBed34, threeBed34, oneBed34, fourBed34, fiveBed34);

  };
  const handle1bedromPrice35 = (e) => {
    const value = e.target.value;
    setOneBed35(value)
    calculateSumBed(value, twoBed35, threeBed35, fourBed35, fiveBed35, sixBed35);
  };

  const handle2bedromPrice35 = (e) => {
    const value = e.target.value;
    setTowBed35(value);
    calculateSumBed(value, oneBed35, threeBed35, fourBed35, fiveBed35, sixBed35);
  };
  const handle3bedromPrice35 = (e) => {
    const value = e.target.value;
    setThreeBed35(value);
    calculateSumBed(value, twoBed35, oneBed35, fourBed35, fiveBed35, sixBed35);

  };
  const handle4bedromPrice35 = (e) => {
    const value = e.target.value;
    setFourBed35(value)
    calculateSumBed(value, twoBed35, threeBed35, oneBed35, fiveBed35, sixBed35);
  };

  const handle5bedromPrice35 = (e) => {
    const value = e.target.value;
    setFiveBed35(value);
    calculateSumBed(value, twoBed35, threeBed35, oneBed35, fourBed35, sixBed35);
  };
  const handle6bedromPrice35 = (e) => {
    const value = e.target.value;
    setSixBed35(value);
    calculateSumBed(value, twoBed35, threeBed35, oneBed35, fourBed35, fiveBed35);

  };
  const handle1bedromPrice36 = (e) => {
    const value = e.target.value;
    setOneBed36(value)
    calculateSumBed(value, twoBed36, threeBed36, fourBed36, fiveBed36, sixBed36);
  };

  const handle2bedromPrice36 = (e) => {
    const value = e.target.value;
    setTowBed36(value);
    calculateSumBed(value, oneBed36, threeBed36, fourBed36, fiveBed36, sixBed36);
  };
  const handle3bedromPrice36 = (e) => {
    const value = e.target.value;
    setThreeBed36(value);
    calculateSumBed(value, twoBed36, oneBed36, fourBed36, fiveBed36, sixBed36);

  };
  const handle4bedromPrice36 = (e) => {
    const value = e.target.value;
    setFourBed36(value)
    calculateSumBed(value, twoBed36, threeBed36, oneBed36, fiveBed36, sixBed36);
  };

  const handle5bedromPrice36 = (e) => {
    const value = e.target.value;
    setFiveBed36(value);
    calculateSumBed(value, twoBed36, threeBed36, oneBed36, fourBed36, sixBed36);
  };
  const handle6bedromPrice36 = (e) => {
    const value = e.target.value;
    setSixBed36(value);
    calculateSumBed(value, twoBed36, threeBed36, oneBed36, fourBed36, fiveBed36);

  };
  const calculateSumBed = (num1, num2, num3, num4, num5, num6) => {
    const sum =
      (num1 ? parseInt(num1) : 0) +
      (num2 ? parseInt(num2) : 0) +
      (num3 ? parseInt(num3) : 0) +
      (num4 ? parseInt(num4) : 0) +
      (num5 ? parseInt(num5) : 0) +
      (num6 ? parseInt(num6) : 0);
    setTotalBedPRice(sum || '');
  };
  const [monthlyCost, setMonthlyCost] = useState('0');
  const [netProfit, setNetProfit] = useState('0');
  const [recalm, setRecalm] = useState('0')
  const [recalm2, setRecalm2] = useState('0');
  const handleMonthlyCost = (e) => {
    const value = e.target.value;
    setMonthlyCost(value);
    calculateNetProfit(value);
  };


  const [mainData, setMainData] = useState();
  useEffect(() => {
    axios.get('https://sheetdb.io/api/v1/6r2wub6h8j2d0')
      .then(function (response) {
        setMainData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }, [])


  const calculateNetProfit = (num1) => {
    const sum = totalBedPrice - parseInt(num1);

    setRecalm(result - sum || '')

  };
  const addProduct = () => {
    axios.post('https://sheetdb.io/api/v1/6r2wub6h8j2d0',

      {
        time_span: "1st Month",
        money_down: `${number1}`,
        fix_up: `${number1}`,
        monthly_cost: `${monthlyCost}`,
        one_bed: `${oneBed}`,
        two_bed: `${twoBed}`,
        three_bed: `${threeBed}`,
        four_bed: `${fourBed}`,
        gross_reclaim: `${recalm}`,
        time: age,
      }

    )
      .then(response => {
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
      });
  }
  // console.log(mainData)
  const [filterData, setFIlterData] = useState();
  const jsonData = mainData ? mainData : null;

  // Function to create individual arrays based on duplicate names
  function createArraysFromDuplicates(jsonData) {
    const arrays = {};

    if (mainData) {
      jsonData.forEach(item => {
        const { name, ...data } = item;

        if (!arrays[name]) {
          arrays[name] = [];
        }

        arrays[name].push(data);
      });

    }

    return arrays;
  }

  // Usage
  const resultTwo = createArraysFromDuplicates(jsonData);
  // console.log([resultTwo])
  const [setTime, setSelectedTime] = useState('1st Month')
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);

  };
  // console.log(setTime);


  function calculateGrossReclaim(data) {
    const updatedData = {};

    for (const propertyName in data) {
      if (data.hasOwnProperty(propertyName)) {
        const propertyData = data[propertyName];
        const updatedPropertyData = [];

        let previousGrossReclaim = 0;
        for (let i = 0; i < propertyData.length; i++) {
          const currentData = propertyData[i];

          if (i === 0) {
            currentData.gross_reclaim = "";
          } else {
            const currentGrossReclaim =
              previousGrossReclaim -
              (parseInt(currentData.one_bed) +
                parseInt(currentData.two_bed) +
                parseInt(currentData.three_bed) +
                parseInt(currentData.four_bed) -
                parseInt(currentData.monthly_cost));

            currentData.gross_reclaim = currentGrossReclaim.toString();
            previousGrossReclaim = currentGrossReclaim;
          }

          updatedPropertyData.push(currentData);
        }

        updatedData[propertyName] = updatedPropertyData;
      }
    }

    return updatedData;
  }

  const updatedData = calculateGrossReclaim([resultTwo]);
  // console.log("hello", updatedData);
  const [bedroomQUan, setBedroomQUan] = useState(1);
  const netProf = parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost);
  const [modTItle, setModTitle] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = (name, id, state) => {
    setModTitle(name)
    setOpen(true)

  };
  const handleClose = () => setOpen(false);




  return (
    <div className='homeMain'>
      <div className="menu">
        <Link to="/home"><svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={31}
          height={31}
          fill="none"

        >
          <path fill="url(#a)" d="M0 0h31v31H0z" />
          <defs>
            <pattern
              id="a"
              width={1}
              height={1}
              patternContentUnits="objectBoundingBox"
            >
              <use xlinkHref="#b" transform="scale(.00195)" />
            </pattern>
            <image
              xlinkHref="data:image/png;base64,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"
              id="b"
              width={512}
              height={512}
            />
          </defs>
        </svg></Link>
        <Link to="/home">
          <img src={SettingIcon} alt="" />
        </Link>
        <Link to="/home">
          <img src={Door} alt="" />
        </Link>
      </div>
      <div className="main">
        <div className="navMain">
          <img src={Logo} alt="" id='logo' />
          <div className="user">
            <h1>Nathan spinola</h1>
            <img src={User} alt="" />
          </div>
        </div>
        <div className="mainContent">
          <div className="entryTable">
            <div className="nameSection">
              <h1>Add New Property Entry</h1>
            </div>
            <div className="enetry">
              <FormControl className='inputBox'>
                <InputLabel id="demo-simple-select-label">Time Span</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Time Span"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1st Month</MenuItem>
                  <MenuItem value={2}>2nd Month</MenuItem>
                  <MenuItem value={3}>3rd Month</MenuItem>
                  <MenuItem value={4}>4th Month</MenuItem>
                  <MenuItem value={5}>5th Month</MenuItem>
                  <MenuItem value={6}>6th Month</MenuItem>
                  <MenuItem value={7}>7th Month</MenuItem>
                  <MenuItem value={8}>8th Month</MenuItem>
                  <MenuItem value={9}>9th Month</MenuItem>
                  <MenuItem value={10}>10th Month</MenuItem>
                  <MenuItem value={11}>11th Month</MenuItem>
                  <MenuItem value={12}>12th Month</MenuItem>
                  <MenuItem value={13}>13th Month</MenuItem>
                  <MenuItem value={14}>14th Month</MenuItem>
                  <MenuItem value={15}>15th Month</MenuItem>
                  <MenuItem value={16}>16th Month</MenuItem>
                  <MenuItem value={17}>17th Month</MenuItem>
                  <MenuItem value={18}>18th Month</MenuItem>
                  <MenuItem value={19}>19th Month</MenuItem>
                  <MenuItem value={20}>20th Month</MenuItem>
                  <MenuItem value={21}>21th Month</MenuItem>
                  <MenuItem value={22}>22th Month</MenuItem>
                  <MenuItem value={23}>23th Month</MenuItem>
                  <MenuItem value={24}>24th Month</MenuItem>
                  <MenuItem value={25}>25th Month</MenuItem>
                  <MenuItem value={26}>26th Month</MenuItem>
                  <MenuItem value={27}>27th Month</MenuItem>
                  <MenuItem value={28}>28th Month</MenuItem>
                  <MenuItem value={29}>29th Month</MenuItem>
                  <MenuItem value={30}>30th Month</MenuItem>
                  <MenuItem value={31}>31th Month</MenuItem>
                  <MenuItem value={32}>32th Month</MenuItem>
                  <MenuItem value={33}>33th Month</MenuItem>
                  <MenuItem value={34}>34th Month</MenuItem>
                  <MenuItem value={35}>35th Month</MenuItem>
                  <MenuItem value={36}>36th Month</MenuItem>

                </Select>
              </FormControl>
              <TextField id="outlined-basic" type='text' label="Money Down" variant="outlined" className='inputBox' onChange={handleNumber1Change} />
              <TextField id="outlined-basic" type='text' label="Fix Up Cost" variant="outlined" className='inputBox' onChange={handleNumber2Change} />
              {/* <TextField
            className='desableFirst'
          id="outlined-read-only-input"
          label="Total Upfront Investment:"
          defaultValue={`${result && result}`}
          sx={{color:'white'}}
          InputLabelProps={{
            style: {
              color: 'black', // Change the color to your desired value
              fontWeight:"bold",
              
            },
          }}
         
          InputProps={{
            readOnly: true,
            style: {
              color: 'black', // Change the color to your desired value
              fontWeight:"bold",
            },
          }}
        /> */}
              <div className='desableFirst'>
                <p>Total Upfront Investment:</p>
                {result && <h1 >{result}</h1>}
              </div>
              {/* {result && <p>Result: {result}</p>} */}
            </div>
            <div className="enetryTwooo">
              <TextField id="outlined-basic" type='text' label="1 Bedroom Price" variant="outlined" className='inputBoxTwo' onChange={handle1bedromPrice} />
              {
                bedroomQUan > 1 ? <TextField id="outlined-basic" type='text' label="2 Bedroom Price" variant="outlined" className='inputBoxTwo' onChange={handle2bedromPrice} style={{ marginLeft: '10px' }} /> : null
              }
              {
                bedroomQUan > 2 ? <TextField id="outlined-basic" type='text' label="3 Bedroom Price" variant="outlined" className='inputBoxTwo' onChange={handle3bedromPrice} style={{ marginLeft: '10px' }} /> : null
              }
              {
                bedroomQUan > 3 ? <TextField id="outlined-basic" type='text' label="4 Bedroom Price" variant="outlined" className='inputBoxTwo' onChange={handle4bedromPrice} style={{ marginLeft: '10px' }} /> : null
              }
              {
                bedroomQUan > 4 ? <TextField id="outlined-basic" type='text' label="5 Bedroom Price" variant="outlined" className='inputBoxTwo' style={{ marginLeft: '10px' }} onChange={handle5bedromPrice} /> : null
              }
              {
                bedroomQUan > 5 ? <TextField id="outlined-basic" type='text' label="6 Bedroom Price" variant="outlined" className='inputBoxTwo' style={{ marginLeft: '10px' }} onChange={handle6bedromPrice} /> : null
              }
              <div className="addBedRoomButton" onClick={() => setBedroomQUan(bedroomQUan + 1)}>

                <img src={AddButtonIcon} alt="" className='plusIcon' style={{ marginLeft: '10px' }} />
                <p>Add Bedroom</p>
              </div>
            </div>
            <div className="enetry">
              <TextField id="outlined-basic" type='text' label="Monthly Cost" variant="outlined" className='inputBox' style={{ marginTop: "20px" }} onChange={handleMonthlyCost} />
              <div className='desableSecond'>
                <p>Gross Monthly Profit</p>
                {totalBedPrice && <h1 >{totalBedPrice}</h1>}
              </div>
              <div className='desableSecond'>
                <p>Gross Net Profit</p>
                {netProfit && <h1 >{totalBedPrice - monthlyCost}</h1>}
              </div>
              <div className='desableSecond'>
                <p>Gross Reclaim/Return of Investment:</p>
                {recalm && <h1 >{recalm}</h1>}
              </div>
            </div>
            {/* <button className="addButton" onClick={addProduct} >Add Item</button> */}
          </div>
          {/* <div className="calculationBOx">
            <h1>Base Price </h1>
            <div className="resultBox">
              <div className='desableSecond'>
                <p>Gross Monthly Profit</p>
                {totalBedPrice && <h1 >{totalBedPrice}</h1>}
              </div>
            </div>
          </div> */}
        </div>
        <div className="tableContent">

          <div className="tableBody">
            <div className="tableContentArea">
              <p className='headings'>Time Span</p>
              <p className='headings'>Money Down</p>
              <p className='headings'>Fix Up Cost</p>
              <p className='headings'>Upfront Investment</p>
              <p className='headings'>Monthly Cost</p>
              <p className='headings'>1st Bedroom Price </p>
              {
                bedroomQUan >= 2 ? <p className='headings'>2nd Bedroom Price</p> : null
              }
              {
                bedroomQUan >= 3 ? <p className='headings'>3rd Bedroom Price</p> : null
              }
              {
                bedroomQUan >= 4 ? <p className='headings'>4th Bedroom Price</p> : null
              }
              {
                bedroomQUan >= 5 ? <p className='headings'>5th Bedroom Price</p> : null
              }
              {
                bedroomQUan >= 6 ? <p className='headings'>5th Bedroom Price</p> : null
              }

              <p className='headings'>Gross Montly Profit</p>
              <p className='headings'>Monthly Net Profit</p>
              <p className='headings'>Gross Reclaim/Return of Investmentt</p>

            </div>
            <div className="tableBodyContent">

              <div className="tableIndi">
                <p className='content' ><span>1st Month</span></p>
                <p className='content' ><span>{number1}</span></p>
                <p className='content' ><span>{number2}</span></p>
                <p className='content' ><span>{parseFloat(number1) + parseFloat(number2)}</span></p>
                <p className='content' ><span>{monthlyCost}</span></p>
                <p className='content' ><span>{oneBed}</span></p>
                {
                  bedroomQUan >= 2 ? <p className='content' ><span>{twoBed}</span></p> : null
                }
                {
                  bedroomQUan >= 3 ? <p className='content' ><span>{threeBed}</span></p> : null
                }
                {
                  bedroomQUan >= 4 ? <p className='content' ><span>{fourBed}</span></p> : null
                }
                {
                  bedroomQUan >= 5 ? <p className='content' ><span>{fiveBed}</span></p> : null
                }
                {
                  bedroomQUan >= 6 ? <p className='content' ><span>{sixBed}</span></p> : null
                }

                <p className='content' > <span>{parseFloat(oneBed) + parseFloat(twoBed) + parseFloat(threeBed) + parseFloat(fourBed) + parseFloat(fiveBed) + parseFloat(sixBed)}</span></p>
                <p className='content' > <span>{netProf}</span></p>
                <p className='content' >


                  {
                    parseFloat(recalm) >= 0 ? <span style={{ color: "red" }}>- {parseFloat(number1) + parseFloat(number2) - netProf}</span> : <span style={{ color: "green" }}>{-recalm}</span>
                  }




                </p>
              </div>
              {
                age >= 2 ? <div className="tableIndi">
                  <p className='content' ><span>2nd Month</span></p>
                  <p className='content' ><span></span></p>
                  <div className='content' ><input
                    type="text"
                    value={number02}
                    onChange={handlefix0}
                    className='inputText'
                  /></div>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>{ }
                  <div className='content' ><input
                    type="text"
                    value={oneBed2}
                    onChange={handle1bedromPrice2}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed2}
                      onChange={handle2bedromPrice2}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed2}
                      onChange={handle3bedromPrice2}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed2}
                      onChange={handle4bedromPrice2}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed2}
                      onChange={handle5bedromPrice2}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed2}
                      onChange={handle6bedromPrice2}
                      className='inputText'
                    /></div> : null
                  }


                  <p className='content' > <span>{parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >


                    {
                      parseFloat(recalm) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost))}</span> : <span style={{ color: "green" }}>{Math.abs(recalm)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 3 ? <div className="tableIndi">
                  <p className='content' ><span>3rd Month</span></p>
                  <p className='content' ><span></span></p>
                  <div className='content' ><input
                    type="text"
                    value={number3}
                    onChange={handlefix}
                    className='inputText'
                  /></div>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed3}
                    onChange={handle1bedromPrice3}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed3}
                      onChange={handle2bedromPrice3}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed3}
                      onChange={handle3bedromPrice3}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed3}
                      onChange={handle4bedromPrice3}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed3}
                      onChange={handle5bedromPrice3}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed3}
                      onChange={handle6bedromPrice3}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >


                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) - (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) + parseFloat(number3)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) - (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) + parseFloat(number3)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) - ((parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost))))}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 4 ? <div className="tableIndi">
                  <p className='content' ><span>4th Month</span></p>
                  <p className='content' ><span></span></p>
                  <div className='content' ><input
                    type="text"
                    value={number4}
                    onChange={handlefix2}
                    className='inputText'
                  /></div>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed4}
                    onChange={handle1bedromPrice4}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed4}
                      onChange={handle2bedromPrice4}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed4}
                      onChange={handle3bedromPrice4}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed4}
                      onChange={handle4bedromPrice4}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed4}
                      onChange={handle5bedromPrice4}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed4}
                      onChange={handle6bedromPrice4}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4))}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 5 ? <div className="tableIndi">
                  <p className='content' ><span>5th Month</span></p>
                  <p className='content' ><span></span></p>
                  <div className='content' ><input
                    type="text"
                    value={number5}
                    onChange={handlefix3}
                    className='inputText'
                  /></div>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed5}
                    onChange={handle1bedromPrice5}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed5}
                      onChange={handle2bedromPrice5}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed5}
                      onChange={handle3bedromPrice5}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed5}
                      onChange={handle4bedromPrice5}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed5}
                      onChange={handle5bedromPrice5}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed5}
                      onChange={handle6bedromPrice5}
                      className='inputText'
                    /></div> : null
                  }


                  <p className='content' > <span>{parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >

                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5))}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 6 ? <div className="tableIndi">
                  <p className='content' ><span>6th Month</span></p>
                  <p className='content' ><span></span></p>
                  <div className='content' ><input
                    type="text"
                    value={number6}
                    onChange={handlefix4}
                    className='inputText'
                  /></div>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed6}
                    onChange={handle1bedromPrice6}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed6}
                      onChange={handle2bedromPrice6}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed6}
                      onChange={handle3bedromPrice6}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed6}
                      onChange={handle4bedromPrice6}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed6}
                      onChange={handle5bedromPrice6}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed6}
                      onChange={handle6bedromPrice6}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >


                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6))}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 7 ? <div className="tableIndi">
                  <p className='content' ><span>7th Month</span></p>
                  <p className='content' ><span></span></p>
                  <div className='content' ><input
                    type="text"
                    value={number7}
                    onChange={handlefix5}
                    className='inputText'
                  /></div>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed7}
                    onChange={handle1bedromPrice7}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed7}
                      onChange={handle2bedromPrice7}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed7}
                      onChange={handle3bedromPrice7}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed7}
                      onChange={handle4bedromPrice7}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed7}
                      onChange={handle5bedromPrice7}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed7}
                      onChange={handle6bedromPrice7}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >


                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7))}</span>
                    }



                  </p>
                </div> : null
              }
              {
                age >= 8 ? <div className="tableIndi">
                  <p className='content' ><span>8th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><input
                    type="text"
                    value={number7}
                    onChange={handlefix6}
                    className='inputText'
                  /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed8}
                    onChange={handle1bedromPrice8}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed8}
                      onChange={handle2bedromPrice8}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed8}
                      onChange={handle3bedromPrice8}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed8}
                      onChange={handle4bedromPrice8}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed8}
                      onChange={handle5bedromPrice8}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed8}
                      onChange={handle6bedromPrice8}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >


                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8))}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 9 ? <div className="tableIndi">
                  <p className='content' ><span>9th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><input
                    type="text"
                    value={number7}
                    onChange={handlefix6}
                    className='inputText'
                  /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed9}
                    onChange={handle1bedromPrice9}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed9}
                      onChange={handle2bedromPrice9}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed9}
                      onChange={handle3bedromPrice9}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed9}
                      onChange={handle4bedromPrice9}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed9}
                      onChange={handle5bedromPrice9}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed9}
                      onChange={handle6bedromPrice9}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >


                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9))}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 10 ? <div className="tableIndi">
                  <p className='content' ><span>10th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number10}
                      onChange={handlefix8}
                      className='inputText'
                    /></p>

                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed10}
                    onChange={handle1bedromPrice10}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed10}
                      onChange={handle2bedromPrice10}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed10}
                      onChange={handle3bedromPrice10}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed10}
                      onChange={handle4bedromPrice10}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed10}
                      onChange={handle5bedromPrice10}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed10}
                      onChange={handle6bedromPrice10}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10))}</span>
                    }




                  </p>
                </div> : null
              }

              {
                age >= 11 ? <div className="tableIndi">
                  <p className='content' ><span>11th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number11}
                      onChange={handlefix9}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed11}
                    onChange={handle1bedromPrice11}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed11}
                      onChange={handle2bedromPrice11}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed11}
                      onChange={handle3bedromPrice11}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed11}
                      onChange={handle4bedromPrice11}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed11}
                      onChange={handle5bedromPrice11}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed11}
                      onChange={handle6bedromPrice11}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >


                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11))}</span>
                    }




                  </p>
                </div> : null
              }


              {
                age >= 12 ? <div className="tableIndi">
                  <p className='content' ><span>12th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number12}
                      onChange={handlefix10}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed12}
                    onChange={handle1bedromPrice12}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed12}
                      onChange={handle2bedromPrice12}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed12}
                      onChange={handle3bedromPrice12}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed12}
                      onChange={handle4bedromPrice12}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed12}
                      onChange={handle5bedromPrice12}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed12}
                      onChange={handle6bedromPrice12}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12))}</span>
                    }




                  </p>
                </div> : null
              }


              {
                age >= 13 ? <div className="tableIndi">
                  <p className='content' ><span>13th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number13}
                      onChange={handlefix11}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed13}
                    onChange={handle1bedromPrice13}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed13}
                      onChange={handle2bedromPrice13}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed13}
                      onChange={handle3bedromPrice13}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed13}
                      onChange={handle4bedromPrice13}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed13}
                      onChange={handle5bedromPrice13}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed13}
                      onChange={handle6bedromPrice13}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13))}</span>
                    }




                  </p>
                </div> : null
              }

              {
                age >= 14 ? <div className="tableIndi">
                  <p className='content' ><span>14th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number14}
                      onChange={handlefix12}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed14}
                    onChange={handle1bedromPrice14}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed14}
                      onChange={handle2bedromPrice14}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed14}
                      onChange={handle3bedromPrice14}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed14}
                      onChange={handle4bedromPrice14}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed14}
                      onChange={handle5bedromPrice14}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed14}
                      onChange={handle6bedromPrice14}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14))}</span>
                    }




                  </p>
                </div> : null
              }

              {
                age >= 15 ? <div className="tableIndi">
                  <p className='content' ><span>15th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number15}
                      onChange={handlefix13}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed15}
                    onChange={handle1bedromPrice15}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed15}
                      onChange={handle2bedromPrice15}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed15}
                      onChange={handle3bedromPrice15}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed15}
                      onChange={handle4bedromPrice15}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed15}
                      onChange={handle5bedromPrice15}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed15}
                      onChange={handle6bedromPrice15}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15))}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 16 ? <div className="tableIndi">
                  <p className='content' ><span>16th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number16}
                      onChange={handlefix14}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed16}
                    onChange={handle1bedromPrice16}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed16}
                      onChange={handle2bedromPrice16}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed16}
                      onChange={handle3bedromPrice16}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed16}
                      onChange={handle4bedromPrice16}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed16}
                      onChange={handle5bedromPrice16}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed16}
                      onChange={handle6bedromPrice16}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16))}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 17 ? <div className="tableIndi">
                  <p className='content' ><span>17th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number17}
                      onChange={handlefix15}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed17}
                    onChange={handle1bedromPrice17}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed17}
                      onChange={handle2bedromPrice17}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed17}
                      onChange={handle3bedromPrice17}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed17}
                      onChange={handle4bedromPrice17}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed17}
                      onChange={handle5bedromPrice17}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed17}
                      onChange={handle6bedromPrice17}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 18 ? <div className="tableIndi">
                  <p className='content' ><span>18th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number18}
                      onChange={handlefix16}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed18}
                    onChange={handle1bedromPrice18}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed18}
                      onChange={handle2bedromPrice18}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed18}
                      onChange={handle3bedromPrice18}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed18}
                      onChange={handle4bedromPrice18}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed18}
                      onChange={handle5bedromPrice18}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed18}
                      onChange={handle6bedromPrice18}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 19 ? <div className="tableIndi">
                  <p className='content' ><span>19th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number19}
                      onChange={handlefix17}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed19}
                    onChange={handle1bedromPrice19}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed19}
                      onChange={handle2bedromPrice19}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed19}
                      onChange={handle3bedromPrice19}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed19}
                      onChange={handle4bedromPrice19}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed19}
                      onChange={handle5bedromPrice19}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed19}
                      onChange={handle6bedromPrice19}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 20 ? <div className="tableIndi">
                  <p className='content' ><span>20th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number20}
                      onChange={handlefix18}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed20}
                    onChange={handle1bedromPrice20}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed20}
                      onChange={handle2bedromPrice20}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed20}
                      onChange={handle3bedromPrice20}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed20}
                      onChange={handle4bedromPrice20}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed20}
                      onChange={handle5bedromPrice20}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed20}
                      onChange={handle6bedromPrice20}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 21 ? <div className="tableIndi">
                  <p className='content' ><span>21th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number21}
                      onChange={handlefix19}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed21}
                    onChange={handle1bedromPrice21}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed21}
                      onChange={handle2bedromPrice21}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed21}
                      onChange={handle3bedromPrice21}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed21}
                      onChange={handle4bedromPrice21}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed21}
                      onChange={handle5bedromPrice21}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed21}
                      onChange={handle6bedromPrice21}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 22 ? <div className="tableIndi">
                  <p className='content' ><span>22th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number22}
                      onChange={handlefix20}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed22}
                    onChange={handle1bedromPrice22}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed22}
                      onChange={handle2bedromPrice22}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed22}
                      onChange={handle3bedromPrice22}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed22}
                      onChange={handle4bedromPrice22}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed22}
                      onChange={handle5bedromPrice22}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed22}
                      onChange={handle6bedromPrice22}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 23 ? <div className="tableIndi">
                  <p className='content' ><span>23th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number23}
                      onChange={handlefix21}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed23}
                    onChange={handle1bedromPrice23}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed23}
                      onChange={handle2bedromPrice23}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed23}
                      onChange={handle3bedromPrice23}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed23}
                      onChange={handle4bedromPrice23}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed23}
                      onChange={handle5bedromPrice23}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed23}
                      onChange={handle6bedromPrice23}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 24 ? <div className="tableIndi">
                  <p className='content' ><span>24th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number24}
                      onChange={handlefix22}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed24}
                    onChange={handle1bedromPrice24}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed24}
                      onChange={handle2bedromPrice24}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed24}
                      onChange={handle3bedromPrice24}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed24}
                      onChange={handle4bedromPrice24}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed24}
                      onChange={handle5bedromPrice24}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed24}
                      onChange={handle6bedromPrice24}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 25 ? <div className="tableIndi">
                  <p className='content' ><span>25th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number25}
                      onChange={handlefix23}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed25}
                    onChange={handle1bedromPrice25}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed25}
                      onChange={handle2bedromPrice25}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed25}
                      onChange={handle3bedromPrice25}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed25}
                      onChange={handle4bedromPrice25}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed25}
                      onChange={handle5bedromPrice25}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed25}
                      onChange={handle6bedromPrice25}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 26 ? <div className="tableIndi">
                  <p className='content' ><span>26th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number26}
                      onChange={handlefix24}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed26}
                    onChange={handle1bedromPrice26}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed26}
                      onChange={handle2bedromPrice26}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed26}
                      onChange={handle3bedromPrice26}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed26}
                      onChange={handle4bedromPrice26}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed26}
                      onChange={handle5bedromPrice26}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed26}
                      onChange={handle6bedromPrice26}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 27 ? <div className="tableIndi">
                  <p className='content' ><span>27th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number27}
                      onChange={handlefix25}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed27}
                    onChange={handle1bedromPrice27}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed27}
                      onChange={handle2bedromPrice27}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed27}
                      onChange={handle3bedromPrice27}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed27}
                      onChange={handle4bedromPrice27}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed27}
                      onChange={handle5bedromPrice27}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed27}
                      onChange={handle6bedromPrice27}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 28 ? <div className="tableIndi">
                  <p className='content' ><span>28th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number28}
                      onChange={handlefix26}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed28}
                    onChange={handle1bedromPrice28}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed28}
                      onChange={handle2bedromPrice28}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed28}
                      onChange={handle3bedromPrice28}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed28}
                      onChange={handle4bedromPrice28}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed28}
                      onChange={handle5bedromPrice28}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed28}
                      onChange={handle6bedromPrice28}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 29 ? <div className="tableIndi">
                  <p className='content' ><span>29th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number29}
                      onChange={handlefix27}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed29}
                    onChange={handle1bedromPrice29}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed29}
                      onChange={handle2bedromPrice29}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed29}
                      onChange={handle3bedromPrice29}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed29}
                      onChange={handle4bedromPrice29}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed29}
                      onChange={handle5bedromPrice29}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed29}
                      onChange={handle6bedromPrice29}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 30 ? <div className="tableIndi">
                  <p className='content' ><span>30th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number30}
                      onChange={handlefix28}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed30}
                    onChange={handle1bedromPrice30}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed30}
                      onChange={handle2bedromPrice30}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed30}
                      onChange={handle3bedromPrice30}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed30}
                      onChange={handle4bedromPrice30}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed30}
                      onChange={handle5bedromPrice30}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed30}
                      onChange={handle6bedromPrice30}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 31 ? <div className="tableIndi">
                  <p className='content' ><span>31th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number31}
                      onChange={handlefix29}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed31}
                    onChange={handle1bedromPrice31}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed31}
                      onChange={handle2bedromPrice31}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed31}
                      onChange={handle3bedromPrice31}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed31}
                      onChange={handle4bedromPrice31}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed31}
                      onChange={handle5bedromPrice31}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed31}
                      onChange={handle6bedromPrice31}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 32 ? <div className="tableIndi">
                  <p className='content' ><span>32th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number32}
                      onChange={handlefix30}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed32}
                    onChange={handle1bedromPrice32}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed32}
                      onChange={handle2bedromPrice32}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed32}
                      onChange={handle3bedromPrice32}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed32}
                      onChange={handle4bedromPrice32}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed32}
                      onChange={handle5bedromPrice32}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed32}
                      onChange={handle6bedromPrice32}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed32) + parseFloat(twoBed32) + parseFloat(threeBed32) + parseFloat(fourBed32) + parseFloat(fiveBed32) + parseFloat(sixBed32)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed32) + parseFloat(twoBed32) + parseFloat(threeBed32) + parseFloat(fourBed32) + parseFloat(fiveBed32) + parseFloat(sixBed32) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed32) + parseFloat(twoBed32) + parseFloat(threeBed32) + parseFloat(fourBed32) + parseFloat(fiveBed32) + parseFloat(sixBed32) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31) + parseFloat(number32)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed32) + parseFloat(twoBed32) + parseFloat(threeBed32) + parseFloat(fourBed32) + parseFloat(fiveBed32) + parseFloat(sixBed32) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31) + parseFloat(number32)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed32) + parseFloat(twoBed32) + parseFloat(threeBed32) + parseFloat(fourBed32) + parseFloat(fiveBed32) + parseFloat(sixBed32) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31) + parseFloat(number32)}</span>
                    }




                  </p>
                </div> : null
              }   {
                age >= 33 ? <div className="tableIndi">
                  <p className='content' ><span>33th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number33}
                      onChange={handlefix31}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed33}
                    onChange={handle1bedromPrice33}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed33}
                      onChange={handle2bedromPrice33}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed33}
                      onChange={handle3bedromPrice33}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed33}
                      onChange={handle4bedromPrice33}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed33}
                      onChange={handle5bedromPrice33}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed33}
                      onChange={handle6bedromPrice33}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed33) + parseFloat(twoBed33) + parseFloat(threeBed33) + parseFloat(fourBed33) + parseFloat(fiveBed33) + parseFloat(sixBed33)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed33) + parseFloat(twoBed33) + parseFloat(threeBed33) + parseFloat(fourBed33) + parseFloat(fiveBed33) + parseFloat(sixBed33) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed32) + parseFloat(twoBed32) + parseFloat(threeBed32) + parseFloat(fourBed32) + parseFloat(fiveBed32) + parseFloat(sixBed32) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed33) + parseFloat(twoBed33) + parseFloat(threeBed33) + parseFloat(fourBed33) + parseFloat(fiveBed33) + parseFloat(sixBed33) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31) + parseFloat(number32) + parseFloat(number33)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed32) + parseFloat(twoBed32) + parseFloat(threeBed32) + parseFloat(fourBed32) + parseFloat(fiveBed32) + parseFloat(sixBed32) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed33) + parseFloat(twoBed33) + parseFloat(threeBed33) + parseFloat(fourBed33) + parseFloat(fiveBed33) + parseFloat(sixBed33) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31) + parseFloat(number32) + parseFloat(number33)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed32) + parseFloat(twoBed32) + parseFloat(threeBed32) + parseFloat(fourBed32) + parseFloat(fiveBed32) + parseFloat(sixBed32) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed33) + parseFloat(twoBed33) + parseFloat(threeBed33) + parseFloat(fourBed33) + parseFloat(fiveBed33) + parseFloat(sixBed33) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31) + parseFloat(number32) + parseFloat(number33)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 34 ? <div className="tableIndi">
                  <p className='content' ><span>34th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number34}
                      onChange={handlefix32}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed34}
                    onChange={handle1bedromPrice34}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed34}
                      onChange={handle2bedromPrice34}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed34}
                      onChange={handle3bedromPrice34}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed34}
                      onChange={handle4bedromPrice34}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed34}
                      onChange={handle5bedromPrice34}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed34}
                      onChange={handle6bedromPrice34}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed34) + parseFloat(twoBed34) + parseFloat(threeBed34) + parseFloat(fourBed34) + parseFloat(fiveBed34) + parseFloat(sixBed34)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed34) + parseFloat(twoBed34) + parseFloat(threeBed34) + parseFloat(fourBed34) + parseFloat(fiveBed34) + parseFloat(sixBed34) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed32) + parseFloat(twoBed32) + parseFloat(threeBed32) + parseFloat(fourBed32) + parseFloat(fiveBed32) + parseFloat(sixBed32) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed33) + parseFloat(twoBed33) + parseFloat(threeBed33) + parseFloat(fourBed33) + parseFloat(fiveBed33) + parseFloat(sixBed33) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed34) + parseFloat(twoBed34) + parseFloat(threeBed34) + parseFloat(fourBed34) + parseFloat(fiveBed34) + parseFloat(sixBed34) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31) + parseFloat(number32) + parseFloat(number33) + parseFloat(number34)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed32) + parseFloat(twoBed32) + parseFloat(threeBed32) + parseFloat(fourBed32) + parseFloat(fiveBed32) + parseFloat(sixBed32) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed33) + parseFloat(twoBed33) + parseFloat(threeBed33) + parseFloat(fourBed33) + parseFloat(fiveBed33) + parseFloat(sixBed33) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed34) + parseFloat(twoBed34) + parseFloat(threeBed34) + parseFloat(fourBed34) + parseFloat(fiveBed34) + parseFloat(sixBed34) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31) + parseFloat(number32) + parseFloat(number33) + parseFloat(number34)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed32) + parseFloat(twoBed32) + parseFloat(threeBed32) + parseFloat(fourBed32) + parseFloat(fiveBed32) + parseFloat(sixBed32) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed33) + parseFloat(twoBed33) + parseFloat(threeBed33) + parseFloat(fourBed33) + parseFloat(fiveBed33) + parseFloat(sixBed33) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed34) + parseFloat(twoBed34) + parseFloat(threeBed34) + parseFloat(fourBed34) + parseFloat(fiveBed34) + parseFloat(sixBed34) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31) + parseFloat(number32) + parseFloat(number33) + parseFloat(number34)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 35 ? <div className="tableIndi">
                  <p className='content' ><span>35th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number35}
                      onChange={handlefix33}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed35}
                    onChange={handle1bedromPrice35}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed35}
                      onChange={handle2bedromPrice35}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed35}
                      onChange={handle3bedromPrice35}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed35}
                      onChange={handle4bedromPrice35}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed35}
                      onChange={handle5bedromPrice35}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed35}
                      onChange={handle6bedromPrice35}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed35) + parseFloat(twoBed35) + parseFloat(threeBed35) + parseFloat(fourBed35) + parseFloat(fiveBed35) + parseFloat(sixBed35)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed35) + parseFloat(twoBed35) + parseFloat(threeBed35) + parseFloat(fourBed35) + parseFloat(fiveBed35) + parseFloat(sixBed35) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed32) + parseFloat(twoBed32) + parseFloat(threeBed32) + parseFloat(fourBed32) + parseFloat(fiveBed32) + parseFloat(sixBed32) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed33) + parseFloat(twoBed33) + parseFloat(threeBed33) + parseFloat(fourBed33) + parseFloat(fiveBed33) + parseFloat(sixBed33) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed34) + parseFloat(twoBed34) + parseFloat(threeBed34) + parseFloat(fourBed34) + parseFloat(fiveBed34) + parseFloat(sixBed34) - parseFloat(monthlyCost)) - 
                        (parseFloat(oneBed35) + parseFloat(twoBed35) + parseFloat(threeBed35) + parseFloat(fourBed35) + parseFloat(fiveBed35) + parseFloat(sixBed35) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31) + parseFloat(number32) + parseFloat(number33) + parseFloat(number34) + parseFloat(number35)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed32) + parseFloat(twoBed32) + parseFloat(threeBed32) + parseFloat(fourBed32) + parseFloat(fiveBed32) + parseFloat(sixBed32) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed33) + parseFloat(twoBed33) + parseFloat(threeBed33) + parseFloat(fourBed33) + parseFloat(fiveBed33) + parseFloat(sixBed33) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed34) + parseFloat(twoBed34) + parseFloat(threeBed34) + parseFloat(fourBed34) + parseFloat(fiveBed34) + parseFloat(sixBed34) - parseFloat(monthlyCost)) - 
                          (parseFloat(oneBed35) + parseFloat(twoBed35) + parseFloat(threeBed35) + parseFloat(fourBed35) + parseFloat(fiveBed35) + parseFloat(sixBed35) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31) + parseFloat(number32) + parseFloat(number33) + parseFloat(number34) + parseFloat(number35)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed32) + parseFloat(twoBed32) + parseFloat(threeBed32) + parseFloat(fourBed32) + parseFloat(fiveBed32) + parseFloat(sixBed32) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed33) + parseFloat(twoBed33) + parseFloat(threeBed33) + parseFloat(fourBed33) + parseFloat(fiveBed33) + parseFloat(sixBed33) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed34) + parseFloat(twoBed34) + parseFloat(threeBed34) + parseFloat(fourBed34) + parseFloat(fiveBed34) + parseFloat(sixBed34) - parseFloat(monthlyCost)) - 
                            (parseFloat(oneBed35) + parseFloat(twoBed35) + parseFloat(threeBed35) + parseFloat(fourBed35) + parseFloat(fiveBed35) + parseFloat(sixBed35) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31) + parseFloat(number32) + parseFloat(number33) + parseFloat(number34) + parseFloat(number35)}</span>
                    }




                  </p>
                </div> : null
              }
              {
                age >= 36 ? <div className="tableIndi">
                  <p className='content' ><span>36th Month</span></p>
                  <p className='content' ><span></span></p>
                  <p className='content' >
                    <input
                      type="text"
                      value={number36}
                      onChange={handlefix34}
                      className='inputText'
                    /></p>
                  <p className='content' ><span></span></p>
                  <p className='content' ><span>{monthlyCost}</span></p>
                  <div className='content' ><input
                    type="text"
                    value={oneBed36}
                    onChange={handle1bedromPrice36}
                    className='inputText'
                  /></div>
                  {
                    bedroomQUan >= 2 ? <div className='content' ><input
                      type="text"
                      value={twoBed36}
                      onChange={handle2bedromPrice36}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 3 ? <div className='content' ><input
                      type="text"
                      value={threeBed36}
                      onChange={handle3bedromPrice36}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 4 ? <div className='content' ><input
                      type="text"
                      value={fourBed36}
                      onChange={handle4bedromPrice36}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 5 ? <div className='content' ><input
                      type="text"
                      value={fiveBed36}
                      onChange={handle5bedromPrice36}
                      className='inputText'
                    /></div> : null
                  }
                  {
                    bedroomQUan >= 6 ? <div className='content' ><input
                      type="text"
                      value={sixBed36}
                      onChange={handle6bedromPrice36}
                      className='inputText'
                    /></div> : null
                  }

                  <p className='content' > <span>{parseFloat(oneBed36) + parseFloat(twoBed36) + parseFloat(threeBed36) + parseFloat(fourBed36) + parseFloat(fiveBed36) + parseFloat(sixBed36)}</span></p>
                  <p className='content' > <span>{parseFloat(oneBed36) + parseFloat(twoBed36) + parseFloat(threeBed36) + parseFloat(fourBed36) + parseFloat(fiveBed36) + parseFloat(sixBed36) - parseFloat(monthlyCost)}</span></p>
                  <p className='content' >



                    {
                      parseFloat(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed32) + parseFloat(twoBed32) + parseFloat(threeBed32) + parseFloat(fourBed32) + parseFloat(fiveBed32) + parseFloat(sixBed32) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed33) + parseFloat(twoBed33) + parseFloat(threeBed33) + parseFloat(fourBed33) + parseFloat(fiveBed33) + parseFloat(sixBed33) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed34) + parseFloat(twoBed34) + parseFloat(threeBed34) + parseFloat(fourBed34) + parseFloat(fiveBed34) + parseFloat(sixBed34) - parseFloat(monthlyCost)) - 
                        (parseFloat(oneBed35) + parseFloat(twoBed35) + parseFloat(threeBed35) + parseFloat(fourBed35) + parseFloat(fiveBed35) + parseFloat(sixBed35) - parseFloat(monthlyCost)) -
                        (parseFloat(oneBed36) + parseFloat(twoBed36) + parseFloat(threeBed36) + parseFloat(fourBed36) + parseFloat(fiveBed36) + parseFloat(sixBed36) - parseFloat(monthlyCost))
                        + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31) + parseFloat(number32) + parseFloat(number33) + parseFloat(number34) + parseFloat(number35) + parseFloat(number36)) >= 0 ? <span style={{ color: "red" }}>- {recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed32) + parseFloat(twoBed32) + parseFloat(threeBed32) + parseFloat(fourBed32) + parseFloat(fiveBed32) + parseFloat(sixBed32) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed33) + parseFloat(twoBed33) + parseFloat(threeBed33) + parseFloat(fourBed33) + parseFloat(fiveBed33) + parseFloat(sixBed33) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed34) + parseFloat(twoBed34) + parseFloat(threeBed34) + parseFloat(fourBed34) + parseFloat(fiveBed34) + parseFloat(sixBed34) - parseFloat(monthlyCost)) - 
                          (parseFloat(oneBed35) + parseFloat(twoBed35) + parseFloat(threeBed35) + parseFloat(fourBed35) + parseFloat(fiveBed35) + parseFloat(sixBed35) - parseFloat(monthlyCost)) -
                          (parseFloat(oneBed36) + parseFloat(twoBed36) + parseFloat(threeBed36) + parseFloat(fourBed36) + parseFloat(fiveBed36) + parseFloat(sixBed36) - parseFloat(monthlyCost))
                          + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31) + parseFloat(number32) + parseFloat(number33) + parseFloat(number34) + parseFloat(number35) + parseFloat(number36)} </span> : <span style={{ color: "green" }}>{Math.abs(recalm - (parseFloat(oneBed2) + parseFloat(twoBed2) + parseFloat(threeBed2) + parseFloat(fourBed2) + parseFloat(fiveBed2) + parseFloat(sixBed2) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed3) + parseFloat(twoBed3) + parseFloat(threeBed3) + parseFloat(fourBed3) + parseFloat(fiveBed3) + parseFloat(sixBed3) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed4) + parseFloat(twoBed4) + parseFloat(threeBed4) + parseFloat(fourBed4) + parseFloat(fiveBed4) + parseFloat(sixBed4) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed5) + parseFloat(twoBed5) + parseFloat(threeBed5) + parseFloat(fourBed5) + parseFloat(fiveBed5) + parseFloat(sixBed5) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed6) + parseFloat(twoBed6) + parseFloat(threeBed6) + parseFloat(fourBed6) + parseFloat(fiveBed6) + parseFloat(sixBed6) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed7) + parseFloat(twoBed7) + parseFloat(threeBed7) + parseFloat(fourBed7) + parseFloat(fiveBed7) + parseFloat(sixBed7) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed8) + parseFloat(twoBed8) + parseFloat(threeBed8) + parseFloat(fourBed8) + parseFloat(fiveBed8) + parseFloat(sixBed8) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed9) + parseFloat(twoBed9) + parseFloat(threeBed9) + parseFloat(fourBed9) + parseFloat(fiveBed9) + parseFloat(sixBed9) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed10) + parseFloat(twoBed10) + parseFloat(threeBed10) + parseFloat(fourBed10) + parseFloat(fiveBed10) + parseFloat(sixBed10) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed11) + parseFloat(twoBed11) + parseFloat(threeBed11) + parseFloat(fourBed11) + parseFloat(fiveBed11) + parseFloat(sixBed11) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed12) + parseFloat(twoBed12) + parseFloat(threeBed12) + parseFloat(fourBed12) + parseFloat(fiveBed12) + parseFloat(sixBed12) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed13) + parseFloat(twoBed13) + parseFloat(threeBed13) + parseFloat(fourBed13) + parseFloat(fiveBed13) + parseFloat(sixBed13) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed14) + parseFloat(twoBed14) + parseFloat(threeBed14) + parseFloat(fourBed14) + parseFloat(fiveBed14) + parseFloat(sixBed14) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed15) + parseFloat(twoBed15) + parseFloat(threeBed15) + parseFloat(fourBed15) + parseFloat(fiveBed15) + parseFloat(sixBed15) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed16) + parseFloat(twoBed16) + parseFloat(threeBed16) + parseFloat(fourBed16) + parseFloat(fiveBed16) + parseFloat(sixBed16) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed17) + parseFloat(twoBed17) + parseFloat(threeBed17) + parseFloat(fourBed17) + parseFloat(fiveBed17) + parseFloat(sixBed17) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed18) + parseFloat(twoBed18) + parseFloat(threeBed18) + parseFloat(fourBed18) + parseFloat(fiveBed18) + parseFloat(sixBed18) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed19) + parseFloat(twoBed19) + parseFloat(threeBed19) + parseFloat(fourBed19) + parseFloat(fiveBed19) + parseFloat(sixBed19) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed20) + parseFloat(twoBed20) + parseFloat(threeBed20) + parseFloat(fourBed20) + parseFloat(fiveBed20) + parseFloat(sixBed20) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed21) + parseFloat(twoBed21) + parseFloat(threeBed21) + parseFloat(fourBed21) + parseFloat(fiveBed21) + parseFloat(sixBed21) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed22) + parseFloat(twoBed22) + parseFloat(threeBed22) + parseFloat(fourBed22) + parseFloat(fiveBed22) + parseFloat(sixBed22) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed23) + parseFloat(twoBed23) + parseFloat(threeBed23) + parseFloat(fourBed23) + parseFloat(fiveBed23) + parseFloat(sixBed23) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed24) + parseFloat(twoBed24) + parseFloat(threeBed24) + parseFloat(fourBed24) + parseFloat(fiveBed24) + parseFloat(sixBed24) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed25) + parseFloat(twoBed25) + parseFloat(threeBed25) + parseFloat(fourBed25) + parseFloat(fiveBed25) + parseFloat(sixBed25) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed26) + parseFloat(twoBed26) + parseFloat(threeBed26) + parseFloat(fourBed26) + parseFloat(fiveBed26) + parseFloat(sixBed26) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed27) + parseFloat(twoBed27) + parseFloat(threeBed27) + parseFloat(fourBed27) + parseFloat(fiveBed27) + parseFloat(sixBed27) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed28) + parseFloat(twoBed28) + parseFloat(threeBed28) + parseFloat(fourBed28) + parseFloat(fiveBed28) + parseFloat(sixBed28) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed29) + parseFloat(twoBed29) + parseFloat(threeBed29) + parseFloat(fourBed29) + parseFloat(fiveBed29) + parseFloat(sixBed29) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed30) + parseFloat(twoBed30) + parseFloat(threeBed30) + parseFloat(fourBed30) + parseFloat(fiveBed30) + parseFloat(sixBed30) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed31) + parseFloat(twoBed31) + parseFloat(threeBed31) + parseFloat(fourBed31) + parseFloat(fiveBed31) + parseFloat(sixBed31) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed32) + parseFloat(twoBed32) + parseFloat(threeBed32) + parseFloat(fourBed32) + parseFloat(fiveBed32) + parseFloat(sixBed32) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed33) + parseFloat(twoBed33) + parseFloat(threeBed33) + parseFloat(fourBed33) + parseFloat(fiveBed33) + parseFloat(sixBed33) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed34) + parseFloat(twoBed34) + parseFloat(threeBed34) + parseFloat(fourBed34) + parseFloat(fiveBed34) + parseFloat(sixBed34) - parseFloat(monthlyCost)) - 
                            (parseFloat(oneBed35) + parseFloat(twoBed35) + parseFloat(threeBed35) + parseFloat(fourBed35) + parseFloat(fiveBed35) + parseFloat(sixBed35) - parseFloat(monthlyCost)) -
                            (parseFloat(oneBed36) + parseFloat(twoBed36) + parseFloat(threeBed36) + parseFloat(fourBed36) + parseFloat(fiveBed36) + parseFloat(sixBed36) - parseFloat(monthlyCost))
                            + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) + parseFloat(number6) + parseFloat(number7) + parseFloat(number8) + parseFloat(number9) + parseFloat(number10) + parseFloat(number11) + parseFloat(number12) + parseFloat(number13) + parseFloat(number14) + parseFloat(number15) + parseFloat(number16)) + parseFloat(number17) + parseFloat(number18) + parseFloat(number19) + parseFloat(number20) + parseFloat(number21) + parseFloat(number22) + parseFloat(number23) + parseFloat(number24) + parseFloat(number25) + parseFloat(number26) + parseFloat(number27) + parseFloat(number28) + parseFloat(number29) + parseFloat(number30) + parseFloat(number31) + parseFloat(number32) + parseFloat(number33) + parseFloat(number34) + parseFloat(number35) + parseFloat(number36)}</span>
                    }




                  </p>
                </div> : null
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
