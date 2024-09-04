import React, { useState, useEffect } from 'react';
import { FormControl, Button, Tabs, Tab, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DateTimeValidationError } from '@mui/x-date-pickers';
import * as movininTypes from ':movinin-types';
import { strings as commonStrings } from '../lang/common';
import * as UserService from '../services/UserService';
import Layout from '../components/Layout';
import LocationSelectList from '../components/LocationSelectList';
import DatePicker from '../components/DatePicker';
import env from '../config/env.config';
import HowToBook from '../components/HowToBook';
import YourPreference from '../components/YourPreference';
import Services from '../components/Services';
import WhyOmp from '../components/WhyOmp';
import SecurePayment from '../assets/img/secure-payment.png';
import '../assets/css/home.css';

interface StateData {
  locationId: string;
  from: Date;
  months?: number | '';
  to?: Date;
}

const Home = () => {
  const navigate = useNavigate();

  const _minDate = new Date();
  _minDate.setDate(_minDate.getDate() + 1);

  const [location, setLocation] = useState('');
  const [from, setFrom] = useState<Date>();
  const [to, setTo] = useState<Date>();
  const [months, setMonths] = useState<number | ''>('');
  const [minDate, setMinDate] = useState<Date>(_minDate);
  const [maxDate, setMaxDate] = useState<Date>();
  const [fromError, setFromError] = useState(false);
  const [toError, setToError] = useState(false);
  const [monthsError, setMonthsError] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    if (from) {
      const __minDate = new Date(from);
      __minDate.setDate(from.getDate() + 1);
      setMinDate(__minDate);
    }
  }, [from]);

  const handleLocationChange = (values: movininTypes.Option[]) => {
    const _location = (values.length > 0 && values[0]._id) || '';
    setLocation(_location);
  };

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    // Reset form fields when switching tabs
    setFrom(undefined);
    setTo(undefined);
    setMonths('');
    setFromError(false);
    setToError(false);
    setMonthsError(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!location || !from || fromError || 
        (tabValue === 0 && (monthsError || months === '')) || 
        (tabValue === 1 && (toError || !to))) {
      return;
    }

    const stateData: StateData = {
      locationId: location,
      from,
      months: tabValue === 0 ? months : undefined,
      to: tabValue === 1 ? to : undefined,
    };

    navigate('/search', { state: stateData });
  };

  return (
    <Layout>
      <div className="home">
        <div className="hero-background" />
        <div className="home-content">
          <div className="hero-text">
            <h1 className="hero-heading">Renting, Simplified.</h1>
            <p className="hero-subheading">Find a Great Furnished Accommodation</p>
          </div>
          <div className="home-logo">
            <span className="home-logo-main">OH MY PLACE!</span>
            <span className="home-logo-registered">®</span>
          </div>
          <div className="home-search">
            <div className="search-tabs-container">
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                className="search-tabs"
                centered
              >
                <Tab label="CO-LIVING/PG" />
                <Tab label="SHORT STAY HOTEL" />
              </Tabs>
            </div>
            <form onSubmit={handleSubmit} className="home-search-form">
              <FormControl className="pickup-location">
                <LocationSelectList
                  label={commonStrings.LOCATION}
                  variant="outlined"
                  hidePopupIcon
                  customOpen={env.isMobile()}
                  init={!env.isMobile()}
                  required
                  onChange={handleLocationChange}
                />
              </FormControl>
              <FormControl className="from">
                <DatePicker
                  label={commonStrings.FROM}
                  value={from}
                  minDate={_minDate}
                  maxDate={maxDate}
                  variant="outlined"
                  required
                  onChange={(date) => {
                    if (date) {
                      const __minDate = new Date(date);
                      __minDate.setDate(date.getDate() + 1);
                      setFrom(date);
                      setMinDate(__minDate);
                      setFromError(false);
                    } else {
                      setFrom(undefined);
                      setMinDate(_minDate);
                    }
                  }}
                  onError={(err: DateTimeValidationError) => {
                    if (err) {
                      setFromError(true);
                    } else {
                      setFromError(false);
                    }
                  }}
                  language={UserService.getLanguage()}
                />
              </FormControl>
              {tabValue === 0 ? (
                <FormControl className="months">
                  <Select
                    value={months}
                    onChange={(e) => {
                      setMonths(e.target.value as number);
                      setMonthsError(false);
                    }}
                    displayEmpty
                    variant="outlined"
                    required
                    error={monthsError}
                  >
                    <MenuItem value="" disabled>Select months</MenuItem>
                    {[...Array(12)].map((_, index) => (
                      <MenuItem key={index + 1} value={index + 1}>
                        {index + 1} {index + 1 === 1 ? 'month' : 'months'}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                <FormControl className="to">
                  <DatePicker
                    label={commonStrings.TO}
                    value={to}
                    minDate={minDate}
                    variant="outlined"
                    required
                    onChange={(date) => {
                      if (date) {
                        const _maxDate = new Date(date);
                        _maxDate.setDate(_maxDate.getDate() - 1);
                        setTo(date);
                        setMaxDate(_maxDate);
                        setToError(false);
                      } else {
                        setTo(undefined);
                        setMaxDate(undefined);
                      }
                    }}
                    onError={(err: DateTimeValidationError) => {
                      if (err) {
                        setToError(true);
                      } else {
                        setToError(false);
                      }
                    }}
                    language={UserService.getLanguage()}
                  />
                </FormControl>
              )}
              <Button type="submit" variant="contained" className="btn-search">
                {commonStrings.SEARCH}
              </Button>
            </form>
          </div>
        </div>
        <HowToBook />
        <YourPreference />
        <Services />
        <WhyOmp />
        <footer>
          <div className="secure-payment">
            <img src={SecurePayment} alt="Secure Payment" />
          </div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} OH MY PLACE!. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Home;


// Old code

// import React, { useState, useRef, useEffect } from 'react'
// import { FormControl, Button, TextField } from '@mui/material'
// import { DateTimeValidationError } from '@mui/x-date-pickers'
// import { useNavigate } from 'react-router-dom'
// import * as movininTypes from ':movinin-types'
// import { strings as commonStrings } from '../lang/common'
// import { strings } from '../lang/home'
// import * as UserService from '../services/UserService'
// import Layout from '../components/Layout'
// import LocationSelectList from '../components/LocationSelectList'
// import DatePicker from '../components/DatePicker'
// import env from '../config/env.config'
// import HowToBook from '../components/HowToBook'
// import YourPreference from '../components/YourPreference'
// import Services from '../components/Services'
// import WhyOmp from '../components/WhyOmp'

// import SecurePayment from '../assets/img/secure-payment.png'
// import '../assets/css/home.css'

// const Home: React.FC = () => {
//   const navigate = useNavigate()
//   const searchFormRef = useRef<HTMLDivElement | null>(null)

//   const _minDate = new Date()
//   _minDate.setDate(_minDate.getDate() + 1)

//   const [location, setLocation] = useState<string>('')
//   const [from, setFrom] = useState<Date | null>(null)
//   const [to, setTo] = useState<Date | null>(null)
//   const [minDate, setMinDate] = useState<Date>(_minDate)
//   const [maxDate, setMaxDate] = useState<Date | null>(null)
//   const [fromError, setFromError] = useState<boolean>(false)
//   const [toError, setToError] = useState<boolean>(false)
//   const [searchType, setSearchType] = useState<'shortStay' | 'longStay' | null>(null)
//   const [showSearchForm, setShowSearchForm] = useState<boolean>(false)
//   const [numberOfMonths, setNumberOfMonths] = useState<number | null>(null)

//   useEffect(() => () => {}, [])

//   useEffect(() => {
//     if (from) {
//       const __minDate = new Date(from)
//       __minDate.setDate(from.getDate() + 1)
//       setMinDate(__minDate)
//     }
//   }, [from])

//   const handleLocationChange = (values: movininTypes.Option[]) => {
//     const _location = (values.length > 0 && values[0]._id) || ''
//     setLocation(_location)
//   }

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()

//     if (!location || !from || (searchType === 'shortStay' && !to) || fromError || toError) {
//       return
//     }

//     const endDate = searchType === 'longStay' && numberOfMonths !== null
//         ? new Date(from!.getTime() + numberOfMonths * 30 * 24 * 60 * 60 * 1000)
//         : to

//     navigate('/search', {
//       state: {
//         locationId: location,
//         from,
//         to: endDate,
//       },
//     })
//   }

//   const handleSearchTypeClick = (type: 'shortStay' | 'longStay') => {
//     setSearchType(type)
//     setShowSearchForm(true)
//   }

//   return (
//     <Layout onLoad={() => {}} strict={false}>
//       <div className={`home ${showSearchForm ? 'blurred' : ''}`}>
//         <div className="home-content">
//           <div className="home-hero">
//             <h1>Renting, Simplified.</h1>
//             <h3>Find a Great Furnished Accommodation</h3>
//             <div className="home-buttons">
//               <Button onClick={() => handleSearchTypeClick('longStay')} variant="contained">
//                 CO-LIVING/PG
//               </Button>
//               <Button onClick={() => handleSearchTypeClick('shortStay')} variant="contained">
//                 SHORT STAY HOTEL
//               </Button>
//             </div>
//             {showSearchForm && (
//               <div ref={searchFormRef} className="home-search">
//                 <form onSubmit={handleSubmit} className="home-search-form">
//                   <FormControl className="pickup-location">
//                     <LocationSelectList
//                       label={commonStrings.LOCATION}
//                       variant="outlined"
//                       hidePopupIcon
//                       customOpen={env.isMobile()}
//                       init={!env.isMobile()}
//                       required
//                       onChange={handleLocationChange}
//                     />
//                   </FormControl>
//                   <FormControl className="from">
//                     <DatePicker
//                       label={commonStrings.FROM}
//                       value={from}
//                       minDate={_minDate}
//                       maxDate={maxDate}
//                       variant="outlined"
//                       required
//                       onChange={(date) => {
//                         if (date) {
//                           const __minDate = new Date(date)
//                           __minDate.setDate(date.getDate() + 1)
//                           setFrom(date)
//                           setMinDate(__minDate)
//                           setFromError(false)
//                         } else {
//                           setFrom(null)
//                           setMinDate(_minDate)
//                         }
//                       }}
//                       onError={(err: DateTimeValidationError) => {
//                         if (err) {
//                           setFromError(true)
//                         } else {
//                           setFromError(false)
//                         }
//                       }}
//                       language={UserService.getLanguage()}
//                     />
//                   </FormControl>
//                   {searchType === 'shortStay' && (
//                     <FormControl className="to">
//                       <DatePicker
//                         label={commonStrings.TO}
//                         value={to}
//                         minDate={minDate}
//                         variant="outlined"
//                         required
//                         onChange={(date) => {
//                           if (date) {
//                             const _maxDate = new Date(date)
//                             _maxDate.setDate(_maxDate.getDate() - 1)
//                             setTo(date)
//                             setMaxDate(_maxDate)
//                             setToError(false)
//                           } else {
//                             setTo(null)
//                             setMaxDate(null)
//                           }
//                         }}
//                         onError={(err: DateTimeValidationError) => {
//                           if (err) {
//                             setToError(true)
//                           } else {
//                             setToError(false)
//                           }
//                         }}
//                         language={UserService.getLanguage()}
//                       />
//                     </FormControl>
//                   )}
//                   {searchType === 'longStay' && (
//                     <>
//                       <FormControl className="to">
//                         <TextField
//                           label="No. of months"
//                           type="number"
//                           value={numberOfMonths !== null ? numberOfMonths : ''}
//                           onChange={(e) => {
//                             const value = Number(e.target.value)
//                             setNumberOfMonths(value >= 0 ? value : null)
//                           }}
//                           variant="outlined"
//                           required
//                         />
//                       </FormControl>
//                     </>
//                   )}
//                   <Button type="submit" variant="contained" className="btn-search">
//                     {commonStrings.SEARCH}
//                   </Button>
//                 </form>
//               </div>
//             )}
//           </div>
//         </div>
//         <HowToBook />
//         <YourPreference />
//         <Services />
//         <WhyOmp />
//         <footer>
//           <div className="copyright">
//             <span className="part1">{strings.COPYRIGHT_PART1}</span>
//             <span className="part2">{strings.COPYRIGHT_PART2}</span>
//             <span className="part3">{strings.COPYRIGHT_PART3}</span>
//           </div>
//           <div className="secure-payment">
//             <img src={SecurePayment} alt="" />
//           </div>
//         </footer>
//       </div>
//     </Layout>
//   )
// }

// export default Home
