import React from 'react'
import './forecast.css'

import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wensday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

const Forecast = ({ data }) => {
  const dayinAWeek = new Date().getDay()
  const forecastDays = WEEK_DAYS.slice(dayinAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayinAWeek)
  )
  return (
    <>
      <label className='title'>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='daily-item'>
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt='weather'
                    className='icon-small'
                  />
                  <label className='day'>{forecastDays[idx]}</label>
                  <label className='description'>
                    {item.weather[0].description}
                  </label>
                  <label className='min-max'>
                    {Math.round(item.main.temp_min)}&deg;C to{' '}
                    {Math.round(item.main.temp_max)}&deg;C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className='daily-details-grid'>
                <div className='daily-details-grid-item'>
                  <label>Pressure</label>
                  <label>{item.main.pressure} hpa</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>humidity</label>
                  <label>{item.main.Humidity}%</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Wind Speed</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Sea Level</label>
                  <label>{item.main.sea_level} m</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Feels Like</label>
                  <label>{Math.round(item.main.feels_like)}&deg;C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}

        <AccordionItem></AccordionItem>
      </Accordion>
    </>
  )
}

export default Forecast
