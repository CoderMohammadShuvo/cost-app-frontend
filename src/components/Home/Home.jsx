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
import SearchIcon from '../../images/search.png'
import axios from 'axios';
const Home = () => {
  const [age, setAge] = useState();
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState('0');
  const [result, setResult] = useState('');
  const [propertyName, setPropertyName] = useState('');
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
  const [totalBedPrice, setTotalBedPRice] = useState('');
  const [oneBed, setOneBed] = useState('0')
  const [twoBed, setTowBed] = useState('0')
  const [threeBed, setThreeBed] = useState('0')
  const [fourBed, setFourBed] = useState('0')


  const handle1bedromPrice = (e) => {
    const value = e.target.value;
    setOneBed(value);
    calculateSumBed(value, twoBed, threeBed, fourBed);
  };

  const handle2bedromPrice = (e) => {
    const value = e.target.value;
    setTowBed(value);
    calculateSumBed(value, oneBed, threeBed, fourBed);
  };


  const handle3bedromPrice = (e) => {
    const value = e.target.value;
    setThreeBed(value);
    calculateSumBed(value, twoBed, oneBed, fourBed);
  };


  const handle4bedromPrice = (e) => {
    const value = e.target.value;
    setFourBed(value);
    calculateSumBed(value, twoBed, threeBed, oneBed);
  };


  const calculateSumBed = (num1, num2, num3, num4) => {
    const sum = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4);
    setTotalBedPRice(sum || '');
  };
  const [monthlyCost, setMonthlyCost] = useState('0');
  const [netProfit, setNetProfit] = useState('0');
  const [recalm, setRecalm] = useState('0')
  const handleMonthlyCost = (e) => {
    const value = e.target.value;
    setMonthlyCost(value);
    calculateNetProfit(value);
  };

  const calculateNetProfit = (num1) => {
    const sum = totalBedPrice - parseInt(num1);
    setNetProfit(sum || '');
    if(age === "1st Month"){
      setRecalm(result - sum || '')
    }else{

    }
  };
  const [mainData, setMainData] = useState();
  useEffect(() => {
    axios.get('https://sheetdb.io/api/v1/hv9kpdpkpdxa9')
      .then(function (response) {
        setMainData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }, [])
  console.log(mainData);
  const addProduct = () => {
    axios.post('https://sheetdb.io/api/v1/hv9kpdpkpdxa9/', age === "1st Month" ? {
       
    name: propertyName,
    time_span: age,
    money_down: `${number1}`,
    fix_up: `${number1}`,
    monthly_cost: `${monthlyCost}`,
    one_bed: `${oneBed}`,
    two_bed: `${twoBed}`,
    three_bed: `${threeBed}`,
    four_bed: `${fourBed}`,
    gross_reclaim:`${recalm}`
    } : 
      {
        name: propertyName,
        time_span: age,
        money_down: `${number1}`,
        fix_up: `${number1}`,
        monthly_cost: `${monthlyCost}`,
        one_bed: `${oneBed}`,
        two_bed: `${twoBed}`,
        three_bed: `${threeBed}`,
        four_bed: `${fourBed}`,
      }
    )
      .then(response => {
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
      });
  }
  console.log(mainData)
  const [filterData, setFIlterData] =useState();
  const jsonData = mainData ? mainData : null;
  
  // Function to create individual arrays based on duplicate names
  function createArraysFromDuplicates(jsonData) {
    const arrays = {};
  
    if(mainData){
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
  console.log([resultTwo])
  const [setTime,setSelectedTime] = useState('1st Month')
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);

  };
console.log(setTime);

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
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAEAYAAACk6Ai5AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfnBhUHJitFP792AABXEElEQVR42u3dedzVY/7H8ff1PXeSypYsqWSSaWg0TaRdv+yZUNoThbImDLI0VJaKYYSGCC2kRTtGltIqlX2ZTGNLkyWEGEv3uT6/P76dupuJke77e933+b6e//weP8Pd+5zuc873+pzren8lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlHUudAAAALDtzMzMdt1VJpPVqyf5xr5xrVpymqzJNWpI7kx35r77Sqqt2pUry7Sn9qxQQdI+2qdSpSI/6kN9+PXXcvpEn3z7raS39fb69ZLdZ/f9618ydVTHDz6QoiXRkvfek5OTe/1155xz7osvQj8PAADg52MAAABAKWTevPnq1SV/vb/+hBPk3Nfu61atJPu9/f7QQyW1V/vatSVllHFJfp5nlTWTNFVT335bci+6F5cvl1klq/Tss1I0IBrw+OMucpGLPvgg9PMIJCkezO24oyzbJtumRQu56O/R3486SlJ3da9VS2Zv2Bt77imneqpXuXLovCghpvVaX1go52q72p9+Kuk1vfbpp5IdZoctWyaLzorOmj07fp/85z9Dx0W6MAAAACCgeMGwzz6SX+VX9ewp6WE93LmzpMt0Wf36ofNth5t18yuvSOqhHpMmSVG1qNro0fHOgTVrQocDikM8qCsokPxYP/acc+RUR3WuukpSYzXeZ5/Q+VDauTvcHY8+KnMXuguvvjoeCLz6auhUyG8MAAAASFC8YGjZUs7+bH++5BLJzrPzTjhBUgVVKCgIna8EfatvCwsld7e7+/HHZe4Sd8ktt8QXvPPnhw4HbIt4cLf77jIbZ+MmTZKz7tb9yCND50KZ9aW+/P57Safr9LPPdi4zKzNrzJjQoZCfGAAAAFCC4gV/ixaSjbfxAwfKWVfr2rp16Fylh5voJs6dK3NdXJeBAxkIoDSLX8+VKsn5m/xNCxeq7O/UQWlkulJX9unjosxNmZvuvTd0HOQXBgAAABSj+JvBatUkG2AD/vIXyQbb4E6dQucqM8wNdAMnT5Zzg93giy7iyABKEzN/tb964kRe1yhh67X+hx9k0c7Rzi1axIPRpUtDh0J+YAAAAMB2iBf8zkl+hB9x7rmSTtAJQ4ZIqqmaO+8cOl8ZtkqrvvpK0lN66qqrpKh31Puvf40HAmahwyFd4m/+mzeX8+ZtwYLQeZAavdRr4ULnMmMzY1u0CB0G+YEBAAAAv0C88N9tN8mG2JD77pOsv/Vv1y50rvzlbnY3T58uuf6u/xlnxIOAdetCp0I6mPlb/a0zZ0rWz/q1bRs6D1LGIhe53E6AhQtDx0HZxgAAAIBtEC/8f/97yT/qH50yRVIbtalVK3SuFHlCT7z/vhS1idqccko8CHjhhdChkJ/ib/7Ll5fzn/hPPv9cUlVV3Wmn0LmQMub2dnsPGeKiaG209qqrQsdB2RaFDgAAQFlgvnBD4YaOHSX/sf94wQKx8A/lOB23337x38P8+Zv/XoCSUr++WPgjJGdH2BFNm4aOgfzAAAAAgK3Ine03y67IrujfX85lXXbCBLEQKC3ivwfnzNnEiWa+hq8xdOjmTgagGLjsE9kn9t47dAyknOl4Hb/XXqFjID8wAAAAoIh4AVmhgmRX2pUPPyypjuoMHSqpnMpFfG6WPhllnJPsPXuvf/+4i2H8+M1/j8B2MPcX95dddw0dAynnVF/1d989dAzkBy5kAABQbuG/zz6S/6P/47PPSnaD3dC5c+hc2FY2xIZ06SLz1/nrFi2Kz3DXqBE6Fcoop120C4M/BGYMoFF8+EUCAKRavECsX1/ys/3sJUsk3aybGzUKnQvbyelqXd2ggZxf6BcuWRL/PR96aOhYAACExAAAAJBK5gu/KvyqQ4e43XvxYklH6+iaNUPnQrFrpmbVqkn+Q//hs8+aFb5R+Aa3awQApBMDAABAKmyl1G8Ht8PEiaLULx2c9tbeFStKro6rM2WKWdayNnAgpYEAgDRhAAAAyGvxAm/HHSXra33HjhWlfmm3sTRQXv7aa3Nlj5QGAgDSgAsfAEBe2rLUb948yYbb8FNPDZ0Lpc3GskfzfX3fOXPi3xtu+wYAyE8MAAAAeYVSP/wiTsM1vHFjyc/z85YvjwcBv/996FgAABQnBgAAgLxAqR+KSQu12Hdfya/2q+fNMytcVrjs5JNDhwIAoDgwAAAAlEmU+qGEVVO1SpUkV9/Vnzo1VxoYOhQAANuDAQAAoEyh1A8J26I00Mxf6i8dP37z7yEAAGUHF0oAgDIhXnBVq0apH8KyYTasa1fJ9/F9nnkm7pzYa6/QqQAA+DkYAAAASrV44f+738Wlfs89J0r9UDrcrbubNpXzc/3cXGlggwahQwEA8FMYAAAASqVNpX7yH/uPFy0SpX4onVqpVfXqcWng/PlmhY8XPn7iiaFDAQCwNQwAAAClAqV+KONypYGtXKupUzf9HgMAUIowAAAABEWpH/JMeZXPZLTx99jMd/PdRo2KuwJ22CF0OABAunFhBQAIokipX3/ff/58Sv2Qn2ycjTvzTDl/lj9rzpx4ELDnnqFTAQDSiQEAACBRWyn1G6Ihhx0WOhdQwu7Vvc2aSX6an/bcc/Hr4KCDQocCAKQLAwAAQCIo9QMkOZ2sk3/1K8mv8quWLDFfOLpw9B/+EDoWACAdGAAAAEoEpX7AT6qu6pUry7lOrtP06ZQGAgCSwAAAAFCsKPUDtsmWpYHed/Qd77kn7gooVy50OABAfuFCDABQLCj1A4qBswk2oXdvOd/D93jmmXgQULVq6FgAgPzAAAAAsF0o9QNKxFiNbdFCzk/ykxYvjl9nv/lN6FAAgLKNAQAA4Beh1A9IREd1POAAyb/l31q0yKywXmG9I48MHQoAUDYxAAAA/CyU+gFB1VGd3XaT3BK35IknzLIPZR/q2zd0KABA2cIAAADwkyj1A0qVCqpQUCCpi7rcfruZb+/bjxxJaSAA4Ofgwg0AsFWU+gFlgU22yX36SDbaRj/2WPy63XXX0KkAAKUTAwAAwBYo9QPKIGen2+lHHy358X780qXx6/jXvw4dCwBQujAAAABIkswXbijc0LEjpX5AmdZFXerUkfyb/s3Fi80KaxbWbN06dCgAQOnAAAAAUmorpX5Zl50wQZT6Afmgruruvrvk3nRvzp5tlr0ne8/554cOBQAIiwEAAKRMkVK/i+yiceNEqR+Qz3KlgWfqzDvv3LI0sKAgdDgAQLK40AOAlNhKqd+tdmv37qFzAUjSxtJAZ6Ns1KOPxoOAXXYJnQoAkAwGAACQ5yj1A/Df7Ew789hj5fyD/sGlS+NBwIEHhk4FAChZDAAAIE9R6gfgZ+iu7gceKOff8G8sXmy2wTZYq1ahQwEASgYDAADIE5T6AdgOB+mgKlWk6Mvoy9mzzbLds9179QodCgBQvBgAAEAZR6kfgGJUWZV32EHSWI29/34z38w3Gz48fp/JZEKHAwBsHy4MAaCMotQPQMmz+Tb/wgslG2kjKQ0EgLKOAQAAlDFFSv2e9k8vWSJK/QCUOOttvY87Ts7f5m9bsCB+H6pVK3QqAMC2YQAAAGXEVkr9Wqt1jRqhcwFIlX7q99vfyvyr/tVly+IdAS1bhg4FAPh5GAAAQClFqR+AUsupnurtsYec/8J/8eSTZtm22bannx46FgDgpzEAAIBShlI/AGXILtqlfHlJ0zV99OgtSwN5vwKA0oY3ZgAoJSj1A1D2bSoNHGEjZs2KjwjsvHPoVACAGAMAAAiMUj8A+cfOtXPbtJHzt/hbFiyIBwH77Rc6FQCkHQMAAAjELFs5W7lzZ8mv9WsXLxalfkjGAi3417+K/F+gJF2iSw45RM4/759fsiQeBBx+eOhQAJBWDAAAICH/VeonrdXa8eMlVVGVChVC50OeMw3V0JdflkUto5ZNmkjREdERhx0m6TJdtnRp6HjIe43UaO+949LAefPMZ1tmW/boEToUAKQNAwAAKGGU+iEocwPdwMmT5aKroquaNXORi1z0wQfOOefchx9K0S3RLUccIbl+rt+DD4aOi7wXlwY6Pa2nx4wx8zV8jaFDKQ0EgGQUhA4AAPlqy1K/6dMl3apbOduPEpdV1kxytV3tm26Sc6vcqquuihf83v/nvxz/8+++i39fTztNsrfsrddfl1RLtW68UQyqUDIyyjgn2Xv2Xv/+kgZqYO3a8e/h6afHv5f//nfokACQb/hAB4BiRqkfAlmndd99J+lQHdqjh3PRB9EHV1zxYwv//xT/e2bOZepm6g4bJrMf7IfOnSWt1VoWYihpdo1d06GD5If5YYsXx10BNWuGTgUA+YYBAAAUE/OFGwo3dOwo+Y/9x4sWiVI/JGORFq1ZI4t2j3Zv2dK5zKuZVx96aHt/qIsKdi7Y+ZFHpGivaK9mzSQ9padWrQr9YJH3LtNl9evL+ef8c7nSQAaoAFBcGAAAwC/0X6V+zmVddsIESVVVdaedQudDnttc6tc8at6kSXy2f9my4v5j4p0BL78sRcdGxzZpIulKXVn8fw7wHxqr8T77yPnP/efz55tlD8ke0r176FAAUNYxAACAbVSk1O8Su+TBB0WpHxLlBrvBjzyyZalfyX8zHw8C1qyRomHRsJYtKQ1EQnbTbjvuKGm5lo8bt2VpoHOhwwFAWUMJIAD8TFsp9fuz/szWVJS4LUv99NOlfiWN0kAEsmVpoOkaXfOrX8W/hz17UhoIAD8PH9AA8D/EF5gNGlDqh4TFpX6m5mp+2mnbWupX0igNRFDOBtrAjh1l/jp/3cKFcVcAnSsA8L8wAACAH7Flqd/ChaLUD8lYoiUffrip1C/KLM0sLf1b7SkNRBBOV+vqBg3k/EK/MFcaeOihoWMBQGnFAAAANtpKqZ85mzhRlPohCZtL/ZpETRo3LqlSv5JGaSACaaZm1apJ/kP/4bPPmhW+UfhGu3ahQwFAacMAAEDq/USp38Yzp0BJClPqV+KP6r9LAy9xl2z/7QmBn+S0t/auWFFydVydKVPMspa1gQMpDQSAGCWAAFKLUj8EUqpK/UralqWBPXrEpYGvvSZKA1GycgNcL3/ttZJdbVfXrRv/HvbqFf9efvtt6JAAkDQ+cAGkDqV+CKRUl/qVtK2UBmYs06WLKA1EIuwGu6FzZ5nv6/vOmRN/Duy9d+hUAJA0BgAAUoNSPwRSpNTviCPKSqlfSXNRQbmCcpMnFykNnKM5H3wQOhfynNNwDW/cWPLz/Lzly+NBwO9/HzoWACSFAQCAvEWpHwK7WTe/8sqWpX5Ll4YOVdoUKQ08KjqqcWNRGohktFCLffeV/Gq/et48s8JlhctOPjl0KAAoaQwAAOQdSv0Q1sZSP0X9o/5Nm+ZLqV9JozQQgVRTtUqVJFff1Z86NVcaGDoUAJQUSgAB5I1NpX7mr/JXzZghpz/rz9wPGiUuVaV+JY3SQASyRWmgmb/UX3rggZLtYXvMnx86HAAUF74JA1DmmTdvvlEjOf+cf276dEmN1XiffULnQt77TJ99+62keqp3xhnOZT7JfDJhQuhQ+cosWzlbuXNnSW/r7QcekFRFVSpUCJ0Lee9dvfvll5L21/677BI6DFLK9Lpe//RTF2XqZ+pXrRo6Dso2JugAyiyzbEG2oFMnOf+J/2TuXLHwRzJypX57RHu0asXCPxnOZdZn1k+cKEVVo6pNm4rSQCSDhT+AvMIAAECZ8V+lftK/9e8JE0SpH5JBqV8pQGkgAAC/HAMAAKUepX4Iy13vrp8yhVK/0mUrpYGXukvHjw+dCwCA0owSQAClFqV+CIRSvzJky9LAU0+NSwNffVXSr/SrIUPEoBAAgE3YAQCg1Ikv5Bs0kPzT/uklS+R0va5n4Y8S96W+/P57mY7SUaef7lz0QfTBFVew8C8b4r8nM+cydTN1hw2TmTPXubOktVr773+HzgcAQGnAAABAqbGp1E/+Y//xwoWSWqt1jRqhcyHv5Ur9do12bdnSRZn5mfnjxoUOhe3jooJyBeUmT5aivaK9mjcXpYEAADAAABAOpX4IjFK/FIh3Brz00qbSQNMADVi+PHQuAABCYAAAIHGU+iGsoqV+zZpR6pcOm0oDXXRjdGOLFpQGAgDSiBJAAImh1A+BUOpXRPw6rF079//Hz8Pbb4fOlRRKAwEAacYOAAAljlI/BEKpXxHmzZtv0ULyL/gXFi+W/Jv+zaVLzQrrFdY78sjQ+ZL2X6WB0k7aqUsXURoIAMhjDAAAlBhK/RBIkVK/I45Ie6mfWXZAdkCfPnL+a//1M89IaqAGe+4pqa7q7r675Ja4JU88UaSLI5WcyxRmCidNojQQAJDPGAAAKDaU+iGwW3Xrq6/GpX5NmsRn+59/PnSopMXf9BcUmPlmvtnw4ZIGadDIkZIqqmK5clv5TyqoQkGBNnZxmPn2vv3IkfHP2eq/n9coDQQA5DMGAAC2G6V+CGtTqd+l0aVNm8YL//ffD50qafHrcPfdJRtv42fPlmy+zb/wwl/wkybb5D595HxP33POnHgQsOeeoR9f0igNBADkI0oAAfxilPohEEr9iogX6AceKPkxfszMmXLqoR6//nUx/OgH9EDz5pKf5qc991z855x0Ujxgef310I87KZQGAgDyCTsAAGwzSv0QSK7U7wSd0LNn6kv9rPBPhX86/ng5/45/Z+lSqdgW/ltyOlkn/+pXcv5f/l/PPWdWuKxw2cknh378SfuJ0sDP9Nm334bOBwDAz8HEGsDPtrnUT2u0ZvRoSVVUpUKF0LmQ50yv6/VPP5Wi30a/bd8+/gZ6wYLQsYI9HZadnp3er5+k43TcrbdKKqdyUZID/Y07MFRO5QYPliJFGjQot0AO/fwkrchAdI6fM3OmpFZqVb166FwA8sjGz0EXZepn6letGjoOyjZ2AAD4UUVK/SxrAwdqc6kfC38kIS71U/Tb6LeHHprWhX+89b58eTPf2/cePVpSW7W97TYlv/DPyW159/LXXivZlXblww/H7xfpK/ssUhrYOmpNaSAAoHRjAADgv8QX8hUryuwGu+GRR7TpQp+zrkiCG+FGPPaYLPpj9McWLdJd6rfPPpK/2F88b55kd9vdp58eOtdWkt5gN3TuLPPX+esWLowHFum73Wc8CPjXv+LSwFatZG6IGzJ1auhcAAAUxYU8gE3iBce++8alftOnc7YfyXItXcvbb5fcQrfw4ovTe7bfzOx3v5P8bD97xgxJR+vomjVD59oGi7RozRpZ1Dxq3q5dPMBZujR0qKTldlBJXl7XXitpgzZcc40YpALYVhwBQDFiBwCAjVuMDz9c8kv8kuXLWfgjIblSv+N03OmnOxctihb165fehX+uY8N/7D9etEhlb+Gf00zNqlWT81/4L+bPN589Onv0aaeFDpW0IqWBLuMGDhSlgQCAUoABAJBiZtnK2cqdO8v5T/2nc+dKaqRGe+8dOhfyXK7Uz6Jdo12PPtpFmacyT40dGzpW4k/Dj3dsVFXVvDhLv4t2KV9eTk/oiTFjzHwz32z48PhxB+kuCMq5TGGmcNIkWbRHtMf//Z+kpVr60UehcwEA0iV1H8BAmm1lwfGZPnv4YVHqh2RQ6qfcjptKlSQbYkOmTFFqOjZsvs2/8ELJRtiIWbPi52GXXUKnSlr8e//881LUOGp86KGUBgIAksQAAEgBSv0QlrvL3fX446kv9cuV4zk/yA+aN0+y/ta/XbvQuQI8E+fauW3ayPk7/B0LF8bvT/vvHzpV0igNBACEwIU/kMco9UNYlPpJuddhs2aSf8G/MHWqpAZqsOeeoXOVIm/qzc8+k+wEO6FTJ+cKVhWsmjMndKikURoI4EdRAohixA4AIA/FF5KNG1Pqh4RR6leE+ezl2ct795b8l/7LOXPEwv/HHKSDqlSR3JvuzdmzzbIPZR/q2zd0qKRtpTSwiqp07SpKAwEAxYiJMpBHNpX6SW/r7QceEGf7kYRcqZ+i30a/PeWUeIv//PmhYyX+NJiZWSYjWU2recMNkr1n7/XvHzpX2eU6uo733CNzj7hHLrgg/r3asCF0qqRtOdCdNk2UtQLpww4AFCN2AABlGKV+CGwrpX5pXfjvvrvMxtiYJ55g4V9cbLJN7tNHzvfwPZ55Ju5QSN+Fb7wzYMmSTaWB0rW69oUXQucCAJRNDACAMohSP4RFqZ+UK/WrU0fm7/f3L1okZz2sx1FHhc6Vh8ZqbIsWkp/ipzz3XPz+d/DBoUMlbVNpoKLrouuOOEJyw9ywadNC5wIAlC0MAIAyZFOpn/yf/J/mzZOzK+3K9u1D50JabCr1O9+d37ZtvPD/6qvQqZJmvvDMwjOPPVbO/9P/c+lSOfVUz7p1Q+fKe07t1b52bcmv8quee86s8PHCx088MXSsxJ8G55xz33wjuSvdlaecIilSNGiQpKyyZqHzAQBKN74pBMoAzoAikLjUTzpdp599tnOZWZlZY8aEDhWKWXZ6dnq/fpKO0TG33CKpvMpnMqFzpVhuwVtO5QYPLlKel0p0wAB5jA4AFCN2AACl2OYLOr/Wr50zRyz8kYRcqZ9Fu0a7HnNMWhf+8Rb/8uXN/Bn+jAcekNRWbW+7TSz8S4vckScvf+21Zv5Sf+n48fHANH0LX+cy6zPrJ06UoqpR1datJS3V0o8+Cp0LAFC6MAAAShFK/RDYcA1/7TW56JDokMMOS22pnzdvfo895HxX3/XJJyW71+7t2TN0LvwvNsyGde0q83193zlz4vfT9A1MKQ0EAPwUBgBAKbCp1E82xIZMmSJK/ZCoTaV+F0UXNW8eLyDeey90qqTFC//69eX83/zfli+XNF7jW7YMnQvbyGm4hjduLPl5ft7y5fHf62GHhY6V+NNAaSAAYCsYAAAB/Vepn6y/9W/XLnQupAWlfpJkvnBD4YaOHeX8J/6TxYslHafj9tsvdC5stxZqse++cv5z//n8+eazjbKNTj01dKikURoIACiKAQAQwJalfsuXSxqkQQ0bhs6FvJcr9TtZJ/fs6Vy0KFrUr1+8QPA+dLikFDlqsyK7on9/OZd12QkTJFVV1Z12Cp0PxW437bbjjnJaqIVjx5r5Gr7G0KHx70GUmuug+HVuVqQssYqqdO0q6TN99u23ofMBAJKRmg8+oDSg1A9BUOoXPw2bj9oMtsGTJ0uqozpDh0oqp3LpWQim2MYjVfaevde/v2R32B0zZ8ZHBHbeOXS4pFEaCADpxAUPUIIo9UNglPopd7a/evUiR20G2IBTTgmdC6HZ+Xb+CSfI+Vv8LQsWxO/XtWqFTpU0SgMBIF0YAAAlgFI/BGVupBv5t7+lvtTPzMyaNpXzy/1yjtrgR12iSw45RPKv+9eXLzfbYBusVavQoZJGaSAApAMDAKAYUeqHsDaW+jl3rjv3D39IbamfZQ/JHtK9u+Q/858984ykhmq4116hc6HUO0gHVakiRV9GX86ebZY9N3vumWeGDpU0SgMBIL8xAACKAaV+CCRX6tdZnXv1SnepXyaTK3eT9JJeevBB5crfgG1TWZV32EHSnbpz1Cgz3963HzkyPkpSrlzocEnZSmlgdVXv1k2UBgJAmcYAANgOlPohiFypn6Ldot2OPda5zCOZR0aPDh0r8adhU3mbDbfh06dvLncDipNNtsl9+sjZ/Xb/o4/GA6fddgudKmnOZT7JfDJhAqWBAFC2MQAAtgGlfghsy1I/55xz8+aFDpW0eOF/wAFyfpQftWSJZH2t7x/+EDoX8p31sl7HHCP5iX7i0qXx58FvfhM6VdIoDQSAso0BAPAzUOqHoCj1i58GX9ipsNMxx8j5f/h/LF0q6Uydmb4FGILrqI4HHCD5VX7V88+bL5xcOLlt29ChkrapNNCiwdHgVq0kd7O7efr00LkAAD+NhQvwE7Ys9ZsxQ5ztR6I2lvrJLXQLL744bWf7c8yyA7ID+vSRdIWuGDFCUgVVKCgInQvY6Ht9n81KWqVVV1/tXKZupu6wYaFDJS23Q07y8rr2Wm0elAPYXhuP/rkoUz9Tv2rV0HFQtrEDANgKSv0QCKV+ym3x32EH876H73HffZIGadDIkWLhj9KpvMpnMpLqqM7QoWb+Yn/xQw/FnyPpKaHcSmngPtqna1dRGggApQo7AIAiNpf66W29/cAD4mw/kvGm3vzsMymqF9U75ZR0n+3fYw/Jt/ftJ0+W0xRNSd/92JE3ztE5ixdL0T3RPbnXdfpK8+JBSJMmkl/ml02bJm7LCWw7dgCgGLEDAKlGqR8Ci0v9FNWL6h16aLoX/occIucf848tW8bCH3nibt3dtKnk5/l5y5fHnzfp20kWv68995wsOjQ69NBDJQ3W4BdfDJ0LANKKAQBSiVI/BLVFqV+LFqkt9bPCEYUjTjhBzr/v31+wQFIbtalVK3QuoJi1UIt995X5NX7NvHlmhR8XfnzKKaFDJc1FLnLR6tWy6Nro2iOOoDQQAMJgoYNUodQPYaW71K9ISdhb/q3LL5dUS7VuvFFSOZWLGEgjLbLKmkmutqt9002SW+VWXXVVit8PKA0E/heOAKAYccGFVKDUD4Gs1/offlDaS/02laFZX+s7dqw2lqWJhT/SaeNOM3vP3uvfX7KBNnDixM0709KB0kAACIMLL+S1zaV+fq1fO2eOpEZqtPfeoXMh7+VK/XaJdjnmGOcyj2QeGT06dKikFdlx09/3nz9fsuE2/NRTQ+cCShe7xq7p0EHyw/ywRYviToz99gudKmnOZT7JfDJhghRVjaoeeaSkF/TCxx+HzgUA+YYBAPIKpX4I7E7d+frrcanfYYelttTvv3fcDNGQww4LnQso5S7TZfXrS/41/1quNPCII0KHShqlgQBQshgAIC9Q6oew3L3u3ieekEV9o77Nm8cXsO++GzpV0syyNbM1u3Zlxw2wHZzqqd4ee0h+nV83e7ZZtnu2e69eoWMl/jRQGggAJYIBAMq0LUv95s2TrL/1b9cudC6kxaZSv7Pd2X/4Q3zB+uWXoVMlJX79ZTJmvoavMXSopHf17vjxYscNUBx20S7ly0saq7H332/m2/v2I0fGRwQKCkKHS0r8vvr115Lr7/q3by8pUjRoUOhcAFBWMQBAmUSpHwLJlfqdptPOOGPLUr9sNnS4pMQLkMqVJbvFbpk6dXOZGYCSY5Ntcp8+cjbKRj36aPw5uOuuoVMlZSulgftr/27dJK3Tuu++C50PAMoKtkajTDHL7pnds0sXSa/r9fvvF980IhkbS/18PV+vQwfnyrly7tlnQ4dKWrzgqF1b8nf7u2fOlNRHfQ46KHQuIKUmaMLKlVLULep24onxAnnFitChkha/LzVpIvllftm0aZIaquFee4XOBRQrbgOIYsQOAJRqWyn1W63VbDFGYv6j1C+lC39v3nzLlpJ/yb/03HNi4Q+UBl3UpU4dyb/l31q82Hxhs8JmRx0VOlTSKA0EgG3DAAClEqV+CItSP0kyyw7IDujTR85/7b9++mlJ9cU3D0BpU0d1dttNzj3lnnriCbPsiuyK9B3J2Upp4C3ulhkzQucCgNKGhRRKlS1L/WbMEGf7kahNpX4L3cJLLknn2f6CAjk70o78y18ke9qevuCC0LkA/ALmurvuo0ZJbrwbf/758QL5hx9Cx0rs4W/cQSh5eV17rTZ/kQCUPRwBQDFiBwBKBUr9EAilfsq9/qpUkbMJNuHJJ1n4A3nA2UP20Flnyfmz/Flz5sQDvvScjac0EAC2jh0ACIpSPwRCqZ9y3/j/9rdyfqafOWOGpLZqu//+oXMBKBHP6tnVq6WoddT6pJPiBXL6zsrHA8+mTePSwKlTRWkgygJ2AKAYsQMAiaLUD4FR6ifJrHBY4bA2beT8O/6dBQvEwh9Ig1ZqVb265Ff71fPmmRW+UfhGu3ahQyUtHnwsXrypNNB0g2546aXQuQAgKQwAkIj4m8ZKlSj1QxjpLvUrMnjbWA7m+rl+s2ZJ2l/777JL6HwAElVN1SpVklwdV2fKFDNfw9cYOnTzmfl02FQaqGhANKBlS0oDAaQFAwCUqE2lfs5f46959lnJ+lv/9H3jgFA2lfqd7c7+wx/iC74vvwydKinx62/HHSU7x84ZPVpSHdUZOlRSOZWLeP8H0m3jAN7es/f695dsgA2YMCF+39hpp9DhkhJ/Lnz9teQuc5e1aycpUjRoUOhcAFBSuABEiaDUD4HkSv16q/eZZ6a71K9aNcn/0f9x3jzJ/mp/Pe200LkAlGY22AZ36iTzN/obFy2Kd+7VrBk6VVIoDQSQFqnZ6oVkUOqHQCj1U27h36CB5J/2T8+YIam1WteoEToXgDJpiZZ8+KEsahI1adcu/qb8+edDh0oapYEoFSgBRDFiBwC2S/zBGEW5M4SSPtSHDz8sFv5Ixl266403KPXLVs5W7txZ8mv92kWLxMIfwPZrrMb77CPnv/BfzJtnlm2bbXv66aFDJW1TaaCiw6LDmjTRpjJZACibGADgFylS6jfMhk2ZsvkMIZAEd5+7b/ZsWXRedF6zZiku9cvdTeMzfcbgDUCJ2EW7lC8vabqmjx5t5pv5ZsOHx+9DmUzocEnZ9DljUd+ob5MmlAYiUU71VG+PPcx8e99+5Mj4OrygIHQslE0cAcA22VTqJ/8n/6cZM8TZfiTKdXQd77lH5h5xj5x/frwltbAwdKqkbBq8ObvJbho3TrLL7LKTTw6dC0Aa5e6u4vq4Pl26pLNk1TnJy+vaa7X57kZAAtwD7oEnn5Tcme7Mzp3jAdUXX4ROhbKBAQB+lviDrkmTuNRv6lRJjdRo771D50Le+1bfFhZKGq3R/fo5l7kgc8Ff/xo6VNLi19+vfiX52/3tM2ZIukAX1KsXOhcASHpID/3jH1LUI+px4onxQuStt0KHSppZ9sDsgd26SVqsxffdJ2k37bbjjqFzIe9N0ISVK6WoW9Stbdu0vv6wbRgA4CdR6odANpb6WTNr1rGjcwVfFXw1d27oUEmLv/Fv3lzOv+hfnDJFUgM12HPP0LkAYCtWaMXnn0vW2Tp36uRcwesFrz/zTOhQSStSGviCf2HaNPG+jWTkXn/H2/EdOzpXsKpg1Zw5oUOhdKIDAFvYytliSv2QpPibJIsOjg5u2jS1C3/LDsgO6NNHzn/tv54zR1xAAij96qru7rtLbolb8sQTZtkV2RXp6wYqUhrYMGrYuLE2ldUCJSr3+nvTvTl7tln2oexDffuGDoXSiQEAJP1nqd/UqeIsGxK1qdTv1OjURo3is6T/+EfoVEnJlfkUuZvGIA0aOVJSRVUsVy50PgDYBhVUoaBAUh3VGTp0y9Ky9LyfFSkNPC86r3Fjyf3F/WXmzNC5kPdyr78u6nL77Wl9/eGncQQg5eI3hOrV5fwgP2jGDEnX6Jrf/z50LqRFykv9zMxs991lNs7GTZokZ92t+5FHhs4FACWgl3otXCiLRkejTzklfr//5JPQoZKy+a4JVtNq3nADd09CosyNcWOeekrO9XK9cqWB69aFjoUwGACkVJFSv2V+2bRpkhqq4V57hc6FvJcr9Ruv8Rdd5FymT6bPiBGhQyUtHrwdeKCcH+vHzpwpqYd6/PrXoXMBQIkzTdf0d96Ri9pH7XOlgenbIm+WPSN7xhlnSLpVt951l6TKqrzDDqFzIe9N1uR//lOKOkedc6WBK1aEDoVkMQBIGUr9EEiunKaJNenQIb1n+wsvKrzouOMkd4G7YMIESftr/112CZ0LAAJYozVffy3ZR/ZRjx7OFRxWcNj06aFDJS3+QqZZs7g0cOpU0fmCZKzUynXrZHamndmpk4sKFhUsevrp0KGQDAYAeY771CIwbg8lySw7PTu9Xz9Jx+iYW26RVF7lM5nQuQCgFMgqayapnMoNHixFijRoUPx5YRY6XFKK3O51hB8xc6akc3XuwQeHzoW8972+z2YlrdKqq692LlM3U3fYsNChULIoAcxTlPohrI2lfop6RD0OPzxtC//49Ve+vJnv7XuPHi2prdredptY+APAf8oo45w2XafYlXblww/HC+L07FCMPyffeYfSQCQsd12S6tLOtGEHQJ6h1A9hUepnts8+Mn+Rv2jaNDndqlsPPzx0LgAoc0w36IaXXpKiAdGAk06KP08++CB0rMQePqWBCOs0nbZggSwaF43LlXauXRs6FIoHA4A8QakfAqHUT7nX3+9+J/nZfvaMGZKO1tE1a4bOBQB5YJEWrVkji5pHzdu1ixciS5eGDpU0s+y52XPPPFPSEA35619FaSCSYJqqqW+/LRd1iDrkSgP//vfQsbB9GACUcZT6IRBK/SSZZQuyBZ06SVqt1Q88IKmqqu60U+hcAJCH1mndd9/J1FVdzz7bRZmnMk+NHRs6VNIoDUQgq7V6/XqZzbW53bq5qKBnQc9HHw0dCr8MHQBlTK7UzyxrWRs4UNKH+vDhh8XCH8mYoAkrV0rRQdFBTZumbeFf5PW3Iruif39J/9a/J0wQC38AKGm7abcdd5TTY3ps9GgzX8PXGDo0fl+OUnM9G38Du2iRFDWMGjZpIuku3ZW+2ygicdVVvXJlOdfJdZo+vch1EMqg1LxhlnWU+iEs94B74Mknpahb1K1Ro3SW+lWqJNkQGzJlijaW5WhzeRUAIBkb33dzZ+JthI2YNSt+n07PbVW3LA1s0kRyw93wWbNC50Le27I00Psuvsu998avP46klBVcuJZylPohrJSX+vH6A4CyYriGv/aaFF0cXXzSSfEC+d13Q4dKCqWBCKyXei1cKItGR6NzpYGffBI6FLaOAUApRakfAqHUT1ucsVzml02ZIl5/AFBWvKk3P/tMsmbWrGPHtB1Vy6E0EEGYpmv6O+/IRe2j9ieeGA/iOKJS2jAAKGUo9UMguVK/4+34jh2dK1hVsGrOnNChkmY+2y/b76yz5DRIg0aMEBdMAFBWxQNt0yN65OKLXZTpmel5552hQyWN0kAEkisNXGpLu3d3UUHHgo4cUSktGAAElisVk7y8rr1WnO1HsnKlft2ibrnbu6TobD9bJgEgJYoeabvggniL8oYNoVMlJf68+9WvJH+3v3vWLEl91Oegg0LnQt77Xt9ns5JWadXVVzuXqZupO2xY6FBpRwlgIJT6IayUl/qZmdluu8lsjI154gkW/gCQ72yyTe7TR8539V2ffjq+DqtaNXSqpBQpDTw7OrtxY0oDkZAtSwPNd/PdRo2iNDAsdgAkjFIxhEWpn/k6dST/gH9g5kw59VTPunVD5wIAJMw0VVPfflsu6hB1yJ1VfvPN0LESe/jsgENYvdV70SJZNCoa1b49pYHJYgCQEEr9EAhnICWZLzyz8Mxjj5Vz/V3/CRMk1VbtXXcNnQsAEFx8Vln2hr1x6qnOFbQpaDNzZuhQSaMDB4HM0ZwPPpCio6KjcnfveOml0KHyHQOAEmaWrZmt2bWrpBf14v33S9pNu+24Y+hcyHuU+kkyyw7IDujTR9IVumLECEkVVKGgIHQuAECpw1llURqIYNZozddfS/aOvXPqqc4VHFFwxIwZoUPlKzoAilmu1M8sa1kbOFDSu3p3/Hix8EcycqV+B0UHNW2atoV/vMW/fHkz39P3vP9+SYM0aORIsfAHAPy0/zyrfKm/dPz4+LouPXdjir+BXbRIihpGDZs0kXSP7knP0QgEU03VKlWSXBPXZNq0IusolAAGAMWEUj+ElfJSP2/e/B57yPlOvtPs2ZLdZ/f16hU6FwCgrLJhNqxrV5nv6/vOmRMPAvbeO3SqpFAaiEAyyjinjeuotA7iShpHALYTpX4IK+W3NfLmzdevL+f/5v82Y4ak43TcfvuFzgUAyDsLtOBf/5JFLaOW7drFn7fLloUOlRRKAxHYBbrguedk0YhoRO719/HHoUOVVQwAfiFK/RAIpX6SzBd+VfhVhw6SW+/Wjx4tp721d8WKoXMBAPLeOq377juZ2qhN794uyizNLH3wwdChkkZpIAJ5Vs+uXi1FraPWudLAF18MHaqsYQCwjSj1QyCpLvXLdWtI/i3/1uWXS6qlWjfeKKmcykUcZQIAJC2rrJnkarvaN90kuVVu1VVXxQsS70OHSwqlgQgkVxr4kX3Uo4dzBYcVHDZ9euhQZQUXzv8DpX4IrEipX7Nm6Vz4V6wo2WAbPHmyNpYziYU/ACCsjWeVc1vh7Q67Y+bM+GjazjuHDpcUSgMRSK40sL6rP3Vqbp22+Qsj/BQuoH9EkVK/m+3madNEqR+SZG6MG/PUU1uW+q1YETpWYg/fzMz23Vfmr/JXPfusZANswCmnhM4FAMDW2fl2/gknyPlb/C0LFsSfY7VqhU6VFEoDEcgWpYGS9bf+lAb+L0xI/gOlfggr5aV+m7s1lvglU6dKaqRG6WldBgDkCdPrev3TT+X8If6Qjh2dK+fKuWefDR0rsYdPaSBCMvVTvyVL5KI7ojvatYsHVB99FDpWacEOgI02LTycX+6XL18uFv5IRlzqJ03QhAsvdC6aGk09++z0LfyzB2YP7NZN8p/5z+bMEQt/AEBZ5lRP9fbYQ4q+jL6cPdsse0b2jDPOCB0rsYfvnHMum3Uu+iD64IorZLpEl/TuLWm91v/wQ+h8yHNOwzW8cWPJz/Pzli+P13kNG4aOVVqkfgcApX4IJFfq19k6d+rkXMHrBa8/80zoUEnhmwEAQDqlfKefN2++eXM5/7J/eepUSfVVv2rV0LmQ50wf6aNvvpGzH+yH005zrmD/gv2nTg0dK5TU7QCg1A+BTdbkf/6zSKlfuhb+3rz5ypUl+4v9Zdo0Fv4AgHSxyTa5Tx85u9/uf/TR+Lp0t91Cp0pKPPBYuFCKGkQNKA1EQjbdLtrt6/Z95BEzX8PXGDo0raWBqRkAUOqHoDaX+nWOOh92WOpK/bx58wccIOdH+VHPPy9ZP+vXtm3oXAAAhGG9rNcxx0h+op+4dGm8EPnNb0KnSkp8HfT220VKA+9wdzz6aOhcyHv/efeOATZgwoT49bfTTqHDJSXvJx6U+iGstG/1Kzy+8Pijj5Zzf3F/mThRUh3VSc83HQAA/EyrtXr9epnNtbndurmooGdBz/QsiDkaiKBMN+iGl16SogHRgJNOiq/XP/ggdKySkrcDgPiNpGlTyS/zy6ZOldRQDffaK3Qu5L1cqd8MzbjkEucy3TPd77gjdKikmWUHZAf06SPpcl1+552SKqpiuXKhcwEAUMp9r++zWUmrtOrqq53L1M3UHTYsdKikmc/2y/Y76yw5Xafr/vpXcR2BZCzSojVrZFHzqPnJJ8eDgGXLQocqbnk3AKDUD4Gs1Mp16yTrYB06dkzn2f6CAjk7xo657TbJZtvs888PnQsAgLLNXeIueeghyd3mbjvrrHjr/HffhU6VFEoDEcg6rfvuO0mt1fqss5zLvJp59aGHQocqLmV+ALC5vMHL69prxdl+JCtX6tc56ty2berO9puZWZUqMt/Ot3vkETlN0ZRWrULnAgAgz5yjcxYvlkUjo5Ht28ffTH78cehQSYmvN2rXlvzd/u6ZMyX1UZ+DDgqdC3kvq6yZ5Gq72jfdJLlVbtVVV8XX+96HDvdLldkSQEr9ENQWpX6NGqVu4e/Nm//tbyX/qH90+XIW/gAAlKi7dXfTpnJ+rp+bvvuaUxqIQLYsDTS7xq4p+6WBZW4HwKZSP/nr/fUzZ8rpal3doEHoXEiLlJf6WeGIwhEnnCC5Nq7N+PGSaqrmzjuHzgUAQKpsvq95gRWcfrpzBXsV7DVlSuhYiT18SgMRkmmohr78shRdGV2ZKw1ctSp0rJ+rzAwAKPVDIHGpn+lv+tsf/+iiTMdMx9tvDx0qKUWO2Lzl37r8ckm1VOvGGyWVU7mozO4gAgAgT+TlFuVtZT57efby3r3lNEADRowQpYFIxhIt+fBDWdQkapIrDVy6NHSo/6XUX8BvLvXzn/nPnnlGLPyRjFypX2NrfNxx6Vz477ijZH2t79ixkuqoztChYuEPAEBp8p/3NR9oAydOLOtblLeVizI3ZW66915ZVCmq1Lq1pFf0ytq1oXMh7zVW4332kfNf+C/mzzefbZlt2aNH6FD/S6nbAUCpHwKj1M+qVZN8f99/+nRJQzTksMNC5wIAANvkZt38yiuy6PLo8twW5fffDx0qKUVKA+/1986aJelMnfmb34TOhbxXJnbklJpv8ij1Q1DmxrlxTz+d2lI/MzNr3Fjyi/3i5cvFwh8AgLLsMl1Wv77kX/OvLV8eX2e3bBk6VFKKlAaeFZ11+OGUBiIh/7kjZ7ANnjQpvs6uWDF0uJzgA4AtS/3mz5fsj/bHk04KnQtpsbHUT+40d1qbNvEHxrp1oVMlxSy7Z3bPLl0kv9avnTNHua1MAACg7HOqp3p77BFvUX7ySbNs92z3Xr1Cx0rs4UcuctH69ZLr5/qdfLLkarlaw4aFzoW0sAE24JRTJP9n/+fFi+N17377hU4V7AgApX4I5Ht9n83K9Jgeu+SSdJ7t54gNAADpVvSuRuefHy+UCwtDp0oKpYEIwvS6Xv/0Uyn6bfTb9u3j192CBUnHSHwHAKV+CCQu9TM72o5OYamfN2++cmWO2AAAAMkm2+Q+feRslI169NH4C4Jddw2dKilblgYeeaQoDUQSttiR89RT5rNHZ48+7bTkY5QwvnFEYEVK/U48Md7i//e/hw6VlCIlOCP8iBkzJJ2rcw8+OHQuAABQqkzQhJUrpahb1C13vZS2LiRKAxGKa+la3n675Ba6hRdfXNKlgSW2A4BSPwS11VK/FC38vXnzLVpI/iX/0nPPiYU/AAD4cV3UpU4dyb/p31y0yHxhs8JmRx0VOlRStlIaOMKNeOyx0LmQFjbf5l94oWQjbMSsWfF1/M47l9SfVuwDAEr9EFbqS/0GZAf06SPnv/ZfP/OMpPqqX7Vq6FwAAKBMqKu6u+8u555yTz3xhFl2RXZF//6hQyWlSGlgX9f3pJMoDUSy7Fw7t00bOX+bv23hwnhnSq1axf2nFNsRAEr9EEhc6iet0qqrr3YuUzdTNz1v1PHAraBAzlpZq1tvlWyuze3bN3QuAACQR8x1cV3uvVdyE93ECy6IF8o//BA6VmIPP/cFi3S5Lr/zTlEaiCTkSgNddEh0SIcO8Reb8+Zt74/d7gGAWfbA7IHduklarMX33SdpN+22446hny/kvVVa9dVXkj1uj3fr5lzB+QXnp2erVjxwq1JFZg/ZQ5MmyVlX69q6dehcAAAgr/VW70WLZNGoaNQpp8SDgI8/Dh0qKZuOWDr/sn95yhSx0xLJ+FJffv+9pD7qc845zmUeyTwyevQv/WHbPACg1A+BpbvUz5s3X6+enJ/pZ86cKamt2u6/f+hcAAAgVZ7Vs6tXS1HrqPVJJ8XXYy++GDpUUuLrsQMOkPOj/KiZM0VpIBK1faWBP7sDgFI/BHaaTluwQBZ1ijo1bZq6hb8V/qnwT8cfL+ff8e8sXCgW/gAAIJxWalW9uuRX+9Xz5pkVvlH4Rrt2oUMlJd758M9/xqWBjRtTGohkbSwNNLvL7nr00XidvssuP/e//p87ALYs9Zs5U05X6+oGDUI/bKTFxlI/c4+4R3JnzjZsCJ0qKWbZ6dnp/fpJOk7H3XqrpHIqF5XY3TsAAAB+gayyZpKr7WrfdJPkVrlVV14Zf2FjFjpcSYt3SGcyktW0mjfcINl79l56yhMR3J268/XXpejC6MLcDul33/2xf/lHFxLxwr958/iMy4svsvBHQr7Vt4WFku7TfRdc4Fw0NZp69tlpWfjHr7vy5c382f7sMWMktVXb224TC38AAFB6ZZRxbvPC1wbYgAkT4oXxTjuFDlfS4gVXNutc9EH0wRVXSLpLd51/vjZf1wIl6QJdUK9efPvv55+PX3fNmv3Yv/xfOwDMNtgGa9VKilZHq2fNklRN1SpVCv2okPdWa/X69ZI9ao927ZrOUr9q1ST/R//HadMk3aybGzUKnQsAAOAXMw3V0JdflqIroytPOin+QmfVqtCxEnv4udJA+df8a1Onyqme6u2xR+hcyHtrtfbf/5bZKXbKSSe5qGBRwaKnn879j5sGAPECpG5dya/1a198UVIVValQIXR65L0JmrBypRR1i7q1bRtPUN96K3SopMSvuwYNJD/bz54+XdLROrpmzdC5AAAAitESLfnwQ1nUJGrSrl08CHj++dChkhIPAg48UM4/6B+cNUtSd3U/8MDQuZD3Ng4Coj2jPX/3u/h1t3JlkS3Fvo/vc999YuGPJJh7yD30zDPxwr9x4/Qt/LOVs5U7d5b8x/7jhQvFwh8AAOSvxmq8zz5y/gv/xbx5Ztm22bannx46VFLihdc//iFFPaIejRvL3Dg3bvM3skAJqaqqO+0k57v6rqNG5f6h23xGwHvvFy4MnRJ5zlwX1+XeeyU30U08//zUnO3/79tnbtCGa67RpjNzAAAAabN9tzMrq4qUBja35rfeuqnVHShJFrnIHX54JNkJdkL37qHzIG/F5SemcRrXt6+LosnR5D59UrPw33z7zGE2bOpUbb59Jgt/AACQctt3O7Oyqkhp4KJoUb9+2lh+LUoDUZKctbJWp54aSVbX6jZsGDoP8k5c6mf2iD3Srp2LMj0zPe+8M3SopMQfYDVqxLfPnD9fssvsspNPDp0LAACg1HF2tp19/PHxGfmlS+NvyH/969CxEnv4LtMn02fECJkda8cef7yklVq5bl3oXMg39mv7dcOGziz7j+w/1q2TVFu1d901dCyUeUVK/XL3oVyxInSopBS5feaL/sUpUyQ1UIM99wydCwAAoAxZoRWffy5ZZ+vcqZNzBa8XvP7MM6FDJWXzAMSP8+NmzhSlgSgeK7Ti888jSTtr5x12CJ0GZV4v9Vq4UBZ1jbo2a5a+hX/28uzlvXvL+a/8V888Ixb+AAAAv1Rd1d19d8ktcUueeMJ8dnJ2cnrOyG8ux95UGrixPBvYLpVUqVy5SNJX+uqHH0KnQVnlTnIn3X23LBodjW7dOj7bv3Zt6FQlLf6mv6DAzNfwNYYOldMQDbnnHkmVVZmBGgAAQDGooAoFBXJqr/bDh5v59r79yJHxdVi5cqHDlbR4ELBuneROdaced5zk2rq2d90VOhfKrG/1bWFhJNMIjUjP7dew3b7X99mspJVaecUVzkWPRo+ee25qSv3MzGz33SV70B584gnJ3rP3+vcPnQsAACD/2WSb3KePnO/pe86ZEw8C8n/HZXydXVjoXPR49Ph550m6Vteefbakb/RN/l9/o9jcolv+/vdIzr3kXlq6NHQalHpv6+0vvpBZT+vZpo1zmbqZusOGhQ6VlPgD5sADJT/Gj1m8WM66W/cjjwydCwAAIIUe0APNm0t+mp/23HPxFzQHHxw6VFKcy1yfuf6ee2TW2TqfcIJy1+nAT3KvuleXLXPxC+Z3v5O89/6ll0LHQiljmqqpb78tF3WIOuRK/d58M3SsxB6+FV5UeNFxx0nuPHfeww+LskwAAIDSZo3WfP21ZO/YO6ee6lzBEQVHzJgROlRS4i+qDjhA8g/4B2bNklNP9axbN3QulDZRFEWHHhrFC7qXX5a5h93Dc+aEjoXSwk10E+fOjRf+jRqlb+GfnZ6d3q+f5G50Nz76qFj4AwAAlFbVVK1SJck1cU2mTTPLWtYGDoy/6HQudLiSFh8R+Oc/5aIzojOaNaM0EFvYuM6P13MvvLDpBRG/QPbfX+bX+DWvvSanvbV3xYqh8yJh5rq77qNGSW68G3/eeak52+/Nmy9fXs7OsrPuvluye+3enj1D5wIAAMAv5a50V06YILlhbtgZZ8QLoG+/DZ2qpOXKquWslbW69VbJ5trcvn1D50Li1mrtv/8ti/aM9vzd7+J13cqVUe5/jV8Q774rqad6nnde6LRITFzqZ5qqqf36uSiaEE3o3TtdC/+qVeV8V9/1ySdZ+AMAAOQLG2JDunSR+ev8dYsWxdd9NWqETlXSipQGzo/mX3ihTOM0rm9fbWyBD50Piemt3rkvdFeuzP3DH90SY+b38fsMGSLZalt9xRWh06PYrdbq9etlNtfmduvmooKeBT0ffTR0qKQU6b543D8+fbqk43TcfvuFzgUAAIASs0iL1qyRRc2j5iefHC+Mli0LHSop5guPLzz+6KPl3HA3fNIkccQ1T7nqrvrQoc5FH0YfXnnlf/6v0U/8h2vcmquuktw17ppJk0I/DBSTXKmfoppRzcaNU7fw94UbCjd07Cj5j/3HixaJhT8AAEBaNFOzatXk/Of+8/nzzWdbZlv26BE6VFJcVPC3gr899ZQsOiA64LDDZBqt0StWhM6F4uLucnc9/ni8jh8w4Ef/rf/1Y+JvSitUkHx/33/ePElDNOSww0I/PGyzXuq1cKEsGh2Nbt8+nniuXRs6VEnbXP7i3/JvXX65pFqqdeONksqpXBRt788HAABAmZVV1kxytV3tm26S3Cq36qqr4qPR3ocOV9Li6+Tdd5fZOBs3aRK3uS6jTEM19OWXpejK6MoWLeJ13tdf/9i//rNbMeNfkGrVJD/Pz1u6VFILtdh339CPF//DFqV+558f/0L88EPoWCX+sM3MrGJFmd1gN4wdK2dX2pXt24fOBQAAgNJq4zeo5s5z53XtGl83f/VV6FQljdLAMmupln70kSw6PDq8UaP49/WDD/7Xf7TNt8WIF1YNG8ZbqOfPl1RVVXfaKfSjxyZxqZ+0Squuvtq5TN1M3WHDQodKSvwGVr26nL/GXzN9uqRBGtSwYehcAAAAKDOGa/hrr0nRxdHFJ51UpCw9FcyyA7ID+vSRdLkuv/NOSRVVsVy50LmwyTqt++47KaoSVfm//4t/P5cs+bn/8S++L6b5wq8Kv+rQQc7t6HacNElSRpn8v89mKZYr9VtqS7t3d1FBx4KOs2aFDpWUeDDVtKnkl/llU6dKaqiGe+0VOhcAAADKrDf15mefSdbMmnXs6FzBVwVfzZ0bOlRSKA0sdTYeWVE91Tv1VOcy/8j8Y/z4bf0hv/gMtIsKdi7Y+ZFHJJVTucGDQz8bqWWarunvvFOk1C9dC3+f7Zftd9ZZkv/Sfzl3rlj4AwAAoHgcpIOqVIlL1Z580nx2dHb0BReEDpWULUsDGzWiNDC4cio3ePAvXfjnFEMJWqRIgwZJ7lJ36S8Pgm3WW70XLZKidlG7Jk3irR9vvhk6VEmLv+nPZMx8DV9j6FA53apb771XUmVV3mGH0PkAAACQdyqoQkGBnHqoxx13mPn2vv3IkfHR0/zfGr/pPvIuOiM6o1kzmXvYPTxnTuhc6eGud9dPmbJ53b2dP624YsULsx13lPmL/EXPPhsvzA4/POyTlYfSWurnzZvfeWc5u91uf+ghyfpa3z/8IXQuAAAApFY3dZs/XxY9HD3coUNq7rK1uTTwSDvyL3+R7Gl7Oj07IxI0WINffFGKBkYDW7SIv/D997+394cW+5n9eBCw996Sf9o/vXSppNZqXaNGgCcsX1Dq5+vUkfOj/KgZMySdqTN/85vQuQAAAABJkmmqpr79tlzUIepw4olp2Zm76eFTGljcFmnRmjWyqHnU/PDD48HS6tXF9cNLrLQvHgQ0aCDza/yaBQvktLf2rlgxmecsL6S71M8XdirsdMwxcu56d/3EiaJ0BAAAAKVbfP0ue8PeOPVU5wraFLSZOTN0qKRw/b7dPtNn334ri/aI9jjiiHjhv2xZcf8hxdABsHXx5Oull+TsC/uiRw9JG7TB+xJ9yvLBFqV+TZqkbuGfmyA6d7+7/7HHxBsHAAAAyobqql65suRauVZTp5plV2RX9O8fOlRSXFQwqWDSk09uKg2UxmncW2+FzlUG5Nr9a6t2r14ltfDPKbEBQI5zBQcXHDxtmqTP9Nmf/lTSf14ZtpVSvzfeCB2qpMVb/HfYwbzv4Xvcd5+kQRo0cqRyZSsAAABA2VJe5TMZSXVUZ+hQM3+pv3T8+HiHdIUKocOVtE2lgYpOj05v2pTSwP/pQ3149dXOZdZn1k+cWNJ/WIkPAHKcy+yb2ffGGyXX1/UdNy6pP7f0cz1cj/vuk0WjolGtW8cvmE8+CZ2qpMUL/z32kPOdfKcnn5Sz0Tb6jDNC5wIAAACKlw2zYV27Sv48f94zz2zuTMtv8Rean38uuW6u27HHSu4od9Sdd4bOVXq4a9w1kybFO7+HDk3sT036Yea+8d208JMmauIRRySdIyBK/fwhh8j5x/xjM2ZIaqM2tWqFzgUAAAAkZIEW/Otfsqhl1PLkk+MvAJcvDx0qKUVKA6/QFSNGKH07f8/ROYsXy6KR0cjcF8Dff5/UH574ACBn0zfA8lP8lCVL5NRe7WvXDpUnAWkv9fuq8KsOHSS33q0fPZpSSAAAAKTcOq377juZ2qhN794uyizNLH3wwdChkpLC0sAn9MT778ui46Pjc+3+H3+cdIhgA4CceAvMQQdJ/m3/9uLFkvbX/rvsEjpX8T3AjaV+Lmoftc/dFiQFZ/vNzMw5yb/l37r8ckm1VOvGGyWVU7kosaMnAAAAQCm3sQTO1Xa1b7pJcqvcqquuitcN+V+iXuS232P92FmzJPVQj1//OnSuYrTxi+CoRlSjefN44f/qq6HCBF+Ibb5Ppo2xMV27avMW+bIunaV+Zma2446SXWQXjRunjeUnYuEPAAAAbE1GGecke8/e699fsuE2fMaMeGG8886hw5W0PC4N3HgXvI23hQy88M8pNQsy5wquK7jub3+T6XW9fsUVofNsxyNJZ6mfmZntu6/MX+WvWrBAslvt1u7dQ+cCAAAAyhbra33/8Ac5f4u/ZcGC+Do7/zuztlIaeKw7dsSI0Lm2wxItuewy5wraFLSZOTN0mJxSMwDIcVGmUabRn/8sufau/ciRofP8DLkdCyu18oornIvGR+PPOite+P/wQ+hwybHBNnj4cDldr+sPPTR0GgAAAKCMu0SXHHKIzMbZuFGjQodJSryOKix0Lno6evqCCyRdq2vPPlvSt/q2sDB0vp/xCHq73qNHO5dplWl1662h0/ynUjcA2MTcNDetb1/JTXQT584NHWcr1mjN119L9qw927592tr8/4tZdat+8MGhYwAAAAB5xVlNq1m3bugYwR6+y1yfuf6ee2R2hp1xwgmS3tbbX3wROtdWnKbTFiyQuVFu1DnnhA7zY0rtACCe/GzYILmurmuHDpImaMLKlaFzbSr1U1Q9qt64cWnb0hHQoTp0jz1ChwAAAADyTFVVrVAhdIjQXFQwqWDSk0/KogOiAxo1kjRO4956K3QuSbM06913ZdG4aNwppyR9W79tVWoHADmbz4JE3aJuJ50k6RW9snZtgCjd1G3+/LjU7/DD01LqBwAAAAClxZalgc2aSeqszvPmBYjykl765BMpOik6qU2bOFeQdeo2KfUDgJx4wf33v0tRg6hBy5aS5mjOBx+U+B9srovrcu+9sujh6OGjj47/Yj/9NPTzAQAAAABpFa8PP/tMFk2KJh199KZ1W8l7Qk+8/74UNYwatmwZ51ixIvTz8XOVmQFAzuYnODoqOuqQQ4r8RRfX7QMHa/CLL0o+8tH//Z+LosnR5D590lfqBwAAAAClW+7oeG7dJmkf7dO1q4pv5/jGdaY7yZ10992y6Pjo+Pr143VpqTiCsG3PV+gAxSW+T+Z++8lZJat01lky6229jz5aTtfput//XlJFVSxXTpsHBffr/hUrZG6em7d4cVw2OHZs/Au0cGHox1PWmM++kn1l7Vo51VM9ugAAAACAYrJCKz7/3LnMwZmDq1QJHaasiG+fuOOOkj/Tn9mtm+RquBrHHy9Zc2t++OGSGqrhnntK2kW7lC8vab3W//CDpCt15QsvSG6kG/nUUzJX6ApHjYrXiQnsQC9heTMA+DGb/uJNJisoiP/ivv46dK58wwAAAAAAKBEMAEpQvF6sWDFeLxYWlvYSv+1VEDpASYu3Znz3XegcAAAAAIDSJV4vfvNN6BxJKXMdAAAAAAAAYNsxAAAAAAAAIAUYAAAAAAAAkAIMAAAAAAAASAEGAAAAAAAApAADAAAAAAAAUoABAAAAAAAAKcAAAAAAAACAFGAAAAAAAABACjAAAAAAAAAgBRgAAAAAAACQAgwAAAAAAABIAQYAAAAAAACkAAMAAAAAAABSgAEAAAAAAAApwAAAAAAAAIAUYAAAAAAAAEAKMAAAAAAAACAFGAAAAAAAAJACDAAAAAAAAEgBBgAAAAAAAKQAAwAAAAAAAFKAAQAAAAAAACnAAAAAAAAAgBRgAAAAAAAAQAowAAAAAAAAIAUYAAAAAAAAkAIMAAAAAAAASAEGAAAAAAAApAADAAAAAAAAUoABAAAAAAAAKcAAAAAAAACAFGAAAAAAAABACjAAAAAAAAAgBRgAAAAAAACQAgwAAAAAAABIAQYAAAAAAACkAAMAAAAAAABSgAEAAAAAAAApwAAAAAAAAIAUYAAAAAAAAEAKMAAAAAAAACAFGAAAAAAAAJACBaEDAACwjWZp1rvvSlqu5Z9/HjoMUutQHbr77pLaqu3++4cOAwDAz8EAAABQ1lyoC6++2rnMqsyqhx8OHQbpZJatma3Ztauktmo7fnzoPAAA/BwcAQAAAAAAIAUYAAAAAAAAkAIMAAAAAAAASAEGAAAAAAAApAADAAAAAAAAUoABAAAAAAAAKcAAAAAAAACAFGAAAAAAAABACjAAAAAAAAAgBRgAAAAAAACQAgwAAAAAAABIAQYAAAAAAACkAAMAAAAAAABSgAEAAAAAAAApwAAAAAAAAIAUYAAAAAAAAEAKMAAAAAAAACAFGAAAAAAAAJACDAAAAAAAAEgBBgAAAAAAAKQAAwAAAAAAAFKAAQAAAAAAACnAAAAAAAAAgBRgAAAAAAAAQAowAAAAAAAAIAUYAAAAAAAAkAIMAAAAAAAASAEGAAAAAAAApAADAAAAAAAAUoABAAAAAAAAKcAAAAAAAACAFGAAAAAAAABACjAAAAAAAAAgBRgAAAAAAACQAgwAAAAAAABIAQYAAAAAAACkAAMAAAAAAABSgAEAAAAAAAApwAAAAAAAAIAUYAAAAAAAAEAKMAAAAAAAACAFGAAAAAAAAJACDAAAAAAAAEgBBgAAAAAAAKQAAwAAAAAAAFKAAQAAAAAAACnAAAAAAAAAgBRgAAAAAAAAQAowAAAAAAAAIAUYAAAAAAAAkAIMAAAAAAAASAEGAAAAAAAApAADAAAAAAAAUoABAAAAAAAAKcAAAAAAAACAFGAAAAAAAABACjAAAAAAAAAgBRgAAAAAAACQAgwAAAAAAABIAQYAAAAAAACkAAMAAAAAAABSgAEAAAAAAAApwAAAAAAAAIAUYAAAAAAAAEAKMAAAAAAAACAFGAAAAAAAAJACDAAAAAAAAEgBBgAAAAAAAKQAAwAAAAAAAFKAAQAAAAAAACnAAAAAAAAAgBRgAAAAAAAAQAowAAAAAAAAIAUYAAAAAAAAkAIMAAAAAAAASAEGAAAAAAAApAADAAAAAAAAUoABAAAAAAAAKcAAAAAAAACAFGAAAAAAAABACjAAAAAAAAAgBRgAAAAAAACQAgwAAAAAAABIAQYAAAAAAACkAAMAAAAAAABSgAEAAAAAAAApwAAAAAAAAIAUYAAAAAAAAEAKMAAAAAAAACAFGAAAAAAAAJACDAAAAAAAAEgBBgAAAAAAAKQAAwAAAAAAAFKAAQAAAAAAACnAAAAAAAAAgBRgAAAAAAAAQAowAAAAAAAAIAUYAAAAAAAAkAIMAAAAAAAASAEGAAAAAAAApAADABQPpw3a4H3oGAAAAEBeMRWqkOtsFA8GACguq7X6m29ChwAAAADyitMqrfr669AxkB8YAKB4mF7Vq198EToGAAAAkFdML+mldetCx0B+YACA4uGcOXvnndAxAAAAgLziXNZl3347dAzkBwYAKC436IY33wwdAgAAAMgzQzTk738PHQL5gQEAiof5I/2RCxaEjgEAAADkF3+gP3DevNApkB8YAKB4uMzjmccXLpS0WqvXrw8dBwAAACjjNl5XZ17LvLZ4cegwyA8MAFAsnHPOuW+/ldyN7sZp00LnAQAAAMo2N8gNmjJl83U2sP0YAKCYubvd3XfdFToFAAAAUKaZG+VG3X136BjILwwAUKziCeWSJTI3zo17+unQeQAAAICyxT3gHnjySRe5yEXPPx86DfILAwCUEHeaO+2SSyR9o282bAidBgAAACjlvtW3hYUyd4Y74/LLQ4dBfmIAgBIRTyxfe01yv3a/vuWW0HkAAACAUs3c/m7/m2+Or6NfeSV0HOQnBgAoWeb+5f71pz9J6qVeCxeGjgMAAACUMhfogueek9zH7uNrrw0dBvmNAQBKVDzBLCyUojHRmE6dJM3SrHffDZ0LAAAACMo0XdPfeUeK/hr9tX37+LqZo7MoWQwAkIi4HPDDD2XRidGJxx4raYmWfPhh6FwAAABAwjZeB0ftonbHHhtfJ3/0UehQSAcGAEhUPNlcuVKKmkZNmzaVNEETVq4MnQsAAAAoYfFOWIuaRE1atoyvi//5z9ChkC4MABBEPOl87z1Z1DXq2qyZzI1xY556KnQuAAAAoHi5+9x9s2fHO2EbNWLhj5AYACCo+A1w7Vo518v1Ou44mV7RK5dfLtNH+uibb0LnAwAAALZJ7jrW9IJeuOwyyfV2vdu0ia97P/00dDykGwMAlArxjgDvXZT5feb3N98sRftE+xx8cPyGOXq0pG/0DaUoAAAAKHW+1beFhZI7x50zZkzuOtZFmUaZRn/+c+46N3RIQGIAgFIqnpC+/75z0f3R/b16yaJKUaU6dSRllR04UKbRGr1iReicAAAASJ1xGvfWW5IiRYMGSVHFqGKdOs5F90b39uyZu44NHRLYGhc6ALA9zJs3X726nN/b7928uaT39N6BB0qun+v3q19JqqZqFSvKtL/233XX0HkBFAPnL/QX3nijcwVfFXw1d27oOEgns8KdC3f+v/+TRbdHt191Veg8AIqB0/t6/8svJa3Rmm++kewOu+OddyRVV/W33pJFH0UfLVoUL/A/+CB0XAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADp9P8iSCqk8vckhQAAAABJRU5ErkJggg=="
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
              <TextField id="filled-basic" label="Property Name" variant="filled" className='propertyName' onChange={(e) => setPropertyName(e.target.value)} />
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
                  <MenuItem value="1st Month">1st Month</MenuItem>
                  <MenuItem value="2nd Month">2nd Month</MenuItem>
                  <MenuItem value="3rd Month">3rd Month</MenuItem>
                </Select>
              </FormControl>
              <TextField id="outlined-basic" type='number' label="Money Down" variant="outlined" className='inputBox' onChange={handleNumber1Change} />
              <TextField id="outlined-basic" type='number' label="Fix Up Cost" variant="outlined" className='inputBox' onChange={handleNumber2Change} />
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
            <div className="enetry">
              <TextField id="outlined-basic" type='number' label="1 Bedroom Price" variant="outlined" className='inputBox' onChange={handle1bedromPrice} />
              <TextField id="outlined-basic" type='number' label="2 Bedroom Price" variant="outlined" className='inputBox' onChange={handle2bedromPrice} />
              <TextField id="outlined-basic" type='number' label="3 Bedroom Price" variant="outlined" className='inputBox' onChange={handle3bedromPrice} />
              <TextField id="outlined-basic" type='number' label="4 Bedroom Price" variant="outlined" className='inputBox' onChange={handle4bedromPrice} />

            </div>
            <div className="enetry">
              <TextField id="outlined-basic" type='number' label="Monthly Cost" variant="outlined" className='inputBox' style={{ marginTop: "20px" }} onChange={handleMonthlyCost} />
              <div className='desableSecond'>
                <p>Gross Monthly Profit</p>
                {totalBedPrice && <h1 >{totalBedPrice}</h1>}
              </div>
              <div className='desableSecond'>
                <p>Gross Net Profit</p>
                {netProfit && <h1 >{netProfit}</h1>}
              </div>
              <div className='desableSecond'>
                <p>Gross Reclaim/Return of Investment:</p>
                {recalm && <h1 >{recalm}</h1>}
              </div>
            </div>
            <button className="addButton" onClick={addProduct}>Add Item</button>
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
          <div className="tableHead">
            <div className="searchBar">
              <input type="text" className="searchINput" placeholder='Enter Property Name..' />
              <img src={SearchIcon} alt="" />
            </div>
          </div>
          <div className="tableBody">
            <div className="tableContentArea">
              <p className='headings'>Name</p>
              <p className='headings'>Time Span</p>
              <p className='headings'>Money Down</p>
              <p className='headings'>Fix Up Cost</p>
              <p className='headings'>Upfront Investment</p>
              <p className='headings'>Monthly Cost</p>
              <p className='headings'>1 Bedroom Price </p>
              <p className='headings'>2 Bedroom Price</p>
              <p className='headings'>3 Bedroom Price</p>
              <p className='headings'>4 Bedroom Price</p>
              <p className='headings'>Gross Montly Profit</p>
              <p className='headings'>Monthly Net Profit</p>
              <p className='headings'>Gross Reclaim/Return of Investmentt</p>

            </div>
            <div className="tableBodyContent">
                {
                  Object.keys(resultTwo).map((item, i) => (
                   <div className='tableIndi'>
                        <p className='content' >{item}</p>
                        <div className='content' >
                          <select name="time" id="" onChange={handleTimeChange} value={setTime}>
                            {
                              resultTwo[item].map((data, i) => (
                                <option>{data.time_span}</option>
                              ))
                            }
                          </select>
                        </div>
                        <p className='content' >
                          {
                            resultTwo[item].filter(item => item.time_span === setTime).map((data, i)=> (
                              <span>{data.money_down}</span>
                            ))
                          }
                        </p>
                        <p className='content' > {
                            resultTwo[item].filter(item => item.time_span === setTime).map((data, i)=> (
                              <span>{data.fix_up}</span>
                            ))
                          }</p>
                        <p className='content' >
                        {
                            resultTwo[item].filter(item => item.time_span === setTime).map((data, i)=> (
                              <span>{parseFloat(data.money_down) + parseFloat(data.fix_up)}</span>
                            ))
                          }
                        </p>
                        <p className='content' > {
                            resultTwo[item].filter(item => item.time_span === setTime).map((data, i)=> (
                              <span>{data.monthly_cost}</span>
                            ))
                          }</p>
                        <p className='content' >{
                            resultTwo[item].filter(item => item.time_span === setTime).map((data, i)=> (
                              <span>{data.one_bed}</span>
                            ))
                          }</p>
                        <p className='content' >{
                            resultTwo[item].filter(item => item.time_span === setTime).map((data, i)=> (
                              <span>{data.two_bed}</span>
                            ))
                          }</p>
                        <p className='content' >{
                            resultTwo[item].filter(item => item.time_span === setTime).map((data, i)=> (
                              <span>{data.three_bed}</span>
                            ))
                          }</p>
                        <p className='content' >{
                            resultTwo[item].filter(item => item.time_span === setTime).map((data, i)=> (
                              <span>{data.four_bed}</span>
                            ))
                          }</p>
                        <p className='content' >{
                            resultTwo[item].filter(item => item.time_span === setTime).map((data, i)=> (
                              <span>{parseFloat(data.one_bed) + parseFloat(data.two_bed) + parseFloat(data.three_bed) + parseFloat(data.four_bed)}</span>
                            ))
                          }</p>
                        <p className='content' >{
                            resultTwo[item].filter(item => item.time_span === setTime).map((data, i)=> (
                              <span>{parseFloat(data.one_bed) + parseFloat(data.two_bed) + parseFloat(data.three_bed) + parseFloat(data.four_bed) - parseFloat(data.monthly_cost)}</span>
                            ))
                          }</p>
                        <p className='content' >
                        {
                            resultTwo[item].filter(item => item.time_span === setTime).map((data, i)=> (
                              <span>{data.gross_reclaim}</span>
                            ))
                          }
                        </p>
                   </div>
                  ))
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
