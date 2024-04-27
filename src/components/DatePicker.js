export default function DatePicker({ date, dateSet, inputDone }) {
    const isValidDate = (dateString) => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(dateString)) return false;
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return false;
        return true;
    };
    
    const handleInput = (event) => {
        const inputDate = event.target.value;
        const currentDate = new Date();
        const selectedDate = new Date(inputDate);

        if (inputDate && isValidDate(inputDate) && selectedDate <= currentDate) {
            localStorage.setItem('howmuchiwasted-client-date', selectedDate.toISOString().substring(0, 10));
            dateSet(selectedDate.toISOString().substring(0, 10));
        }
    }

    const handleConfirm = () => {
        const inputDate = date;
        const currentDate = new Date();
        const selectedDate = new Date(date);

        if (inputDate && isValidDate(inputDate) && selectedDate <= currentDate) {
            localStorage.setItem('howmuchiwasted-client-date', selectedDate.toISOString().substring(0, 10));
            dateSet(selectedDate.toISOString().substring(0, 10));
        }

        inputDone(true);
    }
    
    return (
        <div className="text-center">
            <p className="mb-5">Select your birthdate</p>
            <input className="button input-type-date" type="date" value={date} onChange={handleInput} />
            <p onClick={handleConfirm} className="button mx-auto mt-5">Done</p>
        </div>
    );
}
