import React from 'react'
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"
import { format, isValid, parse } from "date-fns"
import { useState, useId, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'



const ReserveTable = () => {

const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/confirmed');
  };

  const [value, onChange] = useState('10:00');

  const guestInputId = useId();


  const dialogRef = useRef(null)
  const dialogId = useId()
  const headerId = useId()

  const [month, setMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState()
  const [inputValue, setInputValue] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const toggleDialog = () => setIsDialogOpen(!isDialogOpen)
  useEffect(() => {
    const handleBodyScroll = (isOpen) => {
      document.body.style.overflow = isOpen ? "hidden" : "";
    };
    if (!dialogRef.current) return;
    if (isDialogOpen) {
      handleBodyScroll(true);
      dialogRef.current.showModal();
    } else {
      handleBodyScroll(false);
      dialogRef.current.close();
    }
    return () => {
      handleBodyScroll(false);
    };
  }, [isDialogOpen])

  const handleDayPickerSelect = (date) => {
    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);

      setInputValue(format(date, "MM/dd/yyyy"));
    }
    dialogRef.current?.close()
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Keep the input value in sync

    const parsedDate = parse(e.target.value, "MM/dd/yyyy", new Date());

    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
      setMonth(parsedDate);
    } else {
      setSelectedDate(undefined);
    }
  };


  return (
    <div className='min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10v bg-[#495E57]'>
      <div className='w-full lg:w-2/4 space-y-4 mt-14 lg:mt-12 '>


        <div className='mt-4'>
          <label htmlFor="date-input">
            <strong className='text-[#ffffff]'>Choose Date: </strong>
          </label>
          <input
            style={{ fontSize: "inherit" }}
            id="date-input"
            type="text"
            value={inputValue}
            placeholder="MM/dd/yyyy"
            onChange={handleInputChange}
          />{" "}
          <button
            style={{ fontSize: "inherit" }}
            onClick={toggleDialog}
            aria-controls="dialog"
            aria-haspopup="dialog"
            aria-expanded={isDialogOpen}
            aria-label="Open calendar to choose booking date"
          >
            📆
          </button>
          <p className='text-sm font-semibold text-[#EE9972]' aria-live="assertive" aria-atomic="true">
            {selectedDate !== undefined
              ? selectedDate.toDateString()
              : 'Please type or pick a date'}
          </p>
          <dialog
            role="dialog"
            ref={dialogRef}
            id={dialogId}
            aria-modal
            aria-labelledby={headerId}
            onClose={() => setIsDialogOpen(false)}
          >



            <DayPicker
              month={month}
              onMonthChange={setMonth}
              autoFocus
              mode="single"
              selected={selectedDate}
              onSelect={handleDayPickerSelect}
              footer={selectedDate !== undefined &&
                `Selected: ${selectedDate.toDateString()}`
              }


            />
          </dialog>

          <div className='mt-4'>
            <label htmlFor="time-input">
              <strong className='text-[#ffffff]'>Choose Time: </strong>
            </label>

            <input id='time-input'
              aria-label="Time"
              type="time"
            />

          </div>

          <div className='mt-4'>
            <label htmlFor={guestInputId} className='font-semibold text-[#ffffff]'>Number of Guests:   </label>
            <input id={guestInputId} name="guest" type="number" />

          </div>

          <div className='flex mt-4'>
            <form className='max-w-sm min-auto'>
              <label for='events' className='font-bold text-[#EDEFEE]'>Select an Occasion:</label>

              <select id="events" className='font-extrabold text-[#144B33]  border border-[#FBDABB] focus:ring-[#EDEFEE] focus:border-[#EDEFEE] bg-[#EDEFEE] dark:bg-[#EDEFEE] block w-full p-2.5 text-md rounded-lg dark:border-[#EE9972] dark:placeholder-[#EDEFEE] dark:focus:ring-[#EE9972] dark:focus-border-[EE9972] dark:text-[#495E57]'>


                <option selected>

                  Occasion</option>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>



              </select>

            </form>
          </div>

          <div>
            <button onClick={handleButtonClick} className='focus:outline-none focus:ring-2 focus:ring-[#F4CE14]-300 mt-4 cursor-pointer flex bg-[#F4CE14] hover:text-[#ffffff] font-bold text-xs py-2 px-4 rounded'>Make Your Reservation</button>
          </div>







        </div>
      </div>
    </div>
  )
}

export default ReserveTable